---
abstract_dimensions: []
dimension: HOW
evidence: C
evidence_note: "有标准条款（WCAG 2.2/EN 301 549 网络相关），维度特异性研究缺乏；间接支撑，维持 C 级"
guides: [G-HOW-F-001]
id: HOW-F-001
merge_candidate: false
metrics: [M-HOW-F-001-01]
name: 网络条件
name_en: Network Conditions
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:1.4.10", "STD-EN-301549:9"]
  research: []
response: alternative
rules: []
slug: network-conditions
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户的网络接入质量，包括带宽、延迟、稳定性和成本。

## 为什么重要
- 网络可用性直接影响产品可访问性
- 低收入地区或移动场景下网络条件受限
- 影响功能可用性和用户体验

## 量化标准
- **带宽**: 可用数据传输速率（Kbps/Mbps）
- **延迟**: 往返时间 RTT (ms)
- **稳定性**: 丢包率、连接中断频率
- **成本**: 单位流量费用（影响使用意愿）

## 设计指南
- 离线功能优先核心功能
- 自适应媒体质量（根据带宽调整）
- 缓存策略减少重复请求
- 优雅降级：网络不可用时提供基本功能
- 明确告知当前网络状态和预期等待时间

## 相关标准
- None specific; use performance best practices

---
*因素权重评估: ⭐⭐⭐⭐⭐ (全球仍有大量用户网络受限)*