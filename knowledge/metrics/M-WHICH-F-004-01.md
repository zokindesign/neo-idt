---
id: M-WHICH-F-004-01
factor_id: WHICH-F-004
name: "可见性粒度控制"
name_en: "Visibility Granularity Control"
category: audit
description: "审计社交场景的可见性选项粒度（全局/分组/单次）与状态暴露默认值"
measurement_method: "可见性选项矩阵审计 + 默认值隐私倾向检查（默认应为最小暴露）"
data_source:
  - 功能审计
  - 隐私政策核对
thresholds:
    minimum: "提供可见性开关且默认最小暴露"
    good: "分组/单次可见性粒度可选"
    excellent: "发布前可见性预览（'谁可以看到这条'）"
unit: 粒度档位数
applicable_domains:
  - digital
limitations: "GDPR 25 条数据保护设计与 PIPL 16 条为法域相关义务，审计项需按目标法域裁剪"
related_standards:
status: draft
evidence_grade: C
---
# 可见性粒度控制

> 指标 ID：`M-WHICH-F-004-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Visibility Granularity Control

关联因素：[[WHICH-F-004-social-visibility-preference|WHICH-F-004]]（社交可见性偏好）

## 定义

审计社交场景的可见性选项粒度（全局/分组/单次）与状态暴露默认值

## 测量方法

可见性选项矩阵审计 + 默认值隐私倾向检查（默认应为最小暴露）

## 数据来源

- 功能审计
- 隐私政策核对

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 提供可见性开关且默认最小暴露 |
| 良好 | 分组/单次可见性粒度可选 |
| 优秀 | 发布前可见性预览（'谁可以看到这条'） |

**单位**：粒度档位数

## 适用领域

- digital

## 局限与适用条件

GDPR 25 条数据保护设计与 PIPL 16 条为法域相关义务，审计项需按目标法域裁剪

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

