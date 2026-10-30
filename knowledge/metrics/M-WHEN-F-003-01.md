---
id: M-WHEN-F-003-01
factor_id: WHEN-F-003
name: "季节性适应审计"
name_en: "Seasonal Adaptation Audit"
category: audit
description: "审计季节/极端天气/节假日模式下的功能保持度，含光照/温度/湿度/假期分布等维度的适应性特性"
measurement_method: "季节场景清单（极端天气/光照周期/节假日模式）×功能保持审计；光照敏感人群对照 SAD 研究的光照需求"
data_source:
  - 场景审计
  - 季节性使用数据
thresholds:
    minimum: "极端天气/温度下核心功能不失效（防水/耐温规格达标）"
    good: "光照/温度变化有模式适配（冬季深色/夏季高对比/防眩光）"
    excellent: "节假日模式与季节性内容自动切换"
unit: "场景覆盖率 %"
applicable_domains:
  - digital
  - industrial
  - architecture
  - fashion
limitations: "SAD（Rosenthal 1984）支撑光照-情绪关联的合理依据；季节性运营策略属商业实践范畴"
related_standards:
status: draft
evidence_grade: B
---
# 季节性适应审计

> 指标 ID：`M-WHEN-F-003-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Seasonal Adaptation Audit

关联因素：[[WHEN-F-003-seasonality|WHEN-F-003]]（季节性）

## 定义

审计季节/极端天气/节假日模式下的功能保持度，含光照/温度/湿度/假期分布等维度的适应性特性

## 测量方法

季节场景清单（极端天气/光照周期/节假日模式）×功能保持审计；光照敏感人群对照 SAD 研究的光照需求

## 数据来源

- 场景审计
- 季节性使用数据

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 极端天气/温度下核心功能不失效（防水/耐温规格达标） |
| 良好 | 光照/温度变化有模式适配（冬季深色/夏季高对比/防眩光） |
| 优秀 | 节假日模式与季节性内容自动切换 |

**单位**：场景覆盖率 %

## 适用领域

- digital
- industrial
- architecture
- fashion

## 局限与适用条件

SAD（Rosenthal 1984）支撑光照-情绪关联的合理依据；季节性运营策略属商业实践范畴

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。

