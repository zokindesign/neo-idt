---
id: M-WHICH-F-005-01
factor_id: WHICH-F-005
name: "风格选择度与一致性"
name_en: "Style Choice & Consistency"
category: audit
description: "审计官方主题/自定义能力，以及风格切换时功能位置稳定性（减少再学习成本）"
measurement_method: "主题与自定义能力清单审计 + 切换前后功能位置一致性走查"
data_source:
  - 界面审计
  - 用户测试
thresholds:
    minimum: "提供 ≥2 官方主题且默认普适（高可读性中性风格）"
    good: "关键自定义能力（字号/对比度/动效开关）+ 切换后功能位置不变"
    excellent: "风格偏好跨平台同步记忆"
unit: "选择档位 / 一致性通过率"
applicable_domains:
  - digital
limitations: "美学偏好测量本质主观；Norman 三层次理论支撑情感维度但阈值属设计共识"
related_standards:
  - "STD-W3C-WCAG22:1.4.4"
status: draft
evidence_grade: C
---
# 风格选择度与一致性

> 指标 ID：`M-WHICH-F-005-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Style Choice & Consistency

关联因素：[[WHICH-F-005-aesthetic-style-preference|WHICH-F-005]]（美学风格偏好）

## 定义

审计官方主题/自定义能力，以及风格切换时功能位置稳定性（减少再学习成本）

## 测量方法

主题与自定义能力清单审计 + 切换前后功能位置一致性走查

## 数据来源

- 界面审计
- 用户测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 提供 ≥2 官方主题且默认普适（高可读性中性风格） |
| 良好 | 关键自定义能力（字号/对比度/动效开关）+ 切换后功能位置不变 |
| 优秀 | 风格偏好跨平台同步记忆 |

**单位**：选择档位 / 一致性通过率

## 适用领域

- digital

## 局限与适用条件

美学偏好测量本质主观；Norman 三层次理论支撑情感维度但阈值属设计共识

## 关联标准条款

- `STD-W3C-WCAG22:1.4.4`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

