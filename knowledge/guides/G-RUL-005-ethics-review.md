---
id: G-RUL-005
factor_id: RUL-005
name: "伦理审查实践指南"
name_en: Ethics Review Practice Guide
patterns:
  - name: "涉人研究必过审"
    description: "用户研究/数据收集涉人即走伦理审查（IRB/伦理委员会），知情同意流程完整——Respect for Persons 的制度化"
    domain: universal
    example: "用户测试前签署知情同意书含目的/风险/退出权"
    refs: [STD-BELMONT]
  - name: "知情同意降门槛"
    description: "同意文本用参与者能懂的语言（图解/分层摘要），确保『知情』而非『签字』"
    domain: universal
    example: "一页图解版同意书 + 术语白话对照"
  - name: "算法公平审计"
    description: "算法决策系统按受影响群体分层数据审计（不同群体错误率/通过率差异）——Justice 原则在 AI 场景的落地"
    domain: digital
    example: "招聘系统按性别/年龄分组审计通过率差异"
    refs: [STD-IEEE-EAD]
  - name: "伦理反馈通道"
    description: "产品内建伦理问题举报/反馈通道并纳入处置流程——伦理监督不是一次性审查而是持续机制"
    domain: digital
    example: "『报告问题』入口含伦理类别且有响应时限"
anti_patterns:
  - name: "伦理表演"
    description: "走过场的伦理审查/挂在墙上的价值观"
    consequence: "真正的伦理问题（成瘾设计/偏见算法/操纵）恰恰发生在没人真的看的地方——审查不是仪式是治理"
  - name: "同意即豁免"
    description: "拿到用户同意就认为一切皆可"
    consequence: "Belmont 原则中 Beneficence（风险收益评估）独立于同意——同意书覆盖不了伤害本身的不正当性"
cases: []
cross_domain_mapping:
  digital:
    summary: "算法公平审计、伦理反馈通道"
  industrial:
    summary: "工作场所伦理评估"
  architecture:
    summary: "社区参与设计、无障碍评估"
  fashion:
    summary: "身材呈现伦理、文化挪用审查"
status: draft
version: '1.0'
---

# 伦理审查实践指南 (Ethics Review Practice Guide)

> 关联因素：[[RUL-005-ethics-review|RUL-005 伦理审查]] ｜ 指南 ID：`G-RUL-005`

## 设计模式（正模式）

### ✅ 涉人研究必过审

用户研究/数据收集涉人即走伦理审查（IRB/伦理委员会），知情同意流程完整——Respect for Persons 的制度化

**示例**：用户测试前签署知情同意书含目的/风险/退出权

**标准依据**：`STD-BELMONT`

### ✅ 知情同意降门槛

同意文本用参与者能懂的语言（图解/分层摘要），确保『知情』而非『签字』

**示例**：一页图解版同意书 + 术语白话对照

### ✅ 算法公平审计

算法决策系统按受影响群体分层数据审计（不同群体错误率/通过率差异）——Justice 原则在 AI 场景的落地

**示例**：招聘系统按性别/年龄分组审计通过率差异

**标准依据**：`STD-IEEE-EAD`

### ✅ 伦理反馈通道

产品内建伦理问题举报/反馈通道并纳入处置流程——伦理监督不是一次性审查而是持续机制

**示例**：『报告问题』入口含伦理类别且有响应时限

## 反模式（常见错误）

### ❌ 伦理表演

走过场的伦理审查/挂在墙上的价值观

**排斥后果**：真正的伦理问题（成瘾设计/偏见算法/操纵）恰恰发生在没人真的看的地方——审查不是仪式是治理

### ❌ 同意即豁免

拿到用户同意就认为一切皆可

**排斥后果**：Belmont 原则中 Beneficence（风险收益评估）独立于同意——同意书覆盖不了伤害本身的不正当性

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 算法公平审计、伦理反馈通道 |
| 工业设计 | 工作场所伦理评估 |
| 建筑设计 | 社区参与设计、无障碍评估 |
| 服装设计 | 身材呈现伦理、文化挪用审查 |

---
*指南卡片：伦理审查实践指南 ｜ v1.0 ｜ 状态：draft*
