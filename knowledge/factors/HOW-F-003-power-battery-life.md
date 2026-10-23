---
abstract_dimensions: []
dimension: HOW
evidence: B
evidence_note: "C4a 核验文献挂接（2026-10-08）：Rahmati & Zhong 2009 人-电池交互实证研究（MobileHCI'07+PMC 扩展），直接研究支撑"
guides: [G-HOW-F-003]
id: HOW-F-003
merge_candidate: false
metrics: [M-HOW-F-003-01]
name: 电源与续航
name_en: Power & Battery Life
ownership_review: false
refs:
  standards: []
  research: ["Rahmati A. & Zhong L. (2009). Human-battery interaction on mobile phones. Pervasive and Mobile Computing, 5(5), 465-477. [MobileHCI'07 研究的期刊扩展版]"]
response: alternative
rules: []
slug: power-battery-life
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
设备电池供电时间、充电便利性、功耗管理能力对用户使用的限制。

## 为什么重要
- 续航不足会限制移动使用场景，迫使用户减少使用或寻找充电
- 充电不便（接口特殊、充电站少）影响可用性
- 某些用户无法经常充电（如户外工作者、老年人）

## 量化标准
- **续航时间**: 典型使用场景下的电池续航（小时）
- **充电时间**: 从0到100%所需时间
- **功耗阈值**: 设备在不同负载下的功率消耗（W）
- **电源适配**: 是否支持通用充电（USB-C PD、无线充电）

## 设计指南
- 提供省电模式（降低性能、关闭非必要功能）
- 优化代码与硬件功耗（低功耗算法、休眠策略）
- 允许用户查看电量与剩余使用预测
- 支持多种充电方式（有线、无线、外接电池）

## 跨领域表现
| 设备类型 | 续航考量 |
|----------|----------|
| **智能手机** | 一天中度使用、快充、无线充电 |
| **笔记本电脑** | 8小时办公、USB-C充电、外接电池 |
| **可穿戴** | 7天以上待机、磁吸充电、低功耗传感器 |
| **医疗设备** | 长时间监测、备用电池、紧急充电 |

## 相关标准
- 无强制标准；依赖能效认证（如Energy Star）

---
*因素权重评估: ⭐⭐⭐⭐☆ (移动设备关键)*