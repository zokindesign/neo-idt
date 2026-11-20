---
id: RUL-003
lang: en
name: Safety Certification Requirements
name_en: Safety Certification Requirements
source: ../../../factors/RUL-003-safety-certification.md
refs:
  standards: ["STD-ISO-26262", "STD-ISO-15223"]
  research: []
---

## Definition
The safety standards and certification systems that a product or service must pass — such as CE safety conformity, UL certification, FDA/CE MDR for medical devices, ISO 26262 for automotive, and DO-178C for aviation — ensuring that it causes no harm to users.

## Why It Matters
- Uncertified products cannot be sold or used in certain markets
- Safety incidents can trigger recalls, lawsuits, and criminal liability
- Safety certification raises user trust and may earn insurance premiums

## Quantitative Criteria
- **Certification coverage**: the number of safety standards met by each product module
- **Test pass rate**: the proportion of safety test cases passed (must approach 100%)
- **Residual risk level**: the severity and probability of unresolved risks
- **Certification status**: whether a valid certificate is held and the re-evaluation cycle

## Design Guidelines
- Consider target certifications from the requirements stage, folding safety requirements in from the start
- Work with certification bodies to run pre-compliance testing
- Design traceable safety documentation (hazard analysis, risk assessment)
- Build in safety margins (redundancy, fault protection)

## Cross-Domain Manifestations
| Domain | Certification Examples |
|------|----------|
| **Medical devices** | FDA 510(k), CE MDR, ISO 13485 |
| **Automotive electronics** | ISO 26262 (functional safety), UNECE R155 (cybersecurity) |
| **Industrial machinery** | CE Machinery Directive, UL certification |
| **Consumer electronics** | CE safety, battery safety (UN38.3), RoHS |

## Related Standards
- ISO 31000: risk management
- IEC 62304: medical device software lifecycle
- Mandatory safety standards for each industry

---
*Factor weight assessment: ⭐⭐⭐⭐⭐ (heavily regulated domains)*

