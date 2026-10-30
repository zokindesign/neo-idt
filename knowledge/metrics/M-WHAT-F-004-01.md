---
id: M-WHAT-F-004-01
factor_id: WHAT-F-004
name: "持久续接完备度"
name_en: "Persistence & Resumption Completeness"
category: audit
description: "对跨会话/跨设备长任务审计自动保存、续接入口、状态同步与冗余输入消除（WCAG 3.3.7）"
measurement_method: "会话中断/设备切换实测→数据保存率/续接成功率；同流程重复输入项计数（WCAG 2.2 SC 3.3.7 Redundant Entry A 级核对）"
data_source:
  - 任务审计
  - 跨设备测试
thresholds:
    minimum: "同流程内已知信息不重复输入（WCAG 3.3.7 A 级强制）"
    good: "自动保存 + 续接入口全覆盖长任务"
    excellent: "跨设备实时同步与版本历史"
unit: "续接成功率 %"
applicable_domains:
  - digital
  - service
limitations: "WCAG 3.3.7 不要求跨会话保存（Understanding 文档明确），跨会话为良好/优秀档"
related_standards:
  - "STD-W3C-WCAG22:3.3.7"
  - "STD-W3C-WCAG22:3.2.3"
status: draft
evidence_grade: B
---
# 持久续接完备度

> 指标 ID：`M-WHAT-F-004-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Persistence & Resumption Completeness

关联因素：[[WHAT-F-004-task-persistence|WHAT-F-004]]（任务持久性要求）

## 定义

对跨会话/跨设备长任务审计自动保存、续接入口、状态同步与冗余输入消除（WCAG 3.3.7）

## 测量方法

会话中断/设备切换实测→数据保存率/续接成功率；同流程重复输入项计数（WCAG 2.2 SC 3.3.7 Redundant Entry A 级核对）

## 数据来源

- 任务审计
- 跨设备测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 同流程内已知信息不重复输入（WCAG 3.3.7 A 级强制） |
| 良好 | 自动保存 + 续接入口全覆盖长任务 |
| 优秀 | 跨设备实时同步与版本历史 |

**单位**：续接成功率 %

## 适用领域

- digital
- service

## 局限与适用条件

WCAG 3.3.7 不要求跨会话保存（Understanding 文档明确），跨会话为良好/优秀档

## 关联标准条款

- `STD-W3C-WCAG22:3.3.7`
- `STD-W3C-WCAG22:3.2.3`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

