---
abstract_dimensions: []
dimension: WHEN
evidence: C
evidence_note: "有标准条款（WCAG 2.2 时间相关 SC），间接支撑；维持 C 级"
guides: [G-WHEN-F-001]
id: WHEN-F-001
merge_candidate: false
metrics: [M-WHEN-F-001-01]
name: 使用时段
name_en: Usage Time Period
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.5"]
  research: []
response: both
rules: []
slug: usage-time-period
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
用户对在产品中使用的时间段的主观偏好（如早晨、深夜、工作时段、周末），可能与实际可用时间不一致。

## 为什么重要
- 符合用户偏好的时段使用可带来更高满意度与效率
- 时段偏好影响 UI 主题（暗色模式夜间）、通知发送时机
- 了解偏好有助于个性化推荐与用户分群

## 量化标准
- **时段分布数据**: 用户活跃时间热图
- **自陈偏好**: 问卷调查“你更喜欢什么时候使用？”
- **时段切换频率**: 用户是否固定时段使用
- **时段满意度**: 不同时段的体验评分

## 设计指南
- 允许用户设定“常用使用时段”以优化提醒与通知
- 自动调节界面（夜间自动暗色、早晨明亮）
- 在不同时段提供不同的内容或功能推荐
- 尊重勿扰设置，避免在非偏好时段打扰

## 跨领域表现
| 领域 | 时段适应 |
|------|----------|
| **内容平台** | 个性化推送时间、时段专属内容 |
| **健身应用** | 推荐训练时间、晨间唤醒、助眠冥想 |
| **社交应用** | 夜间模式、早安问候、睡前提醒 |
| **智能家居** | 根据用户习惯自动调节灯光、温度 |

## 相关标准
- 无强制标准；行为分析与用户调研方法

---
*因素权重评估: ⭐⭐⭐☆☆ (内容消费类产品重要)*