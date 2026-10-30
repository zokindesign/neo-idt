---
id: G-WHY-F-002
factor_id: WHY-F-002
name: "包容性市场定位指南"
name_en: Inclusive Market Positioning Guide
patterns:
  - name: "能力显性化"
    description: "无障碍/适老能力在价值主张中显式呈现（认证资质、实测数据），不做『沉默的好设计』"
    domain: universal
    example: "产品页直接展示『通过 WCAG 2.2 AA 验证 + 适老认证』"
    refs: ["STD-W3C-WCAG22:1"]
  - name: "关联人群扩展"
    description: "目标人群定义纳入『关联人群』——残障人士的家人、老龄化社会的主流用户（对照 ROD 2024：63% 人口与残障群体关联）"
    domain: universal
    example: "适老产品同时定位『给父母买的子女』"
  - name: "采购资质预置"
    description: "政府采购/企业采购的合规门槛（EN 301 549/无障碍声明）提前内置为产品能力"
    domain: digital
    example: "面向政企市场预做 EN 301 549 合规报告"
    refs: ["STD-EN-301549:9"]
anti_patterns:
  - name: "合规最低价"
    description: "按法定最低线做包容性并视为成本上限"
    consequence: "最低合规无差异化价值——采购方看的是『谁超出基线』；达标是入场券不是卖点"
  - name: "过度迎合极端"
    description: "为最严苛标准牺牲主流体验"
    consequence: "包容性不是零和——为 1% 做 100% 牺牲 99% 的方案两头都不讨好；分层满足是正解"
cases:
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
cross_domain_mapping:
  digital:
    summary: "无障碍声明、AA 验证、政企合规包"
  industrial:
    summary: "人体工学溢价、政府采购标准"
  architecture:
    summary: "超基线无障碍作为楼盘卖点"
  fashion:
    summary: "适老适障系列、无性别线"
status: draft
version: '1.0'
---

# 包容性市场定位指南 (Inclusive Market Positioning Guide)

> 关联因素：[[WHY-F-002-market-positioning|WHY-F-002 市场定位]] ｜ 指南 ID：`G-WHY-F-002`

## 设计模式（正模式）

### ✅ 能力显性化

无障碍/适老能力在价值主张中显式呈现（认证资质、实测数据），不做『沉默的好设计』

**示例**：产品页直接展示『通过 WCAG 2.2 AA 验证 + 适老认证』

**标准依据**：`STD-W3C-WCAG22:1`

### ✅ 关联人群扩展

目标人群定义纳入『关联人群』——残障人士的家人、老龄化社会的主流用户（对照 ROD 2024：63% 人口与残障群体关联）

**示例**：适老产品同时定位『给父母买的子女』

### ✅ 采购资质预置

政府采购/企业采购的合规门槛（EN 301 549/无障碍声明）提前内置为产品能力

**示例**：面向政企市场预做 EN 301 549 合规报告

**标准依据**：`STD-EN-301549:9`

## 反模式（常见错误）

### ❌ 合规最低价

按法定最低线做包容性并视为成本上限

**排斥后果**：最低合规无差异化价值——采购方看的是『谁超出基线』；达标是入场券不是卖点

### ❌ 过度迎合极端

为最严苛标准牺牲主流体验

**排斥后果**：包容性不是零和——为 1% 做 100% 牺牲 99% 的方案两头都不讨好；分层满足是正解

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 无障碍声明、AA 验证、政企合规包 |
| 工业设计 | 人体工学溢价、政府采购标准 |
| 建筑设计 | 超基线无障碍作为楼盘卖点 |
| 服装设计 | 适老适障系列、无性别线 |

---
*指南卡片：包容性市场定位指南 ｜ v1.0 ｜ 状态：draft*
