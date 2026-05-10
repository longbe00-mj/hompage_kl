'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const services = [
    { icon: 'ri-store-2-line', title: '유통중개', desc: '브랜드 ↔ 유통사 연결' },
    { icon: 'ri-search-eye-line', title: '제품소싱', desc: '국내/해외 상품 발굴' },
    { icon: 'ri-briefcase-4-line', title: 'B2B 영업대행', desc: '커피·호텔·골프장 공급' },
    { icon: 'ri-bank-card-line', title: 'PG 영업대행', desc: '결제 수수료 Recurring 수익' },
    { icon: 'ri-store-3-line', title: '팝업 컨설팅', desc: '백화점/쇼핑몰 입점 중개' },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpg')",
        }}
      />
      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/92 via-[#0B1F3A]/80 to-[#0d2a4a]/75" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-36 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* 좌측: 메인 콘텐츠 */}
        <div className="flex flex-col gap-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse flex-shrink-0" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
              Value Linking Platform
            </span>
          </div>

          <div>
            <Image
              src="/images/hero-title.png"
              alt="잇고, 연결하라"
              width={600}
              height={150}
              className="w-full max-w-2xl h-auto mb-4"
              priority
            />
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
              모든 비즈니스는 연결에서 시작된다
            </p>
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            ㈜더케이엘 링크그룹은 '유통중개·제품소싱·PG영업대행·팝업컨설팅을 통해<br />
            브랜드의 유통사, 공급자와 수요자를 연결하는 <strong className="text-white/90">수익창출형 B2B 플랫폼</strong>입니다.'
          </p>

          {/* 통계 */}
          <div className="flex flex-wrap gap-8 py-6 border-t border-white/10">
            {[
              { num: '5', unit: '개', label: '핵심 사업 모델' },
              { num: '122억+', unit: '', label: '연 수익 목표' },
              { num: '2026', unit: '', label: '그랜드 오픈' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">{stat.num}</span>
                  <span className="text-sm text-[#1E90FF] font-bold">{stat.unit}</span>
                </div>
                <span className="text-xs text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#1E90FF] text-white font-bold px-8 py-4 rounded-full link-shadow-hover hover:bg-[#1a7de0] hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-mail-send-line text-lg" />
              제안 문의하기
            </Link>
            <Link
              href="/partners"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full link-shadow-hover hover:bg-white/20 hover:border-white/50 whitespace-nowrap"
            >
              <i className="ri-shake-hands-line text-lg" />
              파트너 신청
            </Link>
          </div>
        </div>

        {/* 우측: 서비스 카드 */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          {services.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 card-shadow-hover-soft hover:border-[#1E90FF]/50 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/15"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0">
                <i className={`${item.icon} text-[#1E90FF] text-xl`} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{item.title}</div>
                <div className="text-white/50 text-xs">{item.desc}</div>
              </div>
              <i className="ri-arrow-right-s-line text-white/30 ml-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 다운 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white/50 text-2xl" />
        </div>
      </div>
    </section>
  );
}
