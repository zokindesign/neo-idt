# Schema 目录说明

本目录包含包容性设计工具项目的五套核心 JSON Schema 定义及校验脚本，用于保证知识库结构的一致性与机器可读性。

## 文件清单

| 文件 | 说明 | 校验对象 |
|------|------|----------|
| `factor.schema.json` | 因素卡片 Schema | `knowledge/01_Factors/*.md`、`02_因素分类/**/*.md`（迁移前） |
| `rule.schema.json` | 规则注册表 Schema | `registry/rules.yaml` |
| `metric.schema.json` | 指标卡片 Schema | `registry/metrics.yaml`、`03_量化指标/metrics/*.md` |
| `guide.schema.json` | 设计指南 Schema | `knowledge/04_Guides/*.md` |
| `standard.schema.json` | 标准引用 Schema | `registry/standards.yaml`、`knowledge/02_Standards/*.md` |
| `validate.py` | 统一校验脚本 | 所有上述文件 |

## 依赖安装

```bash
pip install jsonschema pyyaml python-frontmatter
```

## 使用方法

```bash
# 校验全部
python schema/validate.py

# 仅校验因素卡片
python schema/validate.py --schema factor

# 详细输出
python schema/validate.py --verbose

# 指定项目根目录（默认当前目录）
python schema/validate.py --path D:/Project/InclusiveDesign
```

## 返回码

- `0`：全部通过
- `1`：存在校验错误
- `2`：用法错误或依赖缺失

## CI 集成建议

在 `.github/workflows/validate.yml` 中添加：

```yaml
name: Schema Validation
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install jsonschema pyyaml python-frontmatter
      - run: python schema/validate.py
```

## Schema 版本管理

- Schema 版本与项目里程碑绑定：v3.0 对应 M0 里程碑
- 破坏性变更需同时更新：Schema 文件、对应的 YAML/Markdown 卡片、迁移脚本
- 变更记录见项目根目录 `内部计划文档` 的“变更记录”章节

## 字段设计原则

1. **ID 统一性**：所有实体 ID 遵循统一模式（因素 `DIM-F-NNN`、规则 `TYPE-NNN`、指标 `M-因素ID-NN`、指南 `G-因素ID`、标准 `STD-ORG-CODE`）
2. **引用完整性**：跨实体引用必须使用 ID，禁止使用自然语言名称或维度序号
3. **双语字段**：所有面向用户的名称字段均提供 `name`/`name_en` 双语对照
4. **证据分级**：`evidence`/`evidence_grade` 字段强制四级（A=标准强制/B=研究文献/C=专家共识/D=推理假设），WP-C 阶段逐卡重评
5. **状态机**：`status` 字段控制生命周期（draft → review → approved → deprecated）
6. **可扩展性**：通过 `additionalProperties: false` 禁止未定义字段，新增字段需先改 Schema 再改数据

