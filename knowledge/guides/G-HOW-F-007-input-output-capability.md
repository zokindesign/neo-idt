---
id: G-HOW-F-007
factor_id: HOW-F-007
name: "输入输出通道指南"
name_en: "Input/Output Channel Guide"
patterns:
  - name: "多通道并存"
    description: "输入 ≥2 通道（触控+键盘/语音）、输出 ≥2 通道（视觉+声音/触觉）——任何单通道不构成唯一路径"
    domain: digital
    example: "全部操作：触摸 + 键盘快捷键双通道"
    refs: ["STD-EN-301549:11.5.2"]
  - name: "IO 映射可自定义"
    description: "键位重映射/灵敏度调节/通道开关——用户的身体条件决定最舒适的映射，不由硬件默认包办"
    domain: universal
    example: "单手用户交换左右键位；振动强度按需调"
  - name: "外接设备开放"
    description: "提供标准输入输出 API/接口（HID/蓝牙/USB），第三方辅助设备即插即用"
    domain: industrial
    example: "设备预留标准 HID 接口供开关/摇杆/眼动仪接入"
  - name: "反馈同步多模"
    description: "关键状态反馈多模同步（视觉+声音+触觉），且各模态语义一致"
    domain: digital
    example: "支付成功：对勾动画 + 短音 + 轻震同语义"
anti_patterns:
  - name: "通道独裁"
    description: "某功能只经一种输入/输出通道"
    consequence: "该通道能力受限用户即被锁死——通道冗余是信息可达的保险"
  - name: "映射霸权"
    description: "不允许任何自定义调整"
    consequence: "左利手、单手、震颤用户的微调需求被无视——自定义不是极客特权是适配刚需"
cases:
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
  - id: CASE-002
    title: "Xbox Adaptive Controller：从黑客马拉松到 V&A 收藏"
    domain: industrial
    summary: "微软 2018 年推出 99.99 美元的 Xbox Adaptive Controller：19 个杰克端口替代传统手柄按键，与 AbleGamers、脑瘫基…"
cross_domain_mapping:
  digital:
    summary: "多通道、可重映射、开放接口"
  industrial:
    summary: "物理按钮+旋钮+脚踏多输入"
  architecture:
    summary: "多高度多模态交互点"
  fashion:
    summary: "磁吸扣件、语音交互、盲文触觉"
status: draft
version: '1.0'
---

# 输入输出通道指南 (Input/Output Channel Guide)

> 关联因素：[[HOW-F-007-input-output-capability|HOW-F-007 输入输出能力]] ｜ 指南 ID：`G-HOW-F-007`

## 设计模式（正模式）

### ✅ 多通道并存

输入 ≥2 通道（触控+键盘/语音）、输出 ≥2 通道（视觉+声音/触觉）——任何单通道不构成唯一路径

**示例**：全部操作：触摸 + 键盘快捷键双通道

**标准依据**：`STD-EN-301549:11.5.2`

### ✅ IO 映射可自定义

键位重映射/灵敏度调节/通道开关——用户的身体条件决定最舒适的映射，不由硬件默认包办

**示例**：单手用户交换左右键位；振动强度按需调

### ✅ 外接设备开放

提供标准输入输出 API/接口（HID/蓝牙/USB），第三方辅助设备即插即用

**示例**：设备预留标准 HID 接口供开关/摇杆/眼动仪接入

### ✅ 反馈同步多模

关键状态反馈多模同步（视觉+声音+触觉），且各模态语义一致

**示例**：支付成功：对勾动画 + 短音 + 轻震同语义

## 反模式（常见错误）

### ❌ 通道独裁

某功能只经一种输入/输出通道

**排斥后果**：该通道能力受限用户即被锁死——通道冗余是信息可达的保险

### ❌ 映射霸权

不允许任何自定义调整

**排斥后果**：左利手、单手、震颤用户的微调需求被无视——自定义不是极客特权是适配刚需

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 多通道、可重映射、开放接口 |
| 工业设计 | 物理按钮+旋钮+脚踏多输入 |
| 建筑设计 | 多高度多模态交互点 |
| 服装设计 | 磁吸扣件、语音交互、盲文触觉 |

---
*指南卡片：输入输出通道指南 ｜ v1.0 ｜ 状态：draft*
