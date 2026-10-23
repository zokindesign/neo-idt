---
id: G-HOW-F-003
factor_id: HOW-F-003
name: "续航与电源指南"
name_en: Battery & Power Guide
patterns:
  - name: "电量透明化"
    description: "电量状态与剩余使用时间预测常显可查；低电量预警分级提前"
    domain: digital
    example: "显示『预计剩余 4 小时』而非仅百分比"
    refs: ["STD-GB-T-45122:6.4"]
  - name: "省电模式分级"
    description: "省电分档（轻度/重度/极限保命），极限档保核心功能（通话/求救）"
    domain: digital
    example: "5% 电量进入极限模式：仅保留通话与定位"
  - name: "多充电方式冗余"
    description: "支持通用充电标准（USB-C PD/无线），专用接口需有转接方案"
    domain: industrial
    example: "设备用 USB-C 而非私有接口；附赠转接头"
  - name: "关键功能低功耗保障"
    description: "安全类功能（跌倒检测/紧急呼叫）有独立低功耗保障路径"
    domain: digital
    example: "紧急功能独立电源岛或超低功耗芯片"
anti_patterns:
  - name: "电量焦虑设计"
    description: "高频唤醒、后台常驻悄悄耗电"
    consequence: "用户为省电而卸载——续航是最真实的用户痛点之一（Rahmati & Zhong 2009 人-电池交互研究）"
  - name: "私有充电生态"
    description: "专用充电器/私有协议"
    consequence: "充电器丢失即设备瘫痪——通用标准是电源包容的底线"
cases: []
cross_domain_mapping:
  digital:
    summary: "电量预测、分级省电、通用充电"
  industrial:
    summary: "关键功能备用电源、换电设计"
  architecture:
    summary: "应急照明双回路、充电位覆盖"
  fashion:
    summary: "智能纺织品低功耗设计"
status: draft
version: '1.0'
---

# 续航与电源指南 (Battery & Power Guide)

> 关联因素：[[HOW-F-003-power-battery-life|HOW-F-003 电源与续航]] ｜ 指南 ID：`G-HOW-F-003`

## 设计模式（正模式）

### ✅ 电量透明化

电量状态与剩余使用时间预测常显可查；低电量预警分级提前

**示例**：显示『预计剩余 4 小时』而非仅百分比

**标准依据**：`STD-GB-T-45122:6.4`

### ✅ 省电模式分级

省电分档（轻度/重度/极限保命），极限档保核心功能（通话/求救）

**示例**：5% 电量进入极限模式：仅保留通话与定位

### ✅ 多充电方式冗余

支持通用充电标准（USB-C PD/无线），专用接口需有转接方案

**示例**：设备用 USB-C 而非私有接口；附赠转接头

### ✅ 关键功能低功耗保障

安全类功能（跌倒检测/紧急呼叫）有独立低功耗保障路径

**示例**：紧急功能独立电源岛或超低功耗芯片

## 反模式（常见错误）

### ❌ 电量焦虑设计

高频唤醒、后台常驻悄悄耗电

**排斥后果**：用户为省电而卸载——续航是最真实的用户痛点之一（Rahmati & Zhong 2009 人-电池交互研究）

### ❌ 私有充电生态

专用充电器/私有协议

**排斥后果**：充电器丢失即设备瘫痪——通用标准是电源包容的底线

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 电量预测、分级省电、通用充电 |
| 工业设计 | 关键功能备用电源、换电设计 |
| 建筑设计 | 应急照明双回路、充电位覆盖 |
| 服装设计 | 智能纺织品低功耗设计 |

---
*指南卡片：续航与电源指南 ｜ v1.0 ｜ 状态：draft*
