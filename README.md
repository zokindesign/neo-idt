# neo-idt

Neo Inclusive Design Toolkit | 包容性设计工具集

**An evidence-graded, cross-domain toolkit for inclusive design** — help designers *explore, define, build, and audit* the inclusiveness of a design with quantifiable criteria, not just principles.

![License: MIT](https://img.shields.io/badge/Code-MIT-blue) ![Content License](https://img.shields.io/badge/Content-CC_BY--SA_4.0-lightgrey) ![Data License](https://img.shields.io/badge/Data-CC_BY_4.0-lightgrey) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

> 中文说明见 [README.zh-CN.md](./README.zh-CN.md)

## Why NEO-IDT?

When designers start a project, they rarely know **which factors of human diversity** they should consider — and the factors they can think of are rarely comprehensive. Existing tools fall into three camps, each with a gap:

| Tool type | Examples | Gap |
|-----------|----------|-----|
| Principle frameworks | Microsoft Inclusive Design, Universal Design principles | Principles only — no factors, no metrics, not operational |
| Compliance checkers | axe, WAVE, Lighthouse, Stark | A digital-accessibility subset, compliance-oriented, no boundary definition |
| Domain-specific guides | XAG (games), building codes | Single domain, no cross-domain transfer |

NEO-IDT is **coverage-oriented**: a systematic factor taxonomy plus quantified evaluation criteria, so a designer can define *the inclusiveness boundary of this specific design* — and audit against it.

## What's inside

- **Seven dimensions + a compliance baseline layer**: WHO (user) · WHERE (environment) · WHEN (time) · WHAT (task) · WHICH (preference) · WHY (business) · HOW (technology), plus **RUL** — a binary compliance baseline (never traded off, never weighted).
- **65 factors** (58 factors + 7 compliance baselines), each classified as *ability* (→ provide **alternatives**) or *preference* (→ provide **choice space**), with cross-domain mappings (digital / industrial / architecture / fashion / service).
- **65 metrics** in three measurement layers (automated / audit / user-test) with three-tier thresholds (minimum / good / excellent).
- **64 design guide cards** (237 patterns / 158 anti-patterns / 256 cross-domain mappings) and **8 verified cases**.
- **Evidence grades on everything**: `A` mandatory standard clause · `B` verified research · `C` expert consensus · `D` project inference — *unverified content does not get written in*.
- **The inclusiveness boundary is a commitment list, not a score**: one row per factor — `factor × metric × target tier` (e.g. `WHO-F-001 × contrast × good (≥7:1)`). No weighted single total, by design (Goodhart's law: once the score becomes the target, designers optimize the score, not inclusiveness).

## The four phases

```
Explore      structured task profile → factor recommendation (activation rules)
Define       confirm factors → bind metrics & tiers → Inclusivity Boundary (commitment list)
Build        design with guide cards, wiki links, and verified cases
Audit        item-by-item checklist generated from the boundary (automated / audit / user-test)
```

The web app ships the Explore, Define, and Audit views; the Build phase is powered by the knowledge base (`knowledge/`) and its published wiki.

## Repository map

| Path | What it is | License |
|------|-----------|---------|
| `knowledge/` | Human-readable knowledge cards (factors / standards / metrics / guides / cases) | CC BY-SA 4.0 |
| `registry/` | Machine-readable registries — the single source of truth (`factors/metrics/rules/standards.yaml`) | CC BY 4.0 |
| `schema/` | 6 JSON Schemas + validator, link auditor, card generator | Data CC BY 4.0 · scripts MIT |
| `app/` | Web app (Vue 3 + TypeScript + Pinia; IndexedDB local-first, optional Supabase cloud sync) | MIT |
| `docs/` | Framework docs, ADRs, architecture, deployment, data pipeline | CC BY-SA 4.0 |

**Single-source discipline**: structured data lives in `registry/*.yaml`; cards in `knowledge/standards/` and `knowledge/metrics/` are *generated views* (`python schema/generate_cards.py`) and should not be hand-edited. Guide and case cards are hand-written.

## Quick start

```bash
# Run the web app
cd app
npm install
npm run dev          # http://localhost:5173

# Optional: enable cloud sync (any Supabase project)
#   set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in app/.env.local
# Without configuration the app is fully local (IndexedDB).

# Regenerate the versioned data pack from the registries
node app/scripts/build-data.mjs   # → app/public/data/data-pack-<hash>.json
```

### Validate the knowledge base

```bash
pip install pyyaml python-frontmatter jsonschema
python schema/validate.py        # schemas + cross-registry referential integrity
python schema/audit_links.py     # all wiki links resolve
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). The main contribution surfaces are **guide cards** and **case cards**; registry changes go through an issue first. Every standard reference must be verifiable (clause number + official URL) — unverified content is rejected.

## License

- Code (`app/`, `schema/` scripts): **MIT** — see [LICENSE](./LICENSE)
- Knowledge content (`knowledge/`, `docs/`): **CC BY-SA 4.0** — see [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)
- Data & schemas (`registry/`): **CC BY 4.0**
- The name **NEO Inclusive Design Toolkit** and its logo are **trademark reserved** and not covered by the open-source licenses — see [NOTICE.md](./NOTICE.md)

## Acknowledgments

Evidence base includes (clause-level references in `registry/standards.yaml`): WCAG 2.2, EN 301 549, Section 508, ISO 9241 series, ISO 21542, ISO 7250, ANSI/ANSUR II, GB 55019-2021, GB/T 10000-2023, GDPR, PIPL, ISO 24495-1, NASA-TLX, and more. Methodology inspirations: Microsoft Inclusive Design, Universal Design, Design Council Double Diamond.
