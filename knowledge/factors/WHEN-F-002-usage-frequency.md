---
abstract_dimensions: []
dimension: WHEN
evidence: B
evidence_note: "C4a 核验文献挂接（2026-10-08）：Lally et al. 2010 习惯养成曲线（18-254 天渐近线，非'21 天'迷思），直接研究支撑"
guides: [G-WHEN-F-002]
id: WHEN-F-002
merge_candidate: false
metrics: [M-WHEN-F-002-01]
name: 使用频率
name_en: Usage Frequency
ownership_review: false
refs:
  standards: []
  research: ["Lally P., van Jaarsveld C.H.M., Potts H.W.W. & Wardle J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998-1009. https://doi.org/10.1002/ejsp.674"]
response: both
rules: []
slug: usage-frequency
split_candidate: false
status: draft
type: context
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
用户使用产品的频繁程度，包括每日、每周、偶尔等不同频率模式。

## 为什么重要
- 高频用户与低频用户的需求差异大（功能深度 vs 快速上手）
- 频率影响学习曲线、记忆留存、功能发现策略
- 低频用户可能需要更多记忆辅助与回访激励

## 量化标准
- **DAU/MAU 比率**: 日均活跃与月活比例（衡量黏性）
- **会话间隔**: 平均两次使用之间的时间间隔
- **频率分布**: 高/中/低频用户占比
- **使用时长/次**: 单次使用平均时长

## 设计指南
- 高频用户：提供快捷键、批量操作、高级功能入口
- 低频用户：简化界面、清晰指引、提供最近使用记录
- 允许用户设置偏好频率或自动调节难度
- 针对次月留存设计回访机制（邮件、通知）

## 跨领域表现
| 领域 | 频率适配 |
|------|----------|
| **工具软件** | 常用功能置顶、历史记录、模板保存 |
| **社交应用** | 推送频率可调、重要事件聚合、每日摘要 |
| **健身应用** | 训练计划周期化、休息提醒、成就系统 |
| **公共服务** | 预约系统、常用信息保存、快速通道 |

## 相关标准
- None specific; engagement metrics common in analytics

---
*因素权重评估: ⭐⭐⭐⭐☆ (对留存与活跃度关键)*