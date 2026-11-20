#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 en 知识卡（i18n/en 生成视图）：
- i18n/en/02_Standards/: 25 张标准卡（元数据本就语言中立；title=英文原文）
- i18n/en/03_Metrics/:  75 张指标卡（name_en/description_en/measurement_method_en/
  thresholds_en/limitations_en/data_source_en/unit_en 全部来自注册表 en 字段）
单一权威源纪律：正文只用注册表字段；无 wikilink（en 站图独立，引用用纯文本 ID+英文名）。
前置：metrics.yaml 已合并 *_en 字段（scripts/merge_metric_en.py）。"""
import io
import json
import re
from pathlib import Path

import yaml
from jsonschema import validate as js_validate

ROOT = Path("D:/Project/InclusiveDesign")
EN = ROOT / "knowledge/i18n/en"

CAT_EN = {"auto": "Automated testing", "audit": "Manual audit", "user-test": "User testing",
          "TBD": "TBD"}
GRADE_EN = {"A": "A — mandatory standard clause", "B": "B — verified research",
            "C": "C — expert consensus", "D": "D — project inference"}


def q(s):
    if isinstance(s, bool):
        return "true" if s else "false"
    if s is None:
        return "null"
    s = str(s)
    if s == "":
        return '""'
    if re.fullmatch(r"[\d.:/ -]+", s):
        return json.dumps(s, ensure_ascii=False)
    if re.fullmatch(r"[\w./-]+", s) and not any(c in s for c in ":#{}[]&*!|>'\"%@`"):
        return s
    return json.dumps(s, ensure_ascii=False)


# 因素英文名映射
freg = yaml.safe_load(io.open(ROOT / "registry/factors.yaml", encoding="utf-8"))
factor_en = {}
for e in freg:
    if isinstance(e, dict):
        factor_en[e["id"]] = e.get("name_en") or e.get("name", "")

# ---------- 1. en 标准卡 ----------
std_reg = yaml.safe_load(io.open(ROOT / "registry/standards.yaml", encoding="utf-8"))
std_schema = json.loads((ROOT / "schema/standard.schema.json").read_text(encoding="utf-8"))

FACT_DIR = ROOT / "knowledge/01_Factors"
factor_stem = {}
std_usage = {}
for f in FACT_DIR.glob("*.md"):
    stem = f.stem
    fid = "-".join(stem.split("-")[:3])
    factor_stem[fid] = stem
    text = f.read_text(encoding="utf-8")
    for m in re.finditer(r"STD-([A-Z0-9-]+?)(?::[\w.]+)?['\"\]]", text):
        std_usage.setdefault("STD-" + m.group(1), set()).add(fid)

out_std = EN / "02_Standards"
out_std.mkdir(parents=True, exist_ok=True)
n_std = 0
for s in std_reg:
    js_validate(instance=s, schema=std_schema)
    sid = s["id"]
    fname = f"{sid}.md"
    lines = ["---",
             f"lang: en",
             f"id: {sid}",
             f"org: {q(s['org'])}",
             f"code: {q(s['code'])}",
             f"title: {json.dumps(s['title'], ensure_ascii=False)}",
             f"edition: {q(s['edition'])}",
             f"url: {q(s['url'])}",
             "scope:",
             *[f"  - {sc}" for sc in s["scope"]],
             f"status: {s['status']}",
             "---", ""]
    body = [f"# {s['title']}",
            "",
            f"> **{s['code']}** · {s['org']} · Edition {s['edition']} · Status: {s['status']}",
            "",
            f"Official link: {s['url']}",
            "",
            "## Scope",
            "",
            *[f"- `{sc}`" for sc in s["scope"]],
            "",
            "## Referenced by factors in this library",
            ""]
    used = std_usage.get(sid, set())
    if used:
        body.append("The following factor cards cite this standard:")
        body.append("")
        for fid in sorted(used):
            body.append(f"- {fid} — {factor_en.get(fid, '')}")
    else:
        body.append("(No factor card cites this standard directly — see "
                    "`registry/metrics.yaml` for indirect references via metric cards.)")
    body += ["", "> Clause-level citations live in `registry/standards.yaml` and each factor "
             "card's `refs.standards` (unverified content does not get written in).", ""]
    (out_std / fname).write_text("\n".join(lines + body), encoding="utf-8")
    n_std += 1
print(f"✅ en 标准卡: {n_std} → i18n/en/02_Standards/")

# ---------- 2. en 指标卡 ----------
met_reg = yaml.safe_load(io.open(ROOT / "registry/metrics.yaml", encoding="utf-8"))
met_schema = json.loads((ROOT / "schema/metric.schema.json").read_text(encoding="utf-8"))

out_met = EN / "03_Metrics"
out_met.mkdir(parents=True, exist_ok=True)
n_met = n_gap = 0
for m in met_reg:
    js_validate(instance=m, schema=met_schema)
    mid = m["id"]
    fid = m["factor_id"]
    name_en = m.get("name_en") or ""
    desc_en = m.get("description_en") or ""
    meth_en = m.get("measurement_method_en") or ""
    th_en = m.get("thresholds_en") or {}
    unit_en = m.get("unit_en") or ""
    lim_en = m.get("limitations_en") or ""
    ds_en = m.get("data_source_en") or []
    for label, v in (("description_en", desc_en), ("measurement_method_en", meth_en),
                     ("thresholds_en", th_en)):
        if not v:
            print(f"  ⚠ {mid} 缺 {label}")
            n_gap += 1
    lines = ["---",
             "lang: en",
             f"id: {mid}",
             f"factor_id: {fid}",
             f"name: {json.dumps(name_en, ensure_ascii=False)}",
             f"category: {m['category']}",
             f"description: {json.dumps(desc_en, ensure_ascii=False)}",
             f"measurement_method: {json.dumps(meth_en, ensure_ascii=False)}",
             "data_source:",
             *[f"  - {q(d)}" for d in ds_en],
             "thresholds:",
             f"    minimum: {json.dumps(th_en.get('minimum', ''), ensure_ascii=False)}",
             f"    good: {json.dumps(th_en.get('good', ''), ensure_ascii=False)}",
             f"    excellent: {json.dumps(th_en.get('excellent', ''), ensure_ascii=False)}",
             f"unit: {q(unit_en)}",
             "applicable_domains:",
             *[f"  - {d}" for d in (m.get("applicable_domains") or [])],
             ] + ([f"limitations: {json.dumps(lim_en, ensure_ascii=False)}"] if lim_en else []) + [
             "related_standards:",
             *[f"  - {q(r)}" for r in (m.get("related_standards") or [])],
             f"status: {m['status']}",
             f"evidence_grade: {m.get('evidence_grade', '')}",
             "---", ""]
    body = [f"# {name_en}",
            "",
            f"> Metric ID: `{mid}` · Category: **{CAT_EN.get(m['category'], m['category'])}** · "
            f"Evidence grade: **{GRADE_EN.get(m.get('evidence_grade', ''), m.get('evidence_grade', '—'))}** · "
            f"Status: {m['status']}",
            "",
            f"Related factor: {fid} — {factor_en.get(fid, '')}",
            "",
            "## Definition",
            "",
            desc_en or "—",
            "",
            "## Measurement",
            "",
            meth_en or "—",
            "",
            "## Data sources",
            "",
            *([f"- {d}" for d in ds_en] or ["- (see registry)"]),
            "",
            "## Tiers",
            "",
            "| Tier | Threshold |",
            "|------|-----------|",
            f"| Minimum compliance | {th_en.get('minimum', '—')} |",
            f"| Good | {th_en.get('good', '—')} |",
            f"| Excellent | {th_en.get('excellent', '—')} |",
            "",
            f"**Unit**: {unit_en or '—'}",
            "",
            "## Applicable domains",
            "",
            *[f"- {d}" for d in (m.get("applicable_domains") or [])]]
    if lim_en:
        body += ["", "## Limitations", "", lim_en]
    rs = m.get("related_standards") or []
    if rs:
        body += ["", "## Related standard clauses", ""]
        body += [f"- `{r}`" for r in rs]
    body += ["", "> Authoritative source: `registry/metrics.yaml` (this card is a navigation "
             "view; fields defer to the registry).", ""]
    (out_met / f"{mid}.md").write_text("\n".join(lines + body), encoding="utf-8")
    n_met += 1
print(f"✅ en 指标卡: {n_met} → i18n/en/03_Metrics/ | en 字段缺口: {n_gap}")

