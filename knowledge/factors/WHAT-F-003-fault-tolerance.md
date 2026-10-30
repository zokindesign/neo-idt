---
abstract_dimensions: []
dimension: WHAT
evidence: C
evidence_note: "有标准条款（WCAG 2.2 容错相关 SC），间接支撑；维持 C 级"
guides: [G-WHAT-F-003]
id: WHAT-F-003
merge_candidate: false
metrics: [M-WHAT-F-003-01]
name: 容错性需求
name_en: Fault Tolerance Requirement
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.6", "STD-W3C-WCAG22:3.3.4"]
  research: []
response: alternative
rules: []
slug: fault-tolerance
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
系统对用户错误和异常情况的容忍程度，以及从中恢复的能力。

## 为什么重要
- 降低用户焦虑（知道错误不会导致灾难性后果）
- 鼓励探索和学习
- 减少训练成本

## 量化标准
- **Undo层级**: 支持多少步撤销操作
- **确认机制**: 关键操作前是否确认
- **错误防护**: 预防错误的机制（如禁用危险按钮）
- **恢复时间**: 从错误中恢复到正常状态的时间

## 设计指南
- 提供清晰、有用的错误信息
- 易于撤销（撤销按钮、Ctrl+Z、历史记录）
- 二次确认高风险操作
- 自动保存和版本快照
- 清晰的恢复路径

## 跨领域表现
- **数字产品**: 撤销/重做、确认对话框、自动保存
- **物理设备**: 紧急停止按钮、安全开关
- **建筑空间**: 冗余出口、安全网设计
- **服装设计**: 易穿脱设计、可调节部件

## 相关标准
- ISO 9241-110: 容错性原则

---
*因素权重评估: ⭐⭐⭐⭐☆ (安全相关)*