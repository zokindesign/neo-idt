---
abstract_dimensions: []
dimension: WHAT
evidence: C
evidence_note: "有标准条款（WCAG 2.2 协作相关 SC），间接支撑；维持 C 级"
guides: [G-WHAT-F-005]
id: WHAT-F-005
merge_candidate: false
metrics: [M-WHAT-F-005-01]
name: 任务协作性
name_en: Task Collaboration
ownership_review: false
refs:
  standards: ["STD-ISO-9241-110:5.5.4"]
  research: []
response: both
rules: []
slug: task-collaboration
split_candidate: false
status: draft
type: context
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
任务是否需要多个用户/角色共同完成，以及协作的同步性、分工复杂度、信息共享需求。

## 为什么重要
- 协作任务对沟通、协调、角色分工有特殊要求
- 可能存在权力差异、时间同步困难、信息不对称等问题
- 设计需促进有效协作并降低协作成本

## 量化标准
- **参与者数量**: 所需人数范围（2≥、2-5、5+）
- **同步要求**: 必须实时同步 vs 可异步
- **分工自由度**: 任务可分解的灵活度（固定分工 vs 灵活分担）
- **依赖强度**: 任务步骤之间的依赖紧密度

## 设计指南
- 明确角色与权限，避免职责混淆
- 提供共享视图与实时更新（如共同编辑）
- 支持异步协作（留言、任务分配、状态跟踪）
- 减少不必要的沟通开销（自动化通知、进展汇总）

## 跨领域表现
| 领域 | 协作功能 |
|------|----------|
| **在线文档** | 多人同时编辑、评论、@提及、版本历史 |
| **项目管理** | 任务分配、进度看板、提醒、文档共享 |
| **社交应用** | 群聊、协作贴文、共同创作 |
| **家庭空间** | 共同购物清单、日程共享、分工提醒 |

## 相关标准
- 合作系统设计原则（如CSCW、Groupware）
- ISO 9241-410: 交互系统的群体工作支持

---
*因素权重评估: ⭐⭐⭐⭐☆ (团队协作工具核心)*