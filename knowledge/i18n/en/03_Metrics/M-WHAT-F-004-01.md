---
lang: en
id: M-WHAT-F-004-01
factor_id: WHAT-F-004
name: "Persistence & Resumption Completeness"
category: audit
description: "For long tasks spanning sessions/devices, audit auto-save, resume entry points, state synchronization, and elimination of redundant input (WCAG 3.3.7)"
measurement_method: "Session interruption/device-switch testing → data save rate/resumption success rate; count of repeated input fields within the same flow (WCAG 2.2 SC 3.3.7 Redundant Entry Level A check)"
data_source:
  - "Task audit"
  - "Cross-device testing"
thresholds:
    minimum: "Known information not re-entered within the same flow (WCAG 3.3.7 Level A mandatory)"
    good: "Autosave + resumption entry points covering all long tasks"
    excellent: "Real-time cross-device sync and version history"
unit: "Resume success rate %"
applicable_domains:
  - digital
  - service
limitations: "WCAG 3.3.7 does not require cross-session persistence (the Understanding document states this explicitly); cross-session persistence is a Good/Excellent-tier item."
related_standards:
  - "STD-W3C-WCAG22:3.3.7"
  - "STD-W3C-WCAG22:3.2.3"
status: draft
evidence_grade: B
---

# Persistence & Resumption Completeness

> Metric ID: `M-WHAT-F-004-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHAT-F-004 — Task Persistence Requirement

## Definition

For long tasks spanning sessions/devices, audit auto-save, resume entry points, state synchronization, and elimination of redundant input (WCAG 3.3.7)

## Measurement

Session interruption/device-switch testing → data save rate/resumption success rate; count of repeated input fields within the same flow (WCAG 2.2 SC 3.3.7 Redundant Entry Level A check)

## Data sources

- Task audit
- Cross-device testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Known information not re-entered within the same flow (WCAG 3.3.7 Level A mandatory) |
| Good | Autosave + resumption entry points covering all long tasks |
| Excellent | Real-time cross-device sync and version history |

**Unit**: Resume success rate %

## Applicable domains

- digital
- service

## Limitations

WCAG 3.3.7 does not require cross-session persistence (the Understanding document states this explicitly); cross-session persistence is a Good/Excellent-tier item.

## Related standard clauses

- `STD-W3C-WCAG22:3.3.7`
- `STD-W3C-WCAG22:3.2.3`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

