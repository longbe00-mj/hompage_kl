# 더케이엘링크그룹 홈페이지

(주)더케이엘링크그룹의 B2B 플랫폼 홈페이지입니다.

## 🎯 개요

- **회사명**: (주)더케이엘링크그룹
- **슬로건**: "잇고, 연결하라 – 모든 비즈니스는 연결에서 시작된다"
- **사업**: 유통중개, 제품소싱, PG영업대행, 팝업컨설팅
- **목표**: 대한민국 1위 B2B 연결 플랫폼 구축

## 🚀 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **Email**: Resend
- **Notifications**: Slack
- **Payment**: Stripe (향후)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 라우트
│   ├── about/            # 회사소개
│   ├── business/         # 사업모델
│   ├── contact/          # 문의
│   ├── portfolio/        # 포트폴리오
│   ├── partners/         # 파트너
│   ├── privacy/          # 개인정보처리방침
│   ├── terms/            # 이용약관
│   ├── layout.tsx        # 루트 레이아웃
│   ├── page.tsx          # 메인 페이지
│   └── globals.css       # 전역 스타일
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # 페이지 섹션
│   └── forms/            # 폼 컴포넌트
├── config/
│   └── company.ts        # 회사 정보 및 설정
├── lib/
│   └── utils.ts          # 유틸리티 함수
└── types/
    └── index.ts          # TypeScript 타입 정의
```

## 🛠️ 설치 및 실행

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 환경 설정

`.env.local` 파일을 생성하고 다음 정보를 입력합니다:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# Slack
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_CHANNEL_ID=your_slack_channel_id

# Server
PORT=9000
```

### 개발 서버 실행

```bash
# 9000 포트에서 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:9000` 접속

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📋 페이지 목록

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/` | 메인 랜딩 페이지 |
| 회사소개 | `/about` | 회사 정보, 조직, 비전 |
| 사업모델 | `/business` | 4대 사업 상세 설명 |
| 포트폴리오 | `/portfolio` | 진행 중인 프로젝트 |
| 파트너 | `/partners` | 파트너십 정보 |
| 문의 | `/contact` | 문의 양식 |
| 개인정보 | `/privacy` | 개인정보처리방침 |
| 이용약관 | `/terms` | 이용약관 |

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **모던 UI**: Tailwind CSS 기반의 깔끔한 디자인
- **접근성**: WCAG 준수
- **SEO 최적화**: Next.js 메타데이터 관리

## 🔄 주요 기능

### 1. 문의 양식
- 이름, 이메일, 연락처, 회사명 입력
- 문의 유형 선택 (일반, 제휴, 사업)
- 자동 이메일 및 Slack 알림

### 2. Supabase 연동
- 문의 데이터 자동 저장
- 관리자 조회 가능

### 3. 모바일 네비게이션
- 반응형 메뉴
- 터치 친화적 인터페이스

## 📊 2026년 목표

| 분기 | 매출 목표 |
|------|----------|
| Q2 | 1억 원 |
| Q3 | 2억 원 |
| Q4 | 3~5억 원 |
| **연간** | **6~8억 원** |

## 🤝 파트너쉽

더케이엘링크그룹은 다음과 같은 파트너를 모집합니다:

- **팝업 중개 파트너**: 백화점/쇼핑몰 공간 활용
- **유통 파트너**: B2B 대량 납품
- **PG 총판 파트너**: 결제 솔루션 공급
- **컨설팅 파트너**: 경영 전반 지원

## 📞 연락처

- **전화**: 1800-7796
- **이메일**: thekllink7256@gmail.com
- **운영시간**: 09:00 - 18:00 (평일)

## 📝 라이선스

본 홈페이지는 (주)더케이엘링크그룹의 저작물입니다.

## 🔐 보안

- SSL 암호화
- 안전한 개인정보 관리
- 정기적인 보안 감사

## 🚧 향후 개발 계획

- [ ] 다국어 지원 (영문, 중문)
- [ ] 관리자 대시보드
- [ ] 회원가입 및 로그인
- [ ] 실시간 채팅 상담
- [ ] 블로그 / 뉴스 섹션
- [ ] 파트너 포털
- [ ] 결제 시스템 통합
- [ ] 모바일 앱

## 📧 피드백

개선사항이나 버그 리포트는 이메일로 연락해주세요.

---

**Last Updated**: 2026년 4월 27일
