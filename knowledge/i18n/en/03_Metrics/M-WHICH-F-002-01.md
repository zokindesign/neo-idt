---
lang: en
id: M-WHICH-F-002-01
factor_id: WHICH-F-002
name: "Exploration Depth Tiers"
category: audit
description: "Audit the tiered design of progressive disclosure levels (basic/advanced/expert) and 'dangerous operation protection'"
measurement_method: "Feature inventory audit classified by tier + novice/expert dual-perspective walkthrough"
data_source:
  - "Information-architecture audit"
  - "Dual-perspective walkthrough"
thresholds:
    minimum: "Core paths require no forced exploration (fewest clicks, direct access)"
    good: "'Simple/Detailed' dual mode or tiered entry points provided"
    excellent: "User-selected exploration depth with preference memory"
unit: "Level coverage %"
applicable_domains:
  - digital
  - industrial
related_standards:
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: C
---

# Exploration Depth Tiers

> Metric ID: `M-WHICH-F-002-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHICH-F-002 — Exploration Depth Preference

## Definition

Audit the tiered design of progressive disclosure levels (basic/advanced/expert) and 'dangerous operation protection'

## Measurement

Feature inventory audit classified by tier + novice/expert dual-perspective walkthrough

## Data sources

- Information-architecture audit
- Dual-perspective walkthrough

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Core paths require no forced exploration (fewest clicks, direct access) |
| Good | 'Simple/Detailed' dual mode or tiered entry points provided |
| Excellent | User-selected exploration depth with preference memory |

**Unit**: Level coverage %

## Applicable domains

- digital
- industrial

## Related standard clauses

- `STD-ISO-9241-110:5.5`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

