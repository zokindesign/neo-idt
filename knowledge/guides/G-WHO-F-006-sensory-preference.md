---
id: G-WHO-F-006
factor_id: WHO-F-006
name: "感官偏好适配指南"
name_en: Sensory Preference Adaptation Guide
patterns:
  - name: "全通道强度可调"
    description: "各感官通道（亮度/音量/振动/动效）强度独立可调，默认值取中性档，不假设『标准用户』偏好"
    domain: universal
    example: "设置面板：亮度滑杆 + 音量 + 振动 + 动效开关四项独立"
  - name: "无刺激模式"
    description: "提供一键低感官模式（暗色+静音+减动效+低饱和），HSP（高敏感人群）与感官过载场景（偏头痛/自闭谱系）受益"
    domain: digital
    example: "prefers-reduced-motion 与 prefers-contrast 环境偏好全响应"
    refs: ["STD-W3C-WCAG22:1.4.4"]
  - name: "偏好情境记忆"
    description: "感官配置可按情境保存多套（日间办公/夜间阅读/驾驶模式），切换 ≤1 步"
    domain: digital
    example: "一键切换『夜间模式』配置组"
anti_patterns:
  - name: "中性设计神话"
    description: "假设存在一种『中性』感官设计适合所有人"
    consequence: "对刺激敏感的群体过载（放弃使用），对刺激需求高的群体无聊（忽略信息）——两极同时被排除"
  - name: "静态偏好假设"
    description: "把感官偏好当作固定个人属性，忽略随情境/疲劳/健康波动"
    consequence: "夜间强白光界面、疲劳时的高频动效——用户最脆弱的时刻恰是最强刺激的时刻"
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
    summary: "可调主题/声音/振动/动效开关"
  industrial:
    summary: "手柄材质选项、操作声音设计、重量平衡"
  architecture:
    summary: "材料触感、声环境控制、自然光组合"
  fashion:
    summary: "面料手感、标签与接缝触觉舒适度"
status: draft
version: '1.0'
---

# 感官偏好适配指南 (Sensory Preference Adaptation Guide)

> 关联因素：[[WHO-F-006-sensory-preference|WHO-F-006 感官偏好]] ｜ 指南 ID：`G-WHO-F-006`

## 设计模式（正模式）

### ✅ 全通道强度可调

各感官通道（亮度/音量/振动/动效）强度独立可调，默认值取中性档，不假设『标准用户』偏好

**示例**：设置面板：亮度滑杆 + 音量 + 振动 + 动效开关四项独立

### ✅ 无刺激模式

提供一键低感官模式（暗色+静音+减动效+低饱和），HSP（高敏感人群）与感官过载场景（偏头痛/自闭谱系）受益

**示例**：prefers-reduced-motion 与 prefers-contrast 环境偏好全响应

**标准依据**：`STD-W3C-WCAG22:1.4.4`

### ✅ 偏好情境记忆

感官配置可按情境保存多套（日间办公/夜间阅读/驾驶模式），切换 ≤1 步

**示例**：一键切换『夜间模式』配置组

## 反模式（常见错误）

### ❌ 中性设计神话

假设存在一种『中性』感官设计适合所有人

**排斥后果**：对刺激敏感的群体过载（放弃使用），对刺激需求高的群体无聊（忽略信息）——两极同时被排除

### ❌ 静态偏好假设

把感官偏好当作固定个人属性，忽略随情境/疲劳/健康波动

**排斥后果**：夜间强白光界面、疲劳时的高频动效——用户最脆弱的时刻恰是最强刺激的时刻

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '可调主题/声音/振动/动效开关'} |
| 工业设计 | {'summary': '手柄材质选项、操作声音设计、重量平衡'} |
| 建筑设计 | {'summary': '材料触感、声环境控制、自然光组合'} |
| 服装设计 | {'summary': '面料手感、标签与接缝触觉舒适度'} |

---
*指南卡片：感官偏好适配指南 ｜ v1.0 ｜ 状态：draft*
