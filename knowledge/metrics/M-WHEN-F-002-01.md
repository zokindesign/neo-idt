---
id: M-WHEN-F-002-01
factor_id: WHEN-F-002
name: "频率分层适配度"
name_en: "Frequency-Tier Adaptation"
category: audit
description: "按高频/低频用户分层审计差异化设计（高频：效率特性；低频：记忆辅助、最近记录、简化界面）"
measurement_method: "频率分层定义（DAU/MAU 比或会话间隔分布）→分层特性矩阵审计；习惯养成参照 Lally et al. 2010 渐近线模型"
data_source:
  - 使用分析
  - 特性审计
thresholds:
    minimum: "低频路径有记忆辅助（最近使用/默认值预填）"
    good: "高频路径有批量/快捷操作；低频路径有使用引导"
    excellent: "按个人使用模式自适应难度与界面密度"
unit: "分层覆盖率 %"
applicable_domains:
  - digital
  - service
limitations: "DAU/MAU 与会话间隔为运营指标，低频用户定义需按产品类别校准"
related_standards:
status: draft
evidence_grade: B
---
# 频率分层适配度

> 指标 ID：`M-WHEN-F-002-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Frequency-Tier Adaptation

关联因素：[[WHEN-F-002-usage-frequency|WHEN-F-002]]（使用频率）

## 定义

按高频/低频用户分层审计差异化设计（高频：效率特性；低频：记忆辅助、最近记录、简化界面）

## 测量方法

频率分层定义（DAU/MAU 比或会话间隔分布）→分层特性矩阵审计；习惯养成参照 Lally et al. 2010 渐近线模型

## 数据来源

- 使用分析
- 特性审计

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 低频路径有记忆辅助（最近使用/默认值预填） |
| 良好 | 高频路径有批量/快捷操作；低频路径有使用引导 |
| 优秀 | 按个人使用模式自适应难度与界面密度 |

**单位**：分层覆盖率 %

## 适用领域

- digital
- service

## 局限与适用条件

DAU/MAU 与会话间隔为运营指标，低频用户定义需按产品类别校准

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

