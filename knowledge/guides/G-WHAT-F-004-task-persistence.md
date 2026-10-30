---
id: G-WHAT-F-004
factor_id: WHAT-F-004
name: "任务持久性指南"
name_en: Task Persistence Guide
patterns:
  - name: "不重复输入底线"
    description: "同流程内系统已知的用户信息自动填充，绝不要求二次输入"
    domain: digital
    example: "结账页自动带出收货地址，仅确认修改"
    refs: ["STD-W3C-WCAG22:3.3.7"]
  - name: "自动草稿"
    description: "长任务全程静默自动保存；中断（误触/来电/断电）零损失恢复"
    domain: digital
    example: "表单每字段失焦即存草稿，重开直达"
  - name: "继续上次入口"
    description: "『继续上次』常驻显眼位置；续接不需要任何重新导航"
    domain: digital
    example: "学习 App 首屏第一个按钮就是『继续第 3 节』"
    refs: ["STD-W3C-WCAG22:3.2.3"]
  - name: "跨设备同步"
    description: "任务状态云端同步，换设备无缝续接（良好/优秀档，见 M-WHAT-F-004-01）"
    domain: digital
    example: "手机上写到一半的文档，平板打开光标还在原处"
anti_patterns:
  - name: "一次坐完要求"
    description: "长任务必须一次完成否则重来"
    consequence: "被中断 2 次的用户直接放弃——中断是常态（来电、孩子、地铁到站），不是例外"
  - name: "静默丢失"
    description: "会话超时清空全部输入"
    consequence: "30 分钟填写付诸东流——用户不只是流失，是带着愤怒流失"
  - name: "重复盘问"
    description: "同流程反复索要已提供的信息"
    consequence: "『我刚才不是填过了吗』——冗余输入是最直白的 disrespect（WCAG 3.3.7 的立法化表达）"
cases: []
cross_domain_mapping:
  digital:
    summary: "自动草稿、续接入口、跨端同步"
  industrial:
    summary: "工序状态保留、断点续产"
  architecture:
    summary: "分阶段施工、设施分期启用"
  fashion:
    summary: "免烫整理、耐穿结构"
status: draft
version: '1.0'
---

# 任务持久性指南 (Task Persistence Guide)

> 关联因素：[[WHAT-F-004-task-persistence|WHAT-F-004 任务持久性要求]] ｜ 指南 ID：`G-WHAT-F-004`

## 设计模式（正模式）

### ✅ 不重复输入底线

同流程内系统已知的用户信息自动填充，绝不要求二次输入

**示例**：结账页自动带出收货地址，仅确认修改

**标准依据**：`STD-W3C-WCAG22:3.3.7`

### ✅ 自动草稿

长任务全程静默自动保存；中断（误触/来电/断电）零损失恢复

**示例**：表单每字段失焦即存草稿，重开直达

### ✅ 继续上次入口

『继续上次』常驻显眼位置；续接不需要任何重新导航

**示例**：学习 App 首屏第一个按钮就是『继续第 3 节』

**标准依据**：`STD-W3C-WCAG22:3.2.3`

### ✅ 跨设备同步

任务状态云端同步，换设备无缝续接（良好/优秀档，见 M-WHAT-F-004-01）

**示例**：手机上写到一半的文档，平板打开光标还在原处

## 反模式（常见错误）

### ❌ 一次坐完要求

长任务必须一次完成否则重来

**排斥后果**：被中断 2 次的用户直接放弃——中断是常态（来电、孩子、地铁到站），不是例外

### ❌ 静默丢失

会话超时清空全部输入

**排斥后果**：30 分钟填写付诸东流——用户不只是流失，是带着愤怒流失

### ❌ 重复盘问

同流程反复索要已提供的信息

**排斥后果**：『我刚才不是填过了吗』——冗余输入是最直白的 disrespect（WCAG 3.3.7 的立法化表达）

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 自动草稿、续接入口、跨端同步 |
| 工业设计 | 工序状态保留、断点续产 |
| 建筑设计 | 分阶段施工、设施分期启用 |
| 服装设计 | 免烫整理、耐穿结构 |

---
*指南卡片：任务持久性指南 ｜ v1.0 ｜ 状态：draft*
