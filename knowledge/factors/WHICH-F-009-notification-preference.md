---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "C2 核验文献挂接（2026-10-07）：SDT 理论间接支撑（自主需求），直接针对通知设计的研究仍缺"
guides: [G-WHICH-F-009]
id: WHICH-F-009
merge_candidate: false
metrics: [M-WHICH-F-009-01]
name: 通知偏好
name_en: Notification Preference
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:2.2.3"]
  research: ["Ryan R.M. & Deci E.L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68-78. https://doi.org/10.1037/0003-066X.55.1.68 [自主需求与通知打扰]"]
response: choice-space
rules: []
slug: notification-preference
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户对系统主动推送消息的接收意愿、时段、渠道和重要性的控制需求。通知是潜在的打断源，偏好差异巨大。

## 为什么重要
- 不当推送导致焦虑、注意力分散、用户卸载
- 某些用户需要即时通知（如高管、客服），而其他用户需要专注
- 通知疲劳会降低重要消息的响应率

## 量化标准
- **通知频率**: 用户希望每日/每小时接收的通知数量
- **时间窗口**: 允许推送的时间段（如仅工作时间）
- **渠道选择**: 推送渠道偏好（推送、邮件、短信、站内信）
- **优先级阈值**: 只有高优先级消息才允许强打扰

## 设计指南
- 提供细粒度控制（按类型、发送者、紧急程度）
- 默认设置为保守（仅关键通知）
- 允许用户暂停所有通知（专注模式）
- 尊重时区与作息差异

## 跨领域表现
| 领域 | 通知场景 |
|------|----------|
| **社交应用** | 提及、私信、活动提醒 |
| **效率工具** | 任务截止、日程变更、协作请求 |
| **电商** | 订单状态、降价、促销 |
| **智能家居** | 安全警报、设备异常、节能提醒 |

## 相关标准
- 各平台通知政策（如iOS通知分组、Android免打扰）
- GDPR对通信营销的限制

---
*因素权重评估: ⭐⭐⭐⭐⭐ (UGC/社交产品留存关键)*