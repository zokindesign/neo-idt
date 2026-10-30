---
abstract_dimensions: []
dimension: WHO
evidence: C
evidence_note: "C2 挂接 Waller et al. 2010；间接支撑，维持 C 级"
guides: [G-WHO-F-013]
id: WHO-F-013
merge_candidate: false
metrics: [M-WHO-F-013-01]
name: 身体尺寸与人体工程学
name_en: Body Size & Ergonomics
ownership_review: false
refs:
  standards: ["STD-ISO-7250:5", "STD-ANSUR-II:1", "STD-GB-50763:3.5"]
  research: ["Waller S., Langdon P. & Clarkson J. (2010). Using disability data to estimate the exclusion of users from products. In Contemporary Ergonomics, 371-376."]
response: alternative
rules: []
slug: body-size-ergonomics
split_candidate: false
status: draft
type: ability
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户的身体尺寸（身高、臂长、指距等）和关节活动范围、力量、耐力等人体工程学特征。

## 为什么重要
- 设备/空间不符合用户身体尺寸时，易导致疲劳、操作困难或受伤
- 极端身高或特殊体型用户可能完全无法使用（如过高导致门框碰撞）
- 考虑人体尺寸多样性可提升普适舒适性

## 量化标准
- **百分位参考**: 采用第5、50、95百分位人体尺寸数据
- **调节范围**: 座椅高度、桌面高度、屏幕仰角的可调范围和方式
- **操作力**: 按钮所需按压力、把手旋转力矩
- **可达范围**: 操作部件是否在用户可达范围内

## 设计指南
- 提供可调节的物理结构（桌椅、支架、把手）
- 关键操作位置应覆盖多数人群的可达范围
- 避免需要大力或精细控制的操作（除非必要且提供替代）
- 考虑孕妇、儿童、轮椅使用者等特殊体型

## 跨领域表现
| 领域 | 关键考量 |
|------|----------|
| **数字产品** | 设备尺寸与握持感、触控目标大小（最小44×44pt）|
| **工业设计** | 工具手柄直径、操作力、控制面板布局 |
| **建筑设计** | 门框高度、台面高度、楼梯踏步尺寸、扶手位置 |
| **服装设计** | 尺码覆盖范围、可调节部件（腰围、裤长）|

## 相关标准
- ISO 7250: 人体尺寸基础数据
- ANSI/HFES 100: 人体工程学数据
- WCAG 2.5.5: 目标尺寸（触摸）

---
*因素权重评估: ⭐⭐⭐⭐⭐ (对所有物理交互设计都重要)*