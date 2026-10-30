---
id: G-WHEN-F-005
factor_id: WHEN-F-005
name: "碎片时间适配指南"
name_en: Fragmented Time Adaptation Guide
patterns:
  - name: "任务分块续接"
    description: "长任务切分为可独立完成的时间块（15 分钟粒度），每块有自然断点与续接入口"
    domain: digital
    example: "在线课程按 15 分钟一节，学完一节自动记录续点"
    refs: ["STD-W3C-WCAG22:2.2.1"]
  - name: "稍后继续机制"
    description: "任何长任务可挂起并稍后继续：『稍后』入口常驻、状态完整保留"
    domain: digital
    example: "长文阅读中途退出，下次打开直达原位置"
  - name: "分步预估呈现"
    description: "长任务开始前呈现分步计划与预计总时长，让用户基于可用时间决策"
    domain: universal
    example: "表单首页显示『约需 20 分钟，可分 3 次填写』"
anti_patterns:
  - name: "整块时间假设"
    description: "默认用户有连续大块时间"
    consequence: "通勤族、照料者的真实时间全是碎片——整块假设让 80% 用户永远开不了头"
  - name: "断点即丢失"
    description: "中断后进度不保留"
    consequence: "一次打断就重头来过——用户学到教训后干脆不再开始"
cases: []
cross_domain_mapping:
  digital:
    summary: "分块课程、续接入口、草稿保存"
  industrial:
    summary: "工序可中断设计、工位状态保留"
  architecture:
    summary: "等候区碎片任务支持（充电+桌面）"
  fashion:
    summary: "快穿快脱、免打理设计"
status: draft
version: '1.0'
---

# 碎片时间适配指南 (Fragmented Time Adaptation Guide)

> 关联因素：[[WHEN-F-005-time-availability|WHEN-F-005 时间可用性]] ｜ 指南 ID：`G-WHEN-F-005`

## 设计模式（正模式）

### ✅ 任务分块续接

长任务切分为可独立完成的时间块（15 分钟粒度），每块有自然断点与续接入口

**示例**：在线课程按 15 分钟一节，学完一节自动记录续点

**标准依据**：`STD-W3C-WCAG22:2.2.1`

### ✅ 稍后继续机制

任何长任务可挂起并稍后继续：『稍后』入口常驻、状态完整保留

**示例**：长文阅读中途退出，下次打开直达原位置

### ✅ 分步预估呈现

长任务开始前呈现分步计划与预计总时长，让用户基于可用时间决策

**示例**：表单首页显示『约需 20 分钟，可分 3 次填写』

## 反模式（常见错误）

### ❌ 整块时间假设

默认用户有连续大块时间

**排斥后果**：通勤族、照料者的真实时间全是碎片——整块假设让 80% 用户永远开不了头

### ❌ 断点即丢失

中断后进度不保留

**排斥后果**：一次打断就重头来过——用户学到教训后干脆不再开始

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 分块课程、续接入口、草稿保存 |
| 工业设计 | 工序可中断设计、工位状态保留 |
| 建筑设计 | 等候区碎片任务支持（充电+桌面） |
| 服装设计 | 快穿快脱、免打理设计 |

---
*指南卡片：碎片时间适配指南 ｜ v1.0 ｜ 状态：draft*
