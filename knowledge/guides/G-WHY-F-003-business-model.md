---
id: G-WHY-F-003
factor_id: WHY-F-003
name: "商业模式包容指南"
name_en: Inclusive Business Model Guide
patterns:
  - name: "免费核心层"
    description: "核心功能永久免费层 + 增值付费；付费墙不设在基本可及性上（对应 M-WHERE-F-005-01 与本卡联动）"
    domain: digital
    example: "笔记应用：基础记录免费，协作与 AI 为付费层"
  - name: "变现不伤体验"
    description: "广告/盈利设计不得侵入核心任务流：不遮挡操作区、不伪装系统提示、跳过路径诚实可见"
    domain: digital
    example: "激励视频广告可选看，弹窗广告不出现"
  - name: "支付能力分层"
    description: "支付方式覆盖低支付能力群体：月付/学生价/区域定价/以任务换权益（对应 ROD 2024 定价分层实践）"
    domain: service
    example: "发展中国家区域定价 + 学生半价"
anti_patterns:
  - name: "付费墙围困"
    description: "核心功能逐步挪进付费层倒逼订阅"
    consequence: "『 boiling frog』式收费摧毁信任；免费层的价值承诺要守得住"
  - name: "广告寄生"
    description: "广告遮挡、诱导点击、伪装关闭按钮"
    consequence: "Mathur et al. 2019 暗黑模式分类学中全部条目——短期转化上升，长期品牌反噬；且与 WCAG 多条款冲突"
cases:
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
cross_domain_mapping:
  digital:
    summary: "免费核心层、变现边界、支付分层"
  industrial:
    summary: "耗材定价透明、以租代买"
  architecture:
    summary: "混合业态（公益+商业空间）"
  fashion:
    summary: "基础款平价、配件增值"
status: draft
version: '1.0'
---

# 商业模式包容指南 (Inclusive Business Model Guide)

> 关联因素：[[WHY-F-003-business-model|WHY-F-003 商业模式]] ｜ 指南 ID：`G-WHY-F-003`

## 设计模式（正模式）

### ✅ 免费核心层

核心功能永久免费层 + 增值付费；付费墙不设在基本可及性上（对应 M-WHERE-F-005-01 与本卡联动）

**示例**：笔记应用：基础记录免费，协作与 AI 为付费层

### ✅ 变现不伤体验

广告/盈利设计不得侵入核心任务流：不遮挡操作区、不伪装系统提示、跳过路径诚实可见

**示例**：激励视频广告可选看，弹窗广告不出现

### ✅ 支付能力分层

支付方式覆盖低支付能力群体：月付/学生价/区域定价/以任务换权益（对应 ROD 2024 定价分层实践）

**示例**：发展中国家区域定价 + 学生半价

## 反模式（常见错误）

### ❌ 付费墙围困

核心功能逐步挪进付费层倒逼订阅

**排斥后果**：『 boiling frog』式收费摧毁信任；免费层的价值承诺要守得住

### ❌ 广告寄生

广告遮挡、诱导点击、伪装关闭按钮

**排斥后果**：Mathur et al. 2019 暗黑模式分类学中全部条目——短期转化上升，长期品牌反噬；且与 WCAG 多条款冲突

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 免费核心层、变现边界、支付分层 |
| 工业设计 | 耗材定价透明、以租代买 |
| 建筑设计 | 混合业态（公益+商业空间） |
| 服装设计 | 基础款平价、配件增值 |

---
*指南卡片：商业模式包容指南 ｜ v1.0 ｜ 状态：draft*
