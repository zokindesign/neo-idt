---
id: G-WHO-F-010
factor_id: WHO-F-010
name: "认知友好设计指南"
name_en: Cognitive Accessibility Guide
patterns:
  - name: "信息分块"
    description: "长内容切分为 3–5 项一组的语义块，块间有视觉分隔；一屏一个主任务"
    domain: digital
    example: "表单按主题分组分步呈现（基本信息→偏好→确认），每步 ≤5 项"
    refs: ["STD-W3C-WCAG22:3.1.5"]
  - name: "熟悉模式优先"
    description: "交互沿用用户已熟悉的平台惯例与普遍范式，创新交互需有传统路径并行"
    domain: universal
    example: "新式导航保留汉堡菜单入口作为过渡"
  - name: "错误信息三要素"
    description: "错误提示包含：出了什么事（人话）+ 为什么 + 怎么修；禁止纯错误码或『操作失败』"
    domain: digital
    example: "『密码需 8 位以上，当前 6 位——请补充 2 位后再提交』"
    refs: ["STD-ISO-9241-110:5.6"]
  - name: "认知疲劳预算"
    description: "长流程显式标注进度与剩余步骤，支持中途保存退出；高频操作 ≤3 步直达"
    domain: digital
    example: "多步表单：顶部步骤条 + 自动草稿保存"
anti_patterns:
  - name: "文字依赖"
    description: "一切说明只靠文字传达"
    consequence: "阅读障碍与低文化程度用户被排除；图形+演示是认知负担最低的通道"
  - name: "层级迷宫"
    description: "功能埋在 >3 级菜单深处"
    consequence: "工作记忆有限的用户在深层导航中迷失——记住『在哪』本身就是认知税"
  - name: "认知税叠加"
    description: "多任务并行界面同时要求记忆多个状态"
    consequence: "压力/疲劳/多任务情境下所有用户的出错率上升——认知余量是所有人都在消耗的资源"
cases:
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
cross_domain_mapping:
  digital:
    summary: "信息分块、逐步引导、错误修复建议、撤销重做"
  industrial:
    summary: "控制界面简洁、操作步骤少、互锁防误操作"
  architecture:
    summary: "标识清晰、楼层编号逻辑、疏散路线直观"
  fashion:
    summary: "穿戴步骤简单、护理说明图形化"
status: draft
version: '1.0'
---

# 认知友好设计指南 (Cognitive Accessibility Guide)

> 关联因素：[[WHO-F-010-cognitive-traits|WHO-F-010 认知特征]] ｜ 指南 ID：`G-WHO-F-010`

## 设计模式（正模式）

### ✅ 信息分块

长内容切分为 3–5 项一组的语义块，块间有视觉分隔；一屏一个主任务

**示例**：表单按主题分组分步呈现（基本信息→偏好→确认），每步 ≤5 项

**标准依据**：`STD-W3C-WCAG22:3.1.5`

### ✅ 熟悉模式优先

交互沿用用户已熟悉的平台惯例与普遍范式，创新交互需有传统路径并行

**示例**：新式导航保留汉堡菜单入口作为过渡

### ✅ 错误信息三要素

错误提示包含：出了什么事（人话）+ 为什么 + 怎么修；禁止纯错误码或『操作失败』

**示例**：『密码需 8 位以上，当前 6 位——请补充 2 位后再提交』

**标准依据**：`STD-ISO-9241-110:5.6`

### ✅ 认知疲劳预算

长流程显式标注进度与剩余步骤，支持中途保存退出；高频操作 ≤3 步直达

**示例**：多步表单：顶部步骤条 + 自动草稿保存

## 反模式（常见错误）

### ❌ 文字依赖

一切说明只靠文字传达

**排斥后果**：阅读障碍与低文化程度用户被排除；图形+演示是认知负担最低的通道

### ❌ 层级迷宫

功能埋在 >3 级菜单深处

**排斥后果**：工作记忆有限的用户在深层导航中迷失——记住『在哪』本身就是认知税

### ❌ 认知税叠加

多任务并行界面同时要求记忆多个状态

**排斥后果**：压力/疲劳/多任务情境下所有用户的出错率上升——认知余量是所有人都在消耗的资源

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '信息分块、逐步引导、错误修复建议、撤销重做'} |
| 工业设计 | {'summary': '控制界面简洁、操作步骤少、互锁防误操作'} |
| 建筑设计 | {'summary': '标识清晰、楼层编号逻辑、疏散路线直观'} |
| 服装设计 | {'summary': '穿戴步骤简单、护理说明图形化'} |

---
*指南卡片：认知友好设计指南 ｜ v1.0 ｜ 状态：draft*
