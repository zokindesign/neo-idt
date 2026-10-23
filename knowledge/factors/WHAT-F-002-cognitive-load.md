---
abstract_dimensions: []
dimension: WHAT
evidence: B
evidence_note: "C2 核验文献挂接（2026-10-07）：Sweller 1988 认知负荷理论奠基文献（Cognitive Science, 8600+ 引用）"
guides: [G-WHAT-F-002]
id: WHAT-F-002
merge_candidate: false
metrics: [M-WHAT-F-002-01, M-WHAT-F-002-02]
name: 认知负荷
name_en: Cognitive Load
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.1.3", "STD-NASA-TLX:1", "STD-W3C-WCAG22:3.3.7"]
  research: ["Sweller J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 165-188. https://doi.org/10.1207/s15516709cog1202_4"]
response: alternative
rules: []
slug: cognitive-load
split_candidate: false
status: draft
type: ability
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户在执行任务过程中需要投入的Mental Effort总量。

## 为什么重要
过高的认知负荷会导致：
- 任务完成时间延长
- 错误率上升
- 用户挫败感和放弃率增加

## 量化标准
- **测量方法**: NASA-TLX量表、瞳孔直径、任务完成时间
- **阈值**: 通常要求任务认知负荷 ≤ 中等水平（NASA-TLX得分<60）
- **影响因素**: 信息密度、时间压力、任务复杂度、技术素养

## 设计指南
- 减少 Working Memory负担（分步引导、渐进呈现）
- 提供默认值和智能推荐
- 使用明确的信息分层和视觉层次
- 提供撤销/重做机制以降低决策负担

## 跨领域表现
- **数字产品**: 减少弹窗、简化流程、提供即时帮助
- **工业设计**: 简化控制面板、减少操作步骤、明确标识
- **建筑设计**: 清晰的导视系统、简化导航路径
- **服装设计**: 穿着简便性、穿脱步骤简化

## 相关标准
- ISO 9241-210: 可用性工程标准
- WCAG 3.0: 认知无障碍指南

---
*因素权重评估: ⭐⭐⭐⭐⭐ (影响面极广)*