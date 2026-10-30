---
abstract_dimensions: []
dimension: WHEN
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 2.2.1/2.2.2 + ISO 9241-110:5.5.2），间接支撑；维持 C 级"
guides: [G-WHEN-F-004]
id: WHEN-F-004
merge_candidate: false
metrics: [M-WHEN-F-004-01]
name: 时间压力
name_en: Time Pressure
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:2.2.1", "STD-W3C-WCAG22:2.2.2", "STD-ISO-9241-110:5.5.2"]
  research: []
response: alternative
rules: []
slug: time-pressure
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
用户因外部时间限制而产生的紧迫感，以及完成任务所需时间与预期时间的匹配度。

## 为什么重要
时间压力会导致：
- 认知负荷增加
- 决策质量下降
- 用户焦虑和挫败感
- 错误率上升

## 量化标准
- **时间限制**: 明确任务是否有强deadline
- **响应时间要求**: 用户期望的响应时间窗口（如2秒内）
- **容忍度**: 用户对不同任务的时间容忍阈值

## 设计指南
- 显示剩余时间或进度指示
- 允许暂停/延长时间（如考试倒计时可延长）
- 提供快捷路径（减少步骤的替代流程）
- 避免不必要的等待加载

## 跨领域表现
- **数字产品**: 加载动画、进度条、允许保存草稿
- **工业设计**: 快速启动、一键完成常用任务
- **建筑设计**: 紧急疏散路径明确标识
- **服务设计**: 快速通道选项、预约时间选择

## 相关标准
- Nielsen Norman Group: 响应时间阈值（0.1s感知即时, 1s保持流畅, 10s保持注意力）

---
*因素权重评估: ⭐⭐⭐⭐☆ (对即时交互影响大)*