---
abstract_dimensions: []
dimension: WHERE
evidence: C
evidence_note: "有标准条款（ISO 21542 资源条款），间接支撑；维持 C 级"
guides: [G-WHERE-F-004]
id: WHERE-F-004
merge_candidate: false
metrics: [M-WHERE-F-004-01]
name: 资源可用性
name_en: Resource Availability
ownership_review: false
refs:
  standards: ["STD-ISO-21542:10.1", "STD-ISO-21542:10.5"]
  research: []
response: alternative
rules: []
slug: resource-availability
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: medium
  effort: medium
  frequency: medium
---

## 基本定义
用户在使用产品/服务时能否获得必要的辅助资源，包括电力、水源、燃料、清洁工具、易耗材料、人员协助等。

## 为什么重要
- 资源短缺会直接阻止某些功能的使用（如充电、打印、烘干）
- 低收入地区或灾难环境下资源限制更严重
- 某些辅助功能依赖专用资源（如盲文打印机需纸张与电）

## 量化标准
- **能源**: 电力供应稳定性（停电频率、电压波动）、燃气供应
- **水源**: 清洁水获取便利度、水质
- **时间**: 获取资源所需等待时间或准备时间
- **费用**: 资源的单位成本与用户支付能力匹配度
- **可替代性**: 资源缺省时是否有功能降级或替代方案

## 设计指南
- 优先核心功能无需稀缺资源（如离线功能）
- 明确标注资源需求（如“需打印机”、“需要电源”）
- 提供资源替代方案（如干电池代替充电、手写代替打印）
- 资源消耗优化（省电模式、节水模式）

## 跨领域表现
| 领域 | 资源示例 |
|------|----------|
| **数字产品** | 电、网络流量、存储空间 |
| **医疗设备** | 耗材（针头、滤芯）、电力、消毒用水 |
| **教育产品** | 纸质教材、白板、投影仪 |
| **日常服务** | 清洁用水、纸巾、充电设施、包装材料 |

## 相关标准
- None specific; context-dependent

---
*因素权重评估: ⭐⭐⭐☆☆ (对特定场景高分)*