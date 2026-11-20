---
id: HOW-F-004
lang: en
name: Compatibility Requirements
name_en: Compatibility Requirements
source: ../../../factors/HOW-F-004-compatibility-requirements.md
refs:
  standards: ["STD-EN-301549:6"]
  research: []
---

## Definition
The ability of a system to work correctly across different platforms, browser versions, operating systems, and assistive technologies.

## Why It Matters
- User environments are highly fragmented
- Enterprise environments often run older browsers or operating systems
- Assistive technologies (screen readers, eye-tracking devices) need dedicated adaptation

## Quantitative Criteria
- **Support matrix**: the range of versions that must be supported (minimum and maximum)
- **Market coverage**: the distribution of platforms used by the target user base
- **Assistive technology adaptation**: whether the product passes mainstream AT testing (JAWS, NVDA, VoiceOver)

## Design Guidelines
- Adopt a progressive enhancement strategy
- Use standardized web APIs to avoid obsolete plug-ins
- Test mainstream assistive technologies regularly
- Provide polyfills or fallback implementations

## Related Standards
- WCAG conformance requirements
- Platform-specific compatibility lists (e.g., Android fragmentation)

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (essential for enterprise products)*

