---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "有标准条款（ISO 9241-110 5.5 可控性），间接支撑；维持 C 级"
guides: [G-WHICH-F-002]
id: WHICH-F-002
merge_candidate: false
metrics: [M-WHICH-F-002-01]
name: 探索深度偏好
name_en: Exploration Depth Preference
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.4.3"]
  research: []
response: choice-space
rules: []
slug: exploration-depth-preference
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: medium
  effort: medium
  frequency: medium
---

## 基本定义
用户在探索内容或功能时，倾向于快速概览还是深入详查。

## 为什么重要
- 满足不同用户的探索模式，减少用户流失
- 影响界面导航结构设计（扁平 vs 分层）

## 量化标准
- **测量方法**: 用户行为分析（页面访问深度、功能使用率）
- **指标**: 平均页面停留时间、功能使用多样性
- **偏好分段**: 通常可划分为“快速搜寻型”和“深度研究型”

## 设计指南
- 提供“快速开始”路径（新手默认）
- 同时提供“高级设置”或“专家模式”入口
- 导航支持多层级访问（面包屑、快速返回）
- 搜索功能与浏览功能并重

## 跨领域表现
- **数字产品**: 新手引导 vs 高级手册、搜索 prominence
- **知识库**: 摘要版 vs 完整版、快速浏览 vs 详细学习
- **零售空间**: 精选展示 vs 详细探索区域
- **服装选择**: 快速搭配推荐 vs 详细材质工艺查看

## 相关标准
- None specifically; derived from user research segmentation

---
*因素权重评估: ⭐⭐⭐☆☆ (对内容密集型产品重要)*