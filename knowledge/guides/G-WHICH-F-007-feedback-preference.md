---
id: G-WHICH-F-007
factor_id: WHICH-F-007
name: "反馈通道控制指南"
name_en: Feedback Channel Control Guide
patterns:
  - name: "通道独立可调"
    description: "视觉/声音/触觉反馈强度独立调节或关闭；用户的感官边界由用户划定"
    domain: universal
    example: "提示音量、振动强度、动画开关三档独立"
  - name: "高风险多通道"
    description: "危险/紧急状态默认多通道强反馈（声+光+震动），但允许按能力定制而非硬关"
    domain: industrial
    example: "设备过热：红灯 + 蜂鸣 + 面板警告三通道并发"
  - name: "状态消息可达"
    description: "操作结果反馈以可编程访问的状态消息呈现（aria-live 等），屏幕阅读器同步获知"
    domain: digital
    example: "保存成功 toast 带 aria-live=polite"
    refs: ["STD-W3C-WCAG22:4.1.3"]
  - name: "勿扰保留紧急"
    description: "静音/勿扰模式下紧急类反馈白名单穿透，白名单由用户审定"
    domain: digital
    example: "勿扰中安全警报仍震动+横幅"
anti_patterns:
  - name: "反馈绑架"
    description: "不给关闭选项『为了确保你看到』"
    consequence: "强迫反馈是感官骚扰——用户为躲噪音直接关掉整个产品的通知"
  - name: "单通道独裁"
    description: "所有反馈只有一种模态"
    consequence: "该通道能力弱的用户反馈全盲——多通道冗余是信息可达的基本保险"
cases: []
cross_domain_mapping:
  digital:
    summary: "通道独立调节、aria-live 状态消息"
  industrial:
    summary: "声光触三通道、危险状态强化"
  architecture:
    summary: "声光双模警报、振动地板"
  fashion:
    summary: "触感反馈可调、声音装饰可拆"
status: draft
version: '1.0'
---

# 反馈通道控制指南 (Feedback Channel Control Guide)

> 关联因素：[[WHICH-F-007-feedback-preference|WHICH-F-007 反馈偏好]] ｜ 指南 ID：`G-WHICH-F-007`

## 设计模式（正模式）

### ✅ 通道独立可调

视觉/声音/触觉反馈强度独立调节或关闭；用户的感官边界由用户划定

**示例**：提示音量、振动强度、动画开关三档独立

### ✅ 高风险多通道

危险/紧急状态默认多通道强反馈（声+光+震动），但允许按能力定制而非硬关

**示例**：设备过热：红灯 + 蜂鸣 + 面板警告三通道并发

### ✅ 状态消息可达

操作结果反馈以可编程访问的状态消息呈现（aria-live 等），屏幕阅读器同步获知

**示例**：保存成功 toast 带 aria-live=polite

**标准依据**：`STD-W3C-WCAG22:4.1.3`

### ✅ 勿扰保留紧急

静音/勿扰模式下紧急类反馈白名单穿透，白名单由用户审定

**示例**：勿扰中安全警报仍震动+横幅

## 反模式（常见错误）

### ❌ 反馈绑架

不给关闭选项『为了确保你看到』

**排斥后果**：强迫反馈是感官骚扰——用户为躲噪音直接关掉整个产品的通知

### ❌ 单通道独裁

所有反馈只有一种模态

**排斥后果**：该通道能力弱的用户反馈全盲——多通道冗余是信息可达的基本保险

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 通道独立调节、aria-live 状态消息 |
| 工业设计 | 声光触三通道、危险状态强化 |
| 建筑设计 | 声光双模警报、振动地板 |
| 服装设计 | 触感反馈可调、声音装饰可拆 |

---
*指南卡片：反馈通道控制指南 ｜ v1.0 ｜ 状态：draft*
