---
abstract_dimensions: []
dimension: WHAT
evidence: C
evidence_note: "有标准条款（ISO 9241-110 任务适宜性），间接支撑；维持 C 级"
guides: [G-WHAT-F-001]
id: WHAT-F-001
merge_candidate: false
metrics: [M-WHAT-F-001-01]
name: 任务复杂度
name_en: Task Complexity
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.1"]
  research: []
response: alternative
rules: []
slug: task-complexity
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
任务所需的步骤数、决策点数量、信息量和技能要求的综合度量。

## 为什么重要
复杂度直接影响：
- 学习成本
- 错误概率
- 任务放弃率
- 用户满意度

## 量化标准
- **步骤计数**: 完成一个任务需要的最小操作数
- **决策点**: 需要用户做决定的节点数量
- **信息量**: 同时呈现的信息元素数量

## 设计指南
- 分而治之：复杂任务拆分为多个简单子任务
- 提供任务模板和向导
- 默认值和智能推荐减少决策负担
- 渐进披露：逐步展示高级选项

## 跨领域表现
- **数字产品**: 步骤化向导、默认配置、智能推荐
- **工业设计**: 模块化设计、一键式操作
- **建筑设计**: 空间分区清晰、功能流线明确
- **服装设计**: 简化穿着步骤、多功能设计

## 相关标准
- Miller's Law: 7±2 信息块原则
- 希克定律：选择越多，决策时间越长

---
*因素权重评估: ⭐⭐⭐⭐⭐ (核心因素)*