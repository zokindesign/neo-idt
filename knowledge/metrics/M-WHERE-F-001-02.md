---
id: M-WHERE-F-001-02
factor_id: WHERE-F-001
name: "强光环境对比度维持"
name_en: "Contrast Maintenance Under Glare"
category: audit
description: "在强光/高环境照度条件下实测前景与背景对比度是否仍满足 WCAG 1.4.3（4.5:1）与 1.4.11（3:1）要求"
measurement_method: "定义目标环境照度范围 → 实测屏幕峰值亮度下正文与关键 UI 组件的实际对比度 → 记录关键信息可读性"
data_source:
  - 照度计实测
  - 对比度测量工具
thresholds:
    minimum: "正文 ≥4.5:1 且 UI 组件 ≥3:1（强光实测）"
    good: "在 minimum 之上，高亮/禁用态均可辨"
    excellent: "提供自动高对比或亮度自适应模式"
unit: "对比度比值（实测）"
applicable_domains:
  - universal
limitations: "环境照度范围需事前定义；不同屏幕峰值亮度差异大，须记录测试设备"
related_standards:
  - "STD-W3C-WCAG22:1.4.3"
  - "STD-W3C-WCAG22:1.4.11"
status: draft
evidence_grade: A
---
# 强光环境对比度维持

> 指标 ID：`M-WHERE-F-001-02` · 分类：**人工审计** · 证据等级：**A** · 状态：draft

**英文名**：Contrast Maintenance Under Glare

关联因素：[[WHERE-F-001-physical-environment|WHERE-F-001]]（物理环境）

## 定义

在强光/高环境照度条件下实测前景与背景对比度是否仍满足 WCAG 1.4.3（4.5:1）与 1.4.11（3:1）要求

## 测量方法

定义目标环境照度范围 → 实测屏幕峰值亮度下正文与关键 UI 组件的实际对比度 → 记录关键信息可读性

## 数据来源

- 照度计实测
- 对比度测量工具

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 正文 ≥4.5:1 且 UI 组件 ≥3:1（强光实测） |
| 良好 | 在 minimum 之上，高亮/禁用态均可辨 |
| 优秀 | 提供自动高对比或亮度自适应模式 |

**单位**：对比度比值（实测）

## 适用领域

- universal

## 局限与适用条件

环境照度范围需事前定义；不同屏幕峰值亮度差异大，须记录测试设备

## 关联标准条款

- `STD-W3C-WCAG22:1.4.3`
- `STD-W3C-WCAG22:1.4.11`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

