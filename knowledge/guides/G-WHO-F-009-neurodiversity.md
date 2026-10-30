---
id: G-WHO-F-009
factor_id: WHO-F-009
name: "神经多样性包容指南"
name_en: Neurodiversity Inclusion Guide
patterns:
  - name: "感官调节面板"
    description: "提供集中式感官调节入口：动效开关、亮度上限、声音减量、界面密度降低——一处开启全局生效"
    domain: digital
    example: "『减少感官刺激』总开关同时关闭动画、降低对比度刺激、简化界面"
    refs: ["STD-W3C-WCAG22:2.4.4"]
  - name: "可预期交互"
    description: "杜绝突然变化：无预警弹窗、自动播放音视频、页面跳转；变化发生前有预告"
    domain: universal
    example: "倒计时结束前 3 秒出现视觉预告再执行跳转"
  - name: "节奏完全自控"
    description: "所有限时内容可暂停/重播/跳过；不设倒计时压力"
    domain: universal
    example: "教程与测验均无时间限制"
  - name: "多通道信息冗余"
    description: "关键信息以文本+图标+语音多通道冗余呈现，任一处理通道弱即可用其他通道"
    domain: digital
    example: "错误提示：文字说明 + 图标 + 可朗读"
    refs: ["STD-W3C-WCAG22:3.3.7"]
anti_patterns:
  - name: "突发刺激"
    description: "无预警的声音/闪烁/弹窗/自动播放"
    consequence: "自闭谱系与感觉敏感用户的感官过载——直接关闭产品；对所有人都是干扰源"
  - name: "倒计时压迫"
    description: "限时任务营造紧迫感"
    consequence: "处理速度慢的用户（阅读障碍/焦虑）在压力下表现更差——测的是焦虑而非能力"
  - name: "一屏多任务"
    description: "同屏堆砌多个注意力争夺区（弹窗+滚动横幅+闪烁角标）"
    consequence: "注意力分配困难的用户过载逃离；信息获取率全面下降"
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
    summary: "感官调节总开关、无预警弹窗禁令、无限时内容"
  industrial:
    summary: "低噪音工作区设计、操作步骤单一焦点"
  architecture:
    summary: "安静房间/低刺激空间预留、清晰导向标识"
  fashion:
    summary: "无标签缝制工艺、柔软无刺激面料"
status: draft
version: '1.0'
---

# 神经多样性包容指南 (Neurodiversity Inclusion Guide)

> 关联因素：[[WHO-F-009-neurodiversity|WHO-F-009 神经多样性]] ｜ 指南 ID：`G-WHO-F-009`

## 设计模式（正模式）

### ✅ 感官调节面板

提供集中式感官调节入口：动效开关、亮度上限、声音减量、界面密度降低——一处开启全局生效

**示例**：『减少感官刺激』总开关同时关闭动画、降低对比度刺激、简化界面

**标准依据**：`STD-W3C-WCAG22:2.4.4`

### ✅ 可预期交互

杜绝突然变化：无预警弹窗、自动播放音视频、页面跳转；变化发生前有预告

**示例**：倒计时结束前 3 秒出现视觉预告再执行跳转

### ✅ 节奏完全自控

所有限时内容可暂停/重播/跳过；不设倒计时压力

**示例**：教程与测验均无时间限制

### ✅ 多通道信息冗余

关键信息以文本+图标+语音多通道冗余呈现，任一处理通道弱即可用其他通道

**示例**：错误提示：文字说明 + 图标 + 可朗读

**标准依据**：`STD-W3C-WCAG22:3.3.7`

## 反模式（常见错误）

### ❌ 突发刺激

无预警的声音/闪烁/弹窗/自动播放

**排斥后果**：自闭谱系与感觉敏感用户的感官过载——直接关闭产品；对所有人都是干扰源

### ❌ 倒计时压迫

限时任务营造紧迫感

**排斥后果**：处理速度慢的用户（阅读障碍/焦虑）在压力下表现更差——测的是焦虑而非能力

### ❌ 一屏多任务

同屏堆砌多个注意力争夺区（弹窗+滚动横幅+闪烁角标）

**排斥后果**：注意力分配困难的用户过载逃离；信息获取率全面下降

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '感官调节总开关、无预警弹窗禁令、无限时内容'} |
| 工业设计 | {'summary': '低噪音工作区设计、操作步骤单一焦点'} |
| 建筑设计 | {'summary': '安静房间/低刺激空间预留、清晰导向标识'} |
| 服装设计 | {'summary': '无标签缝制工艺、柔软无刺激面料'} |

---
*指南卡片：神经多样性包容指南 ｜ v1.0 ｜ 状态：draft*
