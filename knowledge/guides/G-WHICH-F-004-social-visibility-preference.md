---
id: G-WHICH-F-004
factor_id: WHICH-F-004
name: "社交可见性控制指南"
name_en: Social Visibility Control Guide
patterns:
  - name: "逐项独立控制"
    description: "可见性设置按信息类型逐项独立（帖子/在线状态/活动/好友列表），不搞全有全无"
    domain: digital
    example: "在线状态可仅好友可见，帖子可公开——两把锁分开"
  - name: "默认隐私最严"
    description: "默认设为最严可见性；公开是主动选择而非默认状态"
    domain: digital
    example: "新账号默认仅自己可见，发帖时显式选可见范围"
    refs: ["STD-GDPR:25"]
  - name: "可见性状态显性"
    description: "发布/分享时刻显式标注当前可见范围（『将公开可见』），不事后才发现"
    domain: digital
    example: "发布按钮旁常显受众标签，点击可改"
  - name: "场景化预设"
    description: "提供场景预设包（仅家人/仅同事/公开）+ 自定义微调——批量设置减负担"
    domain: digital
    example: "相册分享：一键『仅家人可见』预设"
anti_patterns:
  - name: "公开默认陷阱"
    description: "默认公开以促进『活跃度』"
    consequence: "用户在不知情下暴露给远超预期的受众——隐私事故即信任事故；GDPR/PIPL 默认最小化已是法定要求"
  - name: "可见性迷宫"
    description: "隐私设置深埋多层菜单且入口难找"
    consequence: "『改不动』等于『不能改』——不可达的控制是装饰品不是权利"
cases:
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
  - id: CASE-004
    title: "Nike GO FlyEase：无障碍设计被营销反噬"
    domain: fashion
    summary: "Nike 首款免手穿脱鞋 GO FlyEase（$120，2021-04-30 发售）限量发售遭黄牛扫货，二级市场炒至 $500-2000；残障买家（设计目标用…"
cross_domain_mapping:
  digital:
    summary: "逐项可见性、默认最严、发布时显性提示"
  industrial:
    summary: "设备状态对外可见性开关"
  architecture:
    summary: "空间视线控制、隔断灵活"
  fashion:
    summary: "遮体程度与剪裁可选"
status: draft
version: '1.0'
---

# 社交可见性控制指南 (Social Visibility Control Guide)

> 关联因素：[[WHICH-F-004-social-visibility-preference|WHICH-F-004 社交可见性偏好]] ｜ 指南 ID：`G-WHICH-F-004`

## 设计模式（正模式）

### ✅ 逐项独立控制

可见性设置按信息类型逐项独立（帖子/在线状态/活动/好友列表），不搞全有全无

**示例**：在线状态可仅好友可见，帖子可公开——两把锁分开

### ✅ 默认隐私最严

默认设为最严可见性；公开是主动选择而非默认状态

**示例**：新账号默认仅自己可见，发帖时显式选可见范围

**标准依据**：`STD-GDPR:25`

### ✅ 可见性状态显性

发布/分享时刻显式标注当前可见范围（『将公开可见』），不事后才发现

**示例**：发布按钮旁常显受众标签，点击可改

### ✅ 场景化预设

提供场景预设包（仅家人/仅同事/公开）+ 自定义微调——批量设置减负担

**示例**：相册分享：一键『仅家人可见』预设

## 反模式（常见错误）

### ❌ 公开默认陷阱

默认公开以促进『活跃度』

**排斥后果**：用户在不知情下暴露给远超预期的受众——隐私事故即信任事故；GDPR/PIPL 默认最小化已是法定要求

### ❌ 可见性迷宫

隐私设置深埋多层菜单且入口难找

**排斥后果**：『改不动』等于『不能改』——不可达的控制是装饰品不是权利

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 逐项可见性、默认最严、发布时显性提示 |
| 工业设计 | 设备状态对外可见性开关 |
| 建筑设计 | 空间视线控制、隔断灵活 |
| 服装设计 | 遮体程度与剪裁可选 |

---
*指南卡片：社交可见性控制指南 ｜ v1.0 ｜ 状态：draft*
