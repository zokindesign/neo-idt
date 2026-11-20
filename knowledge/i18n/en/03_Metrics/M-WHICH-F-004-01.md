---
lang: en
id: M-WHICH-F-004-01
factor_id: WHICH-F-004
name: "Visibility Granularity Control"
category: audit
description: "Audit the granularity of visibility options (global/group/one-time) and status-exposure defaults in social scenarios"
measurement_method: "Visibility option matrix audit + default-value privacy-lean check (defaults should be minimal exposure)"
data_source:
  - "Functionality audit"
  - "Privacy-policy check"
thresholds:
    minimum: "Visibility switches provided with minimal-exposure defaults"
    good: "Group/one-time visibility granularity selectable"
    excellent: "Pre-publication visibility preview ('who can see this')"
unit: "Granularity-tier count"
applicable_domains:
  - digital
limitations: "GDPR Article 25 (data protection by design) and PIPL Article 16 are jurisdiction-dependent obligations; audit items must be tailored to the target jurisdiction."
related_standards:
status: draft
evidence_grade: C
---

# Visibility Granularity Control

> Metric ID: `M-WHICH-F-004-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHICH-F-004 — Social Visibility Preference

## Definition

Audit the granularity of visibility options (global/group/one-time) and status-exposure defaults in social scenarios

## Measurement

Visibility option matrix audit + default-value privacy-lean check (defaults should be minimal exposure)

## Data sources

- Functionality audit
- Privacy-policy check

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Visibility switches provided with minimal-exposure defaults |
| Good | Group/one-time visibility granularity selectable |
| Excellent | Pre-publication visibility preview ('who can see this') |

**Unit**: Granularity-tier count

## Applicable domains

- digital

## Limitations

GDPR Article 25 (data protection by design) and PIPL Article 16 are jurisdiction-dependent obligations; audit items must be tailored to the target jurisdiction.

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).

