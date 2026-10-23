---
id: G-WHAT-F-002
factor_id: WHAT-F-002
name: "认知负荷控制指南"
name_en: Cognitive Load Control Guide
patterns:
  - name: "工作记忆减负"
    description: "信息分步呈现而非一屏全塞；用户不该需要记住上一步才能做这一步"
    domain: universal
    example: "分步表单顶部常显已填摘要"
    refs: ["STD-ISO-9241-110:5.1.3"]
  - name: "负荷可测量"
    description: "核心任务用 NASA-TLX 等量表建立负荷基线；超过中等负荷（TLX>60）即触发重设计"
    domain: digital
    example: "新功能上线前 5 人 TLX 快测，均值>60 打回"
    refs: [STD-NASA-TLX]
  - name: "即时帮助嵌入"
    description: "帮助信息在使用点就近出现（行内提示/悬浮说明），不强迫跳转帮助中心"
    domain: digital
    example: "日期格式错误时行内示例而非跳转文档"
    refs: ["STD-W3C-WCAG22:3.3.7"]
anti_patterns:
  - name: "弹窗轰炸"
    description: "叠加弹窗、横幅、浮层同时争夺注意力"
    consequence: "认知过载下所有信息都等于没有信息——注意力是零和资源"
  - name: "帮助中心孤岛"
    description: "帮助内容集中放在独立页面"
    consequence: "跳转帮助=丢上下文+多一次往返；在使用点给答案才是有效帮助"
cases: []
cross_domain_mapping:
  digital:
    summary: "分步表单、TLX 基线、行内帮助"
  industrial:
    summary: "简化控制面板、明确标识"
  architecture:
    summary: "清晰导视、简化导航路径"
  fashion:
    summary: "穿着步骤简化、少扣件设计"
status: draft
version: '1.0'
---

# 认知负荷控制指南 (Cognitive Load Control Guide)

> 关联因素：[[WHAT-F-002-cognitive-load|WHAT-F-002 认知负荷]] ｜ 指南 ID：`G-WHAT-F-002`

## 设计模式（正模式）

### ✅ 工作记忆减负

信息分步呈现而非一屏全塞；用户不该需要记住上一步才能做这一步

**示例**：分步表单顶部常显已填摘要

**标准依据**：`STD-ISO-9241-110:5.1.3`

### ✅ 负荷可测量

核心任务用 NASA-TLX 等量表建立负荷基线；超过中等负荷（TLX>60）即触发重设计

**示例**：新功能上线前 5 人 TLX 快测，均值>60 打回

**标准依据**：`STD-NASA-TLX`

### ✅ 即时帮助嵌入

帮助信息在使用点就近出现（行内提示/悬浮说明），不强迫跳转帮助中心

**示例**：日期格式错误时行内示例而非跳转文档

**标准依据**：`STD-W3C-WCAG22:3.3.7`

## 反模式（常见错误）

### ❌ 弹窗轰炸

叠加弹窗、横幅、浮层同时争夺注意力

**排斥后果**：认知过载下所有信息都等于没有信息——注意力是零和资源

### ❌ 帮助中心孤岛

帮助内容集中放在独立页面

**排斥后果**：跳转帮助=丢上下文+多一次往返；在使用点给答案才是有效帮助

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 分步表单、TLX 基线、行内帮助 |
| 工业设计 | 简化控制面板、明确标识 |
| 建筑设计 | 清晰导视、简化导航路径 |
| 服装设计 | 穿着步骤简化、少扣件设计 |

---
*指南卡片：认知负荷控制指南 ｜ v1.0 ｜ 状态：draft*
