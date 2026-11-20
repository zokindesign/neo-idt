---
lang: en
id: M-WHERE-F-001-02
factor_id: WHERE-F-001
name: "Contrast Maintenance Under Glare"
category: audit
description: "Measure on site whether the foreground-to-background contrast still meets WCAG 1.4.3 (4.5:1) and 1.4.11 (3:1) requirements under strong light / high ambient illuminance"
measurement_method: "Define the target-environment illuminance range → measure the actual contrast of body text and key UI components at peak screen brightness → record the readability of key information"
data_source:
  - "Illuminance-meter measurement"
  - "Contrast-measurement tools"
thresholds:
    minimum: "Body text ≥4.5:1 and UI components ≥3:1 (measured under strong light)"
    good: "Above minimum, both highlighted and disabled states are distinguishable"
    excellent: "Automatic high-contrast or brightness-adaptive mode is provided"
unit: "Contrast ratio (measured)"
applicable_domains:
  - universal
limitations: "The ambient illuminance range must be defined in advance; peak brightness varies widely across screens, so the test device must be recorded."
related_standards:
  - "STD-W3C-WCAG22:1.4.3"
  - "STD-W3C-WCAG22:1.4.11"
status: draft
evidence_grade: A
---

# Contrast Maintenance Under Glare

> Metric ID: `M-WHERE-F-001-02` · Category: **Manual audit** · Evidence grade: **A — mandatory standard clause** · Status: draft

Related factor: WHERE-F-001 — Physical Environment

## Definition

Measure on site whether the foreground-to-background contrast still meets WCAG 1.4.3 (4.5:1) and 1.4.11 (3:1) requirements under strong light / high ambient illuminance

## Measurement

Define the target-environment illuminance range → measure the actual contrast of body text and key UI components at peak screen brightness → record the readability of key information

## Data sources

- Illuminance-meter measurement
- Contrast-measurement tools

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Body text ≥4.5:1 and UI components ≥3:1 (measured under strong light) |
| Good | Above minimum, both highlighted and disabled states are distinguishable |
| Excellent | Automatic high-contrast or brightness-adaptive mode is provided |

**Unit**: Contrast ratio (measured)

## Applicable domains

- universal

## Limitations

The ambient illuminance range must be defined in advance; peak brightness varies widely across screens, so the test device must be recorded.

## Related standard clauses

- `STD-W3C-WCAG22:1.4.3`
- `STD-W3C-WCAG22:1.4.11`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

