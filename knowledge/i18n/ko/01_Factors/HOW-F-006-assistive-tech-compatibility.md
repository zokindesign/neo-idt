---
id: HOW-F-006
lang: ko
name: 보조 기술 호환성
name_en: Assistive Technology Compatibility
source: ../../../factors/HOW-F-006-assistive-tech-compatibility.md
refs:
  standards: ["STD-EN-301549:9.4", "STD-W3C-WCAG22:4.1"]
  research: []
---

## 기본 정의
제품 또는 서비스와 보조기술(AT)의 상호운용성으로, 화면읽기 프로그램, 확대 소프트웨어, 음성 인식, 시선 추적기, 스위치 기기, 점자 디스플레이 등을 포함한다.

## 왜 중요한가
- AT는 장애인이 디지털 제품을 사용하는 다리이며, 호환되지 않으면 완전히 사용할 수 없다는 뜻이다
- 법규 요구(WCAG, Section 508 등)는 일부 제품에 AT 호환을 강제한다
- AT 생태계는 파편화되어 있어 주류 조합을 커버해야 한다

## 정량 기준
- **지원 목록**: 테스트를 통과한 AT 목록(브라우저+OS+AT 조합)
- **호환 기능 커버리지**: AT 환경에서 사용 가능한 제품 기능의 비율
- **테스트 통과율**: 표준 AT 테스트 케이스를 통과한 비율
- **사용자 테스트**: 실제 AT 사용자의 과제 완수 성공률

## 설계 가이드
- 표준 접근성 API(ARIA, AT-SPI, UIAutomation)를 따른다
- 포커스 관리가 정확하고 읽기 순서가 합리적인지 보장한다
- 텍스트 대체와 키보드 조작 지원을 제공한다
- 주류 AT를 테스트한다: NVDA+Firefox, JAWS+Chrome, VoiceOver, TalkBack

## 영역별 발현
| 플랫폼/영역 | AT 예시 |
|-----------|--------|
| **웹** | 화면읽기 프로그램, 음성 제어, 키보드 내비게이션 |
| **데스크톱 애플리케이션** | UI Automation, Linux Orca |
| **모바일** | TalkBack (Android), VoiceOver (iOS) |
| **하드웨어 기기** | 스위치 입력, 시선 추적기, 머리 제어 기기 |

## 관련 표준
- WCAG 2.x의 성공 기준은 AT를 직접 지원한다
- Section 508 (US), EN 301 549 (EU)

---
*요인 가중치 평가: ⭐⭐⭐⭐⭐ (접근성 규정 준수 핵심)*

