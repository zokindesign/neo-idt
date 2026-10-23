---
abstract_dimensions: []
dimension: WHEN
evidence: C
evidence_note: "有标准条款（WCAG 2.2 时间调整 SC），间接支撑；维持 C 级"
guides: [G-WHEN-F-005]
id: WHEN-F-005
merge_candidate: false
metrics: [M-WHEN-F-005-01]
name: 时间可用性
name_en: Time Availability
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:2.2.1"]
  research: []
response: both
rules: []
slug: time-availability
split_candidate: false
status: draft
type: context
version: '3.0'
weights:
  coverage: medium
  effort: medium
  frequency: medium
---

## 基本定义
用户在一天或一周中能够分配给使用产品的总时长与时间窗口（如仅在通勤、午休、晚间可用）。

## 为什么重要
- 用户可用时间直接决定任务长度、功能复杂度上限
- 碎片化时间需要任务分块与快速继续能力
- 时间可用性差异影响功能优先级与引导策略

## 量化标准
- **可用分钟数/天**: 用户自陈或通过使用数据推断
- **时间碎片程度**: 可用时间块的数目与长度（如 3×15min vs 1×2h）
- **规律性**: 是否每天固定时段可用
- **时间冲突频率**: 计划内任务被其他事务打断的次数

## 设计指南
- 支持任务分块与断点续接
- 提供“稍后继续”与定时提醒
- 允许设置每日目标时长
- 对长任务提供预估完成时间与分步计划

## 跨领域表现
| 领域 | 时间适配 |
|------|----------|
| **学习平台** | 微课程、课节分割、学习计划 |
| **阅读应用** | 章节分页、阅读进度、书签 |
| **在线表单** | 自动草稿、分步保存、续填入口 |
| **项目管理** | 任务拆解、时间估算、进度提醒 |

## 相关标准
- 无标准；基于用户调研与行为分析

---
*因素权重评估: ⭐⭐⭐☆☆ (对碎片化场景产品重要)*