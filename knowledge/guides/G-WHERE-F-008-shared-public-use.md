---
id: G-WHERE-F-008
factor_id: WHERE-F-008
name: "共享情境隐私指南"
name_en: Shared-Use Privacy Guide
patterns:
  - name: "多用户配置隔离"
    description: "共享设备支持多用户配置文件与快速切换（指纹/人脸 ≤1 步），个人内容与推荐互不污染"
    domain: digital
    example: "家庭平板：指纹识别直接进入各自桌面"
  - name: "访客模式"
    description: "一键进入不留痕模式：不保存历史、不污染推荐、退出即清空"
    domain: digital
    example: "借用他人电脑 → 访客窗口，关窗即走"
  - name: "公开度分级"
    description: "同一产品内按受众分级可见性：工作资料仅同事、家庭照片仅家人——隐私不是全有全无"
    domain: universal
    example: "相册按人物关系分可见性"
  - name: "环境感知隐私"
    description: "检测到公共场景（公共 Wi-Fi/信标）自动收紧：防窥提示、通知隐藏敏感内容"
    domain: digital
    example: "连接公共 Wi-Fi 时通知只显示『你有 1 条新消息』"
anti_patterns:
  - name: "单账号假设"
    description: "默认一人一设备一账号"
    consequence: "家庭共享设备上推荐混乱、隐私互窥——共享设备是全球普遍现实（家庭/网吧/图书馆）"
  - name: "痕迹即暴露"
    description: "共享场景不提供清除/无痕路径"
    consequence: "用户为借用而道歉或拒绝使用——社交摩擦把产品变成负担"
  - name: "窥屏无防"
    description: "公共场景敏感信息照常全显"
    consequence: "通知内容、消息预览在公共空间向旁观者广播——隐私泄露常是被动旁观而非主动攻击"
cases:
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
cross_domain_mapping:
  digital:
    summary: "多用户配置、访客模式、防窥通知"
  industrial:
    summary: "共享工具多用户识别、操作隔离"
  architecture:
    summary: "专注舱、声学隔断、储物柜"
  fashion:
    summary: "独立试衣间、可锁储物、隐私窗帘"
status: draft
version: '1.0'
---

# 共享情境隐私指南 (Shared-Use Privacy Guide)

> 关联因素：[[WHERE-F-008-shared-public-use|WHERE-F-008 共享与公共使用情境]] ｜ 指南 ID：`G-WHERE-F-008`

## 设计模式（正模式）

### ✅ 多用户配置隔离

共享设备支持多用户配置文件与快速切换（指纹/人脸 ≤1 步），个人内容与推荐互不污染

**示例**：家庭平板：指纹识别直接进入各自桌面

### ✅ 访客模式

一键进入不留痕模式：不保存历史、不污染推荐、退出即清空

**示例**：借用他人电脑 → 访客窗口，关窗即走

### ✅ 公开度分级

同一产品内按受众分级可见性：工作资料仅同事、家庭照片仅家人——隐私不是全有全无

**示例**：相册按人物关系分可见性

### ✅ 环境感知隐私

检测到公共场景（公共 Wi-Fi/信标）自动收紧：防窥提示、通知隐藏敏感内容

**示例**：连接公共 Wi-Fi 时通知只显示『你有 1 条新消息』

## 反模式（常见错误）

### ❌ 单账号假设

默认一人一设备一账号

**排斥后果**：家庭共享设备上推荐混乱、隐私互窥——共享设备是全球普遍现实（家庭/网吧/图书馆）

### ❌ 痕迹即暴露

共享场景不提供清除/无痕路径

**排斥后果**：用户为借用而道歉或拒绝使用——社交摩擦把产品变成负担

### ❌ 窥屏无防

公共场景敏感信息照常全显

**排斥后果**：通知内容、消息预览在公共空间向旁观者广播——隐私泄露常是被动旁观而非主动攻击

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 多用户配置、访客模式、防窥通知 |
| 工业设计 | 共享工具多用户识别、操作隔离 |
| 建筑设计 | 专注舱、声学隔断、储物柜 |
| 服装设计 | 独立试衣间、可锁储物、隐私窗帘 |

---
*指南卡片：共享情境隐私指南 ｜ v1.0 ｜ 状态：draft*
