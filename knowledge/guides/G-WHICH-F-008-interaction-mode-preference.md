---
id: G-WHICH-F-008
factor_id: WHICH-F-008
name: "交互模式并存指南"
name_en: Interaction Mode Coexistence Guide
patterns:
  - name: "核心任务双模式"
    description: "核心任务 ≥2 交互模式可用（触控+键盘/语音），无『唯一正确』的用法"
    domain: digital
    example: "列表操作：触控长按 与 右键菜单 与 快捷键三通"
    refs: ["STD-ISO-9241-110:5.5.4"]
  - name: "默认模式自选"
    description: "默认交互模式用户可设置（触屏优先/键鼠优先/语音优先），设备能力不决定用户偏好"
    domain: digital
    example: "平板用户仍可外接键盘全键盘操作"
  - name: "切换零成本"
    description: "模式切换 ≤1 步且不丢状态；切换入口恒定"
    domain: digital
    example: "语音与触控随时切换，对话上下文保留"
anti_patterns:
  - name: "设备即命运"
    description: "触屏设备就只做触屏交互"
    consequence: "外设用户、无障碍用户、偏好用户被设备形态绑架——设备是能力不是性格"
  - name: "模式互斥清洗"
    description: "新版本砍掉旧交互模式『简化体验』"
    consequence: "老用户的肌肉记忆一夜作废——模式的淘汰要比用户的学习慢"
cases: []
cross_domain_mapping:
  digital:
    summary: "触控/键鼠/语音并存、偏好自选"
  industrial:
    summary: "手动/自动/远程多操控方式"
  architecture:
    summary: "App/语音/物理开关多路控制"
  fashion:
    summary: "多种穿法与调节方式并存"
status: draft
version: '1.0'
---

# 交互模式并存指南 (Interaction Mode Coexistence Guide)

> 关联因素：[[WHICH-F-008-interaction-mode-preference|WHICH-F-008 交互模式偏好]] ｜ 指南 ID：`G-WHICH-F-008`

## 设计模式（正模式）

### ✅ 核心任务双模式

核心任务 ≥2 交互模式可用（触控+键盘/语音），无『唯一正确』的用法

**示例**：列表操作：触控长按 与 右键菜单 与 快捷键三通

**标准依据**：`STD-ISO-9241-110:5.5.4`

### ✅ 默认模式自选

默认交互模式用户可设置（触屏优先/键鼠优先/语音优先），设备能力不决定用户偏好

**示例**：平板用户仍可外接键盘全键盘操作

### ✅ 切换零成本

模式切换 ≤1 步且不丢状态；切换入口恒定

**示例**：语音与触控随时切换，对话上下文保留

## 反模式（常见错误）

### ❌ 设备即命运

触屏设备就只做触屏交互

**排斥后果**：外设用户、无障碍用户、偏好用户被设备形态绑架——设备是能力不是性格

### ❌ 模式互斥清洗

新版本砍掉旧交互模式『简化体验』

**排斥后果**：老用户的肌肉记忆一夜作废——模式的淘汰要比用户的学习慢

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 触控/键鼠/语音并存、偏好自选 |
| 工业设计 | 手动/自动/远程多操控方式 |
| 建筑设计 | App/语音/物理开关多路控制 |
| 服装设计 | 多种穿法与调节方式并存 |

---
*指南卡片：交互模式并存指南 ｜ v1.0 ｜ 状态：draft*
