---
id: G-WHICH-F-002
factor_id: WHICH-F-002
name: "探索深度分级指南"
name_en: Exploration Depth Tiering Guide
patterns:
  - name: "双速路径"
    description: "同一目标提供快速路径（直达/默认值）与深度路径（全部选项/高级设置）并行，互不强迫"
    domain: digital
    example: "『快速开始』与『自定义安装』双入口"
    refs: ["STD-ISO-9241-110:5.4.3"]
  - name: "浏览与搜索并重"
    description: "深度探索者靠层级浏览、快速者靠搜索直达——两种心智模式都要服务"
    domain: universal
    example: "知识库：目录树 + 全文搜索双通道"
  - name: "面包屑回溯"
    description: "多层探索随时可回退跳转（面包屑/历史），探索不迷路"
    domain: digital
    example: "分类页顶部面包屑可跳回任意层级"
anti_patterns:
  - name: "深度单向门"
    description: "进入深层后难以返回"
    consequence: "探索变成冒险——用户学会『不点开』，信息架构的深度投入全部浪费"
  - name: "新手即专家"
    description: "只有一条不深不浅的中间路径"
    consequence: "快速者被拖慢、深度者吃不饱——双速并行比折中单速便宜"
cases: []
cross_domain_mapping:
  digital:
    summary: "快速/高级双入口、搜索浏览并重、面包屑"
  industrial:
    summary: "一键模式与手动细调并存"
  architecture:
    summary: "精选动线 + 自由探索区分离"
  fashion:
    summary: "搭配推荐 + 材质详情并行"
status: draft
version: '1.0'
---

# 探索深度分级指南 (Exploration Depth Tiering Guide)

> 关联因素：[[WHICH-F-002-exploration-depth-preference|WHICH-F-002 探索深度偏好]] ｜ 指南 ID：`G-WHICH-F-002`

## 设计模式（正模式）

### ✅ 双速路径

同一目标提供快速路径（直达/默认值）与深度路径（全部选项/高级设置）并行，互不强迫

**示例**：『快速开始』与『自定义安装』双入口

**标准依据**：`STD-ISO-9241-110:5.4.3`

### ✅ 浏览与搜索并重

深度探索者靠层级浏览、快速者靠搜索直达——两种心智模式都要服务

**示例**：知识库：目录树 + 全文搜索双通道

### ✅ 面包屑回溯

多层探索随时可回退跳转（面包屑/历史），探索不迷路

**示例**：分类页顶部面包屑可跳回任意层级

## 反模式（常见错误）

### ❌ 深度单向门

进入深层后难以返回

**排斥后果**：探索变成冒险——用户学会『不点开』，信息架构的深度投入全部浪费

### ❌ 新手即专家

只有一条不深不浅的中间路径

**排斥后果**：快速者被拖慢、深度者吃不饱——双速并行比折中单速便宜

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 快速/高级双入口、搜索浏览并重、面包屑 |
| 工业设计 | 一键模式与手动细调并存 |
| 建筑设计 | 精选动线 + 自由探索区分离 |
| 服装设计 | 搭配推荐 + 材质详情并行 |

---
*指南卡片：探索深度分级指南 ｜ v1.0 ｜ 状态：draft*
