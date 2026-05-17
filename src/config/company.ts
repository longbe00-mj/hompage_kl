export const companyInfo = {
  name: '(주)더케이엘링크그룹',
  englishName: 'THE KL LINK GROUP',
  tagline: '잇고, 연결하라 – 모든 비즈니스는 연결에서 시작된다',
  englishTagline: 'Connect, Link - All business begins with connection',
  ceo: '김성범',
  auditor: '황정규',
  coo: '이서영',
  phone: '1800-7796',
  email: 'thekllink7256@gmail.com',
  address: '',
  businessHours: '09:00 - 18:00',
  socialMedia: {
    linkedin: '',
    facebook: '',
    instagram: '',
    youtube: '',
  },
};

export const businesses = [
  {
    id: 'distribution',
    title: '유통중개',
    englishTitle: 'Distribution Brokerage',
    description: '수박주스 원액, 우베, 커피 등 주요 제품 B2B 공급',
    details: [
      '수박주스 원액 1kg B2B 공급',
      '우베(자색고구마) 원료 공급',
      '커피 프랜차이즈 / 호텔 / 병원 납품',
    ],
    revenueModel: ['공급 마진 (20~40%)', '총판 수수료'],
    icon: '🏪',
  },
  {
    id: 'sourcing',
    title: '제품소싱',
    englishTitle: 'Product Sourcing',
    description: '차별화된 제품을 발굴하여 독점 공급',
    details: [
      '천연초',
      '닥터88+ 의료기기',
    ],
    revenueModel: ['독점/총판 구조', '고마진 상품 중심 (30~60%)'],
    icon: '📦',
  },
  {
    id: 'pg',
    title: '결제 인프라 구축',
    englishTitle: 'Payment Gateway Agency',
    description: '페이테크 기반 결제 솔루션 총판',
    details: [
      '페이테크 / 사이다페이 총판',
      'KIS / KCP / KOVAN 네트워크',
    ],
    revenueModel: ['가맹점당 설치 수수료', '결제 수수료 쉐어 (Recurring)'],
    icon: '💳',
  },
  {
    id: 'popup',
    title: '팝업컨설팅',
    englishTitle: 'Popup Consulting',
    description: '백화점 / 쇼핑몰 팝업 입점 및 운영 대행',
    details: [
      '백화점 / 쇼핑몰 입점 중개',
      '운영 대행 및 네트워크 구축',
      '브랜드 DB 확보',
    ],
    revenueModel: ['중개 수수료 (10~20%)', '운영 대행비 (고정 + 인센티브)'],
    icon: '🎪',
  },
  {
    id: 'consulting',
    title: 'B2B 컨설팅 / 브랜드 빌드업',
    englishTitle: 'B2B Consulting / Brand Build-up',
    description: '제품 유통, 채널 개발, 브랜드 구축을 통한 통합 비즈니스 확장 전략',
    details: [
      '신규 채널 진출 전략 수립 및 공급망 최적화',
      '브랜드 네이밍, 포지셔닝, 시장 진입 컨설팅',
      '로고, 패키지, 홍보물 등 브랜드 개발 및 구축',
    ],
    revenueModel: ['프로젝트 수행비', '성과 기반 수수료', '브랜드 개발·구축 비용'],
    icon: '📊',
  },
];

export const strategicPhases = [
  {
    phase: 1,
    title: '네트워크 확보',
    timeline: '진행 중',
    description: '브랜드 DB, 유통사 DB, MD 네트워크, 병원/프랜차이즈 DB 구축',
    status: 'completed',
  },
  {
    phase: 2,
    title: '거래 발생',
    timeline: '2026년 Q2-Q3',
    description: '팝업 중개, 유통 공급, PG 계약을 통한 수익 창출',
    status: 'in-progress',
  },
  {
    phase: 3,
    title: '데이터 자산화',
    timeline: '2026년 Q3-Q4',
    description: '거래 데이터 기반 인사이트 축적 및 분석',
    status: 'in-progress',
  },
  {
    phase: 4,
    title: '플랫폼화',
    timeline: '2026년 7월~',
    description: 'B2B 연결 플랫폼으로의 전환 (브랜드 등록, 자동 매칭, CRM)',
    status: 'upcoming',
  },
];

export const revenue2026 = {
  q2: { target: 100000000, description: '1억' },
  q3: { target: 200000000, description: '2억' },
  q4: { target: 500000000, description: '3~5억' },
};

export const revenueDistribution = {
  pg: 30,
  distribution: 30,
  popup: 30,
  other: 10,
};
