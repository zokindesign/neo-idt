---
abstract_dimensions: []
dimension: WHEN
evidence: B
evidence_note: "C2 核验文献挂接（2026-10-07）：Hart & Staveland 1988 NASA-TLX 原始文献 + WCAG 2.2 SC 2.2.6 标准条款"
guides: [G-WHEN-F-006]
id: WHEN-F-006
merge_candidate: false
metrics: [M-WHEN-F-006-01]
name: 疲劳度
name_en: Fatigue Level
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:2.2.6", "STD-NASA-TLX"]
  research: ["Hart S.G. & Staveland L.E. (1988). Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research. In Advances in Psychology (Vol. 52, pp. 139-183). https://doi.org/10.1016/S0166-4115(08)62386-9"]
response: alternative
rules: []
slug: fatigue-level
split_candidate: false
status: draft
type: ability
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
用户在连续使用或特定时段后认知与生理能力的下降程度，表现为注意力分散、错误率上升、操作变慢。

## 为什么重要
- 疲劳状态下操作风险增加（如医疗、驾驶场景）
- 疲劳导致用户放弃、体验下降
- 识别并响应疲劳可提升安全与持久使用

## 量化标准
- **会话长度 vs 错误率**: 随使用时间错误的增长曲线
- **瞳孔/眨眼**: 疲劳的生理信号（如有传感器）
- **自陈疲劳**: 用户定期报告疲劳程度
- **反应时间**: 操作响应延迟增加

## 设计指南
- 检测并使用疲劳信号（如连续错误、操作放缓）
- 主动提示休息（微休息、眼保健操）
- 疲劳时界面简化（减少信息量、放大关键元素）
- 支持暂停与断点保存

## 跨领域表现
| 领域 | 疲劳应对 |
|------|----------|
| **驾驶系统** | 疲劳监测、提醒休息、车道保持辅助 |
| **办公软件** | 定时休息提醒、护眼模式、文档摘要 |
| **工业控制** | 工间休息安排、疲劳预警系统 |
| **学习平台** | 学习节奏调控、注意力检测、分段内容 |

## 相关标准
- ISO 9241-410: 人因工程中的疲劳考虑
- 各行业安全规程（如航空、医疗）

---
*因素权重评估: ⭐⭐⭐⭐☆ (安全与健康相关设计关键)*