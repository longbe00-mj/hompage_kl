'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import useInView from '@/hooks/useInView';
import PortfolioCarousel from './PortfolioCarousel';

export default function PortfolioSection() {
  const { ref } = useInView();
  const portfolioItems = [
    {
      id: 1,
      category: '유통중개',
      categoryColor: 'text-blue-600 bg-blue-50',
      title: '수박주스 원액 유통중개',
      client: '제조사 ↔ 유통사',
      description: '수박주스 원액 제조사와 주요 유통 채널을 연결하여 안정적인 공급망을 구축했습니다.',
      result: '월 3,000만원+ 매출 창출',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-1.jpg',
    },
    {
      id: 2,
      category: '제품소싱',
      categoryColor: 'text-slate-600 bg-slate-50',
      title: '우베(UVE) 제품소싱',
      client: '우베 브랜드',
      description: '해외 우수 브랜드 우베의 국내 시장 진출을 위한 제품소싱 및 유통 채널 매칭을 지원했습니다.',
      result: '국내 3대 유통사 입점 성공',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-2-ube.jpg',
    },
    {
      id: 2.5,
      category: '제품소싱',
      categoryColor: 'text-slate-600 bg-slate-50',
      title: '화장품 제품 소싱',
      client: '화장품 브랜드',
      description: '프리미엄 화장품 브랜드의 국내 유통망 구축 및 B2B 채널 개발을 지원했습니다.',
      result: '주요 백화점 입점 성공',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-cosmetics.jpg',
    },
    {
      id: 3,
      category: '팝업 컨설팅',
      categoryColor: 'text-orange-600 bg-orange-50',
      title: '빠빠빵 팝업스토어',
      client: '빠빠빵',
      description: '베이커리 브랜드 빠빠빵의 팝업스토어 기획부터 운영까지 전 과정을 컨설팅했습니다.',
      result: '2주간 5,000만원 매출 달성',
      resultColor: 'text-blue-600',
      image: '/images/portfolio/portfolio-3.jpg',
    },
    {
      id: 4,
      category: 'PG 영업대행',
      categoryColor: 'text-emerald-600 bg-emerald-50',
      title: '커도의서재 PG 영업대행',
      client: '커도의서재',
      description: '독립서점 커도의서재의 온라인 결제 시스템 구축을 위한 PG 가입 및 결제 솔루션을 지원했습니다.',
      result: '결제 수수료 0.8% 절감',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-4.jpg',
    },
    {
      id: 5,
      category: 'PG 영업대행',
      categoryColor: 'text-emerald-600 bg-emerald-50',
      title: 'PG 가맹점 모집',
      client: 'KIS정보통신',
      description: 'KIS정보통신의 PG 서비스 가맹점 모집 및 영업대행을 통해 시장 점유율 확대를 지원했습니다.',
      result: '월 500+ 신규 가맹점 유치',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-5.jpg',
    },
    {
      id: 6,
      category: 'B2B 영업대행',
      categoryColor: 'text-slate-600 bg-slate-50',
      title: '닥터88+ B2B 영업대행',
      client: '닥터88+',
      description: '건강기능식품 브랜드 닥터88+의 호텔, 리조트, 골프장 등 B2B 채널 영업대행을 수행했습니다.',
      result: '20개+ B2B 채널 입점',
      resultColor: 'text-emerald-600',
      image: '/images/portfolio/portfolio-6-doctor88.jpg',
    },
    {
      id: 7,
      category: '진행 대기',
      categoryColor: 'text-gray-600 bg-gray-50',
      title: '+ 진행 대기 중(사진추가)',
      client: '모집 중',
      description: '베이커리 팝업 및 입점\n코스메틱, 건강기능식품\n패션 브랜드\n음료 원액, 소스 등 20여종 유통 추가\n홍보 / 브랜드 디자인',
      result: '사진 추가 대기 중',
      resultColor: 'text-gray-600',
      image: '/images/portfolio/placeholder.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-8 h-0.5 bg-gray-900" />
          <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">Portfolio</span>
          <div className="w-8 h-0.5 bg-gray-900" />
        </div>

        <div className="text-center mb-16">
          <h2 className="section-title">진행 프로젝트 & 포트폴리오</h2>
          <p className="section-subtitle">
            실제 진행 중인 사업 사례와 성과를 확인하세요
          </p>
        </div>

        {/* 포트폴리오 캐러셀 */}
        <div className="mt-12">
          <PortfolioCarousel items={portfolioItems} />
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300 text-lg"
          >
            전체 포트폴리오 보기
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* 파트너 정보 */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">함께하는 파트너</h3>
              <p className="text-gray-600 text-sm">
                유통 · 물류 · 금융 · 기술 분야 전문 파트너와 협력합니다
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3">
                {[
                  'KIS정보통신',
                  'KCP',
                  'COVAN',
                  '페이테크',
                  '사이다페이',
                  '대운아이엘티',
                ].map((partner) => (
                  <div
                    key={partner}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-300"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">새로운 파트너를 찾고 있습니다</p>
              <p className="text-lg font-bold text-gray-900">
                함께 성장할 파트너와 협력합니다
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              파트너 신청
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* B2B 연계 기업 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">함께하는 파트너</h3>
          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="/images/b2b-companies.png"
              alt="B2B 연계 기업 로고"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
