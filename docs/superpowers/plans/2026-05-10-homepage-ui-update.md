# 홈페이지 UI 업데이트 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 홈페이지의 4가지 주요 UI 변경 사항을 구현합니다: B2B 기업 이미지 추가, 사업 모델 6대 확장, 파트너 목록 정리, 포트폴리오 이미지 교체

**Architecture:** 
- 설정 파일(config)에서 데이터 정의하고 컴포넌트에서 참조하는 기존 패턴 유지
- 각 파일 수정은 독립적이며, 컴포넌트 간 의존성 없음
- 이미지 리소스는 public/images에 저장

**Tech Stack:** Next.js 15.5, React, Tailwind CSS

---

## 파일 구조

**수정 대상:**
1. `src/config/company.ts` - businesses 배열에 브랜드 빌드업 추가
2. `src/components/sections/ServicesSection.tsx` - 제목, colorMap, 버튼 수정
3. `src/components/sections/ConsultingSection.tsx` - B2B 기업 이미지 섹션 추가
4. `src/components/sections/PortfolioSection.tsx` - 파트너 삭제, 이미지 경로 변경

**신규 리소스:**
- `public/images/b2b-companies.png` - B2B 기업 로고 이미지
- `public/images/portfolio/portfolio-6-doctor88.jpg` - 닥터88+ 포트폴리오 이미지

---

## 구현 작업

### Task 1: 브랜드 빌드업 사업 모델 추가 (config/company.ts)

**Files:**
- Modify: `src/config/company.ts:21-85`

- [ ] **Step 1: 현재 businesses 배열 확인**

파일을 열어서 현재 5개 항목 확인:
- distribution, sourcing, pg, popup, consulting

- [ ] **Step 2: 새로운 branding 객체 추가**

businesses 배열의 마지막 항목(consulting) 뒤에 다음 코드 추가:

```typescript
  {
    id: 'branding',
    title: '브랜드 빌드업',
    englishTitle: 'Brand Build-up',
    description: '브랜드의 시작부터 확장까지, 시각·공간·경험을 통합 설계',
    details: [
      '브랜드 네이밍 / 슬로건 / 스토리 개발',
      '로고 · 패키지 · 키비주얼 · 홍보물 제작',
      '공간 컨셉 · 사인물 · VMD 디자인 구축',
    ],
    revenueModel: [
      '브랜드 개발 및 구축 비용',
      '디자인 운영 · 유지관리 계약',
      '브랜드 확장 디벨롭 컨설팅',
    ],
    icon: '🎨',
  },
```

- [ ] **Step 3: 파일 저장 및 syntax 확인**

```bash
npm run type-check
```

Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/config/company.ts
git commit -m "feat: add 6th business model - brand build-up"
```

---

### Task 2: ServicesSection 컴포넌트 업데이트

**Files:**
- Modify: `src/components/sections/ServicesSection.tsx:10-147`

- [ ] **Step 1: colorMap에 branding 색상 추가**

colorMap 객체(10-16줄)에 다음 추가:

```typescript
const colorMap = {
    distribution: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500', tag: 'blue' },
    sourcing: { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-500', tag: 'slate' },
    pg: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500', tag: 'emerald' },
    popup: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500', tag: 'orange' },
    consulting: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-500', tag: 'violet' },
    branding: { text: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-500', tag: 'pink' },
  };
```

- [ ] **Step 2: 제목 변경 (28줄)**

Before:
```tsx
<h2 className="section-title">5대 핵심 사업 모델</h2>
```

After:
```tsx
<h2 className="section-title">6대 핵심 사업 모델</h2>
```

- [ ] **Step 3: Cash Cow 태그 업데이트 (47-51줄)**

기존:
```tsx
{business.id === 'distribution' ? 'Cash Cow 1' :
 business.id === 'sourcing' ? 'Cash Cow 2' :
 business.id === 'pg' ? 'Cash Cow 3' :
 business.id === 'popup' ? 'Cash Cow 4' :
 business.id === 'consulting' ? 'Cash Cow 5' : 'Value Add'}
```

After:
```tsx
{business.id === 'distribution' ? 'Cash Cow 1' :
 business.id === 'sourcing' ? 'Cash Cow 2' :
 business.id === 'pg' ? 'Cash Cow 3' :
 business.id === 'popup' ? 'Cash Cow 4' :
 business.id === 'consulting' ? 'Cash Cow 5' :
 business.id === 'branding' ? 'Cash Cow 6' : 'Value Add'}
```

- [ ] **Step 4: 버튼 텍스트 변경 (140줄)**

Before:
```tsx
5대 사업 상세 보기
```

After:
```tsx
6대 사업 상세 보기
```

- [ ] **Step 5: 빌드 테스트**

```bash
npm run build
```

Expected: Build completes without errors

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/ServicesSection.tsx
git commit -m "feat: update service section for 6 business models"
```

---

### Task 3: ConsultingSection에 B2B 기업 이미지 추가

**Files:**
- Modify: `src/components/sections/ConsultingSection.tsx:25-96`

- [ ] **Step 1: 현재 구조 확인**

파일의 return 섹션 확인:
- div > div > [좌측 컨텐츠] + [우측 박스]
- 버튼이 좌측 마지막 항목

- [ ] **Step 2: B2B 기업 섹션 추가**

section 태그의 닫기 전, grid div 닫은 후에 새로운 섹션 추가:

```tsx
        {/* B2B 연계 기업 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">B2B 연계 기업</h3>
          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="/images/b2b-companies.png"
              alt="B2B 연계 기업 로고"
              className="w-full h-auto"
            />
          </div>
        </div>
```

정확한 위치: 현재 section 닫기 전에 추가

- [ ] **Step 3: 이미지 파일 준비**

제공된 Image #1 파일을 다음 위치에 저장:
```
public/images/b2b-companies.png
```

- [ ] **Step 4: 빌드 및 렌더링 확인**

```bash
npm run build
```

Expected: 경고 없음

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ConsultingSection.tsx public/images/b2b-companies.png
git commit -m "feat: add b2b companies section to consulting area"
```

---

### Task 4: PortfolioSection - 파트너 목록 정리 및 이미지 변경

**Files:**
- Modify: `src/components/sections/PortfolioSection.tsx:148-157, 19`

- [ ] **Step 1: 파트너 배열 찾기**

148-157줄의 배열 확인:

```typescript
[
  'KIS정보통신',
  'KCP',
  'COVAN',
  '페이테크',
  '사이다페이',
  '대운아이엘티',
  '이성진(국제물류)',
  '김대운(대운아이엘티)',
]
```

- [ ] **Step 2: 파트너 삭제**

배열을 다음으로 변경:

```typescript
[
  'KIS정보통신',
  'KCP',
  'COVAN',
  '페이테크',
  '사이다페이',
  '대운아이엘티',
]
```

(마지막 2개 항목 제거)

- [ ] **Step 3: 닥터88+ 이미지 경로 변경**

portfolioItems 배열에서 id:6 아이템(66-75줄) 찾기:

```typescript
{
  id: 6,
  category: 'B2B 영업대행',
  categoryColor: 'text-slate-600 bg-slate-50',
  title: '닥터88+ B2B 영업대행',
  client: '닥터88+',
  description: '건강기능식품 브랜드 닥터88+의 호텔, 리조트, 골프장 등 B2B 채널 영업대행을 수행했습니다.',
  result: '20개+ B2B 채널 입점',
  resultColor: 'text-emerald-600',
  image: '/images/portfolio/portfolio-6.jpg',
},
```

image 경로 변경:

```typescript
image: '/images/portfolio/portfolio-6-doctor88.jpg',
```

- [ ] **Step 4: 이미지 파일 준비**

제공된 Image #3 파일을 다음 위치에 저장:
```
public/images/portfolio/portfolio-6-doctor88.jpg
```

- [ ] **Step 5: 빌드 확인**

```bash
npm run build
```

Expected: No errors

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/PortfolioSection.tsx public/images/portfolio/portfolio-6-doctor88.jpg
git commit -m "feat: remove partners and update doctor88 portfolio image"
```

---

## 최종 검증

- [ ] **빌드 완료 확인**

```bash
npm run build
```

Expected: Successfully compiled

- [ ] **모든 변경사항 확인**

```bash
git log --oneline -6
```

Expected: 6개의 커밋 확인 (이전 커밋 포함)

- [ ] **로컬 서버 테스트 (선택)**

```bash
npm run dev
```

- 홈페이지 방문: http://localhost:3000
- 각 섹션 시각적 확인:
  - 경영컨설팅: B2B 기업 이미지 표시 여부
  - 서비스 섹션: 6개 카드 + 브랜드 빌드업 표시 여부
  - 포트폴리오: 파트너 6개만 표시, 닥터88+ 새 이미지 표시 여부
