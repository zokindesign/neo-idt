---
id: M-WHERE-F-009-01
factor_id: WHERE-F-009
name: "协作代理支持度"
name_en: "Assisted-Use Support"
category: audit
description: "审计协助者代理完成、授权、远程协助与操作记录特性（受辅助使用情境）"
measurement_method: "协助者场景实测（代理完成核心任务的授权机制与成功率）"
data_source:
  - 功能审计
  - 代理测试
thresholds:
    minimum: "核心任务可由协助者代理完成（明确授权机制）"
    good: "协作者视图与操作留痕"
    excellent: "远程实时协助与语音协同引导"
unit: "特性通过率 %"
applicable_domains:
  - digital
  - industrial
  - service
limitations: "为 B1 新增因素（WHERE-F-009）配套新建指标；ICF e3 支持性环境为分类依据"
related_standards:
status: draft
evidence_grade: C
---
# 协作代理支持度

> 指标 ID：`M-WHERE-F-009-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Assisted-Use Support

关联因素：[[WHERE-F-009-assisted-use-context|WHERE-F-009]]（受辅助使用情境）

## 定义

审计协助者代理完成、授权、远程协助与操作记录特性（受辅助使用情境）

## 测量方法

协助者场景实测（代理完成核心任务的授权机制与成功率）

## 数据来源

- 功能审计
- 代理测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心任务可由协助者代理完成（明确授权机制） |
| 良好 | 协作者视图与操作留痕 |
| 优秀 | 远程实时协助与语音协同引导 |

**单位**：特性通过率 %

## 适用领域

- digital
- industrial
- service

## 局限与适用条件

为 B1 新增因素（WHERE-F-009）配套新建指标；ICF e3 支持性环境为分类依据

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

