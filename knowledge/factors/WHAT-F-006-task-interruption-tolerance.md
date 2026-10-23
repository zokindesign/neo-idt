---
abstract_dimensions: []
dimension: WHAT
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 3.2.6 一致帮助、2.2.1 计时可调），间接支撑；维持 C 级"
guides: [G-WHAT-F-006]
id: WHAT-F-006
merge_candidate: false
metrics: [M-WHAT-F-006-01]
name: 任务中断容忍度
name_en: Task Interruption Tolerance
ownership_review: false
refs:
  standards: ["STD-W3C-WCAG22:3.2.3", "STD-ISO-9241-110:5.5.2"]
  research: []
response: choice-space
rules: []
slug: task-interruption-tolerance
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: medium
  effort: medium
  frequency: medium
---

## 基本定义
任务是否允许被暂停、打断，以及打断后恢复的难易程度要求。与持久性相关但侧重“中断发生时”的用户体验。

## 为什么重要
- 现实环境中用户常被电话、通知、他人打断
- 对中断容忍度低的任务需要防打扰设计
- 中断后易丢失状态或导致错误（如误触）

## 量化标准
- **中断恢复时间**: 用户从中断中回到任务状态的平均耗时
- **中断代价**: 中断导致的数据丢失或进度回退程度
- **防打扰需求**: 用户对免打扰模式的使用频率与强度
- **异步支持**: 任务是否支持“先启动后完成”模式（如预约、排队）

## 设计指南
- 明确标记“未保存的更改”与恢复选项
- 提供“稍后处理”机制（保存为待办、通知提醒）
- 允许用户主动设置“专注模式”（屏蔽非紧急通知）
- 中断点设计：任务分块，使每一块相对独立

## 跨领域表现
| 领域 | 中断处理 |
|------|----------|
| **表单/问卷** | 保存草稿、允许分多次填写 |
| **会议/直播** | 录制回放、笔记同步时间戳 |
| **交易流程** | 购物车持久化、订单暂存 |
| **创作工具** | 撤销多步、快照、分支历史 |

## 相关标准
- 通用UX模式：自动保存、草稿、离线队列

---
*因素权重评估: ⭐⭐⭐☆☆ (对专注任务型产品重要)*