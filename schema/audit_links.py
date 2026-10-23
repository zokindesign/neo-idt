#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""全库 wiki 链接完整性审计：检查 vault 内所有 [[链接]] 是否能解析到实际文件
Obsidian 默认按文件名（不含路径与扩展名）解析——链接文本必须等于某个文件名 stem"""
import re
from pathlib import Path
from collections import defaultdict

VAULT = Path(__file__).resolve().parents[1] / "knowledge"

# 1. 收集全部文件 stem
stems = {}
for f in VAULT.rglob("*.md"):
    stems[f.stem] = f.relative_to(VAULT)

# 2. 扫描全部 [[...]] 链接
link_re = re.compile(r"\[\[([^\]|#^]+)")
bad = defaultdict(set)
total = 0
for f in VAULT.rglob("*.md"):
    text = f.read_text(encoding="utf-8")
    for m in link_re.finditer(text):
        target = m.group(1).strip()
        total += 1
        if target not in stems:
            bad[f.name].add(target)

print(f"链接总数: {total}")
if bad:
    print(f"\n❌ {sum(len(v) for v in bad.values())} 个断链，涉及 {len(bad)} 个文件:")
    for fname, targets in sorted(bad.items()):
        for t in sorted(targets):
            print(f"  {fname}: [[{t}]]")
else:
    print("✅ 全部链接可解析")

# 3. case 卡文件名中的标题截断检查（[:20] 截断产生的怪名）
print("\n=== 案例卡文件名（检查 [:20] 截断） ===")
for f in sorted((VAULT / "05_Cases").glob("*.md")):
    print(f"  {f.name}")

