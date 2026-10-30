---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 1.4.4 文本缩放、1.4.10 自适应），偏好与标准不完全对应，间接支撑；维持 C 级"
guides: [G-WHICH-F-001]
id: WHICH-F-001
merge_candidate: false
metrics: [M-WHICH-F-001-01]
name: 信息密度偏好
name_en: Information Density Preference
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:1.4.4", "STD-ISO-9241-110:5.5.4"]
  research: []
response: choice-space
rules: []
slug: information-density-preference
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户对同时呈现的信息量和细节层次的偏好程度与耐受范围。

## 为什么重要
- 信息过载 → 认知负荷↑、焦虑↑
- 信息不足 → 效率↓、不信任感↑
- 不同场景下需求差异大（如数据分析师 vs. 普通用户）

## 量化标准
- **测量方法**: 眼动追踪（注视时长、扫视路径）、用户自评（偏好量表）
- **指标**: 屏幕元素密度、文字行高密度、数据点密度
- **参考阈值**: 一般网页建议保持Font Size ≥ 16px，行间距 ≥ 1.5

## 设计指南
- 提供“简明模式” / “详细模式”切换
- 信息分层：概要 → 详情（折叠/展开）
- 允许用户自定义仪表板（展现内容可控）
- 默认密度设为“中等”，并提供调整入口

## 跨领域表现
| 领域 | 低密度偏好 | 高密度偏好 |
|------|------------|------------|
| **数字产品** | 极简风、留白大、少即是多 | 数据密集、一览无余、多面板 |
| **工业设计** | 简化界面、关键控制突出 | 多功能面板、参数集中显示 |
| **建筑设计** | 开放空间、简约装饰 | 多功能复合、空间紧凑 |
| **服装设计** | 简洁款式、少装饰 | 多层次搭配、配件丰富 |

## 相关标准
- WCAG 1.4.4: Resize Text (不影响布局)
- 尼尔森诺曼: 信息密度与可读性平衡

---
*因素权重评估: ⭐⭐⭐⭐⭐ (极常见的偏好差异)*