---
id: G-WHICH-F-003
factor_id: WHICH-F-003
name: "控制感设计指南"
name_en: Sense of Control Design Guide
patterns:
  - name: "自动化分档可调"
    description: "自动化等级用户可选（全自动/半自动/手动），且随时可降档接管"
    domain: universal
    example: "空调：自动模式 + 手动温度/风量细节调节"
    refs: ["STD-ISO-9241-110:5.5"]
  - name: "覆盖与撤销双权"
    description: "系统决策可覆盖、可撤销——『最终说了算的永远是人』"
    domain: digital
    example: "自动归类邮件可一键撤回并重设规则"
  - name: "状态透明"
    description: "系统当前在做什么、为什么这么做、接下来会怎样——透明是控制感的前提"
    domain: universal
    example: "『已自动调整亮度（检测到强光）——点此撤销』"
  - name: "帮助一致性"
    description: "帮助入口位置固定、结构统一、随叫随到且不打断主流程"
    domain: digital
    example: "右上角常驻帮助图标 + 行内提示双轨"
    refs: ["STD-W3C-WCAG22:3.2.6"]
anti_patterns:
  - name: "黑箱自动化"
    description: "系统做了决定但不告知不解释"
    consequence: "用户感到失控与不被尊重——黑箱是信任黑洞（对应 Parasuraman 2000 十级模型中透明度要素）"
  - name: "自动化绑架"
    description: "不提供手动接管路径"
    consequence: "自动化失灵时用户束手无策；『为你好』的强制是最差的强制"
cases: []
cross_domain_mapping:
  digital:
    summary: "自动建议可拒、透明度、撤销机制"
  industrial:
    summary: "手动 override、半自动分档"
  architecture:
    summary: "自动调节 + 手动面板并存"
  fashion:
    summary: "可调节部件 vs 一键穿戴可选"
status: draft
version: '1.0'
---

# 控制感设计指南 (Sense of Control Design Guide)

> 关联因素：[[WHICH-F-003-control-preference|WHICH-F-003 控制感偏好]] ｜ 指南 ID：`G-WHICH-F-003`

## 设计模式（正模式）

### ✅ 自动化分档可调

自动化等级用户可选（全自动/半自动/手动），且随时可降档接管

**示例**：空调：自动模式 + 手动温度/风量细节调节

**标准依据**：`STD-ISO-9241-110:5.5`

### ✅ 覆盖与撤销双权

系统决策可覆盖、可撤销——『最终说了算的永远是人』

**示例**：自动归类邮件可一键撤回并重设规则

### ✅ 状态透明

系统当前在做什么、为什么这么做、接下来会怎样——透明是控制感的前提

**示例**：『已自动调整亮度（检测到强光）——点此撤销』

### ✅ 帮助一致性

帮助入口位置固定、结构统一、随叫随到且不打断主流程

**示例**：右上角常驻帮助图标 + 行内提示双轨

**标准依据**：`STD-W3C-WCAG22:3.2.6`

## 反模式（常见错误）

### ❌ 黑箱自动化

系统做了决定但不告知不解释

**排斥后果**：用户感到失控与不被尊重——黑箱是信任黑洞（对应 Parasuraman 2000 十级模型中透明度要素）

### ❌ 自动化绑架

不提供手动接管路径

**排斥后果**：自动化失灵时用户束手无策；『为你好』的强制是最差的强制

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 自动建议可拒、透明度、撤销机制 |
| 工业设计 | 手动 override、半自动分档 |
| 建筑设计 | 自动调节 + 手动面板并存 |
| 服装设计 | 可调节部件 vs 一键穿戴可选 |

---
*指南卡片：控制感设计指南 ｜ v1.0 ｜ 状态：draft*
