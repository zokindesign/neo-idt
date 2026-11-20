---
lang: en
id: M-WHERE-F-001-01
factor_id: WHERE-F-001
name: "Environmental Envelope Adaptation"
category: audit
description: "Define the usage environmental envelope (illuminance/noise/weather/hand conditions) and test item by item how well functions are maintained at the envelope edges"
measurement_method: "Environmental envelope × function matrix tested on site or estimated (lighting and acoustics referenced to ISO 21542:2021 cl.5.4/5.7)"
data_source:
  - "Scenario definitions"
  - "Field/laboratory testing"
thresholds:
    minimum: "Full functionality available under nominal environments (e.g., ordinary indoor lighting)"
    good: "Core functions usable under strong/low light and high noise"
    excellent: "Automatic adaptation across all scenarios (brightness/contrast/haptic feedback switching)"
unit: "Environment-item pass rate %"
applicable_domains:
  - digital
  - industrial
  - architecture
limitations: "Building-space projects must be field-measured against ISO 21542 lighting/acoustics clauses."
related_standards:
  - "STD-ISO-21542:5.4"
  - "STD-ISO-21542:5.7"
status: draft
evidence_grade: C
---

# Environmental Envelope Adaptation

> Metric ID: `M-WHERE-F-001-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHERE-F-001 — Physical Environment

## Definition

Define the usage environmental envelope (illuminance/noise/weather/hand conditions) and test item by item how well functions are maintained at the envelope edges

## Measurement

Environmental envelope × function matrix tested on site or estimated (lighting and acoustics referenced to ISO 21542:2021 cl.5.4/5.7)

## Data sources

- Scenario definitions
- Field/laboratory testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Full functionality available under nominal environments (e.g., ordinary indoor lighting) |
| Good | Core functions usable under strong/low light and high noise |
| Excellent | Automatic adaptation across all scenarios (brightness/contrast/haptic feedback switching) |

**Unit**: Environment-item pass rate %

## Applicable domains

- digital
- industrial
- architecture

## Limitations

Building-space projects must be field-measured against ISO 21542 lighting/acoustics clauses.

## Related standard clauses

- `STD-ISO-21542:5.4`
- `STD-ISO-21542:5.7`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

