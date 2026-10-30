---
id: G-WHY-F-001
factor_id: WHY-F-001
name: "包容性成本策略指南"
name_en: Inclusive Cost Strategy Guide
patterns:
  - name: "全生命周期成本视角"
    description: "包容性投入按『前期设计 vs 后期改造』全周期对比呈现——前期包容设计的成本显著低于上线后合规改造（对应 M-WHY-F-001-01 台账框架）"
    domain: universal
    example: "新建时坡道成本约为建成后再改造的 1/10"
  - name: "平台化摊薄"
    description: "包容能力沉淀为平台组件（无障碍组件库/通用人体工学模块），多产品复用摊薄单位成本"
    domain: digital
    example: "设计系统内置无障碍组件，新产品零额外成本继承"
  - name: "优先级矩阵"
    description: "按『排斥人群规模 × 改造成本』排投入优先级；强制合规项（WCAG AA/GB 55019）为不可砍的第一梯队"
    domain: universal
    example: "P0=法定合规；P1=高覆盖低成本改造；P2=长期路线图"
anti_patterns:
  - name: "成本短视"
    description: "为省前期投入把无障碍推到『二期』"
    consequence: "后期改造成本翻数倍 + 错失早期用户；『先上线再补』是包容性最贵的路径"
  - name: "公益化误解"
    description: "把包容投入记账为公益/品牌支出"
    consequence: "无法通过 ROI 审视——包容设计是市场扩展（残障市场+老龄化+情境性需求）而非慈善"
cases:
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
cross_domain_mapping:
  digital:
    summary: "无障碍组件库、平台化复用"
  industrial:
    summary: "标准化零件、通用模具"
  architecture:
    summary: "新建集成 vs 改造对比"
  fashion:
    summary: "通用版型摊薄定制成本"
status: draft
version: '1.0'
---

# 包容性成本策略指南 (Inclusive Cost Strategy Guide)

> 关联因素：[[WHY-F-001-cost-constraint|WHY-F-001 成本约束]] ｜ 指南 ID：`G-WHY-F-001`

## 设计模式（正模式）

### ✅ 全生命周期成本视角

包容性投入按『前期设计 vs 后期改造』全周期对比呈现——前期包容设计的成本显著低于上线后合规改造（对应 M-WHY-F-001-01 台账框架）

**示例**：新建时坡道成本约为建成后再改造的 1/10

### ✅ 平台化摊薄

包容能力沉淀为平台组件（无障碍组件库/通用人体工学模块），多产品复用摊薄单位成本

**示例**：设计系统内置无障碍组件，新产品零额外成本继承

### ✅ 优先级矩阵

按『排斥人群规模 × 改造成本』排投入优先级；强制合规项（WCAG AA/GB 55019）为不可砍的第一梯队

**示例**：P0=法定合规；P1=高覆盖低成本改造；P2=长期路线图

## 反模式（常见错误）

### ❌ 成本短视

为省前期投入把无障碍推到『二期』

**排斥后果**：后期改造成本翻数倍 + 错失早期用户；『先上线再补』是包容性最贵的路径

### ❌ 公益化误解

把包容投入记账为公益/品牌支出

**排斥后果**：无法通过 ROI 审视——包容设计是市场扩展（残障市场+老龄化+情境性需求）而非慈善

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 无障碍组件库、平台化复用 |
| 工业设计 | 标准化零件、通用模具 |
| 建筑设计 | 新建集成 vs 改造对比 |
| 服装设计 | 通用版型摊薄定制成本 |

---
*指南卡片：包容性成本策略指南 ｜ v1.0 ｜ 状态：draft*
