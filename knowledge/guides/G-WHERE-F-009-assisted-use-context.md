---
id: G-WHERE-F-009
factor_id: WHERE-F-009
name: "受辅助使用情境指南"
name_en: Assisted-Use Context Guide
patterns:
  - name: "分级代理权限"
    description: "代理权按最小必要分级（只读/协助/完全代管/紧急接管），用户随时可撤销——辅助不等于交出主权"
    domain: digital
    example: "子女协助父母理财：仅『查看』权限，动账需本人确认"
  - name: "双界面状态同步"
    description: "主用户界面与辅助者界面并行存在且状态同步；辅助者仪表盘独立于主账号"
    domain: digital
    example: "药盒 App：老人端大字提醒，家属端看到是否已服药——无需共享密码"
  - name: "隐私边界可配"
    description: "辅助者可见范围由主用户配置：仅任务进度 / 完整内容 / 仅异常告警"
    domain: digital
    example: "糖尿病管理：血糖数值共享，聊天记录不共享"
  - name: "物理辅助适配"
    description: "实体产品的辅助操作路径：磁吸扣/魔术贴替代精细扣件、大开口设计、陪护空间预留"
    domain: fashion
    example: "术后病号服侧开磁吸设计，患者自穿与护士协助都容易"
anti_patterns:
  - name: "共享密码即代理"
    description: "辅助者与被辅助者共用一个账号密码"
    consequence: "零权限边界：全部隐私暴露 + 操作不可区分责任不清；代理必须是系统级功能不是密码共享"
  - name: "主导权剥夺"
    description: "默认辅助者全权接管"
    consequence: "被辅助者的自主权与尊严被剥夺——辅助的目标是扩展能力而非替代决策（ICF e3 支持性环境语义）"
  - name: "陪护空间缺位"
    description: "设施设计只考虑用户本人不考虑辅助者"
    consequence: "轮椅使用者来了却没位置给陪同家属；陪护位是受辅助情境的基础设施"
cases:
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
cross_domain_mapping:
  digital:
    summary: "分级代理权限、辅助者仪表盘、操作审计"
  industrial:
    summary: "专业/家庭双模式、数字授权并存"
  architecture:
    summary: "陪护床位、陪护卫生间、候诊陪护区"
  fashion:
    summary: "磁吸扣/魔术贴、大开口、辅助穿衣标识"
status: draft
version: '1.0'
---

# 受辅助使用情境指南 (Assisted-Use Context Guide)

> 关联因素：[[WHERE-F-009-assisted-use-context|WHERE-F-009 受辅助使用情境]] ｜ 指南 ID：`G-WHERE-F-009`

## 设计模式（正模式）

### ✅ 分级代理权限

代理权按最小必要分级（只读/协助/完全代管/紧急接管），用户随时可撤销——辅助不等于交出主权

**示例**：子女协助父母理财：仅『查看』权限，动账需本人确认

### ✅ 双界面状态同步

主用户界面与辅助者界面并行存在且状态同步；辅助者仪表盘独立于主账号

**示例**：药盒 App：老人端大字提醒，家属端看到是否已服药——无需共享密码

### ✅ 隐私边界可配

辅助者可见范围由主用户配置：仅任务进度 / 完整内容 / 仅异常告警

**示例**：糖尿病管理：血糖数值共享，聊天记录不共享

### ✅ 物理辅助适配

实体产品的辅助操作路径：磁吸扣/魔术贴替代精细扣件、大开口设计、陪护空间预留

**示例**：术后病号服侧开磁吸设计，患者自穿与护士协助都容易

## 反模式（常见错误）

### ❌ 共享密码即代理

辅助者与被辅助者共用一个账号密码

**排斥后果**：零权限边界：全部隐私暴露 + 操作不可区分责任不清；代理必须是系统级功能不是密码共享

### ❌ 主导权剥夺

默认辅助者全权接管

**排斥后果**：被辅助者的自主权与尊严被剥夺——辅助的目标是扩展能力而非替代决策（ICF e3 支持性环境语义）

### ❌ 陪护空间缺位

设施设计只考虑用户本人不考虑辅助者

**排斥后果**：轮椅使用者来了却没位置给陪同家属；陪护位是受辅助情境的基础设施

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 分级代理权限、辅助者仪表盘、操作审计 |
| 工业设计 | 专业/家庭双模式、数字授权并存 |
| 建筑设计 | 陪护床位、陪护卫生间、候诊陪护区 |
| 服装设计 | 磁吸扣/魔术贴、大开口、辅助穿衣标识 |

---
*指南卡片：受辅助使用情境指南 ｜ v1.0 ｜ 状态：draft*
