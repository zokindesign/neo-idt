---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 4.1.3 状态消息 + ISO 9241-110:2020 5.2 反馈原则），间接支撑；维持 C 级"
guides: [G-WHICH-F-007]
id: WHICH-F-007
merge_candidate: false
metrics: [M-WHICH-F-007-01]
name: 反馈偏好
name_en: Feedback Preference
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:4.1.3", "STD-ISO-9241-110:5.2.3"]
  research: []
response: choice-space
rules: []
slug: feedback-preference
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
用户对系统对其操作所作响应的形式、强度、持续时间和感知通道（视觉、听觉、触觉）的主观偏好。

## 为什么重要
- 反馈是交互的基础，不当的反馈会干扰或遗漏
- 用户在不同场景下需求不同（办公室需安静，户外需明显）
- 对视觉/听觉敏感的癫痫、自闭症用户需避免某些反馈形式

## 量化标准
- **反馈强度**: 用户可接受的提示音量、动画时长、震动强度
- **通道偏好**: 视觉/声音/触觉使用比例
- **干扰容忍度**: 对非任务性提示的打断感受评分
- **信息量**: 期望的反馈详细程度（仅确认 vs 详细状态）

## 设计指南
- 允许用户调整各通道的反馈强度或关闭特定通道
- 提供静音模式、勿扰模式
- 紧急或高风险状态使用多通道强反馈（但可配置）
- 设计时考虑光敏性、声敏性等特殊需求

## 跨领域表现
| 领域 | 反馈方式 |
|------|----------|
| **移动应用** | 提示音、震动、视觉toast、状态栏更新 |
| **桌面软件** | 声音提示、任务栏闪烁、气球通知 |
| **工业控制** | 灯光指示、蜂鸣、触觉反馈（力反馈手柄） |
| **可穿戴** | 震动模式、灯光、语音反馈 |

## 相关标准
- WCAG 2.2 2.2.1: 调整 timing
- 可访问性指南中关于闪烁、声音的要求

---
*因素权重评估: ⭐⭐⭐⭐☆ (交互产品普遍影响)*