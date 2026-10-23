---
abstract_dimensions: []
dimension: HOW
evidence: C
evidence_note: "有标准条款（WCAG 2.2 输入相关 SC），间接支撑；维持 C 级"
guides: [G-HOW-F-007]
id: HOW-F-007
merge_candidate: false
metrics: [M-HOW-F-007-01]
name: 输入输出能力
name_en: Input Output Capability
ownership_review: false
refs:
  standards: ["STD-EN-301549:11.5.2", "STD-W3C-WCAG22:4.1.2"]
  research: []
response: alternative
rules: []
slug: input-output-capability
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
设备支持的输入方式（触摸、按键、语音、手柄、眼动）和输出方式（屏幕、扬声器、震动、盲文）的多样性、精度与兼容性。

## 为什么重要
- 用户可能缺少某种输入能力（如单手操作、视力障碍）或偏好
- 输出通道不足会排除某些感知能力有限用户
- 环境因素可能限制某些IO（如噪音环境需视觉输出）

## 量化标准
- **输入通道数**: 支持的输入方式种类（≥3为佳）
- **精度要求**: 触摸目标尺寸、按键行程、语音识别准确率
- **输出通道数**: 支持的输出方式（声音、视觉、触觉）
- **自定义程度**: 用户能否调整IO映射（键位重映射、震动强度）

## 设计指南
- 支持多通道输入与输出
- 允许用户重映射或禁用某些通道
- 避免依赖单一通道（如纯触控、仅声音）
- 提供标准API以便外接自定义输入设备

## 跨领域表现
| 领域 | IO示例 |
|------|--------|
| **移动应用** | 触摸、语音、蓝牙键盘、震动、屏幕阅读 |
| **游戏设备** | 手柄、体感、VR手柄、方向盘 |
| **工业控制** | 物理按钮、旋钮、脚踏、指示灯、蜂鸣 |
| **穿戴设备** | 按钮、触摸板、语音、震动、小屏幕 |

## 相关标准
- 平台无障碍指南（iOS VoiceOver, Android TalkBack）
- 游戏辅助功能标准（Xbox Adaptive Controller）

---
*因素权重评估: ⭐⭐⭐⭐☆ (硬件相关产品)*