# THE KL LINK GROUP 홈페이지

## 1. 프로젝트 설명
(주)더케이엘링크그룹의 기업형 공식 홈페이지. B2B 유통중개 / 제품소싱 / PG영업대행 / 팝업컨설팅 / 경영컨설팅을 핵심 사업으로 하는 수익창출형 플랫폼 법인. 투자 유치 대응 가능한 신뢰감 있는 기업 홈페이지 구축이 목표.

- 대표이사: 김성범 (CEO)
- 슬로건: "잇고, 연결하라 – 모든 비즈니스는 연결에서 시작된다"
- 연락처: 1800-7796 / thekllink7256@gmail.com

## 2. 페이지 구조
- `/` - Home (메인 랜딩)
- `/about` - About Us (회사 소개, 대표 인사말, 비전, 조직)
- `/business` - Business (4대 사업 모델 상세)
- `/portfolio` - Portfolio (진행 프로젝트 사례, 성과)
- `/partners` - Partners (협력사 리스트, 제휴 신청)
- `/contact` - Contact (문의 폼, 연락처, 위치)

## 3. 핵심 기능
- [x] Home 랜딩 페이지 (슬로건, 서비스 소개, 실적, CTA)
- [ ] About Us 페이지
- [ ] Business 페이지 (4대 사업 모델)
- [ ] Portfolio 페이지
- [ ] Partners 페이지 + 제휴 신청 폼
- [ ] Contact 페이지 + 문의 폼
- [ ] 공통 Header/Footer

## 4. 데이터 모델 설계
Supabase 미연결 상태 - 폼 제출은 Readdy Form API 활용

## 5. 백엔드 / 서드파티 연동 계획
- Supabase: 추후 문의 폼 DB 저장, 관리자 페이지 연동 시 필요
- Shopify: 불필요
- Stripe: 불필요
- Readdy Form API: 제안 문의, 파트너 신청 폼

## 6. 개발 단계 계획

### Phase 1: Home 페이지 콘텐츠 전면 교체 ✅
- 목표: 실제 회사 정보로 전체 콘텐츠 교체
- 산출물: Header, HeroSection, IntroSection, ServicesSection, PainPointSection, ConsultingSection, Footer 전면 교체

### Phase 2: About Us + Business 페이지
- 목표: 회사 소개 및 사업 모델 상세 페이지
- 산출물: /about, /business 페이지

### Phase 3: Portfolio + Partners + Contact 페이지
- 목표: 포트폴리오, 파트너, 문의 페이지
- 산출물: /portfolio, /partners, /contact 페이지
