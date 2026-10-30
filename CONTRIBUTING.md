# 贡献指南与收录 SOP（Contributing Guide）

**版本**：v1.1（开源发布版）
**适用**：全部外部贡献（指南卡/案例卡/标准条目/因素卡修订/代码/翻译）
**卡片模板**：`knowledge/templates/`（factor / metric / guide 三张，与 `schema/` 六套 JSON Schema 一一对应）

---

## 一、项目结构与贡献入口

```
neo-idt/
├── registry/*.yaml          # 权威数据源：factors/rules/standards/metrics —— 高门槛
├── knowledge/               # 人读知识卡片（生成或手写）—— 主要贡献面
│   ├── factors/             #   因素卡（65）
│   ├── standards/           #   标准条款卡（25，生成视图）
│   ├── metrics/             #   指标卡（65，生成视图）
│   ├── guides/              #   指南卡（64）★ 最欢迎社区贡献
│   ├── cases/               #   案例卡（8）★ 第二贡献面
│   └── templates/           #   三张卡片模板
├── schema/                  # JSON Schema + validate.py + generate_cards.py + audit_links.py
├── app/                     # Web 应用（Vue 3 + TypeScript）
└── docs/                    # 理论文档、ADR、架构、部署、数据管线
```

**单一权威源纪律**：因素/标准/指标的结构化数据在 `registry/*.yaml`，卡片是生成视图。**结构化贡献入口统一为 yaml**；`knowledge/standards/` 与 `knowledge/metrics/` 由 `schema/generate_cards.py` 生成，**不接受直接手改**（会被下次生成覆盖）。指南卡与案例卡为手写内容，直接编辑 md。

## 二、收录 SOP（Submission Checklist）

### 2.1 指南卡贡献（模式/反模式）

1. 复制 `knowledge/templates/GUIDE-TEMPLATE.md`（含 front-matter 必填字段）
2. 必填：`id`（`G-<因素ID>`，如 `G-WHO-F-001`）、`name/name_en`、`factor_id`（关联因素）、`patterns[]`（≥2 条，每条含"做法+依据"）、`anti_patterns[]`（≥1 条）
3. 每条 pattern 的标准引用必须**可核验**：给出标准编号+条款号+官方 URL，或在 description 中注明"设计经验，无标准依据"
4. 提交前自检：`python schema/validate.py --schema guide`

### 2.2 案例卡贡献

1. 必须基于**公开可核验**事件（诉讼/召回/发布物/研究报告）
2. 必填：`id`（CASE-<NNN>-<slug>）、`type`（lawsuit/recall/success/failure）、`date`、`sources[]`（每条含 URL 与访问日期）
3. **红线**：不可核验的案例一律拒收（对证据真实性的项目纪律，不可妥协）

### 2.3 标准条目/因素修订（高门槛）

- 需先开 issue 讨论接受
- 引用纪律：**不核验不写入**——每个标准条款须给出官方来源 URL；核验不到的宁缺毋滥
- 证据等级如实标注（A/B/C/D），不夸大；条目沿用证据分级注释（A=标准条款 B=已核验研究 C=专家共识 D=推理）

### 2.4 提交流程

```
fork → 新分支 → 修改 → python schema/validate.py（本地全绿）
     → python schema/audit_links.py（链接全可解析）
     → PR（描述变更动机与来源）→ CI 门禁（validate + 链接审计）
     → 人工 review（知识库内容：设计研究背景 reviewer 必需）
     → merge → 生成器重跑 → 下一版数据包/wiki 随 tag 发布
```

## 三、代码贡献（app/ 与 schema/）

- 分支规范：`feat/<模块>-<描述>` / `fix-<issue#>`
- 门禁：`npm run build` 通过 + axe 扫描 0 严重违规（UI 变更）+ `python schema/validate.py` 全绿（数据/校验器变更）
- 行为：应用以本地优先（IndexedDB）为默认，云同步为可选能力——不要让核心功能依赖账号

## 四、翻译贡献（低门槛入口）

- `app/src/i18n/`：`en.ts` 缺失键补齐
- 卡片 `name_en` 字段校对——最轻量的有效贡献

## 五、行为准则

- 尊重残障群体：案例与表述遵循 person-first 或 identity-first 的当事人自述用词
- 无障碍的文档自身：贡献的 md 应保持可读性（语义结构、alt 文本）
- 争议走 issue 公开讨论，不私改注册表
- 完整版见 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

---

## 标签

#贡献指南 #SOP #收录流程 #开源
