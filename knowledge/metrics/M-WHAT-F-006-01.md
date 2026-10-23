---
id: M-WHAT-F-006-01
factor_id: WHAT-F-006
name: "中断容忍实测"
name_en: "Interruption Tolerance Test"
category: user-test
description: "在任务关键节点注入中断（来电/通知/人为打断），测量任务恢复率与认知重启成本"
measurement_method: "中断注入实验→恢复成功率/重启时间/重复操作次数统计"
data_source:
  - 可用性测试
  - 中断实验
thresholds:
    minimum: "中断后状态保持，恢复无需从头开始"
    good: "恢复点提示（'继续刚才的操作'）"
    excellent: "中断内容自动暂存与情境提示恢复"
unit: "恢复成功率 %"
applicable_domains:
  - digital
  - industrial
limitations: "中断注入须在受控环境执行，避免生产数据风险"
related_standards:
status: draft
evidence_grade: C
---
# 中断容忍实测

> 指标 ID：`M-WHAT-F-006-01` · 分类：**用户测试** · 证据等级：**C** · 状态：draft

**英文名**：Interruption Tolerance Test

关联因素：[[WHAT-F-006-task-interruption-tolerance|WHAT-F-006]]（任务中断容忍度）

## 定义

在任务关键节点注入中断（来电/通知/人为打断），测量任务恢复率与认知重启成本

## 测量方法

中断注入实验→恢复成功率/重启时间/重复操作次数统计

## 数据来源

- 可用性测试
- 中断实验

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 中断后状态保持，恢复无需从头开始 |
| 良好 | 恢复点提示（'继续刚才的操作'） |
| 优秀 | 中断内容自动暂存与情境提示恢复 |

**单位**：恢复成功率 %

## 适用领域

- digital
- industrial

## 局限与适用条件

中断注入须在受控环境执行，避免生产数据风险

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

