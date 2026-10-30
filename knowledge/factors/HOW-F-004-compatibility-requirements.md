---
abstract_dimensions: []
dimension: HOW
evidence: C
evidence_note: "有标准条款（EN 301 549 兼容性要求），独立研究缺乏；维持 C 级"
guides: [G-HOW-F-004]
id: HOW-F-004
merge_candidate: false
metrics: [M-HOW-F-004-01]
name: 兼容性要求
name_en: Compatibility Requirements
ownership_review: false
refs:
  standards: ["STD-EN-301549:6"]
  research: []
response: alternative
rules: []
slug: compatibility-requirements
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
系统需要在不同平台、浏览器版本、操作系统或辅助技术间正常工作的能力。

## 为什么重要
- 用户使用环境碎片化严重
- 企业环境往往使用旧版浏览器或系统
- 辅助技术（屏幕阅读器、眼动仪）需要专门适配

## 量化标准
- **支持矩阵**: 需要支持的最高/最低版本范围
- **市场覆盖率**: 目标用户群使用的平台分布
- **辅助技术适配**: 是否通过主流AT测试（JAWS, NVDA, VoiceOver）

## 设计指南
- 采用渐进增强策略
- 使用标准化Web API避免过时插件
- 定期测试主流辅助技术
- 提供polyfill或备选实现

## 相关标准
- WCAG 合规要求
- 平台特定兼容性列表（如Android碎片化）

---
*因素权重评估: ⭐⭐⭐⭐☆ (企业级产品必须重视)*