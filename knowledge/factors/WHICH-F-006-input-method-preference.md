---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "有标准条款（WCAG 2.2 输入模态 SC），间接支撑；维持 C 级"
guides: [G-WHICH-F-006]
id: WHICH-F-006
merge_candidate: false
metrics: [M-WHICH-F-006-01]
name: 输入方式偏好
name_en: Input Method Preference
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:2.1.1", "STD-W3C-WCAG22:2.5.7"]
  research: []
response: choice-space
rules: []
slug: input-method-preference
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
用户偏爱的与系统交互的输入手段，如键盘、鼠标、触摸、语音、手势、眼动、切换设备等，以及这些输入方式之间的偏好强度与组合。

## 为什么重要
- 不同用户对输入方式的熟悉度、舒适度和效率差异大
- 身体条件可能限制某些输入方式（如单手操作、精细控制）
- 使用场景也影响最佳输入（驾驶时语音、办公室键鼠）
- 提供输入切换可提升可访问性与用户满意度

## 量化标准
- **输入方式使用频次**: 各方式在任务中的占比
- **切换频率**: 用户在同一会话中切换输入方式的次数
- **错误率**: 各输入方式的操作错误率
- **满意度评分**: 对各输入方式的舒适度与效率评分

## 设计指南
- 同时支持多种输入设备，不强制单一方式（如保留键盘快捷键）
- 允许用户设置默认输入法/输入设备优先级
- 提供输入方式快速切换入口
- 支持输入映射自定义（如键位重映射、手势自定义）
- 环境感知：自动推荐合适输入（如移动时推荐语音）

## 跨领域表现
| 领域 | 输入方式示例 |
|------|--------------|
| **桌面软件** | 鼠标、键盘、触控板、笔输入、语音命令 |
| **移动应用** | 触摸、手势、外接键盘、语音输入 |
| **游戏设备** | 手柄、键盘鼠标、体感、VR手柄、方向盘 |
| **工业/医疗** | 开关、脚踏、头控、眼动、呼吸控制 |

## 相关标准
- 平台无障碍框架（如UI Automation, AT-SPI）
- 可选输入设备标准（如USB HID）
- IEEE 11064: 人机交互设计原则

---
*因素权重评估: ⭐⭐⭐⭐☆ (硬件交互产品必需)*