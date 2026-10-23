---
abstract_dimensions: []
dimension: WHERE
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 2.4.1 + ISO 21542 紧急条款），间接支撑；维持 C 级"
guides: [G-WHERE-F-006]
id: WHERE-F-006
merge_candidate: false
metrics: [M-WHERE-F-006-01]
name: 紧急情况应对
name_en: Emergency Response
ownership_review: false
refs:
  standards: ["STD-ISO-21542:11", "STD-GB-55019:4"]
  research: []
response: alternative
rules: []
slug: emergency-response
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
用户在紧急情况（如医疗急救、火灾、自然灾害、安全威胁）下使用产品或服务的能力与特殊需求。

## 为什么重要
- 紧急情况下用户认知负荷剧增，时间紧迫，操作能力受限
- 常规交互流程可能无法满足快速响应需求
- 包容性设计必须考虑脆弱状态下的可访问性

## 量化标准
- **激活时间**: 从紧急状态识别到发起求助的时间窗口
- **操作复杂度**: 紧急呼叫所需的最小操作数（理想1步）
- **辅助功能**: 是否能语音触发、按键触发、环境传感器自动触发
- **容错机制**: 误触后的取消或撤销能力（避免因误触延误真实求助）

## 设计指南
- 提供一键求助（SOS）功能，始终可访问（即使锁屏）
- 紧急流程极度简化，避免多层确认（但提供误触取消）
- 支持多通道触发（声音、手势、按键、自动监测）
- 提供清晰的紧急状态确认与反馈（已呼救、位置共享）
- 考虑用户可能在慌乱中，设计应防呆

## 跨领域表现
| 领域 | 紧急功能示例 |
|------|--------------|
| **移动设备** | 锁屏紧急呼叫、跌倒检测自动呼救 |
| **汽车** | 紧急制动、一键救援呼叫 |
| **智能家居** | 火灾/燃气自动报警与通知紧急联系人 |
| **可穿戴设备** | 医疗紧急按钮、心率异常警报 |

## 相关标准
- 各地紧急呼叫服务标准（如 110/120/911）
- 国际无障碍标准中对紧急通信的要求（如 TIA-603）
- 产品安全认证要求

---
*因素权重评估: ⭐⭐⭐⭐☆ (生命安全相关)*