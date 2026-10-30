---
id: G-WHERE-F-005
factor_id: WHERE-F-005
name: "经济可及设计指南"
name_en: Economic Accessibility Design Guide
patterns:
  - name: "总拥有成本透明"
    description: "购买价之外显式呈现使用成本（耗材/流量/维护/升级），让用户基于全成本决策"
    domain: universal
    example: "产品页标注『年度耗材成本约 XX 元』"
  - name: "免费核心层"
    description: "核心功能不设付费墙；付费只对应增值层（对比层次数据源：World Bank 收入分类分层定价）"
    domain: digital
    example: "学习类 App 基础课程永久免费，高级内容订阅"
  - name: "低端设备兼容"
    description: "支持目标市场主流低端机型与旧系统版本；轻量版与完整版并行"
    domain: digital
    example: "Go 版本 App 在 2GB 内存设备流畅运行"
  - name: "维修友好设计"
    description: "可拆解维修（螺丝而非胶水）、备件长期供应、第三方维修不失效保"
    domain: industrial
    example: "电池可更换 + 官方维修手册公开"
anti_patterns:
  - name: "一次性价格近视"
    description: "只优化购买价格，忽略使用期成本"
    consequence: "『买得起用不起』：廉价打印机 + 天价墨盒模式将低收入用户锁入持续付费陷阱"
  - name: "廉价等于难用"
    description: "低收入市场直接砍功能降质量"
    consequence: "『廉价但难用』不是经济可及——是二次排斥；低收入用户同样值得好设计（SAST 佐证）"
  - name: "通胀脆弱定价"
    description: "定价与成本结构未考虑经济波动"
    consequence: "通胀期用户流失骤增；分层定价与区域定价是抗波动缓冲"
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
    summary: "免费层、流量优化、低端设备支持"
  industrial:
    summary: "模块化维修、材料替代降本"
  architecture:
    summary: "当地材料、分阶段改造"
  fashion:
    summary: "耐用设计、易护理面料、基础款覆盖"
status: draft
version: '1.0'
---

# 经济可及设计指南 (Economic Accessibility Design Guide)

> 关联因素：[[WHERE-F-005-economic-environment|WHERE-F-005 经济环境]] ｜ 指南 ID：`G-WHERE-F-005`

## 设计模式（正模式）

### ✅ 总拥有成本透明

购买价之外显式呈现使用成本（耗材/流量/维护/升级），让用户基于全成本决策

**示例**：产品页标注『年度耗材成本约 XX 元』

### ✅ 免费核心层

核心功能不设付费墙；付费只对应增值层（对比层次数据源：World Bank 收入分类分层定价）

**示例**：学习类 App 基础课程永久免费，高级内容订阅

### ✅ 低端设备兼容

支持目标市场主流低端机型与旧系统版本；轻量版与完整版并行

**示例**：Go 版本 App 在 2GB 内存设备流畅运行

### ✅ 维修友好设计

可拆解维修（螺丝而非胶水）、备件长期供应、第三方维修不失效保

**示例**：电池可更换 + 官方维修手册公开

## 反模式（常见错误）

### ❌ 一次性价格近视

只优化购买价格，忽略使用期成本

**排斥后果**：『买得起用不起』：廉价打印机 + 天价墨盒模式将低收入用户锁入持续付费陷阱

### ❌ 廉价等于难用

低收入市场直接砍功能降质量

**排斥后果**：『廉价但难用』不是经济可及——是二次排斥；低收入用户同样值得好设计（SAST 佐证）

### ❌ 通胀脆弱定价

定价与成本结构未考虑经济波动

**排斥后果**：通胀期用户流失骤增；分层定价与区域定价是抗波动缓冲

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 免费层、流量优化、低端设备支持 |
| 工业设计 | 模块化维修、材料替代降本 |
| 建筑设计 | 当地材料、分阶段改造 |
| 服装设计 | 耐用设计、易护理面料、基础款覆盖 |

---
*指南卡片：经济可及设计指南 ｜ v1.0 ｜ 状态：draft*
