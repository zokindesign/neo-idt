---
id: G-WHICH-F-001
factor_id: WHICH-F-001
name: "信息密度分级指南"
name_en: Information Density Tiering Guide
patterns:
  - name: "密度三档切换"
    description: "提供简明/标准/详细三档密度（或密度滑杆），切换即时生效且偏好记忆"
    domain: digital
    example: "数据表格默认 10 行/屏，可切紧凑 25 行/屏"
    refs: ["STD-W3C-WCAG22:1.4.4"]
  - name: "渐进披露结构"
    description: "信息分层：概要常显 → 详情按需展开（折叠/悬浮/下钻），而非一屏塞满"
    domain: universal
    example: "商品页：首屏核心参数，详细参数折叠"
  - name: "自定义仪表板"
    description: "允许用户控制面板内容与布局（增删卡片/调序）；默认布局取中庸密度"
    domain: digital
    example: "工作台首屏卡片可增删拖排"
    refs: ["STD-ISO-9241-110:5.5.4"]
anti_patterns:
  - name: "设计师品味强加"
    description: "按团队审美定死唯一密度"
    consequence: "低密度偏好者嫌吵、高密度偏好者嫌慢——密度是偏好不是对错，给选择而非给答案"
  - name: "折叠迷藏"
    description: "关键信息也折叠隐藏"
    consequence: "『藏太深等于不存在』——折叠只用于低频详情，核心路径信息必须直达"
cases:
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
  - id: CASE-001
    title: "Apple Assistive Access：认知无障碍的减法设计"
    domain: digital
    summary: "iOS 17 引入 Assistive Access：为认知障碍用户提供大按钮、少选项、单任务的极简界面，主屏仅显示精选 App，消息可回表情或自拍视频。…"
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
cross_domain_mapping:
  digital:
    summary: "密度三档、渐进披露、自定义面板"
  industrial:
    summary: "关键控制突出 + 高级参数分层"
  architecture:
    summary: "开放空间与功能复合分区并存"
  fashion:
    summary: "简洁款与多层次搭配系列并行"
status: draft
version: '1.0'
---

# 信息密度分级指南 (Information Density Tiering Guide)

> 关联因素：[[WHICH-F-001-information-density-preference|WHICH-F-001 信息密度偏好]] ｜ 指南 ID：`G-WHICH-F-001`

## 设计模式（正模式）

### ✅ 密度三档切换

提供简明/标准/详细三档密度（或密度滑杆），切换即时生效且偏好记忆

**示例**：数据表格默认 10 行/屏，可切紧凑 25 行/屏

**标准依据**：`STD-W3C-WCAG22:1.4.4`

### ✅ 渐进披露结构

信息分层：概要常显 → 详情按需展开（折叠/悬浮/下钻），而非一屏塞满

**示例**：商品页：首屏核心参数，详细参数折叠

### ✅ 自定义仪表板

允许用户控制面板内容与布局（增删卡片/调序）；默认布局取中庸密度

**示例**：工作台首屏卡片可增删拖排

**标准依据**：`STD-ISO-9241-110:5.5.4`

## 反模式（常见错误）

### ❌ 设计师品味强加

按团队审美定死唯一密度

**排斥后果**：低密度偏好者嫌吵、高密度偏好者嫌慢——密度是偏好不是对错，给选择而非给答案

### ❌ 折叠迷藏

关键信息也折叠隐藏

**排斥后果**：『藏太深等于不存在』——折叠只用于低频详情，核心路径信息必须直达

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 密度三档、渐进披露、自定义面板 |
| 工业设计 | 关键控制突出 + 高级参数分层 |
| 建筑设计 | 开放空间与功能复合分区并存 |
| 服装设计 | 简洁款与多层次搭配系列并行 |

---
*指南卡片：信息密度分级指南 ｜ v1.0 ｜ 状态：draft*
