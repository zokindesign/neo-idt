---
id: G-HOW-F-004
factor_id: HOW-F-004
name: "兼容性矩阵指南"
name_en: Compatibility Matrix Guide
patterns:
  - name: "支持矩阵显式化"
    description: "平台×浏览器×系统版本×AT 的支持矩阵文档化并持续测试；支持边界显式告知用户"
    domain: digital
    example: "产品页公开支持矩阵：Chrome/Firefox/Safari 最近两个大版本"
    refs: ["STD-EN-301549:6"]
  - name: "渐进增强"
    description: "基础功能人人可用，增强能力按设备渐进叠加——核心不依赖最新特性"
    domain: digital
    example: "布局用稳定 CSS 实现，新特性只做锦上添花"
  - name: "标准 API 优先"
    description: "用标准化 Web/系统 API，避免私有特性与过时插件（Flash 式死路）"
    domain: digital
    example: "原生 HTML5 控件 + ARIA 补充，不造私有控件"
  - name: "AT 测试常态化"
    description: "主流 AT 组合（NVDA+Firefox、JAWS+Chrome、VoiceOver、TalkBack）进 CI 回归"
    domain: digital
    example: "每次发布跑 AT 冒烟测试用例集"
anti_patterns:
  - name: "最新版主义"
    description: "只支持最新平台版本"
    consequence: "企业环境、发展中市场、谨慎用户大量停留在旧版本——支持矩阵向下延伸比向上追新更重要"
  - name: "单生态绑定"
    description: "深度依赖单一平台/生态"
    consequence: "生态政策变动（下架/接口变更）即全军覆没；标准接口是逃生门"
cases: []
cross_domain_mapping:
  digital:
    summary: "支持矩阵、渐进增强、AT 回归"
  industrial:
    summary: "跨品牌互操作、协议标准"
  architecture:
    summary: "系统间互操作、开放协议"
  fashion:
    summary: "通用配对协议、跨品牌 App"
status: draft
version: '1.0'
---

# 兼容性矩阵指南 (Compatibility Matrix Guide)

> 关联因素：[[HOW-F-004-compatibility-requirements|HOW-F-004 兼容性要求]] ｜ 指南 ID：`G-HOW-F-004`

## 设计模式（正模式）

### ✅ 支持矩阵显式化

平台×浏览器×系统版本×AT 的支持矩阵文档化并持续测试；支持边界显式告知用户

**示例**：产品页公开支持矩阵：Chrome/Firefox/Safari 最近两个大版本

**标准依据**：`STD-EN-301549:6`

### ✅ 渐进增强

基础功能人人可用，增强能力按设备渐进叠加——核心不依赖最新特性

**示例**：布局用稳定 CSS 实现，新特性只做锦上添花

### ✅ 标准 API 优先

用标准化 Web/系统 API，避免私有特性与过时插件（Flash 式死路）

**示例**：原生 HTML5 控件 + ARIA 补充，不造私有控件

### ✅ AT 测试常态化

主流 AT 组合（NVDA+Firefox、JAWS+Chrome、VoiceOver、TalkBack）进 CI 回归

**示例**：每次发布跑 AT 冒烟测试用例集

## 反模式（常见错误）

### ❌ 最新版主义

只支持最新平台版本

**排斥后果**：企业环境、发展中市场、谨慎用户大量停留在旧版本——支持矩阵向下延伸比向上追新更重要

### ❌ 单生态绑定

深度依赖单一平台/生态

**排斥后果**：生态政策变动（下架/接口变更）即全军覆没；标准接口是逃生门

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 支持矩阵、渐进增强、AT 回归 |
| 工业设计 | 跨品牌互操作、协议标准 |
| 建筑设计 | 系统间互操作、开放协议 |
| 服装设计 | 通用配对协议、跨品牌 App |

---
*指南卡片：兼容性矩阵指南 ｜ v1.0 ｜ 状态：draft*
