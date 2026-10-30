# 指南卡模板（GUIDE-TEMPLATE）

> 指南卡为**手写内容**（社区主贡献面），直接编辑 md；字段约束以 `schema/guide.schema.json` 为准。要求：`patterns` ≥2 条、`anti_patterns` ≥1 条；每条标准引用**可核验**（标准编号+条款号+官方 URL），无标准依据的须在 description 注明"设计经验，无标准依据"。

```yaml
---
id: G-WHO-F-000             # ← G-<因素ID>（一因素一指南卡）
factor_id: WHO-F-000        # ← 须已存在于 registry/factors.yaml
name: 指南中文名
name_en: Guide English Title
patterns:                   # ≥2 条
  - name: 模式名称
    description: 具体做法 + 适用条件
    domain: universal       # ← digital|industrial|architecture|fashion|service|universal
    example: 具体实例或代码片段（可选）
    refs: ["STD-W3C-WCAG22:1.4.3"]   # 可核验标准引用；经验做法则省略 refs 并注明
  - name: 另一模式
    description: …
    domain: digital
anti_patterns:              # ≥1 条
  - name: 反模式名称
    description: 常见错误做法
    consequence: 导致的排斥后果
    domain: universal
cases: []                   # ← 引用已存在的案例卡：CASE-001 …（对象或 ID 均可）
cross_domain_mapping: {}    # ← 仅偏好类因素必填：digital / industrial / architecture / fashion 四键
status: draft               # ← draft|review|approved
version: "1.0"
---
```

## 正文推荐结构

```markdown
# 指南中文名（Guide English Title）

<!-- 可选：按模式逐节展开操作要点、代码示例、验证方法；
     文件名 = <ID>-<slug>.md（kebab-case 英文）；
     双链 [[<因素ID>-<slug>]] 与 [[CASE-NNN-<slug>]] 在正文中自然引用 -->
```

## 提交前自检

```bash
python schema/validate.py --schema guide    # schema 校验
python schema/audit_links.py                # 全库双链可解析
```
