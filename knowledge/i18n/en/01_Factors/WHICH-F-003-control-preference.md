---
id: WHICH-F-003
lang: en
name: Control Preference
name_en: Control Preference
source: ../../../factors/WHICH-F-003-control-preference.md
refs:
  standards: ["STD-ISO-9241-110:5.5", "STD-W3C-WCAG22:3.2.6"]
  research: ["Parasuraman R., Sheridan T.B. & Wickens C.D. (2000). A model for types and levels of human interaction with automation. IEEE Transactions on Systems, Man, and Cybernetics—Part A, 30(3), 286-297. https://doi.org/10.1109/3468.844354"]
---

# Control Preference

## Definition

The user's preference, when completing a task, for how much autonomous control they have over the process versus how much is automated.

## Why It Matters

- Too little sense of control → helplessness, distrust
- Too much control burden → heavy load, low efficiency
- Affects adoption of new technology (e.g., acceptance of automated driving)

## Quantification Criteria

- **Measurement methods**: survey scales (automation acceptance, willingness to intervene manually)
- **Metrics**: how often users actually use automated vs manual features
- **Tolerance threshold**: the proportion of control users are willing to give up in certain tasks

## Design Guidelines

- Offer adjustable levels of automation (e.g., "fully automatic", "semi-automatic", "manual")
- Allow users to override system decisions
- Provide undo mechanisms to increase the sense of safety
- Make the current system state and expected behavior explicit
- **Consistent help**: a fixed help entry point, a unified help-content structure, context-sensitive help coexisting with global help, and help that can be summoned at any time without interrupting the main flow (implements WCAG 2.2 SC 3.2.6; guideline-layer implementation via WP-E)

## Cross-Domain Manifestations

- **Digital products**: accepting/rejecting autofill suggestions, transparency of recommendation algorithms
- **Industrial equipment**: manual override, semi-automatic mode, fully automatic mode
- **Smart buildings**: automatic environmental adjustment + manual control panels
- **Clothing**: adjustable parts (buttons, zippers, straps) vs one-step dressing

## Related Standards

- ISO 9241-110: controllability principle
- Parasuraman et al.'s theory of trust and automation
- WCAG 2.2 SC 3.2.6: Consistent Help

---

*Factor card: Control Preference*
*Version: 3.1 (B1 reinforcement: consistent-help guideline points)*

