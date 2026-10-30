---
abstract_dimensions: []
dimension: RUL
evidence: C
evidence_note: 合规基线卡：直接条款支撑为 GDPR/PIPL 法规原文，属法规义务而非研究证据，维持 C 级
guides: [G-RUL-002]
id: RUL-002
merge_candidate: false
metrics: [M-RUL-002-01]
name: 数据隐私合规
name_en: Data Privacy Compliance
ownership_review: false
refs:
  standards: ["STD-GDPR:7.3", "STD-GDPR:12.3", "STD-GDPR:17", "STD-PIPL:15", "STD-PIPL:16", "STD-PIPL:17", "STD-PIPL:44", "STD-PIPL:45", "STD-PIPL:47"]
  research: []
response: alternative
rules: []
slug: data-privacy-compliance
split_candidate: false
status: draft
type: baseline
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
在数据收集、存储、处理、共享全生命周期遵守隐私相关法规。

## 为什么重要
- 高额罚款（GDPR最高4%全球营收）
- 用户信任的关键
- 跨境业务必须满足不同法域要求

## 量化标准
- **同意率**: 获取有效用户同意的比例
- **数据最小化**: 收集数据种类是否超出必要范围
- **数据留存期**: 是否规定存储时限并执行删除
- **用户权利响应**: 删除、更正、可携带权响应时效

## 设计指南
- 隐私设计（Privacy by Design）原则
- 清晰的隐私政策和使用说明
- 提供权限管理界面让用户可以随时撤回同意
- 数据匿名化处理能力

## 相关标准
- GDPR (欧盟)
- CCPA/CPRA (加州)
- PIPL (中国个人信息保护法)
- ISO/IEC 27701 (隐私信息管理)

---
*因素权重评估: ⭐⭐⭐⭐⭐ (法律强制)*