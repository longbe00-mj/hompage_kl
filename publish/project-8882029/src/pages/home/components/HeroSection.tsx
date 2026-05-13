import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=abstract%20dark%20navy%20blue%20business%20network%20connection%20lines%20glowing%20nodes%20on%20deep%20midnight%20background%2C%20professional%20corporate%20atmosphere%2C%20geometric%20patterns%2C%20sophisticated%20minimal%20design%2C%20high%20contrast%20dramatic%20lighting%2C%20deep%20navy%20and%20subtle%20gold%20accent%2C%20premium%20enterprise%20visual&width=1440&height=900&seq=kllink-hero-bg-01&orientation=landscape')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/92 via-[#0B1F3A]/80 to-[#0d2a4a]/75" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-36 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Main Content */}
        <div className="flex flex-col gap-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse flex-shrink-0" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
              Value Linking Platform
            </span>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
              잇고,<br />
              <span className="text-[#1E90FF]">연결하라</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
              모든 비즈니스는 연결에서 시작된다
            </p>
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            (주)더케이엘링크그룹은 유통중개 · 제품소싱 · PG영업대행 · 팝업컨설팅을 통해
            브랜드와 유통사, 공급자와 수요자를 연결하는 <strong className="text-white/90">수익창출형 B2B 플랫폼</strong>입니다.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 py-6 border-t border-white/10">
            {[
              { num: "5", unit: "개", label: "핵심 사업 모델" },
              { num: "122억+", unit: "", label: "연 수익 목표" },
              { num: "2026", unit: "", label: "그랜드 오픈" },
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-[#1E90FF] hover:bg-[#1a7de0] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-send-line text-lg" />
              제안 문의하기
            </Link>
            <Link
              to="/partners"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shake-hands-line text-lg" />
              파트너 신청
            </Link>
          </div>
        </div>

        {/* Right: Service Cards */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          {[
            { icon: "ri-store-2-line", title: "유통중개", desc: "브랜드 ↔ 유통사 연결", color: "from-[#1E90FF]/20 to-[#1E90FF]/5" },
            { icon: "ri-search-eye-line", title: "제품소싱", desc: "국내/해외 상품 발굴", color: "from-white/10 to-white/5" },
            { icon: "ri-briefcase-4-line", title: "B2B 영업대행", desc: "커피·호텔·골프장 공급", color: "from-white/10 to-white/5" },
            { icon: "ri-bank-card-line", title: "PG 영업대행", desc: "결제 수수료 Recurring 수익", color: "from-white/10 to-white/5" },
            { icon: "ri-store-3-line", title: "팝업 컨설팅", desc: "백화점/쇼핑몰 입점 중개", color: "from-white/10 to-white/5" },
          ].map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 bg-gradient-to-r ${item.color} backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4`}
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

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white/50 text-2xl" />
        </div>
      </div>
    </section>
  );
}
