---
id: M-WHAT-F-005-01
factor_id: WHAT-F-005
name: "协作角色覆盖"
name_en: "Collaboration Role Coverage"
category: audit
description: "审计协作任务的分角色视图、权限、并行编辑冲突处理与第三方协作辅助兼容"
measurement_method: "角色×权限矩阵审计 + 双人并行编辑实测冲突处理"
data_source:
  - 功能审计
  - 协作测试
thresholds:
    minimum: "协作任务支持分角色权限与操作留痕"
    good: "并行编辑冲突有合并/锁定策略"
    excellent: "协助者/代理者可无缝加入（对应 WHERE-F-009 受辅助使用）"
unit: "角色覆盖率 %"
applicable_domains:
  - digital
  - service
limitations: ""
related_standards:
status: draft
evidence_grade: C
---
# 协作角色覆盖

> 指标 ID：`M-WHAT-F-005-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Collaboration Role Coverage

关联因素：[[WHAT-F-005-task-collaboration|WHAT-F-005]]（任务协作性）

## 定义

审计协作任务的分角色视图、权限、并行编辑冲突处理与第三方协作辅助兼容

## 测量方法

角色×权限矩阵审计 + 双人并行编辑实测冲突处理

## 数据来源

- 功能审计
- 协作测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 协作任务支持分角色权限与操作留痕 |
| 良好 | 并行编辑冲突有合并/锁定策略 |
| 优秀 | 协助者/代理者可无缝加入（对应 WHERE-F-009 受辅助使用） |

**单位**：角色覆盖率 %

## 适用领域

- digital
- service

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

