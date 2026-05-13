# 홈페이지 UI 업데이트 설계서

**작성일:** 2026-05-10  
**프로젝트:** THE KL LINK GROUP 홈페이지  
**변경 범위:** 경영 컨설팅 섹션, 핵심 사업 모델, 파트너 목록

---

## 1. 개요

현재 홈페이지에 다음 세 가지 주요 변경을 적용합니다:
1. 경영 컨설팅 섹션에 B2B 연계 기업 이미지 추가
2. 핵심 사업 모델을 5대에서 6대로 확장 (브랜드 빌드업 추가)
3. 포트폴리오 섹션의 파트너 목록에서 2개 항목 삭제

---

## 2. 상세 변경 사항

### 2.1 경영 컨설팅 섹션 (ConsultingSection.tsx)

**변경 위치:** `src/components/sections/ConsultingSection.tsx`

**추가 내용:**
- 제목: "B2B 연계 기업" 또는 "컨설팅 성공 사례"
- 내용: 사용자 제공 이미지 (롯데, 현대, 신세계, 스타필드, 갤러리아, 우영중합물류, 페이테크, 사이다페이, 리드젠)
- 위치: 현재 "컨설팅 문의하기" 버튼 아래
- 레이아웃: full-width 이미지 표시 (padding과 border-radius 포함)

**구조:**
```
[섹션 시작]
  [좌측: 경영 컨설팅 설명 + 4대 서비스]  [우측: 진행 중인 프로젝트]
  [컨설팅 문의하기 버튼]
  
  [새로 추가: B2B 연계 기업]
  [이미지]
[섹션 끝]
```

---

### 2.2 핵심 사업 모델 (5대 → 6대)

**변경 파일:**
1. `src/config/company.ts` - businesses 배열에 새 항목 추가
2. `src/components/sections/ServicesSection.tsx` - 제목 및 버튼 텍스트 변경

**추가할 사업 모델:**

| 항목 | 내용 |
|------|------|
| **ID** | `branding` |
| **제목** | 브랜드 빌드업 |
| **영문** | Brand Build-up |
| **설명** | 브랜드의 시작부터 확장까지, 시각·공간·경험을 통합 설계 |
| **아이콘** | 🎨 |
| **색상 태그** | violet (또는 pink) |

**핵심 항목:**
- ✓ 브랜드 네이밍 / 슬로건 / 스토리 개발
- ✓ 로고 · 패키지 · 키비주얼 · 홍보물 제작
- ✓ 공간 컨셉 · 사인물 · VMD 디자인 구축

**수익 모델:**
- 브랜드 개발 및 구축 비용
- 디자인 운영 · 유지관리 계약
- 브랜드 확장 디벨롭 컨설팅

**카드 위치:** ServicesSection의 6개 사업 모델 그리드 (Cash Cow 6로 표시)

**제목 변경:**
- "5대 핵심 사업 모델" → "6대 핵심 사업 모델"
- 버튼 텍스트: "5대 사업 상세보기" → "6대 사업 상세보기"

---

### 2.3 포트폴리오 섹션 - 파트너 목록 정리

**변경 파일:** `src/components/sections/PortfolioSection.tsx`

**삭제 항목:**
- ❌ 이성진(국제물류)
- ❌ 김대운(대운아이엘티)

**유지할 파트너 (6개):**
- ✅ KIS정보통신
- ✅ KCP
- ✅ COVAN
- ✅ 페이테크
- ✅ 사이다페이
- ✅ 대운아이엘티

---

### 2.4 포트폴리오 섹션 - 닥터88+ 이미지 변경

**변경 파일:** `src/components/sections/PortfolioSection.tsx`

**대상 포트폴리오:**
- 카테고리: B2B 영업대행
- 제목: 닥터88+ B2B 영업대행
- 현재 이미지: `/images/portfolio/portfolio-6.jpg`
- 변경 이미지: 사용자 제공 이미지 (제품 브랜딩 과정 이미지 - Image #3)

**변경 방식:**
- portfolioItems 배열의 id:6 아이템의 image 경로 업데이트
- 새 이미지 파일명: `/images/portfolio/portfolio-6-doctor88.jpg` (또는 기존 파일 덮어쓰기)

---

## 3. 기술 구현 세부사항

### 3.1 ConsultingSection 변경
- 새로운 div 섹션 추가
- 제목, 설명 텍스트 추가
- 이미지 태그 삽입 (`/public/images/b2b-companies.png` 또는 제공된 이미지 경로)
- Tailwind 스타일: `rounded-2xl`, `shadow`, `max-w-full` 등

### 3.2 ServicesSection 및 company.ts 변경
- businesses 배열에 branding 객체 추가
- colorMap에 branding 색상 설정
- 제목 텍스트 "5대" → "6대" 변경 (2곳)

### 3.3 PortfolioSection 변경
- partners 배열에서 2개 항목 제거
- 기타 로직 변경 없음

---

## 4. 데이터 흐름

```
config/company.ts (businesses 배열)
    ↓
ServicesSection.tsx (businesses.map으로 렌더링)
    ↓
화면 표시 (6개 카드 + 2026 목표 카드)
```

---

## 5. 검증 기준

- [ ] 경영 컨설팅 섹션에 B2B 이미지 올바르게 표시됨
- [ ] 브랜드 빌드업 카드 6번째 위치에 올바르게 추가됨
- [ ] "6대 핵심 사업 모델" 제목 반영됨
- [ ] 파트너 목록에서 2개 항목이 제거됨
- [ ] 반응형 디자인 유지됨 (모바일/태블릿/데스크톱)
- [ ] 빌드 오류 없음

---

## 6. 파일 목록

**수정 대상:**
1. `src/config/company.ts` - 브랜드 빌드업 사업 모델 추가
2. `src/components/sections/ServicesSection.tsx` - 제목 및 버튼 텍스트 변경
3. `src/components/sections/ConsultingSection.tsx` - B2B 기업 이미지 섹션 추가
4. `src/components/sections/PortfolioSection.tsx` - 파트너 목록 수정 + 닥터88+ 이미지 변경

**신규 리소스:**
- B2B 기업 이미지 파일 (public/images/ 에 저장 필요)
- 닥터88+ 포트폴리오 이미지 교체 (public/images/portfolio/ 에 저장 필요)

---

## 7. 주의사항

- 이미지 파일은 사용자가 제공한 원본을 public/images에 저장해야 함
- 색상 선택 (branding 태그의 색상)은 구현 시 조율 필요
- 파트너 목록 삭제 시 참조 관계 확인 필요
