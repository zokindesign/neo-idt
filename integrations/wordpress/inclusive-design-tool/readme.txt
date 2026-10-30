=== Inclusive Design Tool ===
Contributors: inclusivedesign
Tags: accessibility, inclusive design, design tools, wcag, audit
Requires at least: 6.0
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

包容性设计因素决策系统——从"不知道要考虑什么"到"可审计的包容性边界承诺"。

== Description ==

面向全领域设计师（数字/工业/建筑/服装/服务）的包容性设计工作流工具：

* **探究**：任务描述器 + 因素推荐器（七维 65 因素，9 条激活规则自动推荐 + 全因素浏览器）
* **定义**：边界定义器——65 项量化指标、三档承诺阈值（最低/良好/优秀）、证据等级 A–D，生成《包容性边界文档》（JSON/Markdown 导出，无加权总分）
* **测试**：审计清单生成器——auto/audit/user-test 三层拆分，逐项通过/未通过/部分通过 + 证据链接，导出验收报告
* **协作**：WordPress 用户即团队成员，角色映射（manage_options→admin，edit_posts→editor，其余→viewer）
* **审计溯源**：服务端权威审计日志 + 边界文档版本快照，数据库触发器强制不可篡改

知识库（因素/指标/指南/案例/标准）来自 InclusiveDesign 开源研究项目，CC BY-SA 4.0。

== Installation ==

1. 上传 `inclusive-design-tool` 目录到 `/wp-content/plugins/`
2. 激活插件（自动建表：MariaDB ≥ 10.2 / MySQL ≥ 8.0，InnoDB，utf8mb4）
3. 在任意页面/文章插入短代码 `[inclusive_design_tool]`
4. 管理员与编辑默认获得使用权限（capability `incl_use_tool`）

== Frequently Asked Questions ==

= 为什么没有"包容性总分"？ =

设计承诺清单刻意不提供加权总分（Goodhart 防御）：分数会诱导"刷分"而非真实解决。逐项承诺 + 逐项审计是本工具的核心立场。

= 数据存在哪里？ =

项目 Profile 与边界文档存于本站数据库（wp_incl_* 前缀表）；逐项审计状态存于浏览器 IndexedDB（个人工作区），边界文档每次保存自动落不可变版本快照。

= 要求什么数据库？ =

MariaDB ≥ 10.2（表达式 DEFAULT 语法）或 MySQL ≥ 8.0，InnoDB 引擎。已在 MariaDB 11.8 实测（15 项对抗性测试全绿：不可篡改触发器/版本快照/FK 级联/JSON 校验）。

== Changelog ==

= 0.1.0 =
* 四阶段工作流 MVP（探究/定义/建构跳转 wiki/测试）
* 多人单组织：WP 用户即成员，角色自动映射
* 服务端审计日志 + 边界文档版本快照（数据库层不可篡改）
* 双语 UI（zh-CN / en），数据包内容 hash 版本化
