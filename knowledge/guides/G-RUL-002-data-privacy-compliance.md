---
id: G-RUL-002
factor_id: RUL-002
name: "数据隐私合规指南"
name_en: Data Privacy Compliance Guide
patterns:
  - name: "最小化默认"
    description: "默认收集最少数据；每项收集有明确目的并按目的限定使用——最小化是隐私合规的第一性原则"
    domain: universal
    example: "注册仅收邮箱；生日/手机号选填且说明用途"
    refs: ["STD-GDPR:25"]
  - name: "撤回便捷对等"
    description: "撤回同意的路径与给予同意同样便捷；撤回即生效并有数据状态告知"
    domain: digital
    example: "隐私面板一键撤回单项授权 + 撤回后处理状态反馈"
    refs: ["STD-GDPR:7.3", "STD-PIPL:15"]
  - name: "权利响应 SLA"
    description: "数据主体权利（查阅/复制/更正/删除）建立响应流程与 SLA：GDPR 一个月时限、PIPL 及时响应——流程而非口号"
    domain: universal
    example: "权利请求工单化，超时自动升级"
    refs: ["STD-GDPR:12.3", "STD-PIPL:45"]
  - name: "拒绝零惩罚"
    description: "拒绝授权/撤回同意后基本服务不受影响（法定必需处理除外且说明）"
    domain: digital
    example: "拒绝营销授权后全部核心功能照常可用"
    refs: ["STD-PIPL:16"]
anti_patterns:
  - name: "同意工厂"
    description: "冗长条款墙 + 默认勾选 + 拒绝按钮灰色化"
    consequence: "GDPR/PIPL 下均不构成有效同意（自由给予原则）；『被同意』的用户从未真正授权——法律与信任双输"
  - name: "跨境盲区"
    description: "数据出境未评估合规路径"
    consequence: "PIPL 第38-40条要求出境安全评估/认证/标准合同三选一——跨境处理的合规路径必须前置设计"
cases: []
cross_domain_mapping:
  digital:
    summary: "最小化、撤回对等、权利 SLA"
  industrial:
    summary: "设备数据本地化、采集告知"
  architecture:
    summary: "监控标识、访客数据政策"
  fashion:
    summary: "智能服装数据开关"
status: draft
version: '1.0'
---

# 数据隐私合规指南 (Data Privacy Compliance Guide)

> 关联因素：[[RUL-002-data-privacy-compliance|RUL-002 数据隐私合规]] ｜ 指南 ID：`G-RUL-002`

## 设计模式（正模式）

### ✅ 最小化默认

默认收集最少数据；每项收集有明确目的并按目的限定使用——最小化是隐私合规的第一性原则

**示例**：注册仅收邮箱；生日/手机号选填且说明用途

**标准依据**：`STD-GDPR:25`

### ✅ 撤回便捷对等

撤回同意的路径与给予同意同样便捷；撤回即生效并有数据状态告知

**示例**：隐私面板一键撤回单项授权 + 撤回后处理状态反馈

**标准依据**：`STD-GDPR:7.3`、`STD-PIPL:15`

### ✅ 权利响应 SLA

数据主体权利（查阅/复制/更正/删除）建立响应流程与 SLA：GDPR 一个月时限、PIPL 及时响应——流程而非口号

**示例**：权利请求工单化，超时自动升级

**标准依据**：`STD-GDPR:12.3`、`STD-PIPL:45`

### ✅ 拒绝零惩罚

拒绝授权/撤回同意后基本服务不受影响（法定必需处理除外且说明）

**示例**：拒绝营销授权后全部核心功能照常可用

**标准依据**：`STD-PIPL:16`

## 反模式（常见错误）

### ❌ 同意工厂

冗长条款墙 + 默认勾选 + 拒绝按钮灰色化

**排斥后果**：GDPR/PIPL 下均不构成有效同意（自由给予原则）；『被同意』的用户从未真正授权——法律与信任双输

### ❌ 跨境盲区

数据出境未评估合规路径

**排斥后果**：PIPL 第38-40条要求出境安全评估/认证/标准合同三选一——跨境处理的合规路径必须前置设计

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 最小化、撤回对等、权利 SLA |
| 工业设计 | 设备数据本地化、采集告知 |
| 建筑设计 | 监控标识、访客数据政策 |
| 服装设计 | 智能服装数据开关 |

---
*指南卡片：数据隐私合规指南 ｜ v1.0 ｜ 状态：draft*
