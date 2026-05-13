# 포트폴리오 카드 롤링 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 포트폴리오 섹션에 Embla Carousel을 사용한 2개 카드 동시 표시 롤링 기능을 구현합니다.

**Architecture:** 
PortfolioCarousel 컴포넌트를 신규 생성하여 Embla Carousel로 포트폴리오 항목들을 렌더링합니다. 5초 자동 롤링, 마우스 오버 시 일시 중지, 좌우 화살표 및 도트 네비게이션을 제공합니다. PortfolioSection은 기존 portfolioItems 배열을 그대로 이 컴포넌트에 전달합니다.

**Tech Stack:** Next.js 15.5, React, Tailwind CSS, Embla Carousel, TypeScript

---

## 파일 구조

**신규:**
- `src/components/sections/PortfolioCarousel.tsx` - 캐러셀 컴포넌트 (주요 로직)

**수정:**
- `src/components/sections/PortfolioSection.tsx` - 캐러셀 통합
- `package.json` - Embla 의존성 추가

---

## 구현 작업

### Task 1: Embla Carousel 라이브러리 설치

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Embla 패키지 설치**

```bash
npm install embla-carousel embla-carousel-react embla-carousel-autoplay
```

Expected: 패키지 설치 완료, package.json에 의존성 추가됨

- [ ] **Step 2: 설치 확인**

```bash
npm list embla-carousel
```

Expected: 버전 정보 출력 (e.g., `embla-carousel@8.x.x`)

---

### Task 2: PortfolioCarousel 컴포넌트 생성

**Files:**
- Create: `src/components/sections/PortfolioCarousel.tsx`

- [ ] **Step 1: 기본 컴포넌트 구조 작성**

```typescript
'use client';

import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  client: string;
  description: string;
  result: string;
  resultColor: string;
  image: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const autoplayRef = useCallback(() => {
    return Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
      breakpoints: {
        '(max-width: 767px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 2 },
      },
    },
    [autoplayRef()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* 캐러셀 컨테이너 */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 min-w-0 md:basis-1/2 basis-full px-2"
              >
                {/* 카드 */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden card-shadow-hover h-full">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.categoryColor}`}>
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">클라이언트: {item.client}</p>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    <div className={`text-sm font-semibold ${item.resultColor}`}>
                      {item.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 좌측 화살표 버튼 */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>

        {/* 우측 화살표 버튼 */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="다음 슬라이드"
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>
      </div>

      {/* 하단 도트 인디케이터 */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: 코드 구조 검증**

생성된 파일 확인:
- import 문 정확성
- 컴포넌트 props 타입 정의
- Embla 초기화 옵션 (breakpoints 포함)
- 자동 롤링 플러그인 설정
- 상태 관리 (selectedIndex, scrollSnaps)
- 이벤트 핸들러 (scrollPrev, scrollNext, scrollTo)

Expected: 파일 생성 완료, 타입 에러 없음

---

### Task 3: PortfolioSection 컴포넌트 업데이트

**Files:**
- Modify: `src/components/sections/PortfolioSection.tsx:60-195`

현재 구조: 좌측 콘텐츠 + 우측 "진행 중인 프로젝트" 박스

- [ ] **Step 1: 기존 포트폴리오 그리드 구간 찾기**

파일을 열어서 아래 부분 확인 (약 60-195줄):
- `const portfolioItems = [...]` 배열
- `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ...">` 그리드 렌더링
- 그리드 내 `portfolioItems.map((item) => ...)` 부분

- [ ] **Step 2: import 추가**

파일 최상단 import 섹션에 추가:

```typescript
import PortfolioCarousel from './PortfolioCarousel';
```

- [ ] **Step 3: 그리드 렌더링 부분을 PortfolioCarousel로 교체**

기존 코드 (약 165-195줄):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {portfolioItems.map((item) => (
    // 기존 카드 렌더링 로직
  ))}
</div>
```

새 코드로 교체:
```tsx
<div className="mt-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-8">진행 중인 프로젝트 & 포트폴리오</h3>
  <PortfolioCarousel items={portfolioItems} />
</div>
```

이 부분은 section 내부, "포트폴리오" 제목 바로 아래에 위치합니다.

- [ ] **Step 4: portfolioItems 배열이 손실되지 않았는지 확인**

portfolioItems 배열 정의 (약 100줄 전)는 그대로 유지되어야 합니다:
```typescript
const portfolioItems = [
  { id: 1, category: '...', title: '...', ... },
  // ... 7개 항목
];
```

- [ ] **Step 5: 빌드 테스트**

```bash
npm run build
```

Expected: Build succeeds without errors

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/PortfolioSection.tsx src/components/sections/PortfolioCarousel.tsx
git commit -m "feat: implement portfolio carousel with embla"
```

---

### Task 4: 캐러셀 기능 검증

**Files:**
- Test: 로컬 개발 서버에서 시각적 검증

- [ ] **Step 1: 개발 서버 시작**

```bash
npm run dev
```

Expected: 서버 시작, http://localhost:3000 접속 가능

- [ ] **Step 2: 포트폴리오 섹션 확인 - 데스크톱**

브라우저에서 http://localhost:3000 접속 후:
- 포트폴리오 섹션 스크롤
- 2개 카드가 동시에 보이는지 확인
- 5초마다 자동으로 롤링되는지 확인
- 좌측 화살표 버튼 클릭 → 이전 슬라이드로 이동하는지 확인
- 우측 화살표 버튼 클릭 → 다음 슬라이드로 이동하는지 확인
- 도트 인디케이터 클릭 → 해당 슬라이드로 이동하는지 확인
- 도트 활성 상태가 현재 슬라이드를 정확히 표시하는지 확인

Expected: 모든 기능 정상 동작

- [ ] **Step 3: 자동 롤링 일시 중지 확인**

- 마우스를 캐러셀 위로 가져감
- 자동 롤링이 멈추는지 확인
- 마우스를 떠남
- 자동 롤링이 재개되는지 확인

Expected: 마우스 오버/리브 시 롤링 상태 변경

- [ ] **Step 4: 모바일 반응형 확인**

브라우저 DevTools에서 모바일 뷰 (640px 미만) 선택:
- 1개 카드만 표시되는지 확인
- 좌우 화살표 버튼이 여전히 동작하는지 확인
- 도트 인디케이터가 보이는지 확인
- 터치 시뮬레이션으로 스와이프 기능 확인

Expected: 모바일에서 1개 카드 표시, 모든 기능 정상

- [ ] **Step 5: 이미지 로딩 확인**

모든 포트폴리오 카드의 이미지가 정상적으로 로드되는지 확인:
- 기존 이미지 (portfolio-1, portfolio-2-ube, portfolio-3 등)
- 새로 추가된 이미지 (portfolio-6-doctor88)
- 플레이스홀더 이미지 (id: 7 진행 대기)

Expected: 모든 이미지 표시, 콘솔 에러 없음

- [ ] **Step 6: 브라우저 콘솔 확인**

DevTools 콘솔 확인:
- 에러 메시지 없음
- 경고 메시지 없음 (React 18 Strict Mode 관련 제외)

Expected: 콘솔 깨끗함

---

### Task 5: 최종 통합 및 Commit

**Files:**
- Verify: 전체 빌드 및 git 상태

- [ ] **Step 1: 최종 빌드**

```bash
npm run build
```

Expected: 빌드 완료 메시지 "compiled successfully", 정적 페이지 생성 완료

- [ ] **Step 2: Git 상태 확인**

```bash
git status
```

Expected: PortfolioCarousel.tsx (new) 및 PortfolioSection.tsx (modified) 파일만 표시

- [ ] **Step 3: 변경사항 검토**

```bash
git diff src/components/sections/PortfolioSection.tsx
```

Expected: 
- PortfolioCarousel import 추가
- 그리드 렌더링 부분을 PortfolioCarousel 컴포넌트로 교체
- portfolioItems 배열은 그대로 유지

- [ ] **Step 4: 최종 Commit**

```bash
git add src/components/sections/PortfolioCarousel.tsx src/components/sections/PortfolioSection.tsx package.json
git commit -m "feat: implement portfolio carousel with embla - 2 cards, 5s autoplay, navigation"
```

Expected: 커밋 완료, 변경사항 기록됨

- [ ] **Step 5: 로그 확인**

```bash
git log --oneline -3
```

Expected: 최근 커밋에 포트폴리오 캐러셀 관련 메시지 표시

---

## 최종 검증

- [ ] 포트폴리오 섹션에 캐러셀 표시됨
- [ ] 2개 카드가 동시에 보임 (데스크톱)
- [ ] 1개 카드가 표시됨 (모바일, 640px 미만)
- [ ] 5초 간격 자동 롤링 동작
- [ ] 좌우 화살표 네비게이션 동작
- [ ] 하단 도트 인디케이터 동작 및 상태 표시
- [ ] 마우스 오버 시 롤링 일시 중지, 떠날 때 재개
- [ ] 모든 포트폴리오 이미지 로드됨
- [ ] 빌드 성공 (오류 없음)
- [ ] 콘솔 에러 없음
- [ ] 모든 변경사항 git 커밋됨

