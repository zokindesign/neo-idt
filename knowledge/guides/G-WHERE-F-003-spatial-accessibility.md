---
id: G-WHERE-F-003
factor_id: WHERE-F-003
name: "空间可达性指南"
name_en: Spatial Accessibility Guide
patterns:
  - name: "通行净宽底线"
    description: "主通行路径净宽 ≥900mm（轮椅对向交汇 ≥1500mm），全程无突出物收窄"
    domain: architecture
    example: "走廊设计按 900mm 净宽验收，消防管线下缘不计入"
    refs: ["STD-GB-55019:2"]
  - name: "零台阶入口"
    description: "主入口零高差或有等效坡道/升降替代；坡道坡度 ≤1:12 并设扶手"
    domain: architecture
    example: "入口 15mm 高差做斜切过渡而非一级台阶"
  - name: "垂直交通冗余"
    description: "楼梯之外必有电梯/坡道等效替代；关键设施布置在无障碍可达楼层"
    domain: architecture
    example: "公共服务窗口设于电梯可达楼层，不只在首层"
  - name: "远程等效替代"
    description: "线下空间不可达时提供远程等效服务通道（在线办理/配送/上门）"
    domain: service
    example: "政务大厅不可达？线上办理 + 上门服务双通道"
anti_patterns:
  - name: "轮椅专属思维"
    description: "把无障碍当作只服务轮椅使用者的附加设施"
    consequence: "婴儿车、行李拖拽、送货、临时腿伤——轮椅坡道服务的是所有推轮子的人；附属位置的轮椅坡道还排除了行动缓慢者"
  - name: "达标即终点"
    description: "按规范最低值建成后不再优化"
    consequence: "净宽卡着 810mm 的门、坡度顶着 1:12 的坡——技术达标但体验边缘化，轮椅使用者被『合法地』排除在舒适之外"
  - name: "无障碍后置"
    description: "建筑完工后再加装无障碍设施"
    consequence: "后置加装成本 10 倍且效果差（结构限制）；可达性是布局问题，不是装修问题"
cases:
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
cross_domain_mapping:
  digital:
    summary: "远程替代服务、无障碍数字入口"
  industrial:
    summary: "设备操作空间预留轮椅回转"
  architecture:
    summary: "坡道、电梯、无障碍卫生间、盲道"
  fashion:
    summary: "更衣室无障碍化、适配辅助器械的剪裁"
status: draft
version: '1.0'
---

# 空间可达性指南 (Spatial Accessibility Guide)

> 关联因素：[[WHERE-F-003-spatial-accessibility|WHERE-F-003 空间可达性]] ｜ 指南 ID：`G-WHERE-F-003`

## 设计模式（正模式）

### ✅ 通行净宽底线

主通行路径净宽 ≥900mm（轮椅对向交汇 ≥1500mm），全程无突出物收窄

**示例**：走廊设计按 900mm 净宽验收，消防管线下缘不计入

**标准依据**：`STD-GB-55019:2`

### ✅ 零台阶入口

主入口零高差或有等效坡道/升降替代；坡道坡度 ≤1:12 并设扶手

**示例**：入口 15mm 高差做斜切过渡而非一级台阶

### ✅ 垂直交通冗余

楼梯之外必有电梯/坡道等效替代；关键设施布置在无障碍可达楼层

**示例**：公共服务窗口设于电梯可达楼层，不只在首层

### ✅ 远程等效替代

线下空间不可达时提供远程等效服务通道（在线办理/配送/上门）

**示例**：政务大厅不可达？线上办理 + 上门服务双通道

## 反模式（常见错误）

### ❌ 轮椅专属思维

把无障碍当作只服务轮椅使用者的附加设施

**排斥后果**：婴儿车、行李拖拽、送货、临时腿伤——轮椅坡道服务的是所有推轮子的人；附属位置的轮椅坡道还排除了行动缓慢者

### ❌ 达标即终点

按规范最低值建成后不再优化

**排斥后果**：净宽卡着 810mm 的门、坡度顶着 1:12 的坡——技术达标但体验边缘化，轮椅使用者被『合法地』排除在舒适之外

### ❌ 无障碍后置

建筑完工后再加装无障碍设施

**排斥后果**：后置加装成本 10 倍且效果差（结构限制）；可达性是布局问题，不是装修问题

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 远程替代服务、无障碍数字入口 |
| 工业设计 | 设备操作空间预留轮椅回转 |
| 建筑设计 | 坡道、电梯、无障碍卫生间、盲道 |
| 服装设计 | 更衣室无障碍化、适配辅助器械的剪裁 |

---
*指南卡片：空间可达性指南 ｜ v1.0 ｜ 状态：draft*
