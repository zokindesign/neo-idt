# 指标注册模板（METRIC-TEMPLATE）

> **指标不直接手写卡片**：在 `registry/metrics.yaml` 增加条目后运行 `python schema/generate_cards.py`，自动生成 `knowledge/metrics/M-*.md`（卡片为人读视图，会被生成器覆盖）。字段约束以 `schema/metric.schema.json` 为准。

## 注册表条目模板（追加到 registry/metrics.yaml）

```yaml
- id: M-WHO-F-000-01            # ← M-<因素ID>-<两位序号>
  factor_id: WHO-F-000          # ← 须已存在于 registry/factors.yaml
  name: 指标中文名
  name_en: Metric English Name
  category: audit               # ← auto(自动可测)|audit(人工审计)|user-test(用户测试)|TBD
  description: 指标定义与测量对象说明
  measurement_method: 具体测量方法/公式/步骤/工具
  data_source: ["用户测试记录", "自动扫描器", "自评量表"]
  thresholds:                   # ← 三档阈值；能引用 A 级标准的档位必须引用（不核验不写入）
    minimum: "符合 WCAG 2.2 SC 1.4.3（对比度 ≥ 4.5:1）"
    good: "≥ 7:1"
    excellent: "≥ 10:1 或提供用户自定义"
  unit: 百分比                   # ← 百分比|秒|分贝|毫米|档位数|是/否 …
  applicable_domains: [digital, industrial, architecture, fashion, service, universal]
  limitations: 适用条件、误差来源、不适用场景
  related_standards: ["STD-W3C-WCAG22:1.4.3"]
  status: draft                 # ← placeholder 仅允许 5 字段；正式条目须全字段
  evidence_grade: C             # ← A|B|C|D（thresholds 各档可分别注明依据）
```

## 校验

```bash
python schema/validate.py --schema metric   # 单表校验
python schema/generate_cards.py             # 重新生成标准卡与指标卡
```

> 注意：`status: placeholder` 时仅需 5 个必填字段，可用于占位；转正时必须补齐全字段并通过全量校验。
