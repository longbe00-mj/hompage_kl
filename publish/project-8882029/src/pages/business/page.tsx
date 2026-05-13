import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

const businesses = [
  {
    id: "01",
    title: "유통중개",
    subtitle: "Distribution Brokerage",
    type: "Cash Cow 1",
    desc: "브랜드와 유통사를 연결하는 B2B 유통중개 서비스. 제조사의 제품을 유통 채널에 효율적으로 공급하여 양측의 가치를 극대화합니다.",
    features: ["브랜드 ↔ 유통사 매칭", "입점 컨설팅", "재고 관리 지원", "매출 분석 리포트"],
    icon: "ri-store-2-line",
  },
  {
    id: "02",
    title: "제품소싱",
    subtitle: "Product Sourcing",
    type: "Cash Cow 2",
    desc: "국내외 우수 상품을 발굴하여 유통 채널에 공급하는 제품소싱 서비스. 트렌드 분석과 시장 조사를 통해 차별화된 상품을 소싱합니다.",
    features: ["국내/해외 상품 발굴", "트렌드 분석", "가격 경쟁력 확보", "품질 검증"],
    icon: "ri-search-line",
  },
  {
    id: "03",
    title: "B2B 영업대행",
    subtitle: "B2B Sales Agency",
    type: "Cash Cow 3",
    desc: "커피 브랜드, 호텔, 골프장 등 B2B 채널을 대상으로 한 영업대행 서비스. 전문 영업 인력을 통한 효율적인 시장 진출을 지원합니다.",
    features: ["B2B 채널 영업", "호텔/리조트 공급", "골프장 입점", "기업 판촉 지원"],
    icon: "ri-briefcase-4-line",
  },
  {
    id: "04",
    title: "PG 영업대행",
    subtitle: "PG Sales Agency",
    type: "Cash Cow 4",
    desc: "결제대행사(PG) 영업대행 서비스. 온라인/오프라인 가맹점을 대상으로 한 PG 가입 유도 및 결제 솔루션 공급을 지원합니다.",
    features: ["PG 가맹점 모집", "결제 솔루션 컨설팅", "수수료 협상 지원", "가맹점 관리"],
    icon: "ri-bank-card-line",
  },
  {
    id: "05",
    title: "팝업 컨설팅",
    subtitle: "Pop-up Consulting",
    type: "Cash Cow 5",
    desc: "팝업스토어 기획 및 운영 컨설팅 서비스. 공간 섭외부터 운영, 마케팅까지 팝업스토어 전 과정을 지원합니다.",
    features: ["팝업 공간 섭외", "기획 및 운영", "마케팅 지원", "매출 분석"],
    icon: "ri-shopping-bag-3-line",
  },
  {
    id: "06",
    title: "경영컨설팅",
    subtitle: "Management Consulting",
    type: "Value Add",
    desc: "기업의 성장과 효율화를 위한 경영컨설팅 서비스. 전략 수립, 조직 개선, 재무 컨설팅 등 종합적인 경영 지원을 제공합니다.",
    features: ["성장 전략 수립", "조직 개선", "재무 컨설팅", "M&A 지원"],
    icon: "ri-bar-chart-grouped-line",
  },
];

export default function Business() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Business
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              6대 사업 모델
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              THE KL LINK GROUP은 6가지 핵심 사업 모델을 통해 기업 간 가치를 연결하고
              지속 가능한 수익을 창출합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Goal */}
      <section className="py-16 bg-[#1E90FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">2026년 수익 목표</h2>
              <p className="text-white/80">분기별 성장 로드맵과 수익 비중 전략</p>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white">122억+</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { quarter: "1Q", revenue: "15억", focus: "네트워크 확보" },
              { quarter: "2Q", revenue: "28억", focus: "거래 발생" },
              { quarter: "3Q", revenue: "35억", focus: "데이터 자산화" },
              { quarter: "4Q", revenue: "44억", focus: "플랫폼화" },
            ].map((item) => (
              <div key={item.quarter} className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                <div className="text-sm text-white/60 mb-1">{item.quarter}</div>
                <div className="text-xl font-bold text-white mb-2">{item.revenue}</div>
                <div className="text-xs text-white/50">{item.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              핵심 사업 영역
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <div key={biz.id} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:border hover:border-gray-100 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0B1F3A] rounded-xl">
                    <i className={`${biz.icon} text-xl text-white`} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    biz.type === "Value Add"
                      ? "bg-[#1E90FF]/10 text-[#1E90FF]"
                      : "bg-[#0B1F3A]/10 text-[#0B1F3A]"
                  }`}>
                    {biz.type}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mb-1">{biz.id}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">{biz.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{biz.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{biz.desc}</p>
                <div className="space-y-2">
                  {biz.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="ri-check-line text-[#1E90FF]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Strategy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              4단계 성장 전략
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "네트워크 확보",
                desc: "브랜드, 유통사, 제조사 등 핵심 파트너 네트워크 구축",
                icon: "ri-team-line",
              },
              {
                step: "02",
                title: "거래 발생",
                desc: "네트워크를 기반으로 한 실제 거래 및 매출 창출",
                icon: "ri-exchange-dollar-line",
              },
              {
                step: "03",
                title: "데이터 자산화",
                desc: "거래 데이터 축적 및 분석을 통한 인사이트 도출",
                icon: "ri-database-2-line",
              },
              {
                step: "04",
                title: "플랫폼화",
                desc: "데이터 기반 자동화 플랫폼 구축 및 스케일업",
                icon: "ri-apps-line",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0B1F3A]/5 rounded-xl mx-auto mb-5">
                  <i className={`${item.icon} text-2xl text-[#0B1F3A]`} />
                </div>
                <div className="text-xs text-[#1E90FF] font-bold mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            비즈니스 제안이 있으신가요?
          </h2>
          <p className="text-white/60 mb-8">
            THE KL LINK GROUP과 함께 성장할 파트너를 기다리고 있습니다.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a7fd9] transition-colors"
          >
            제안 문의하기
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}