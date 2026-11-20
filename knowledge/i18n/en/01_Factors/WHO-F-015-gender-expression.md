---
id: WHO-F-015
lang: en
name: "Gender & Gender Expression"
name_en: "Gender & Gender Expression"
source: ../../../factors/WHO-F-015-gender-expression.md
refs:
  standards: []
  research: ["Haimson O.L., Brubaker J.R., Dombrowski L. & Hayes G.R. (2016). Digital footprints and changing networks during online identity transitions. Proceedings of CHI 2016, 2895-2907. https://doi.org/10.1145/2858036.2858136", "Haimson O.L. et al. (2023). How transgender people and communities were involved in trans technology design processes. Proceedings of CHI 2023. https://doi.org/10.1145/3544548.3580972"]
---

# Gender & Gender Expression
## Definition

Differences in the gender dimension as users are identified, addressed, and presented within a system, product, or space, including:

- **Sex**: the biological attributes at birth, which affect dimensions and physiological needs (e.g., sanitary facilities)
- **Gender identity**: the gender a person self-identifies with, which may differ from the sex assigned at birth (transgender, non-binary, etc.)
- **Gender expression**: outwardly displayed gender presentation (clothing, hairstyle, mannerisms), which may not align with one's identity
- **Gender-neutral needs**: users who do not identify with binary gender categories

**Distinction from other factors**: WHO-F-002 (demographics) carries only statistical attributes (age/regional distribution); this factor carries the concrete differences of gender at the interaction and presentation levels.

## Why It Matters

- Mandatory binary gender fields in forms (single-choice male/female) directly exclude non-binary users
- Honorific systems (Mr./Ms.) assume that gender can be inferred from a name or appearance
- The binary division of restrooms, fitting rooms, and size systems creates spatial exclusion
- Historical data (e.g., medical insurance, ticketing) gender records may not match current identity

## Design Response (both: alternatives + choice space)

### Capability/constraint components → provide alternatives
- Gender fields should offer a "prefer not to say / X / custom" option (a compliance requirement in many jurisdictions)
- Honorific fields should be optional, or provide gender-neutral honorifics

### Preference components → provide choice space
- Gender visibility in profiles should be configurable (public / private only / visible to specific people)
- Respect users' chosen pronouns and use them consistently in the UI

## Cross-Domain Mapping

| Domain | Exclusion Example | Inclusion Example |
|------|----------|----------|
| Digital products | Mandatory binary gender registration field | Optional gender field + custom input + pronoun field |
| Industrial design | Grips designed for the "male hand" | Adjustable grips; neutral size ranges |
| Architectural design | Restrooms split male/female only | At least one all-gender/family restroom (many building codes already require this) |
| Fashion design | Size charts split by binary gender | A size system based on body measurements (chest/waist circumference) rather than gender |

## Measurement Dimensions

- Completeness of gender-field options in forms (whether non-binary/prefer-not-to-say options exist)
- Configurability of honorifics/pronouns
- Availability of gender-neutral options in physical facilities

## Related Standards and References

- UD7 supplementary principles P8 (Community) and P10 (Gender)
- WHO ICF personal factors
- Compliance requirements in some jurisdictions (e.g., Argentina's Gender Identity Law, ESG reporting requirements at some companies) → pending WP-C linkage to specific clauses

## B1 Cross-Reference Note

This factor was added as new by the INCL-XREF-001 GAP-1 determination: only the UD7 supplementary principles implicitly mention gender among the 5 baseline frameworks, and none of them structured it as a factor.

---

#tags #WHO-dimension #gender-inclusion #B1-new
