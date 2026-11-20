---
id: WHO-F-011
lang: en
name: "Language"
name_en: "Language"
source: ../../../factors/WHO-F-011-language.md
refs:
  standards: ["STD-W3C-WCAG22:3.1.1", "STD-W3C-WCAG22:3.1.2", "STD-WHO-ICF:b3"]
  research: []
---

# Language
## Definition

Users' native language, proficiency in the languages they use, literacy level, and ability to understand specific language varieties (dialects, terminology). Language affects how information is acquired, understood, and expressed.

## Why It Matters

Language barriers are a primary obstacle to accessing information and using services. If a design depends only on a particular language, it excludes users who do not speak that language or are not proficient enough in it. Considering language factors supports multilingual support, plain language, and varying literacy levels, improving both information accessibility and service usability.

## Subtypes and Specific Dimensions

### Language Variation (linguistic level)
- **Native language and second-language proficiency**: CEFR levels, academic/professional language competence
- **Dialects/regional varieties**: lexical differences, grammatical differences, differences in pragmatic rules
- **Multilingual environments**: code-switching, language preference settings, fallback language strategy

### Literacy (literacy level)
- **Literacy level**: non-literate, low literacy, functional illiteracy, high literacy
- **Reading disorders**: developmental dyslexia, alexia (acquired reading disorder)
- **Writing disorders**: writing expression disorder, apraxia of writing

### Speech-Motor Impairment vs. Language Variation
> Reinforced by the B1 cross-reference pass (INCL-XREF-001, cross-referenced against WHO ICF b3 and WCAG speech requirements)

**Key distinction**:

| Dimension | Speech-Motor Impairment (articulation/phonation) | Language Variation (linguistic/cognitive) |
|------|--------------------------|------------------------|
| **Essence** | Difficulty producing speech at the motor-execution level | Difference or disorder in the language system (vocabulary/grammar/pragmatics) |
| **Typical manifestations** | Unclear articulation, abnormal speech rate, abnormal voice quality, restricted movement of the articulatory organs | Limited vocabulary, grammatical errors, comprehension difficulties, pragmatic inappropriateness |
| **Related disabilities** | Articulation disorders, apraxia of speech, laryngectomy, vocal cord paralysis, stuttering | Aphasia, specific language impairment (SLI), difficulty in second-language acquisition |
| **Design response** | Alternative speech input (text/gesture/eye tracking), speech-independent authentication, speech-synthesis output | Multilingual UI, plain readable text, symbol-assisted communication, term base, translation |

**Design principle**: do not conflate the two kinds of needs. Users with speech-motor impairment may have intact language ability and only need an alternative input channel; users with language variation may pronounce clearly but need language-level adaptation.

## Related Standards and References
- WCAG 2.1: language of parts (lang attribute), comprehensibility guidance (e.g., avoiding overly complex language)
- ISO 9241-210: human-centred design (considering users' language and culture)
- The Unicode standard, BCP 47 language tags
- National language-rights legislation (e.g., Canada's Official Languages Act)
- Plain Language principles

## Suggested Quantification Methods
- Language coverage: number of supported languages, share of target users' native languages covered
- Readability assessment: e.g., Flesch-Kincaid grade level, Gunning fog index, SMOG index
- Translation quality: back-translation accuracy, terminology consistency scores
- Language proficiency assessment: user self-assessment or standardized tests (e.g., CEFR)
- Data sources: census language distribution, immigration authorities' language-service demand, user surveys

## Manifestations Across Domains
- **Digital products**: UI language switching, content translation, multilingual speech output, locale-adapted error messages
- **Industrial design**: multilingual instruction manuals, warning labels that use graphic symbols to reduce language dependence
- **Architectural design**: multilingual signage systems, emergency egress graphic symbols, language options on service signage
- **Interior design**: multilingual furniture instruction manuals, language support for smart-home apps
- **Graphic design**: multilingual print versions, fonts supporting multilingual character sets, symbol-first information hierarchy
- **Fashion design**: multilingual care labels, international-standard size charts, pictorial care instructions

## Common Misconceptions and Blind Spots
- Assuming that English or one dominant language can cover all users
- Providing language switching without accounting for cultural differences between languages (e.g., date formats, honorifics)
- Ignoring low-literacy users or users with reading disorders while over-relying on text
- Using machine translation without human review, causing misunderstanding or discourtesy
- Failing to consider differences in cultural meaning when using icons or colors
- **Conflating speech-motor impairment with language variation**: demanding that users with articulation disorders "speak the standard language," or offering non-native users speech recognition instead of translation

## Design Recommendation Keywords
Multilingual support, plain language, graphic symbols, language switching, culturally aware translation, RTL layout, speech output, term base

---

*Factor card: Language*
*Version: 3.1 (B1 reinforcement: distinguishing speech-motor impairment from language variation)*
