# 架构文档 v1.0：开源交互式包容性设计工具

**研究编号**：INCL-ARCH-001
**版本**：v1.0
**日期**：2026-10-12
**状态**：🟡 待评审（PoC 验证后冻结）
**上游依赖**：产品需求定义与技术方案研究（内部档案）
**ADR 状态**：5 篇（ADR-001~003 继承自 内部计划文档，ADR-004~005 本文新增，详见 `内部规划目录/adr/`）

---

## 一、架构总览

### 1.1 系统分层

```
┌─────────────────────────────────────────────────────────┐
│  L5 前端应用（Vue 3 SPA）                                  │
│  探究/定义/建构/测试四阶段 UI · vue-i18n · Pinia          │
├─────────────────────────────────────────────────────────┤
│  L4 应用数据层                                             │
│  数据包 JSON（构建期从 yaml 生成）→ IndexedDB 缓存         │
│  用户数据（Profile/边界文档/审计状态）→ IndexedDB (Dexie) │
├─────────────────────────────────────────────────────────┤
│  L3 规则引擎（前端 TS 模块）                                │
│  ACT 即时激活（9 条）· CNF 冲突文本提示 · 数据驱动         │
├─────────────────────────────────────────────────────────┤
│  L2 构建管线（CI）                                         │
│  yaml 注册表 → schema 校验 → 数据包 JSON → 应用内嵌        │
│  vault → Quartz 4 → 静态 wiki                             │
├─────────────────────────────────────────────────────────┤
│  L1 知识源（git 仓库唯一权威源）                            │
│  registry/*.yaml · knowledge/ · schema/   │
└─────────────────────────────────────────────────────────┘
```

**MVP 无后端**（ADR-002）：L1→L2 为发布流，L3–L5 全部运行在浏览器。v2+ 的 Supabase 同步层通过边界文档 JSON 稳定契约接入，不改动 L1–L4。

### 1.2 数据流

```
【研究侧】git push → tag
    → CI Job A: python schema/validate.py（全绿门禁）
    → CI Job B: node scripts/build-data.mjs（yaml→JSON 数据包）
    → CI Job C: quartz build（vault→静态 wiki）
    → 发布产物: dist-app/（SPA）+ public/docs/（wiki）+ data-pack/（JSON）

【用户侧】浏览器
    加载 SPA → 拉取 data-pack（版本化 URL）→ IndexedDB 缓存
    创建项目（Profile JSON）→ 因素推荐（ACT 引擎）→ 边界文档 JSON
    → 审计清单 → 验收报告 —— 全部本地，无网络依赖
```

### 1.3 目录规划（应用仓库，开发期与知识库同仓）

```
InclusiveDesign/
├── app/                    # v2+ 独立仓候选，MVP 同仓
│   ├── src/
│   │   ├── features/       # explore / define / build / audit 四阶段
│   │   ├── engine/          # 规则引擎 TS 模块
│   │   ├── stores/          # Pinia（数据包/项目/审计状态）
│   │   ├── i18n/            # zh-CN / en 资源
│   │   └── lib/db/          # Dexie 封装
│   ├── scripts/build-data.mjs
│   └── package.json
├── wiki/                   # Quartz 4 工作目录（public/ 指向 vault 精简版）
├── registry/ knowledge/ schema/   # 研究侧（现状）
└── 06_技术方案/            # 本文档 + ADR + 部署手册 + PoC 记录
```

---

## 二、关键设计决策

### 2.1 数据包生成（yaml → 应用数据）

- 构建脚本 `app/scripts/build-data.mjs`：解析 4 注册表 yaml → 输出 `data-pack.json`
- 结构：`{ version, generatedAt, factors[], metrics[], rules[], standards[], guides: {摘要}, cases: {摘要} }`
- 指南卡/案例卡仅内嵌摘要（模式名/反模式名），全文跳转 wiki——**SPA 轻、wiki 全**的分工
- 版本化：数据包文件名含内容 hash（`data-pack-<hash>.json`），SPA 启动时比对决定是否重拉
- **门禁**：构建前强制跑 `schema/validate.py`，失败即中断 CI——研究资产的完整性约束到产物层

### 2.2 规则引擎（ADR-001 落地细则）

- **MVP 前端**：ACT 9 条即时执行（条件表达式安全子集：`==`/`>`/`<`/布尔字段，无 eval，手写条件求值器）；CNF 7 条在边界定义时做文本提示（不做推理）
- **数据驱动**：规则从 data-pack 加载，规则更新 = 数据包更新，无代码变更
- **v2+ 后端**（Supabase Edge Functions）：DEP/MOD/CNF 推理链 + 审计日志 + 边界文档云存证；前端引擎接口 `RuleEngine.evaluate(profile)` 保持不变，实现替换

### 2.3 本地存储（ADR-002 落地细则）

| 库表（Dexie） | 内容 | 键 |
|--------------|------|-----|
| `projects` | Profile JSON + 元数据 | projectId (uuid) |
| `boundaries` | 边界文档 JSON（B.5 schema） | projectId |
| `audits` | 逐项状态 + 备注 + 证据链接 | boundaryId + metricId |
| `meta` | data-pack 版本/导入导出记录 | key |

- 导入导出：全部用户数据可打包为单一 JSON 文件（可携带、可备份、可迁移 v2 云端）——**用户数据主权**（包容性原则在产品自身的应用）
- 无痕模式：IndexedDB 不可用时降级内存态 + 显著警告（会话级使用）

### 2.4 边界文档 JSON 契约（v1 稳定契约，B.5 schema）

- 字段冻结清单：`boundary_id / task_ref / commitments[] / presentation / audit_checklist / version / generated_at`
- `commitments[]`：`{ factor_id, metric_id, metric_name, target_tier, target_value, rationale, evidence }`
- 语义约束：不含任何 weight/score/total 字段——**schema 层禁止**（PD-4）
- 兼容性：v1 契约只加可选字段不破坏旧文件（additive-only）

### 2.5 i18n（ADR-003 落地细则）

- 数据层：因素/指标/指南卡 front-matter 已双字段（name/name_en），数据包双值齐发
- UI 层：vue-i18n，zh-CN 为源语言（`zh-CN.json` 完整 → `en.json` 翻译）
- 卡片正文（指南/案例 Markdown）：MVP 仅发布中文 wiki + 卡片标题双语；正文翻译走 W4 长期轨道（社区贡献）
- 术语表：维护 zh↔en 设计术语对照（贡献指南低门槛入口，PD-6 之前先在 wiki 落一页）

### 2.6 无障碍自举（产品需求文档 backlog #21）

- 工具自身目标 WCAG 2.2 AA：axe-core 进 CI（严重违规即失败）+ 键盘全操作 + 读屏冒烟（开发期人工）
- 自举用例：用工具自身的"任务 Profile：领域=digital、受众=设计师含感觉敏感者"生成边界文档，作为 #22 dogfood 的一部分

---

## 三、Quartz 4 wiki 管线（W4.2 承接）

### 3.1 选型确认（详见 ADR-004）

内部研究档案原定 MkDocs Material；内部计划文档 已改 Quartz 4。本文确认维持 Quartz 4：
- 优势：Obsidian 双链/呼出块原生渲染；纯静态产物托管 GitHub Pages 零成本；主题现代
- 代价：中文字符串搜索需配置（Quartz 默认 FlexSearch 对 CJK 分词弱，采用 `Content` 索引 + 拼音注记策略验证）
- 回退：若 CJK 搜索不可用，MVP 降级为"字母索引 + 维度目录树"导航（wiki 规模 227 卡可控）

### 3.2 管线结构

```
knowledge/     # 权威源（155 卡 + Templates）
   ↓ quartz.config.ts 的 content 指向（或 CI 同步精简视图）
wiki/（Quartz 4 工作目录）
   ↓ npx quartz build
public/docs/                  # 静态产物
   ↓ GitHub Actions deploy
GitHub Pages（/docs 路径）     # 与 SPA 同域（SPA 挂根路径）
```

- vault 直灌 Quartz（同仓）→ 无复制步骤，git push 即全链更新
- 卡片 front-matter 字段对 Quartz 无副作用（忽略未识别键）
- `02_Standards` 25 卡含外部 URL，Quartz 的 `links.noImplicit` 关闭防误链

---

## 四、CI/CD 与发布

### 4.1 GitHub Actions 流水线（M3 PoC 范围）

```yaml
# .github/workflows/ci.yml（骨架）
on: push → main + tag 'v*'
jobs:
  validate:      # python schema/validate.py（165 文件门禁）
  build-data:   # node scripts/build-data.mjs → data-pack.json（依赖 validate）
  build-app:    # npm ci && npm run build → dist-app/
  build-wiki:   # npx quartz build → public/docs/
  deploy:       # Pages 部署（dist-app 根 + public/docs 子路径），仅 tag 触发
```

- 顺序依赖：validate 失败 → 后续全部跳过（知识完整性优先于构建成功）
- PoC 验收：本机全链跑通 + 一个真实 GitHub 仓库 Actions 执行记录（待 git remote 建立后完成，见 §六开放项）

### 4.2 版本策略

- 研究资产：git tag（`v3.x` 沿用）
- 应用：semver `0.x`（MVP 期 minor 频发）
- 数据包：内容 hash 版本（独立于应用版本，知识库热更新不改应用）

---

## 五、部署

### 5.1 MVP（零后端）

- GitHub Pages：SPA（`/`）+ wiki（`/docs`）——免费、无 VPS 依赖
- 备选：任意静态托管（Netlify/Vercel/国内托管），产物为纯静态文件

### 5.2 v2+（Supabase 后，Docker Compose 单机）

```yaml
# docker-compose.yml（草案，v2 启用时定稿）
services:
  app:        # SPA 静态 + 反代（caddy）
  supabase:   # 官方 self-host 或 supabase cloud；PostgreSQL/Auth/Edge Functions
```

- 2C4G VPS 可承载（SPA+静态 wiki 由 CDN 级负载承担，Supabase 是唯一动态源）
- 升级流程：`git pull → docker compose build → up -d`；备份 = Supabase pg_dump + vault git 远端

---

## 六、开放项（PoC 后回填）

| # | 项 | 触发条件 |
|---|-----|---------|
| O1 | GitHub remote 建立与 Actions 实测（PoC §2 的线上验证腿） | 仓库开源（PD-6 拍板）时 |
| O2 | Quartz CJK 搜索方案实测 | PoC 内验证，失败走 §3.1 回退 |
| O3 | Supabase self-host 资源占用实测 | v2 启动时 |
| O4 | 边界文档 JSON 契约 v1 评审 | 产品需求文档 v1.1 冻结时 |

---

## 标签

#架构 #W6 #INCL-ARCH-001



