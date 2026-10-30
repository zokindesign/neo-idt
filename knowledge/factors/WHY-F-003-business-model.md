---
abstract_dimensions: []
dimension: WHY
evidence: C
evidence_note: "C4a 核验文献挂接（2026-10-08）：Mathur et al. 2019 暗黑模式大规模实证支撑'商业模式约束设计伦理'方向；商业模式本身为商业共识"
guides: [G-WHY-F-003]
id: WHY-F-003
merge_candidate: false
metrics: [M-WHY-F-003-01]
name: 商业模式
name_en: Business Model
ownership_review: false
refs:
  standards: []
  research: ["Mathur A., Acar G., Friedman M.J., Lucherini E., Mayer J., Chetty M. & Narayanan A. (2019). Dark patterns at scale: Findings from a crawl of 11K shopping websites. Proc. ACM Hum.-Comput. Interact., 3(CSCW), Article 81. https://doi.org/10.1145/3359183"]
response: both
rules: []
slug: business-model
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
产品的盈利方式与价值捕获机制，如一次性购买、订阅制、免费增值、授权、平台抽成、广告变现等，以及由此产生的设计约束。

## 为什么重要
- 商业模式直接决定产品功能取舍、用户数据收集范围、体验设计边界
- 不同模式下用户付费意愿和预期不同，影响包容性需求优先级
- 需在盈利目标与用户价值间取得平衡

## 量化标准
- **收入来源分布**: 各来源占比（订阅、广告、交易抽成等）
- **用户转化漏斗**: 试用→付费的转化率
- **ARPU/LTV**: 平均用户收入与生命周期价值
- **定价敏感度**: 用户对价格变化的反应（弹性）

## 设计指南
- 在设计中明确区分免费功能与付费功能
- 避免因盈利设计过度干扰核心体验（如广告遮挡）
- 提供灵活的支付选项（月付/年付、学生优惠）
- 考虑低支付能力用户的替代价值获取路径（时间换金钱、任务换权益）

## 跨领域表现
| 领域 | 体现 |
|------|------|
| **SaaS软件** | 订阅等级、协作人数限制、功能高阶版 |
| **硬件产品** | 配件利润、耗材复购、软件服务捆绑 |
| **平台经济** | 抽成比例、补贴策略、会员特权 |
| **公共服务** | 免费基础、增值服务、按使用量计费 |

## 相关标准
- 行业最佳实践（如freemium设计模式）
- 定价伦理与公平性研究

---
*因素权重评估: ⭐⭐⭐⭐☆ (核心商业决策)*