---
abstract_dimensions: []
dimension: RUL
evidence: C
evidence_note: 合规基线卡：直接条款支撑为各行业强制安全标准原文（CE/UL/FDA/ISO 26262 等），属法规义务而非研究证据，维持 C 级
guides: [G-RUL-003]
id: RUL-003
merge_candidate: false
metrics: [M-RUL-003-01]
name: 安全认证要求
name_en: Safety Certification Requirements
ownership_review: false
refs:
  standards: ["STD-ISO-26262", "STD-ISO-15223"]
  research: []
response: alternative
rules: []
slug: safety-certification
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
产品或服务必须通过的安全标准与认证体系，如CE安全、UL认证、医疗设备FDA/CE MDR、汽车ISO 26262、航空DO-178C等，确保不会对用户造成伤害。

## 为什么重要
- 未获认证的产品无法在某些市场销售或使用
- 安全事故可能导致召回、诉讼、刑事责任
- 安全认证提升用户信任与保险优惠

## 量化标准
- **认证覆盖度**: 产品各模块满足的安全标准数量
- **测试通过率**: 安全测试用例通过比例（需接近100%）
- **残余风险等级**: 未解决风险的 severity 与发生概率
- **认证状态**: 是否持有有效证书、复审周期

## 设计指南
- 在需求阶段即考虑目标认证，纳入安全要求
- 与认证机构合作进行预合规测试
- 设计可追溯的安全文档（危害分析、风险评估）
- 预留安全裕度（冗余、故障保护）

## 跨领域表现
| 领域 | 认证示例 |
|------|----------|
| **医疗设备** | FDA 510(k), CE MDR, ISO 13485 |
| **汽车电子** | ISO 26262 (功能安全), UNECE R155 (网络安全) |
| **工业机械** | CE机械指令、UL认证 |
| **消费电子** | CE安全、电池安全（UN38.3）、RoHS |

## 相关标准
- ISO 31000: 风险管理
- IEC 62304: 医疗器械软件生命周期
- 各行业强制安全标准

---
*因素权重评估: ⭐⭐⭐⭐⭐ (强监管领域)*