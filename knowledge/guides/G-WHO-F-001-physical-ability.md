---
id: G-WHO-F-001
factor_id: WHO-F-001
name: "身体能力包容指南"
name_en: Physical Ability Inclusion Guide
patterns:
  - name: "多感官冗余呈现"
    description: "关键信息同时经 ≥2 感官通道传达（视觉+听觉/触觉），任何单一通道能力下降时信息仍可达"
    domain: universal
    example: "电梯到达：楼层显示 + 提示音 + 振动"
    refs: ["STD-W3C-WCAG22:1.4.3"]
  - name: "可调节操作参数"
    description: "物理交互参数（力/尺寸/高度）至少覆盖 P5–P95 人群区间，关键操作提供省力替代"
    domain: industrial
    example: "把手操作力 ≤ 门五金标准值；高度可调工作台"
    refs: [STD-GB-T-10000]
  - name: "触控目标放大"
    description: "触控目标 ≥44×44 CSS 像素（WCAG 2.5.8 目标尺寸下限），间距充足防误触"
    domain: digital
    example: "移动端主操作按钮 48dp 且间距 ≥8dp"
    refs: ["STD-W3C-WCAG22:2.5.8"]
  - name: "能力谱系全覆盖"
    description: "不按『残疾人 vs 健全人』二分设计，而按能力谱系（含暂时性/情境性限制：抱婴儿、强光、骨折）设计同一方案"
    domain: universal
    example: "语音输入既是视障者通道也是双手占用场景的通道"
anti_patterns:
  - name: "平均用户谬误"
    description: "按统计平均人体尺寸设计固定参数"
    consequence: "P5/P95 两端人群被直接排除——平均人不存在，只存在于统计幻象"
  - name: "残疾戏剧化"
    description: "只考虑极端残障（全盲/瘫痪），忽略轻中度能力差异这一更大人群"
    consequence: "覆盖了 1% 极端案例却排除了 30% 的轻中度限制用户"
  - name: "单一视觉反馈"
    description: "所有状态反馈仅用视觉传达（颜色/图形）"
    consequence: "低视力、色觉障碍、强光/眩光情境用户无法感知关键状态变化"
    domain: digital
cases:
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-003
    title: "OXO Good Grips：为爱人的关节炎设计的通用厨具"
    domain: industrial
    summary: "1990 年 Sam Farber 因妻子 Betsey 的类风湿关节炎与 Smart Design 合作设计椭圆热塑橡胶握柄厨具，首批 15 件在旧金山 Go…"
  - id: CASE-006
    title: "Ed Roberts Campus：通用设计作为建筑主叙事"
    domain: architecture
    summary: "Berkeley 的 Ed Roberts Campus（Leddy Maytum Stacy Architects，2011）将 56 英尺直径螺旋坡道设计为…"
cross_domain_mapping:
  digital:
    summary: "屏幕阅读器兼容、触控目标尺寸、可调字体间距、减少动画选项"
  industrial:
    summary: "把手尺寸与操作力、防误触、显示信息高度与角度"
  architecture:
    summary: "门宽、坡度、扶手高度与延伸、楼梯踏步"
  fashion:
    summary: "扣件类型易操作性、活动不受限剪裁、感官友好面料"
status: draft
version: '1.0'
---

# 身体能力包容指南 (Physical Ability Inclusion Guide)

> 关联因素：[[WHO-F-001-physical-ability|WHO-F-001 身体能力]] ｜ 指南 ID：`G-WHO-F-001`

## 设计模式（正模式）

### ✅ 多感官冗余呈现

关键信息同时经 ≥2 感官通道传达（视觉+听觉/触觉），任何单一通道能力下降时信息仍可达

**示例**：电梯到达：楼层显示 + 提示音 + 振动

**标准依据**：`STD-W3C-WCAG22:1.4.3`

### ✅ 可调节操作参数

物理交互参数（力/尺寸/高度）至少覆盖 P5–P95 人群区间，关键操作提供省力替代

**示例**：把手操作力 ≤ 门五金标准值；高度可调工作台

**标准依据**：`STD-GB-T-10000`

### ✅ 触控目标放大

触控目标 ≥44×44 CSS 像素（WCAG 2.5.8 目标尺寸下限），间距充足防误触

**示例**：移动端主操作按钮 48dp 且间距 ≥8dp

**标准依据**：`STD-W3C-WCAG22:2.5.8`

### ✅ 能力谱系全覆盖

不按『残疾人 vs 健全人』二分设计，而按能力谱系（含暂时性/情境性限制：抱婴儿、强光、骨折）设计同一方案

**示例**：语音输入既是视障者通道也是双手占用场景的通道

## 反模式（常见错误）

### ❌ 平均用户谬误

按统计平均人体尺寸设计固定参数

**排斥后果**：P5/P95 两端人群被直接排除——平均人不存在，只存在于统计幻象

### ❌ 残疾戏剧化

只考虑极端残障（全盲/瘫痪），忽略轻中度能力差异这一更大人群

**排斥后果**：覆盖了 1% 极端案例却排除了 30% 的轻中度限制用户

### ❌ 单一视觉反馈

所有状态反馈仅用视觉传达（颜色/图形）

**排斥后果**：低视力、色觉障碍、强光/眩光情境用户无法感知关键状态变化

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | {'summary': '屏幕阅读器兼容、触控目标尺寸、可调字体间距、减少动画选项'} |
| 工业设计 | {'summary': '把手尺寸与操作力、防误触、显示信息高度与角度'} |
| 建筑设计 | {'summary': '门宽、坡度、扶手高度与延伸、楼梯踏步'} |
| 服装设计 | {'summary': '扣件类型易操作性、活动不受限剪裁、感官友好面料'} |

---
*指南卡片：身体能力包容指南 ｜ v1.0 ｜ 状态：draft*
