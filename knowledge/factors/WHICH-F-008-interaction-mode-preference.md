---
abstract_dimensions: []
dimension: WHICH
evidence: B
evidence_note: "C2 核验文献挂接（2026-10-07）：Parasuraman et al. 2000 自动化分级模型"
guides: [G-WHICH-F-008]
id: WHICH-F-008
merge_candidate: false
metrics: [M-WHICH-F-008-01]
name: 交互模式偏好
name_en: Interaction Mode Preference
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.5.4"]
  research: ["Parasuraman R., Sheridan T.B. & Wickens C.D. (2000). A model for types and levels of human interaction with automation. IEEE Transactions on SMC-A, 30(3), 286-297. https://doi.org/10.1109/3468.844354"]
response: choice-space
rules: []
slug: interaction-mode-preference
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
用户偏爱的与系统交互的方式，如直接操作（点击、拖拽）vs 命令式（输入指令）、手势、语音、键盘快捷键等。

## 为什么重要
- 不同用户对不同交互模式熟练度与舒适度差异大
- 任务场景也影响最佳交互模式（如驾驶时适合语音）
- 提供多种交互模式可提升效率与可访问性

## 量化标准
- **使用频率**: 各模式的实际使用占比
- **错误率**: 模式下操作错误率
- **任务完成时间**: 不同模式完成相同任务的平均时间
- **学习曲线**: 掌握新模式所需时间

## 设计指南
- 同时支持多种交互方式（鼠标、触摸、键盘、语音）
- 允许用户设置默认交互模式
- 不强制切换（如触屏设备保留右键菜单）
- 提供模式切换快捷方式

## 跨领域表现
| 领域 | 模式示例 |
|------|----------|
| **桌面软件** | 菜单导航、快捷键、命令行、拖拽 |
| **移动应用** | 触摸手势、语音输入、物理按钮 |
| **智能家居** | App控制、语音助手、物理开关、自动化场景 |
| **游戏** | 键鼠、手柄、体感、触屏 |

## 相关标准
- 无统一标准；需遵循平台规范（iOS HIG, Material Design）

---
*因素权重评估: ⭐⭐⭐⭐☆ (多模态交互产品)*