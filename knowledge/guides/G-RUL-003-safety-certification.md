---
id: G-RUL-003
factor_id: RUL-003
name: "安全认证规划指南"
name_en: Safety Certification Planning Guide
patterns:
  - name: "目标市场清单前置"
    description: "立项即锁定目标市场及其强制认证（CE/UL/MDR/CCC 等）——认证要求是需求的一部分不是后补材料"
    domain: industrial
    example: "产品需求文档含『目标市场认证矩阵』章节"
  - name: "要求追溯矩阵"
    description: "每条认证条款追溯到设计文档与测试证据（条款→需求→设计→测试四向可追溯）"
    domain: industrial
    example: "ISO 26262 条款-需求-测试三向追溯表"
    refs: [STD-ISO-26262]
  - name: "危害分析先行"
    description: "危害分析与风险评估（HARA/FMEA）在设计早期完成，驱动安全需求而非事后补救"
    domain: industrial
    example: "概念阶段输出 HARA 并评审后才进入详细设计"
  - name: "预合规测试"
    description: "正式认证前进行预测试差距分析——把问题消灭在提交前"
    domain: industrial
    example: "送检前内部按标准全项自测 + 差距清单"
anti_patterns:
  - name: "认证后置"
    description: "产品完成后再对照认证标准"
    consequence: "结构性的不合规（材料/冗余设计）无法靠整改解决——推倒重来是认证后置的常见结局"
  - name: "最低限通关"
    description: "按检测样例定制而非按标准设计"
    consequence: "抽查/复检/真实事故中的暴露——为通关设计的产品在真实世界是裸奔"
cases: []
cross_domain_mapping:
  digital:
    summary: "软件安全标准（IEC 62304 类）映射"
  industrial:
    summary: "CE/UL 认证矩阵、HARA 先行"
  architecture:
    summary: "消防/结构规范前置设计"
  fashion:
    summary: "面料安全标准（婴童/防火）"
status: draft
version: '1.0'
---

# 安全认证规划指南 (Safety Certification Planning Guide)

> 关联因素：[[RUL-003-safety-certification|RUL-003 安全认证要求]] ｜ 指南 ID：`G-RUL-003`

## 设计模式（正模式）

### ✅ 目标市场清单前置

立项即锁定目标市场及其强制认证（CE/UL/MDR/CCC 等）——认证要求是需求的一部分不是后补材料

**示例**：产品需求文档含『目标市场认证矩阵』章节

### ✅ 要求追溯矩阵

每条认证条款追溯到设计文档与测试证据（条款→需求→设计→测试四向可追溯）

**示例**：ISO 26262 条款-需求-测试三向追溯表

**标准依据**：`STD-ISO-26262`

### ✅ 危害分析先行

危害分析与风险评估（HARA/FMEA）在设计早期完成，驱动安全需求而非事后补救

**示例**：概念阶段输出 HARA 并评审后才进入详细设计

### ✅ 预合规测试

正式认证前进行预测试差距分析——把问题消灭在提交前

**示例**：送检前内部按标准全项自测 + 差距清单

## 反模式（常见错误）

### ❌ 认证后置

产品完成后再对照认证标准

**排斥后果**：结构性的不合规（材料/冗余设计）无法靠整改解决——推倒重来是认证后置的常见结局

### ❌ 最低限通关

按检测样例定制而非按标准设计

**排斥后果**：抽查/复检/真实事故中的暴露——为通关设计的产品在真实世界是裸奔

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 软件安全标准（IEC 62304 类）映射 |
| 工业设计 | CE/UL 认证矩阵、HARA 先行 |
| 建筑设计 | 消防/结构规范前置设计 |
| 服装设计 | 面料安全标准（婴童/防火） |

---
*指南卡片：安全认证规划指南 ｜ v1.0 ｜ 状态：draft*
