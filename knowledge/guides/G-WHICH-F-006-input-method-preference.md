---
id: G-WHICH-F-006
factor_id: WHICH-F-006
name: "输入方式冗余指南"
name_en: Input Modality Redundancy Guide
patterns:
  - name: "全键盘可达"
    description: "所有功能键盘可完成（Tab 序合理 + 快捷键）；鼠标/触屏不是唯一通道"
    domain: digital
    example: "全部操作有快捷键 + 可视焦点框"
    refs: ["STD-W3C-WCAG22:2.1.1"]
  - name: "非指针替代"
    description: "拖拽/悬停等指针交互有非指针等效（按钮/菜单）；复杂手势有简单替代"
    domain: digital
    example: "拖拽排序 → 上下移按钮并存"
    refs: ["STD-W3C-WCAG22:2.5.7"]
  - name: "输入优先级自设"
    description: "默认输入方式用户可选（如语音优先/键盘优先），设备切换时偏好跟随"
    domain: digital
    example: "外接键盘时自动恢复快捷键提示"
  - name: "情境输入推荐"
    description: "检测使用情境推荐输入方式（移动→语音、嘈杂→键盘），推荐不强制"
    domain: digital
    example: "检测到步行状态提示『试试语音输入』"
anti_patterns:
  - name: "鼠标唯一路径"
    description: "功能只能靠鼠标/触屏完成"
    consequence: "运动障碍、屏幕阅读器、效率用户同时被排除——键盘可达是数字包容的地基（WCAG 2.1.1 A 级）"
  - name: "手势暴政"
    description: "自创复杂手势替代按钮"
    consequence: "可发现性趋零：没人记得住隐藏手势；手势是加速器不能是独木桥"
cases: []
cross_domain_mapping:
  digital:
    summary: "键盘全可达、手势替代、偏好自设"
  industrial:
    summary: "开关/脚踏/头控等多输入设备支持"
  architecture:
    summary: "多高度入口与无触点通行"
  fashion:
    summary: "磁吸/魔术贴等低精细输入友好扣件"
status: draft
version: '1.0'
---

# 输入方式冗余指南 (Input Modality Redundancy Guide)

> 关联因素：[[WHICH-F-006-input-method-preference|WHICH-F-006 输入方式偏好]] ｜ 指南 ID：`G-WHICH-F-006`

## 设计模式（正模式）

### ✅ 全键盘可达

所有功能键盘可完成（Tab 序合理 + 快捷键）；鼠标/触屏不是唯一通道

**示例**：全部操作有快捷键 + 可视焦点框

**标准依据**：`STD-W3C-WCAG22:2.1.1`

### ✅ 非指针替代

拖拽/悬停等指针交互有非指针等效（按钮/菜单）；复杂手势有简单替代

**示例**：拖拽排序 → 上下移按钮并存

**标准依据**：`STD-W3C-WCAG22:2.5.7`

### ✅ 输入优先级自设

默认输入方式用户可选（如语音优先/键盘优先），设备切换时偏好跟随

**示例**：外接键盘时自动恢复快捷键提示

### ✅ 情境输入推荐

检测使用情境推荐输入方式（移动→语音、嘈杂→键盘），推荐不强制

**示例**：检测到步行状态提示『试试语音输入』

## 反模式（常见错误）

### ❌ 鼠标唯一路径

功能只能靠鼠标/触屏完成

**排斥后果**：运动障碍、屏幕阅读器、效率用户同时被排除——键盘可达是数字包容的地基（WCAG 2.1.1 A 级）

### ❌ 手势暴政

自创复杂手势替代按钮

**排斥后果**：可发现性趋零：没人记得住隐藏手势；手势是加速器不能是独木桥

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 键盘全可达、手势替代、偏好自设 |
| 工业设计 | 开关/脚踏/头控等多输入设备支持 |
| 建筑设计 | 多高度入口与无触点通行 |
| 服装设计 | 磁吸/魔术贴等低精细输入友好扣件 |

---
*指南卡片：输入方式冗余指南 ｜ v1.0 ｜ 状态：draft*
