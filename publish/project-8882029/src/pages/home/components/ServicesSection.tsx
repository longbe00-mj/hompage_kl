import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    icon: "ri-store-2-line",
    title: "유통중개",
    subtitle: "Cash Cow 1",
    desc: "브랜드와 유통사를 연결하는 핵심 수익 모델. 수박주스 원액, 우베(자색고구마), 커피 프랜차이즈 B2B 공급.",
    items: [
      "수박주스 원액 1kg B2B 공급",
      "우베(필리핀 자색고구마) 원료 공급",
      "커피 프랜차이즈 / 호텔 / 병원 납품",
      "공급 마진 20~40%",
    ],
    color: "text-[#1E90FF]",
    bg: "bg-[#1E90FF]/5",
    border: "border-[#1E90FF]",
    tag: "도소매업 · 식품유통 · OEM중개",
  },
  {
    num: "02",
    icon: "ri-search-eye-line",
    title: "제품소싱",
    subtitle: "Cash Cow 2",
    desc: "국내외 고마진 상품을 발굴하여 독점/총판 구조로 공급. 천연초, 의료기기 등 전문 소싱.",
    items: [
      "천연초 소싱 및 공급",
      "닥터88+ 의료치료기기 (2급)",
      "독점/총판 구조 운영",
      "고마진 상품 중심 30~60%",
    ],
    color: "text-[#0B1F3A]",
    bg: "bg-[#0B1F3A]/5",
    border: "border-[#0B1F3A]",
    tag: "무역업 · 의료기기 · 건강기능식품",
  },
  {
    num: "03",
    icon: "ri-bank-card-line",
    title: "PG 영업대행",
    subtitle: "Cash Cow 3",
    desc: "결제 수수료 쉐어 기반의 강력한 반복 수익 구조. KIS정보통신, KCP, COVAN 총판 계약.",
    items: [
      "페이테크 / 사이다페이 총판",
      "KIS정보통신 / KCP / COVAN",
      "가맹점당 설치 수수료",
      "결제 수수료 Recurring 수익",
    ],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    tag: "전자결제대행 · 정산서비스 · PG",
  },
  {
    num: "04",
    icon: "ri-store-3-line",
    title: "팝업 컨설팅",
    subtitle: "Cash Cow 4",
    desc: "백화점/쇼핑몰 팝업 입점 중개 및 운영 대행. 브랜드 DB 확보와 MD 네트워크 장악.",
    items: [
      "빠빠빵 팝업 (5.1~14일) 운영",
      "커도의서재 세컨브랜드 팝업",
      "중개 수수료 10~20%",
      "운영 대행비 (고정 + 인센티브)",
    ],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-500",
    tag: "프랜차이즈 · 팝업중개 · 운영대행",
  },
  {
    num: "05",
    icon: "ri-line-chart-line",
    title: "경영컨설팅",
    subtitle: "Value Add",
    desc: "브랜딩, 투자유치, PG, 유통 연결을 통한 통합 컨설팅. 지분 스왑 가능한 고부가가치 서비스.",
    items: [
      "IR 자료 제작 및 투자자 매칭",
      "브랜딩 / 홈페이지 구축 패키지",
      "M&A 자문 (매도/매수)",
      "프로젝트 수익 + 지분 스왑",
    ],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-500",
    tag: "경영컨설팅 · 투자자문 · M&A",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#0B1F3A]" />
          <span className="text-xs font-bold text-[#0B1F3A] tracking-widest uppercase">Business Model</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] leading-tight">
              5대 핵심 사업 모델
            </h2>
            <p className="text-gray-500 text-base mt-3">
              유통 · 소싱 · 결제 · 팝업 · 컨설팅 — 다층 수익 창출 구조
            </p>
          </div>
          <Link
            to="/business"
            className="flex items-center gap-2 text-sm font-semibold text-[#1E90FF] hover:underline whitespace-nowrap cursor-pointer"
          >
            사업 상세 보기 <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`bg-white rounded-2xl p-7 border-t-4 ${svc.border} hover:translate-y-[-2px] transition-transform`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 flex items-center justify-center ${svc.bg} rounded-xl`}>
                  <i className={`${svc.icon} text-2xl ${svc.color}`} />
                </div>
                <span className="text-3xl font-black text-gray-100">{svc.num}</span>
              </div>

              <div className="mb-1">
                <span className={`text-xs font-bold ${svc.color} tracking-wide`}>{svc.subtitle}</span>
              </div>
              <h3 className="text-lg font-black text-[#0B1F3A] mb-3">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.desc}</p>

              <ul className="flex flex-col gap-2 mb-5">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <i className="ri-check-line text-[#1E90FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`text-xs ${svc.color} ${svc.bg} px-3 py-1.5 rounded-full inline-block font-medium`}>
                {svc.tag}
              </div>
            </div>
          ))}

          {/* Revenue Summary Card */}
          <div className="bg-[#0B1F3A] rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="text-xs text-white/40 font-bold tracking-widest uppercase mb-4">2026 Revenue Goal</div>
              <div className="text-4xl font-black text-white mb-2">122억+</div>
              <div className="text-white/60 text-sm mb-6">연간 수익 목표</div>

              <div className="flex flex-col gap-3">
                {[
                  { q: "2분기", target: "1억", color: "bg-[#1E90FF]", w: "w-1/4" },
                  { q: "3분기", target: "2억", color: "bg-[#1E90FF]", w: "w-2/4" },
                  { q: "4분기", target: "3~5억", color: "bg-[#1E90FF]", w: "w-3/4" },
                ].map((item) => (
                  <div key={item.q} className="flex items-center gap-3">
                    <span className="text-xs text-white/50 w-12 flex-shrink-0">{item.q}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-1.5">
                      <div className={`${item.color} ${item.w} h-1.5 rounded-full`} />
                    </div>
                    <span className="text-xs text-white font-bold w-12 text-right">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs text-white/40 mb-3">수익 비중 전략</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "PG", pct: "30%" },
                  { label: "유통", pct: "30%" },
                  { label: "팝업", pct: "30%" },
                  { label: "기타", pct: "10%" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                    <span className="text-xs text-white/70">{r.label}</span>
                    <span className="text-xs text-[#1E90FF] font-bold">{r.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
