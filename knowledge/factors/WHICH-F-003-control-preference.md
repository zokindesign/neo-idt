---
abstract_dimensions: []
dimension: WHICH
evidence: B
evidence_note: "C2 核验文献挂接（2026-10-07）：Parasuraman/Sheridan/Wickens 2000 自动化分级模型（IEEE SMC-A）+ ISO 9241-110 5.5 可控性 + WCAG 3.2.6"
guides: [G-WHICH-F-003]
id: WHICH-F-003
merge_candidate: false
metrics: [M-WHICH-F-003-01]
name: 控制感偏好
name_en: Control Preference
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.5", "STD-W3C-WCAG22:3.2.6"]
  research: ["Parasuraman R., Sheridan T.B. & Wickens C.D. (2000). A model for types and levels of human interaction with automation. IEEE Transactions on Systems, Man, and Cybernetics—Part A, 30(3), 286-297. https://doi.org/10.1109/3468.844354"]
response: choice-space
rules: []
slug: control-preference
split_candidate: false
status: draft
type: preference
version: '3.1'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

# 控制感偏好 (Control Preference)

## 基本定义

用户在完成任务时对过程的自主掌控程度与自动化程度的偏好。

## 为什么重要

- 控制感不足 → 无力感、不信任
- 控制过度 → 负担重、效率低
- 影响用户采纳新技术（如自动化驾驶接受度）

## 量化标准

- **测量方法**: 调研量表（自动化接受度、手动干预意愿）
- **指标**: 用户实际使用的自动化vs手动功能的频率
- **容忍度阈值**: 某些任务中用户愿意放弃的控制比例

## 设计指南

- 提供可调节的自动化级别（如"全自动"、"半自动"、"手动"）
- 允许用户覆盖系统决策
- 提供撤销机制以增加安全感
- 明确当前系统状态和预期行为
- **帮助一致性**：帮助入口位置固定、帮助内容结构统一、上下文敏感帮助与全局帮助并存、帮助可随时召唤且不打断主流程（对应 WCAG 2.2 SC 3.2.6，指南层落实 WP-E）

## 跨领域表现

- **数字产品**: 自动填充建议接受/拒绝、推荐算法透明度
- **工业设备**: 手动override、半自动模式、全自动模式
- **智能建筑**: 环境自动调节 + 手动调节面板
- **服装**: 可调节部件（纽扣、拉链、绑带） vs 一键穿戴

## 相关标准

- ISO 9241-110: 可控性原则
- Parasuraman等人的信任与自动化理论
- WCAG 2.2 SC 3.2.6: Consistent Help（帮助一致性）

---

*因素卡片：控制感偏好*
*版本：3.1（B1 补强：帮助一致性指南要点）*
