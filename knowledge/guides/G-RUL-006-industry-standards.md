---
id: G-RUL-006
factor_id: RUL-006
name: "行业规范对齐指南"
name_en: Industry Standards Alignment Guide
patterns:
  - name: "行业清单维护"
    description: "目标行业准入规范清单化维护（医疗 HIPAA/金融 PCI DSS/教育 FERPA/航空 DO-178C），年度复核更新"
    domain: universal
    example: "合规台账含适用规范列表+版本+负责人+复审日期"
  - name: "条款映射到证据"
    description: "每条适用规范条款映射到具体证据（设计文档/测试报告/流程记录）——映射不是读过，是可查证"
    domain: universal
    example: "HIPAA 技术保障条款 → 加密配置文档 + 审计日志样例"
  - name: "变更跟踪机制"
    description: "订阅行业规范更新渠道（标准组织/监管公告），版本变更触发差距评估"
    domain: universal
    example: "PCI DSS 新版发布 → 30 天内出差距评估报告"
  - name: "分域合规负责人"
    description: "跨行业产品为每个行业域设合规负责人——规范的专业性不允许『一个人全管』"
    domain: universal
    example: "医疗线与金融线各有 DPO/合规专员"
anti_patterns:
  - name: "规范快照"
    description: "合规检查做一次归档即认为永久有效"
    consequence: "行业规范持续演进（PCI DSS 3→4 变动巨大）——快照式合规在第二次审计时变成违规证据"
  - name: "通用合规幻想"
    description: "一套合规措施通吃所有行业"
    consequence: "医疗/金融/教育各有专业条款，通用方案对每个行业都是半吊子——分域是行业合规的铁律"
cases: []
cross_domain_mapping:
  digital:
    summary: "行业规范映射、变更跟踪、分域负责人"
  industrial:
    summary: "行业安全规范、审核留痕"
  architecture:
    summary: "行业设施规范（医疗建筑等）"
  fashion:
    summary: "行业安全标准（婴童阻燃等）"
status: draft
version: '1.0'
---

# 行业规范对齐指南 (Industry Standards Alignment Guide)

> 关联因素：[[RUL-006-industry-standards|RUL-006 行业特定规范]] ｜ 指南 ID：`G-RUL-006`

## 设计模式（正模式）

### ✅ 行业清单维护

目标行业准入规范清单化维护（医疗 HIPAA/金融 PCI DSS/教育 FERPA/航空 DO-178C），年度复核更新

**示例**：合规台账含适用规范列表+版本+负责人+复审日期

### ✅ 条款映射到证据

每条适用规范条款映射到具体证据（设计文档/测试报告/流程记录）——映射不是读过，是可查证

**示例**：HIPAA 技术保障条款 → 加密配置文档 + 审计日志样例

### ✅ 变更跟踪机制

订阅行业规范更新渠道（标准组织/监管公告），版本变更触发差距评估

**示例**：PCI DSS 新版发布 → 30 天内出差距评估报告

### ✅ 分域合规负责人

跨行业产品为每个行业域设合规负责人——规范的专业性不允许『一个人全管』

**示例**：医疗线与金融线各有 DPO/合规专员

## 反模式（常见错误）

### ❌ 规范快照

合规检查做一次归档即认为永久有效

**排斥后果**：行业规范持续演进（PCI DSS 3→4 变动巨大）——快照式合规在第二次审计时变成违规证据

### ❌ 通用合规幻想

一套合规措施通吃所有行业

**排斥后果**：医疗/金融/教育各有专业条款，通用方案对每个行业都是半吊子——分域是行业合规的铁律

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 行业规范映射、变更跟踪、分域负责人 |
| 工业设计 | 行业安全规范、审核留痕 |
| 建筑设计 | 行业设施规范（医疗建筑等） |
| 服装设计 | 行业安全标准（婴童阻燃等） |

---
*指南卡片：行业规范对齐指南 ｜ v1.0 ｜ 状态：draft*
