---
abstract_dimensions: []
dimension: RUL
evidence: C
evidence_note: 合规基线卡：直接条款支撑为 Belmont Report、IRB 指南、IEEE EAD 等伦理框架原文，属制度义务而非研究证据，维持 C 级
guides: [G-RUL-005]
id: RUL-005
merge_candidate: false
metrics: [M-RUL-005-01]
name: 伦理审查
name_en: Ethics Review
ownership_review: false
refs:
  research: []
  standards: ["STD-BELMONT", "STD-IEEE-EAD"]
response: alternative
rules: []
slug: ethics-review
split_candidate: false
status: draft
type: baseline
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
产品/服务必须通过或遵循的伦理原则与审查机制，包括用户自主、知情同意、数据尊严、公平性、避免伤害、可解释性等，尤其涉及用户研究、数据收集、算法决策。

## 为什么重要
- 伦理违规会导致公信力丧失、用户抵制、监管干预
- AI系统偏见、 dark patterns、操纵性设计引发伦理争议
- 科研类项目必须通过机构伦理委员会（IRB）审查

## 量化标准
- **伦理检查表完成度**: 是否覆盖所有伦理议题
- **知情同意率**: 用户同意研究条款的比例（及理解程度）
- **算法公平性指标**: 不同 demographic 群体的预测偏差
- **投诉与争议**: 与伦理相关的用户投诉数量

## 设计指南
- 早期引入伦理评估（设计伦理工作坊）
- 提供清晰、易懂的知情同意流程（非冗长条款）
- 避免 dark patterns（诱导点击、隐瞒取消）
- 确保算法可解释性与可申诉通道
- 设立伦理反馈渠道

## 跨领域表现
| 领域 | 伦理要点 |
|------|----------|
| **用户研究** | 知情同意、隐私保护、参与者权益 |
| **AI系统** | 公平、透明、问责、非歧视 |
| **社交平台** | 用户数据使用伦理、内容审核公正性 |
| **游戏设计** | 防沉迷、赌博机制、成瘾性设计 |

## 相关标准
- Belmont Report: 伦理原则（尊重、善行、正义）
- GDPR: 数据保护与同意
- IEEE Ethically Aligned Design
- 各机构IRB指南

---
*因素权重评估: ⭐⭐⭐⭐☆ (社会影响与信任关键)*