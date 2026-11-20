---
id: HOW-F-006
lang: en
name: Assistive Technology Compatibility
name_en: Assistive Technology Compatibility
source: ../../../factors/HOW-F-006-assistive-tech-compatibility.md
refs:
  standards: ["STD-EN-301549:9.4", "STD-W3C-WCAG22:4.1"]
  research: []
---

## Definition
The interoperability between a product or service and assistive technology (AT), including screen readers, magnification software, speech recognition, eye trackers, switch devices, and Braille displays.

## Why It Matters
- AT is the bridge that lets people with disabilities use digital products; incompatibility means complete unusability
- Regulations (e.g., WCAG, Section 508) mandate AT compatibility for some products
- The AT ecosystem is fragmented, so mainstream combinations must be covered

## Quantitative Criteria
- **Supported list**: the list of AT combinations that passed testing (browser + OS + AT)
- **Feature coverage under AT**: the proportion of product features that remain usable with AT
- **Test pass rate**: the percentage of standard AT test cases passed
- **User testing**: the success rate of real AT users completing tasks

## Design Guidelines
- Follow standard accessibility APIs (ARIA, AT-SPI, UIAutomation)
- Ensure correct focus management and a sensible reading order
- Provide text alternatives and keyboard operation support
- Test mainstream AT: NVDA+Firefox, JAWS+Chrome, VoiceOver, TalkBack

## Cross-Domain Manifestations
| Platform/Domain | AT Examples |
|-----------|--------|
| **Web** | screen readers, voice control, keyboard navigation |
| **Desktop applications** | UI Automation, Linux Orca |
| **Mobile** | TalkBack (Android), VoiceOver (iOS) |
| **Hardware devices** | switch input, eye trackers, head-tracking devices |

## Related Standards
- The success criteria of WCAG 2.x directly support AT
- Section 508 (US), EN 301 549 (EU)

---
*Factor weight assessment: ⭐⭐⭐⭐⭐ (core of accessibility conformance)*

