---
abstract_dimensions: []
dimension: RUL
evidence: C
evidence_note: 合规基线卡：直接条款支撑为各行业规范原文（HIPAA/PCI DSS/DO-178C 等），属法规义务而非研究证据，维持 C 级
guides: [G-RUL-006]
id: RUL-006
merge_candidate: false
metrics: [M-RUL-006-01]
name: 行业特定规范
name_en: Industry Specific Standards
ownership_review: false
refs:
  standards: ["STD-ISO-26262"]
  research: []
response: alternative
rules: []
slug: industry-standards
split_candidate: false
status: draft
type: baseline
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
特定行业（医疗、金融、教育、航空等）的安全和质量规范。

## 为什么重要
- 行业准入门槛
- 专业人员认证要求
- 安全与质量标准

## 量化标准
- **认证等级**: 是否符合特定认证（如HIPAA、FISMA）
- **审计通过率**: 满足内部审计要求比例
- **安全漏洞等级**: 高危漏洞数量

## 设计指南
- 了解目标行业的专门要求
- 设计初期即考虑合规需求
- 文档化和审计追踪能力

## 相关标准
- **医疗**: HIPAA, GDPR health data
- **金融**: PCI DSS, GLBA, SOX
- **教育**: FERPA (学生隐私)
- **航空**: DO-178C (航空电子软件)

---
*因素权重评估: ⭐⭐⭐⭐☆ (视行业而定)*