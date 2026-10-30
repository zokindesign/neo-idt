---
id: G-WHO-F-011
factor_id: WHO-F-011
name: "语言可及性指南"
name_en: Language Accessibility Guide
patterns:
  - name: "多语言基础设施"
    description: "界面语言可切换且覆盖目标市场语言；lang 属性正确标注以启用屏幕阅读器语音切换"
    domain: digital
    example: "<html lang='zh-CN'> 切换为 lang='en' 后读屏自动换语音引擎"
    refs: ["STD-W3C-WCAG22:3.1.1", "STD-W3C-WCAG22:3.1.2"]
  - name: "图形符号减负"
    description: "关键标识与警告配图形符号，降低语言依赖；符号采用国际通用语义"
    domain: universal
    example: "紧急出口用人形奔跑图而非文字；洗涤标签用图形符号"
  - name: "语音输入宽容"
    description: "语音识别对非母语口音、构音障碍、方言的识别率纳入验收标准"
    domain: digital
    example: "测试集包含带口音的语音样本，识别率不低于母语样本的 90%"
  - name: "语言层级控制"
    description: "关键信息提供简明语言版本（plain language）补充；术语附首次出现时的简短解释"
    domain: digital
    example: "医学术语旁配白话解释与图示"
    refs: ["STD-W3C-WCAG22:3.1.5"]
anti_patterns:
  - name: "单一语言假设"
    description: "默认英语或单一主导语言覆盖全部用户"
    consequence: "非该语言用户被直接排除；对低文化程度用户再叠一层障碍"
  - name: "机翻直上"
    description: "机器翻译内容不经母语者审校发布"
    consequence: "错译在关键操作（医疗/金融）中造成实际伤害；礼貌用语错位破坏信任"
  - name: "文字单通道"
    description: "全部信息只经文字传达"
    consequence: "不识字/阅读障碍用户零通道获取信息——图形+语音是最基本的双通道冗余"
cases: []
cross_domain_mapping:
  digital:
    summary: "多语言切换、lang 标注、语音输出多语言、术语库"
  industrial:
    summary: "多语言手册、图形化警告标签"
  architecture:
    summary: "多语言标识、图形化疏散指引"
  fashion:
    summary: "图形化洗护标签、国际尺码标准"
status: draft
version: '1.0'
---

# 语言可及性指南 (Language Accessibility Guide)

> 关联因素：[[WHO-F-011-language|WHO-F-011 语言]] ｜ 指南 ID：`G-WHO-F-011`

## 设计模式（正模式）

### ✅ 多语言基础设施

界面语言可切换且覆盖目标市场语言；lang 属性正确标注以启用屏幕阅读器语音切换

**示例**：<html lang='zh-CN'> 切换为 lang='en' 后读屏自动换语音引擎

**标准依据**：`STD-W3C-WCAG22:3.1.1`、`STD-W3C-WCAG22:3.1.2`

### ✅ 图形符号减负

关键标识与警告配图形符号，降低语言依赖；符号采用国际通用语义

**示例**：紧急出口用人形奔跑图而非文字；洗涤标签用图形符号

### ✅ 语音输入宽容

语音识别对非母语口音、构音障碍、方言的识别率纳入验收标准

**示例**：测试集包含带口音的语音样本，识别率不低于母语样本的 90%

### ✅ 语言层级控制

关键信息提供简明语言版本（plain language）补充；术语附首次出现时的简短解释

**示例**：医学术语旁配白话解释与图示

**标准依据**：`STD-W3C-WCAG22:3.1.5`

## 反模式（常见错误）

### ❌ 单一语言假设

默认英语或单一主导语言覆盖全部用户

**排斥后果**：非该语言用户被直接排除；对低文化程度用户再叠一层障碍

### ❌ 机翻直上

机器翻译内容不经母语者审校发布

**排斥后果**：错译在关键操作（医疗/金融）中造成实际伤害；礼貌用语错位破坏信任

### ❌ 文字单通道

全部信息只经文字传达

**排斥后果**：不识字/阅读障碍用户零通道获取信息——图形+语音是最基本的双通道冗余

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '多语言切换、lang 标注、语音输出多语言、术语库'} |
| 工业设计 | {'summary': '多语言手册、图形化警告标签'} |
| 建筑设计 | {'summary': '多语言标识、图形化疏散指引'} |
| 服装设计 | {'summary': '图形化洗护标签、国际尺码标准'} |

---
*指南卡片：语言可及性指南 ｜ v1.0 ｜ 状态：draft*
