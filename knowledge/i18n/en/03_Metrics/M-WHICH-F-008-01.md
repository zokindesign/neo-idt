---
lang: en
id: M-WHICH-F-008-01
factor_id: WHICH-F-008
name: "Interaction Mode Optionality"
category: audit
description: "Audit the coexistence, selectable default and switching cost of the interaction-mode inventory (direct manipulation/command/gesture/voice/shortcut)"
measurement_method: "Mode × task matrix audit + assessment of mode-switching steps and relearning cost"
data_source:
  - "Functionality audit"
  - "User testing"
thresholds:
    minimum: "Core tasks usable in ≥ 2 modes with a user-selectable default mode"
    good: "Switching in ≤ 1 step with no forced mode (keyboard shortcuts retained as touchscreen equivalents)"
    excellent: "Mode preference memory and context-aware recommendation (driving → voice)"
unit: "Mode count / switching-step count"
applicable_domains:
  - digital
  - industrial
limitations: "ISO 9241-110 5.5.4 individualization recommendations provide only indirect support; the mode checklist is tailored by product category."
related_standards:
  - "STD-ISO-9241-110:5.5.4"
status: draft
evidence_grade: B
---

# Interaction Mode Optionality

> Metric ID: `M-WHICH-F-008-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHICH-F-008 — Interaction Mode Preference

## Definition

Audit the coexistence, selectable default and switching cost of the interaction-mode inventory (direct manipulation/command/gesture/voice/shortcut)

## Measurement

Mode × task matrix audit + assessment of mode-switching steps and relearning cost

## Data sources

- Functionality audit
- User testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Core tasks usable in ≥ 2 modes with a user-selectable default mode |
| Good | Switching in ≤ 1 step with no forced mode (keyboard shortcuts retained as touchscreen equivalents) |
| Excellent | Mode preference memory and context-aware recommendation (driving → voice) |

**Unit**: Mode count / switching-step count

## Applicable domains

- digital
- industrial

## Limitations

ISO 9241-110 5.5.4 individualization recommendations provide only indirect support; the mode checklist is tailored by product category.

## Related standard clauses

- `STD-ISO-9241-110:5.5.4`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

