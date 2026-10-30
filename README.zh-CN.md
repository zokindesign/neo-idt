# neo-idt

Neo Inclusive Design Toolkit | 包容性设计工具集

**证据分级、跨领域通用的包容性设计工具**——帮助设计师以可量化的评价标准，对设计方案进行*探究、定义、建构与审计*，而不仅是套用原则。

English overview: [README.md](./README.md)

## 为什么需要 NEO-IDT

设计师在项目开始时，往往**不清楚应当考虑哪些人类多样性因素**，能想到的因素也难以全面。现有工具分三类，各有缺口：

| 工具类型 | 代表 | 缺口 |
|----------|------|------|
| 原则框架 | Microsoft Inclusive Design、Universal Design 原则 | 只有原则——无具体因素、无量化标准、不可操作 |
| 合规检查器 | axe、WAVE、Lighthouse、Stark | 仅数字无障碍子集，合规导向，无边界定义 |
| 领域特化指南 | XAG（游戏）、建筑无障碍规范 | 单一领域，无法跨领域迁移 |

NEO-IDT 采用**覆盖率导向**：系统化的因素分类体系 + 可量化的评价标准，让设计师能够定义*这一项设计的包容性边界*，并在设计完成后逐项审计。

## 体系一览

- **七维 + 合规基线层**：WHO（用户）· WHERE（环境）· WHEN（时间）· WHAT（任务）· WHICH（偏好）· WHY（商业）· HOW（技术），外加 **RUL**——二值合规底线（不参与权衡、不加权）。
- **65 个因素**（58 因素 + 7 合规基线），每个因素判定为*能力*（→ 提供**替代方案**）或*偏好*（→ 提供**选择空间**），并给出跨领域映射（数字/工业/建筑/服装/服务）。
- **65 个指标**，按三层测量分类（自动可测/人工审计/用户测试），阈值三档（合规底线/良好/优秀）。
- **64 张设计指南卡**（237 模式 / 158 反模式 / 256 跨领域映射）与 **8 个已核验案例**。
- **全部知识条目带证据分级**：`A` 强制标准条款 · `B` 已核验研究 · `C` 专家共识 · `D` 项目推断——**不核验不写入**。
- **包容性边界是承诺清单，不是分数**：每因素一行承诺——`因素 × 指标 × 目标档位`（如 `WHO-F-001 × 对比度 × 良好(≥7:1)`）。刻意不做加权总分（Goodhart 定律：一旦总分成为目标，设计师就会优化分数而非包容性）。

## 四个阶段

```
探究   结构化任务描述 → 因素推荐（激活规则）
定义   确认因素 → 绑定指标与档位 → 包容性边界（承诺清单）
建构   依托知识库、指南卡与已核验案例进行设计
审计   由边界生成逐项审计清单（自动项/人工项/测试项）
```

Web 应用提供探究、定义、审计三个视图；建构阶段由知识库（`knowledge/`）及其发布的 wiki 支撑。

## 仓库结构

| 路径 | 内容 | 许可 |
|------|------|------|
| `knowledge/` | 人读知识卡片（因素/标准/指标/指南/案例） | CC BY-SA 4.0 |
| `registry/` | 机器可读注册表——唯一权威源（factors/metrics/rules/standards.yaml） | CC BY 4.0 |
| `schema/` | 6 套 JSON Schema + 校验器、链接审计、卡片生成器 | 数据 CC BY 4.0 · 脚本 MIT |
| `app/` | Web 应用（Vue 3 + TypeScript + Pinia；IndexedDB 本地优先，可选 Supabase 云同步） | MIT |
| `docs/` | 理论文档、ADR、架构、部署、数据管线 | CC BY-SA 4.0 |

**单一权威源纪律**：结构化数据在 `registry/*.yaml`；`knowledge/standards/` 与 `knowledge/metrics/` 中的卡片是*生成视图*（`python schema/generate_cards.py`），请勿手改。指南卡与案例卡为手写内容，欢迎直接贡献。

## 快速开始

```bash
# 运行 Web 应用
cd app
npm install
npm run dev          # http://localhost:5173

# 可选：启用云同步（任意 Supabase 项目）
#   在 app/.env.local 设置 VITE_SUPABASE_URL 与 VITE_SUPABASE_ANON_KEY
# 不配置时应用完全本地运行（IndexedDB）。

# 从注册表重新生成版本化数据包
node app/scripts/build-data.mjs   # → app/public/data/data-pack-<hash>.json
```

### 校验知识库

```bash
pip install pyyaml python-frontmatter jsonschema
python schema/validate.py        # schema 校验 + 跨表引用完整性
python schema/audit_links.py     # 全部双链可解析
```

## 参与贡献

见 [CONTRIBUTING.md](./CONTRIBUTING.md)。主要贡献面是**指南卡**与**案例卡**；注册表变更请先开 issue。每条标准引用必须可核验（条款号 + 官方 URL）——不可核验的内容会被拒收。

## 许可

- 代码（`app/`、`schema/` 脚本）：**MIT** — 见 [LICENSE](./LICENSE)
- 知识内容（`knowledge/`、`docs/`）：**CC BY-SA 4.0** — 见 [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)
- 数据与 schema（`registry/`）：**CC BY 4.0**
- 名称 **NEO Inclusive Design Toolkit** 与 Logo **保留商标权利**，不在开源许可范围内 — 见 [NOTICE.md](./NOTICE.md)

## 致谢

证据基础包括（条款级引用见 `registry/standards.yaml`）：WCAG 2.2、EN 301 549、Section 508、ISO 9241 系列、ISO 21542、ISO 7250、ANSUR II、GB 55019-2021、GB/T 10000-2023、GDPR、PIPL、ISO 24495-1、NASA-TLX 等。方法论参考：Microsoft Inclusive Design、Universal Design、Design Council 双钻模型。
