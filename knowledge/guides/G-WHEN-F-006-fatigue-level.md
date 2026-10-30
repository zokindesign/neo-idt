---
id: G-WHEN-F-006
factor_id: WHEN-F-006
name: "疲劳友好设计指南"
name_en: Fatigue-Friendly Design Guide
patterns:
  - name: "疲劳信号响应"
    description: "监测行为疲劳信号（连续错误、操作放缓、会话超长）并触发响应：休息提示或界面简化"
    domain: digital
    example: "连续 3 次输错密码后提示『要不要休息一下』而非锁定"
    refs: ["STD-W3C-WCAG22:2.2.6"]
  - name: "断点保存底线"
    description: "长会话全程自动保存；疲劳中断不丢数据——保存是产品的责任不是用户的记忆负担"
    domain: universal
    example: "文档每 30 秒静默保存，退出即恢复"
  - name: "疲劳界面降载"
    description: "检测到疲劳状态时信息量缩减、关键元素放大、操作容差放宽"
    domain: digital
    example: "长时间会话后自动切换大按钮模式"
  - name: "微休息提醒"
    description: "长会话产品内置休息提醒（可关），提醒节奏可调而非说教"
    domain: digital
    example: "45 分钟后温和提示，用户可设不再提醒"
anti_patterns:
  - name: "无限连击设计"
    description: "用连续任务流+进度焦虑阻止用户停下"
    consequence: "疲劳积累下错误率飙升（尤其在工业/医疗场景即安全事故）；把用户留在屏幕前的设计不是敬业是伤害"
  - name: "惩罚休息"
    description: "中断/休息导致进度/奖励损失"
    consequence: "streak 机制把休息污名化——健康使用与商业指标的冲突中，用户健康不该是筹码"
cases:
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
cross_domain_mapping:
  digital:
    summary: "疲劳检测、自动保存、休息提醒"
  industrial:
    summary: "工间休息制度、疲劳预警系统"
  architecture:
    summary: "休息区设置、防疲劳照明"
  fashion:
    summary: "轻量化设计、减少穿戴负担"
status: draft
version: '1.0'
---

# 疲劳友好设计指南 (Fatigue-Friendly Design Guide)

> 关联因素：[[WHEN-F-006-fatigue-level|WHEN-F-006 疲劳度]] ｜ 指南 ID：`G-WHEN-F-006`

## 设计模式（正模式）

### ✅ 疲劳信号响应

监测行为疲劳信号（连续错误、操作放缓、会话超长）并触发响应：休息提示或界面简化

**示例**：连续 3 次输错密码后提示『要不要休息一下』而非锁定

**标准依据**：`STD-W3C-WCAG22:2.2.6`

### ✅ 断点保存底线

长会话全程自动保存；疲劳中断不丢数据——保存是产品的责任不是用户的记忆负担

**示例**：文档每 30 秒静默保存，退出即恢复

### ✅ 疲劳界面降载

检测到疲劳状态时信息量缩减、关键元素放大、操作容差放宽

**示例**：长时间会话后自动切换大按钮模式

### ✅ 微休息提醒

长会话产品内置休息提醒（可关），提醒节奏可调而非说教

**示例**：45 分钟后温和提示，用户可设不再提醒

## 反模式（常见错误）

### ❌ 无限连击设计

用连续任务流+进度焦虑阻止用户停下

**排斥后果**：疲劳积累下错误率飙升（尤其在工业/医疗场景即安全事故）；把用户留在屏幕前的设计不是敬业是伤害

### ❌ 惩罚休息

中断/休息导致进度/奖励损失

**排斥后果**：streak 机制把休息污名化——健康使用与商业指标的冲突中，用户健康不该是筹码

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 疲劳检测、自动保存、休息提醒 |
| 工业设计 | 工间休息制度、疲劳预警系统 |
| 建筑设计 | 休息区设置、防疲劳照明 |
| 服装设计 | 轻量化设计、减少穿戴负担 |

---
*指南卡片：疲劳友好设计指南 ｜ v1.0 ｜ 状态：draft*
