---
id: G-RUL-001
factor_id: RUL-001
name: "无障碍合规落地指南"
name_en: Accessibility Compliance Implementation Guide
patterns:
  - name: "AA 基线先行"
    description: "以 WCAG 2.2 AA 为强制基线（对齐 EN 301 549 采购要求）；AAA 按场景选择性达标——先守住基线再谈卓越"
    domain: digital
    example: "新项目验收清单直接内置 WCAG 2.2 AA 全部适用条款"
    refs: ["STD-W3C-WCAG22:1", "STD-EN-301549:9"]
  - name: "无障碍声明公示"
    description: "发布无障碍声明（覆盖范围/已知障碍/反馈渠道/改进计划），给用户可核对的承诺"
    domain: digital
    example: "产品页无障碍声明 + 障碍反馈专用入口"
    refs: ["STD-GB-T-37668:1"]
  - name: "自动化扫描+人工审计双轨"
    description: "CI 内置自动扫描（axe/Lighthouse）拦截回归 + 周期性人工审计（读屏走查/专家评审）——机器抓技术项，人抓体验项"
    domain: digital
    example: "合并请求挂自动扫描门禁；季度专家审计"
anti_patterns:
  - name: "合规即终点"
    description: "拿到合规报告即停止投入"
    consequence: "迭代中无障碍持续回归——合规是过程不是证书；无障碍债务和代码一样会积累"
  - name: " overlay 补丁迷思"
    description: "买一键无障碍覆盖层工具应付合规"
    consequence: "业界共识与用户报告均显示 overlay 无法替代真实修复，反而干扰辅助技术——花钱买假合规"
cases: []
cross_domain_mapping:
  digital:
    summary: "AA 基线、无障碍声明、双轨审计"
  industrial:
    summary: "EN 301 549 采购条款预置"
  architecture:
    summary: "GB 55019 全文强制条款验收"
  fashion:
    summary: "触觉标签、盲文洗护说明"
status: draft
version: '1.0'
---

# 无障碍合规落地指南 (Accessibility Compliance Implementation Guide)

> 关联因素：[[RUL-001-accessibility-compliance|RUL-001 无障碍法规合规]] ｜ 指南 ID：`G-RUL-001`

## 设计模式（正模式）

### ✅ AA 基线先行

以 WCAG 2.2 AA 为强制基线（对齐 EN 301 549 采购要求）；AAA 按场景选择性达标——先守住基线再谈卓越

**示例**：新项目验收清单直接内置 WCAG 2.2 AA 全部适用条款

**标准依据**：`STD-W3C-WCAG22:1`、`STD-EN-301549:9`

### ✅ 无障碍声明公示

发布无障碍声明（覆盖范围/已知障碍/反馈渠道/改进计划），给用户可核对的承诺

**示例**：产品页无障碍声明 + 障碍反馈专用入口

**标准依据**：`STD-GB-T-37668:1`

### ✅ 自动化扫描+人工审计双轨

CI 内置自动扫描（axe/Lighthouse）拦截回归 + 周期性人工审计（读屏走查/专家评审）——机器抓技术项，人抓体验项

**示例**：合并请求挂自动扫描门禁；季度专家审计

## 反模式（常见错误）

### ❌ 合规即终点

拿到合规报告即停止投入

**排斥后果**：迭代中无障碍持续回归——合规是过程不是证书；无障碍债务和代码一样会积累

### ❌  overlay 补丁迷思

买一键无障碍覆盖层工具应付合规

**排斥后果**：业界共识与用户报告均显示 overlay 无法替代真实修复，反而干扰辅助技术——花钱买假合规

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | AA 基线、无障碍声明、双轨审计 |
| 工业设计 | EN 301 549 采购条款预置 |
| 建筑设计 | GB 55019 全文强制条款验收 |
| 服装设计 | 触觉标签、盲文洗护说明 |

---
*指南卡片：无障碍合规落地指南 ｜ v1.0 ｜ 状态：draft*
