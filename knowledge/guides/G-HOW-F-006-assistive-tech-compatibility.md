---
id: G-HOW-F-006
factor_id: HOW-F-006
name: "辅助技术互操作指南"
name_en: Assistive Technology Interoperability Guide
patterns:
  - name: "标准无障碍 API"
    description: "界面组件用平台原生无障碍 API（ARIA/UIAutomation/AT-SPI），自绘控件补齐语义角色"
    domain: digital
    example: "自定义下拉菜单带完整 ARIA role/state/键盘行为"
    refs: ["STD-EN-301549:9.4"]
  - name: "焦点秩序正确"
    description: "焦点顺序与视觉/逻辑顺序一致；焦点可见不消失；模态焦点圈闭"
    domain: digital
    example: "Tab 顺序按阅读顺序；弹窗打开焦点进入、关闭焦点归还"
    refs: ["STD-W3C-WCAG22:4.1"]
  - name: "文本替代全覆盖"
    description: "全部非文本内容有等价文本替代（alt/label/说明）；图片式按钮有可读名称"
    domain: digital
    example: "图标按钮带 aria-label；装饰图 alt 为空"
  - name: "真实用户验证"
    description: "AT 兼容不能只靠模拟器——招募真实 AT 用户进入测试环节"
    domain: digital
    example: "发布前 5 名屏幕阅读器用户完成核心任务走查"
anti_patterns:
  - name: "AT 事后补丁"
    description: "开发完成后『加无障碍』"
    consequence: "语义残缺的界面打 ARIA 补丁不如原生组件一行标签——无障碍是架构决策不是撒盐"
  - name: "焦点黑洞"
    description: "焦点消失/键盘陷阱/顺序混乱"
    consequence: "屏幕阅读器用户直接失联——焦点管理是 AT 互操作的第一张多米诺"
cases:
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
  - id: CASE-005
    title: "WebAIM Million 2025：全网无障碍基线现状"
    domain: digital
    summary: "WebAIM 对 top 100 万网站主页的年度扫描：94.8% 主页存在可检测的 WCAG 2 失败项，平均 51.1 个错误/页（2024: 56.8）；…"
  - id: CASE-007
    title: "Robles v. Domino's：网站无障碍的合规风险判例"
    domain: digital
    summary: "盲人用户 Robles 因 Domino's 网站与 App 无法被屏幕阅读器操作而起诉（ADA Title III）。第九巡回法院 2019-01-15 裁定…"
cross_domain_mapping:
  digital:
    summary: "ARIA 语义、焦点管理、真实用户测试"
  industrial:
    summary: "开关/眼动仪等替代输入支持"
  architecture:
    summary: "盲道/声导盲等物理层辅助通道"
  fashion:
    summary: "盲文标签、语音交互衣物"
status: draft
version: '1.0'
---

# 辅助技术互操作指南 (Assistive Technology Interoperability Guide)

> 关联因素：[[HOW-F-006-assistive-tech-compatibility|HOW-F-006 辅助技术兼容性]] ｜ 指南 ID：`G-HOW-F-006`

## 设计模式（正模式）

### ✅ 标准无障碍 API

界面组件用平台原生无障碍 API（ARIA/UIAutomation/AT-SPI），自绘控件补齐语义角色

**示例**：自定义下拉菜单带完整 ARIA role/state/键盘行为

**标准依据**：`STD-EN-301549:9.4`

### ✅ 焦点秩序正确

焦点顺序与视觉/逻辑顺序一致；焦点可见不消失；模态焦点圈闭

**示例**：Tab 顺序按阅读顺序；弹窗打开焦点进入、关闭焦点归还

**标准依据**：`STD-W3C-WCAG22:4.1`

### ✅ 文本替代全覆盖

全部非文本内容有等价文本替代（alt/label/说明）；图片式按钮有可读名称

**示例**：图标按钮带 aria-label；装饰图 alt 为空

### ✅ 真实用户验证

AT 兼容不能只靠模拟器——招募真实 AT 用户进入测试环节

**示例**：发布前 5 名屏幕阅读器用户完成核心任务走查

## 反模式（常见错误）

### ❌ AT 事后补丁

开发完成后『加无障碍』

**排斥后果**：语义残缺的界面打 ARIA 补丁不如原生组件一行标签——无障碍是架构决策不是撒盐

### ❌ 焦点黑洞

焦点消失/键盘陷阱/顺序混乱

**排斥后果**：屏幕阅读器用户直接失联——焦点管理是 AT 互操作的第一张多米诺

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | ARIA 语义、焦点管理、真实用户测试 |
| 工业设计 | 开关/眼动仪等替代输入支持 |
| 建筑设计 | 盲道/声导盲等物理层辅助通道 |
| 服装设计 | 盲文标签、语音交互衣物 |

---
*指南卡片：辅助技术互操作指南 ｜ v1.0 ｜ 状态：draft*
