---
id: G-HOW-F-005
factor_id: HOW-F-005
name: "技术环境适配指南"
name_en: Technical Environment Adaptation Guide
patterns:
  - name: "本地优先选项"
    description: "智能设备提供本地控制路径（物理开关/本地网络控制），云端不可达时仍可操作"
    domain: architecture
    example: "智能窗帘：App + 墙面开关 + 本地遥控三通道"
    refs: ["STD-EN-301549:11.7"]
  - name: "降级体验设计"
    description: "每个云端依赖都有断链降级预案：本地缓存、只读模式、物理替代"
    domain: universal
    example: "门禁系统断网时本地白名单仍可通行"
  - name: "运维工具普适"
    description: "维修所需工具与技能按当地可得性设计（普通螺丝/标准接口/图解手册）"
    domain: industrial
    example: "产品设计成一把十字螺丝刀可完成全部拆解"
anti_patterns:
  - name: "云端绑架"
    description: "设备必须联网才能执行基本功能"
    consequence: "断网/停服后产品变电子垃圾——本地兜底是产品的尊严底线"
  - name: "专用工具依赖"
    description: "维修需要专用工具/官方上门"
    consequence: "维修成本高企→用户放弃维修→提前报废（与可持续目标直接冲突）"
cases: []
cross_domain_mapping:
  digital:
    summary: "本地控制、断网降级、标准接口"
  industrial:
    summary: "通用工具维修、本地自治运行"
  architecture:
    summary: "本地回路、手动覆盖"
  fashion:
    summary: "基础功能免配对、NFC 触达"
status: draft
version: '1.0'
---

# 技术环境适配指南 (Technical Environment Adaptation Guide)

> 关联因素：[[HOW-F-005-technical-environment|HOW-F-005 技术环境]] ｜ 指南 ID：`G-HOW-F-005`

## 设计模式（正模式）

### ✅ 本地优先选项

智能设备提供本地控制路径（物理开关/本地网络控制），云端不可达时仍可操作

**示例**：智能窗帘：App + 墙面开关 + 本地遥控三通道

**标准依据**：`STD-EN-301549:11.7`

### ✅ 降级体验设计

每个云端依赖都有断链降级预案：本地缓存、只读模式、物理替代

**示例**：门禁系统断网时本地白名单仍可通行

### ✅ 运维工具普适

维修所需工具与技能按当地可得性设计（普通螺丝/标准接口/图解手册）

**示例**：产品设计成一把十字螺丝刀可完成全部拆解

## 反模式（常见错误）

### ❌ 云端绑架

设备必须联网才能执行基本功能

**排斥后果**：断网/停服后产品变电子垃圾——本地兜底是产品的尊严底线

### ❌ 专用工具依赖

维修需要专用工具/官方上门

**排斥后果**：维修成本高企→用户放弃维修→提前报废（与可持续目标直接冲突）

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 本地控制、断网降级、标准接口 |
| 工业设计 | 通用工具维修、本地自治运行 |
| 建筑设计 | 本地回路、手动覆盖 |
| 服装设计 | 基础功能免配对、NFC 触达 |

---
*指南卡片：技术环境适配指南 ｜ v1.0 ｜ 状态：draft*
