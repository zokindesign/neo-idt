---
abstract_dimensions: []
dimension: RUL
evidence: C
evidence_note: 合规基线卡：直接条款支撑为各国知识产权法与开源许可证条款，属法规义务而非研究证据，维持 C 级
guides: [G-RUL-004]
id: RUL-004
merge_candidate: false
metrics: [M-RUL-004-01]
name: 知识产权合规
name_en: Intellectual Property Compliance
ownership_review: false
refs:
  research: []
  standards: ["STD-SPDX"]
response: alternative
rules: []
slug: ip-compliance
split_candidate: false
status: draft
type: baseline
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
产品使用的所有内容（图片、字体、音频、视频）和技术（算法、库、代码、专利）必须拥有合法授权或符合许可协议，避免侵犯他人著作权、商标权、专利权。

## 为什么重要
- 侵权诉讼可能导致产品下架、巨额赔偿、声誉受损
- 开源许可（GPL、MIT、Apache）有传染性条款，影响整体发布方式
- 企业采购对IP清白度要求严格

## 量化标准
- **许可证清单**: 项目依赖的所有许可证及其限制
- **合规率**: 有明确许可证或授权的资源比例
- **专利风险**: 使用的技术是否落入第三方专利范围
- **第三方内容**: 使用的素材是否来自授权库或已购买

## 设计指南
- 优先使用开源/公共领域资源，并遵守许可证
- 建立内容审核流程，确保所有素材有合法来源
- 记录IP来源与授权证明
- 对于不确定的IP，寻求法律意见或替换

## 跨领域表现
| 领域 | IP考量 |
|------|--------|
| **软件开发** | 第三方库许可、代码复用、专利池 |
| **数字内容** | 图片/字体/音乐版权、二次创作授权 |
| **硬件产品** | 芯片IP核、通信标准必要专利（SEP） |
| **品牌设计** | 商标使用、竞品元素引用、 parody边界 |

## 相关标准
- 各国著作权法、专利法、商标法
- 开源许可证（GPL、MIT、BSD、Apache）
- 行业标准组织（IEEE、3GPP）的专利政策

---
*因素权重评估: ⭐⭐⭐⭐☆ (合规与法律风险控制)*