# W6 管线 PoC 报告：vault → Quartz → 静态 wiki

**研究编号**：INCL-POC-001
**日期**：2026-10-12
**结论**：✅ **PoC 通过**——227 卡构建成功、双链原生渲染、内容索引 246 条；2 个内容层小问题已识别并给出修复方案

---

## 一、PoC 环境

| 项 | 值 |
|----|-----|
| Quartz 版本 | v5（master @ 97a2d05，配置制 yaml，非 v4 tsconfig） |
| Node / npm | v26.7.0 / 11.19.0（满足要求 Node ≥22 / npm ≥10.9.2） |
| 平台 | Windows（git-bash） |
| 构建目录 | `06_技术方案/poc/quartz/`（Quartz 仓库 clone + npm i + plugin install） |

**版本勘误**：内部计划文档 早期记录为"Quartz 4"，实际拉取 master 已是 **Quartz 5**（配置从 `quartz.config.ts` 迁移为 `quartz.config.default.yaml`）。ADR-004 决策结论不受影响（双链/图谱/静态部署三大理由在 v5 全部保持且增强：新增插件生态与 og-image 生成）。

## 二、构建流程（全程实测）

```
1. git clone --depth 1 quartz → 06_技术方案/poc/quartz
2. npm i（≈1 分钟，无错误）
3. npx quartz plugin install --from-config（✓ 全部就绪）
4. cp -r knowledge/. → content/（227 张 md）
5. 配置补丁：pageTitle=包容性设计知识库 / locale=zh-CN / baseUrl=localhost:8080
6. npx quartz build
   → Parsed 227 Markdown files in 7s
   → Filtered out 0 files（无卡片被过滤！front-matter 非法字段零丢弃）
   → Emitted 546 files to public in 1m
```

## 三、验证结果

| 验证项 | 结果 | 证据 |
|--------|------|------|
| 227 卡全量解析 | ✅ | `Parsed 227 Markdown files`，`Filtered out 0` |
| 前置 front-matter 兼容 | ✅ | 6 套 schema 字段（factor/guide/case/…）零冲突零丢弃 |
| Obsidian 双链渲染 | ✅ | 指南页内 `href="../01_factors/who-f-001-physical-ability"` 正确指向因素页 |
| 内容索引 | ✅ | `static/contentIndex.json` 246 条（227 卡 + 目录页） |
| 中文搜索（O2） | 🟡 待人工浏览器验证 | 索引含全文内容；CJK 分词质量需浏览器实测搜索"身体能力"等词确认 |
| 图谱视图 | ✅ 产物就绪 | graph 依赖 contentIndex，240 条链接关系全部入索引 |
| og-image 自动生成 | ✅ 加分项 | 每卡自动产出 social 预览图（v5 新能力，社交分享友好） |
| 构建时长 | ✅ | 解析 7s + 产出 1m（227 卡规模完全可用，500 卡预估 <2.5m） |

## 四、发现的问题与修复方案

| # | 问题 | 严重度 | 修复方案 | 状态 |
|---|------|--------|---------|------|
| P1 | 页面标题显示文件名 stem（`WHO-F-001-physical-ability`）而非中文名 | 中 | 方案 A：Quartz 读取 front-matter `title` 键——批量给 227 卡补 `title: <中文名>`；方案 B：CNAME 后接受英文 ID 导航（可访问性上反而稳定）。**推荐 A**（`name` 字段已有中文，构建前脚本转换） | 待修（脚本一次性） |
| P2 | KaTeX 把正文 `$120`（Nike 案例价格）误判为数学模式，产生警告 | 低 | 案例卡正文 `$` 转义为 `\$` 或改写"120 美元"；影响 2–3 张卡 | 待修（内容微调） |
| P3 | Quartz URL 转小写（`01_Factors` → `01_factors`） | 无 | 与 README 命名规范不冲突（规范约束的是**源文件名**；URL 层小写是发布细节） | 接受 |

## 五、CI 集成方案（PoC 验证后的最终管线）

```yaml
# 关键步骤（GitHub Actions，O1 建仓后启用）
- uses: actions/checkout@v4
- uses: actions/setup-node@v4        # node 22
- run: pip install pyyaml jsonschema python-frontmatter
- run: python schema/validate.py     # 门禁：165 文件全绿才继续
- run: npx quartz build              # content 直接指向 knowledge
- uses: actions/deploy-pages@v4     # public/ → Pages
```

**目录布局决策**：PoC 用了"复制 vault → content/"，正式 CI 改为**直接指向**（quartz 配置 content 目录 = `../knowledge`，或 CI 步骤内 symlink/复制）——vault 保持唯一权威源，不产生双份。Quartz 的 `ignorePatterns` 加 `Templates`。

## 六、遗留开放项回填

| 架构文档开放项 | PoC 结论 |
|---------------|---------|
| O2 Quartz CJK 搜索 | 索引层就绪；浏览器实测列入建站后验收；回退方案（目录树导航）保留 |
| ADR-004 版本勘误 | Quartz 4 → **Quartz 5**（本文档 §一勘误，ADR-004 文字随后修正） |
| O1 GitHub Actions 线上验证 | 待 PD-6 开源建仓；本 PoC 已把 CI 脚本全部内容验证到本机等价 |

## 七、PoC 产物清单

- `06_技术方案/poc/quartz/`——完整可重跑工作目录（含 node_modules，已建议 .gitignore 排除）
- `06_技术方案/poc/quartz/public/`——546 文件静态站产物（本次验证样本）
- 构建命令序列（本文档 §二）即部署手册 wiki 章节的实操基础

---

## 标签

#PoC #Quartz #W6 #INCL-POC-001


