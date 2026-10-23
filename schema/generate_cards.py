#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从注册表生成 vault 卡片：
- 02_Standards/: 22 张标准卡（STD-<id-slug>.md）
- 03_Metrics/:  65 张指标卡（M-<metric-id>.md）
卡片 front-matter 全字段来自注册表（单一权威源）；正文为导航性内容（双链）。
生成后卡片与注册表并存：注册表 = 结构化权威源，卡片 = 人读导航视图。"""
import json
import re
from pathlib import Path

import yaml
from jsonschema import validate as js_validate

ROOT = Path(__file__).resolve().parents[1]
STD_DIR = ROOT / "knowledge/standards"
MET_DIR = ROOT / "knowledge/metrics"
FACT_DIR = ROOT / "knowledge/factors"

# ---------- 工具 ----------
def q(s):
    """YAML 安全标量输出"""
    if isinstance(s, bool):
        return "true" if s else "false"
    if s is None:
        return "null"
    s = str(s)
    if s == "":
        return '""'
    # 纯数字/日期开头一律加引号（防 YAML 解析为 int/float/date）
    if re.fullmatch(r"[\d.:/ -]+", s):
        return json.dumps(s, ensure_ascii=False)
    if re.fullmatch(r"[\w./-]+", s) and not any(c in s for c in ":#{}[]&*!|>'\"%@`"):
        return s
    return json.dumps(s, ensure_ascii=False)


def slugify_std(std_id):
    return std_id.replace("STD-", "").lower()


# ---------- 因素 slug 映射（用于双链） ----------
factor_stem = {}
for f in FACT_DIR.glob("*.md"):
    factor_stem[f.stem.split("-")[0] + "-" + "-".join(f.stem.split("-")[1:3])] = f.stem
# key: WHO-F-001 → WHO-F-001-physical-ability

def factor_link(fid):
    stem = factor_stem.get(fid)
    return f"[[{stem}|{fid}]]" if stem else fid

# ---------- 1. 标准卡 ----------
std_reg = yaml.safe_load((ROOT / "registry/standards.yaml").read_text(encoding="utf-8"))
std_schema = json.loads((ROOT / "schema/standard.schema.json").read_text(encoding="utf-8"))

# 统计引用了该标准的因素卡（双向导航用）
std_usage = {}
for f in FACT_DIR.glob("*.md"):
    text = f.read_text(encoding="utf-8")
    fm = text.split("---")[1] if text.startswith("---") else ""
    for m in re.finditer(r"STD-([A-Z0-9-]+?)(?::[\w.]+)?['\"\]]", text):
        sid = "STD-" + m.group(1)
        std_usage.setdefault(sid, set()).add(factor_stem.get(
            "-".join(f.stem.split("-")[:3]), f.stem))

n_std = 0
for s in std_reg:
    js_validate(instance=s, schema=std_schema)
    sid = s["id"]
    fname = f"{sid}-{slugify_std(sid)}.md"
    lines = ["---",
             f"id: {sid}",
             f"org: {q(s['org'])}",
             f"code: {q(s['code'])}",
             f"title: {json.dumps(s['title'], ensure_ascii=False)}",
             f"edition: {q(s['edition'])}",
             f"url: {q(s['url'])}",
             "scope:",
             *[f"  - {sc}" for sc in s["scope"]],
             f"status: {s['status']}",
             "---", ""]
    body = [f"# {s['title']}",
            "",
            f"> **{s['code']}** · {s['org']} · 版本 {s['edition']} · 状态：{s['status']}",
            "",
            f"官方链接：{s['url']}",
            ""]
    # 适用范围
    body += ["## 适用范围", ""]
    body += [f"- `{sc}`" for sc in s["scope"]]
    body += ["", "## 本库中的使用", ""]
    used = std_usage.get(sid, set())
    if used:
        body += ["以下因素卡引用了该标准：", ""]
        for stem in sorted(used):
            body.append(f"- [[{stem}]]")
    else:
        body.append("（暂无因素卡直接引用——多经由指标卡的 related_standards 间接引用，见 `registry/metrics.yaml`。）")
    body += ["", f"> 完整条款引用以 `registry/standards.yaml` 与各因素卡 `refs.standards` 为准（不核验不写入纪律）。", ""]
    lines += body
    (STD_DIR / fname).write_text("\n".join(lines), encoding="utf-8")
    n_std += 1
print(f"✅ 标准卡: {n_std} 张 → 02_Standards/")

# ---------- 2. 指标卡 ----------
met_reg = yaml.safe_load((ROOT / "registry/metrics.yaml").read_text(encoding="utf-8"))
met_schema = json.loads((ROOT / "schema/metric.schema.json").read_text(encoding="utf-8"))

# 因素名映射
factor_name = {}
freg = yaml.safe_load((ROOT / "registry/factors.yaml").read_text(encoding="utf-8"))
for e in freg:
    if isinstance(e, dict):
        factor_name[e["id"]] = e.get("name", "")

n_met = 0
for m in met_reg:
    js_validate(instance=m, schema=met_schema)
    mid = m["id"]
    fname = f"{mid}.md"
    fid = m["factor_id"]
    lines = ["---",
             f"id: {mid}",
             f"factor_id: {fid}",
             f"name: {json.dumps(m['name'], ensure_ascii=False)}",
             f"name_en: {q(m.get('name_en', ''))}",
             f"category: {m['category']}",
             f"description: {json.dumps(m.get('description', ''), ensure_ascii=False)}",
             f"measurement_method: {json.dumps(m.get('measurement_method', ''), ensure_ascii=False)}",
             "data_source:",
             *[f"  - {q(d)}" for d in (m.get("data_source") or [])],
             "thresholds:",
             f"    minimum: {json.dumps(m['thresholds']['minimum'], ensure_ascii=False)}" if m.get("thresholds") else "",
             f"    good: {json.dumps(m['thresholds']['good'], ensure_ascii=False)}" if m.get("thresholds") else "",
             f"    excellent: {json.dumps(m['thresholds']['excellent'], ensure_ascii=False)}" if m.get("thresholds") else "",
             f"unit: {q(m.get('unit', ''))}",
             "applicable_domains:",
             *[f"  - {d}" for d in (m.get("applicable_domains") or [])],
             f"limitations: {json.dumps(m.get('limitations', ''), ensure_ascii=False)}",
             "related_standards:",
             *[f"  - {q(r)}" for r in (m.get("related_standards") or [])],
             f"status: {m['status']}",
             f"evidence_grade: {m.get('evidence_grade', '')}",
             "---", ""]
    lines = [l for l in lines if l != ""]
    cat_cn = {"auto": "自动可测", "audit": "人工审计", "user-test": "用户测试"}.get(m["category"], m["category"])
    body = [f"# {m['name']}",
            "",
            f"> 指标 ID：`{mid}` · 分类：**{cat_cn}** · 证据等级：**{m.get('evidence_grade', '—')}** · 状态：{m['status']}",
            "",
            f"**英文名**：{m.get('name_en', '—')}",
            "",
            f"关联因素：{factor_link(fid)}（{factor_name.get(fid, '')}）",
            "",
            "## 定义",
            "",
            m.get("description", "—"),
            "",
            "## 测量方法",
            "",
            m.get("measurement_method", "—"),
            "",
            "## 数据来源",
            "",
            *( [f"- {d}" for d in (m.get("data_source") or [])] or ["- （见注册表）"] ),
            "",
            "## 三档阈值",
            "",
            "| 档位 | 阈值 |",
            "|------|------|"]
    th = m.get("thresholds") or {}
    body.append(f"| 最低合规 | {th.get('minimum', '—')} |")
    body.append(f"| 良好 | {th.get('good', '—')} |")
    body.append(f"| 优秀 | {th.get('excellent', '—')} |")
    body += ["",
             f"**单位**：{m.get('unit', '—')}",
             "",
             "## 适用领域",
             ""]
    body += [f"- {d}" for d in (m.get("applicable_domains") or [])]
    if m.get("limitations"):
        body += ["", "## 局限与适用条件", "", m["limitations"]]
    rs = m.get("related_standards") or []
    if rs:
        body += ["", "## 关联标准条款", ""]
        body += [f"- `{r}`" for r in rs]
    body += ["", f"> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。", ""]
    lines += body
    (MET_DIR / fname).write_text("\n".join(lines), encoding="utf-8")
    n_met += 1
print(f"✅ 指标卡: {n_met} 张 → 03_Metrics/")

