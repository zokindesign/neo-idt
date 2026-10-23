---
id: G-WHO-F-003
factor_id: WHO-F-003
name: "健康状况包容指南"
name_en: Health Status Inclusion Guide
patterns:
  - name: "波动性设计"
    description: "健康状态按波动谱系处理（慢性病稳定期/发作期、疼痛日、疲劳日），核心功能在低能态下仍可用"
    domain: universal
    example: "疼痛日的界面提供『今天少做点』模式：只保留必做任务"
  - name: "安全敏感内容防护"
    description: "闪烁/高频视觉内容控制在安全阈值内（癫痫防护）；医疗提醒不与警告声混淆"
    domain: digital
    example: "动效遵守 prefers-reduced-motion 且无 >3 次/秒闪烁"
    refs: ["STD-W3C-WCAG22:2.3.1"]
  - name: "低操作力替代"
    description: "物理操作提供低力替代路径（推开替代旋钮、语音替代按键），操作力要求显式标注"
    domain: industrial
    example: "防滑低阻力把手 + 语音控制双路径"
anti_patterns:
  - name: "健康二分法"
    description: "把健康状况简化为『健康/残疾』二态"
    consequence: "波动性健康问题（慢性疲劳、眩晕发作）用户在『不严重到算残障』的灰区被完全忽略"
  - name: "共病盲区"
    description: "按单一病症优化，忽略多病共存的真实复杂性"
    consequence: "为单一病症精心设计的方案在共病组合下不可用（如视觉+手部关节同时受限）"
cases:
  - id: CASE-008
    title: "NAD v. Netflix：字幕诉讼推动 100% 覆盖"
    domain: service
    summary: "2011 年 NAD 起诉 Netflix Watch Instantly 无字幕违反 ADA。法院驳回 Netflix 的 CVAA 优先适用抗辩（2012-…"
  - id: CASE-008
    title: "NAD v. Netflix：字幕诉讼推动 100% 覆盖"
    domain: service
    summary: "2011 年 NAD 起诉 Netflix Watch Instantly 无字幕违反 ADA。法院驳回 Netflix 的 CVAA 优先适用抗辩（2012-…"
  - id: CASE-008
    title: "NAD v. Netflix：字幕诉讼推动 100% 覆盖"
    domain: service
    summary: "2011 年 NAD 起诉 Netflix Watch Instantly 无字幕违反 ADA。法院驳回 Netflix 的 CVAA 优先适用抗辩（2012-…"
cross_domain_mapping:
  digital:
    summary: "减认知负荷选项、语音控制、休息提醒、防癫痫闪烁控制"
  industrial:
    summary: "低操作力把手、防滑、易清洁表面、减振"
  architecture:
    summary: "无障碍卫生间、休息区、低 VOC 材料"
  fashion:
    summary: "无痒面料、魔术贴替代纽扣、减少压迫点"
status: draft
version: '1.0'
---

# 健康状况包容指南 (Health Status Inclusion Guide)

> 关联因素：[[WHO-F-003-health-status|WHO-F-003 健康状况]] ｜ 指南 ID：`G-WHO-F-003`

## 设计模式（正模式）

### ✅ 波动性设计

健康状态按波动谱系处理（慢性病稳定期/发作期、疼痛日、疲劳日），核心功能在低能态下仍可用

**示例**：疼痛日的界面提供『今天少做点』模式：只保留必做任务

### ✅ 安全敏感内容防护

闪烁/高频视觉内容控制在安全阈值内（癫痫防护）；医疗提醒不与警告声混淆

**示例**：动效遵守 prefers-reduced-motion 且无 >3 次/秒闪烁

**标准依据**：`STD-W3C-WCAG22:2.3.1`

### ✅ 低操作力替代

物理操作提供低力替代路径（推开替代旋钮、语音替代按键），操作力要求显式标注

**示例**：防滑低阻力把手 + 语音控制双路径

## 反模式（常见错误）

### ❌ 健康二分法

把健康状况简化为『健康/残疾』二态

**排斥后果**：波动性健康问题（慢性疲劳、眩晕发作）用户在『不严重到算残障』的灰区被完全忽略

### ❌ 共病盲区

按单一病症优化，忽略多病共存的真实复杂性

**排斥后果**：为单一病症精心设计的方案在共病组合下不可用（如视觉+手部关节同时受限）

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '减认知负荷选项、语音控制、休息提醒、防癫痫闪烁控制'} |
| 工业设计 | {'summary': '低操作力把手、防滑、易清洁表面、减振'} |
| 建筑设计 | {'summary': '无障碍卫生间、休息区、低 VOC 材料'} |
| 服装设计 | {'summary': '无痒面料、魔术贴替代纽扣、减少压迫点'} |

---
*指南卡片：健康状况包容指南 ｜ v1.0 ｜ 状态：draft*
