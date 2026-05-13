import { Link } from "react-router-dom";

const portfolioItems = [
  {
    category: "유통중개",
    categoryColor: "text-[#1E90FF] bg-[#1E90FF]/10",
    title: "수박주스 원액 1kg B2B 공급",
    desc: "커피 프랜차이즈 및 카페 브랜드 대상 수박주스 원액 총판 계약 체결. 5월 중순 공급 개시.",
    result: "총판 계약 완료",
    resultColor: "text-emerald-600",
    img: "https://readdy.ai/api/search-image?query=fresh%20watermelon%20juice%20concentrate%20product%20in%20clean%20white%20bottle%20on%20minimal%20white%20background%2C%20professional%20food%20product%20photography%2C%20vibrant%20red%20color%2C%20commercial%20quality%2C%20simple%20elegant%20packaging%20design&width=400&height=300&seq=kllink-portfolio-01&orientation=landscape",
  },
  {
    category: "유통중개",
    categoryColor: "text-[#1E90FF] bg-[#1E90FF]/10",
    title: "우베(자색고구마) B2B 공급",
    desc: "필리핀산 우베(자색고구마) 원료 국내 카페 및 디저트 브랜드 B2B 공급 계약 추진.",
    result: "계약 추진중",
    resultColor: "text-orange-600",
    img: "https://readdy.ai/api/search-image?query=purple%20ube%20yam%20ingredient%20product%20photography%20on%20clean%20white%20background%2C%20vibrant%20purple%20color%20food%20ingredient%2C%20professional%20commercial%20photography%2C%20minimal%20elegant%20presentation&width=400&height=300&seq=kllink-portfolio-02&orientation=landscape",
  },
  {
    category: "팝업 컨설팅",
    categoryColor: "text-orange-600 bg-orange-50",
    title: "빠빠빵 팝업 스토어 운영",
    desc: "베이커리 브랜드 빠빠빵의 팝업 스토어 기획 및 운영 컨설팅. 5월 1일~14일 진행.",
    result: "운영 완료",
    resultColor: "text-emerald-600",
    img: "https://readdy.ai/api/search-image?query=modern%20bakery%20popup%20store%20interior%20with%20fresh%20bread%20display%2C%20warm%20lighting%2C%20minimalist%20design%2C%20professional%20retail%20space%2C%20cozy%20atmosphere%2C%20clean%20white%20and%20wood%20tones&width=400&height=300&seq=kllink-portfolio-03&orientation=landscape",
  },
  {
    category: "팝업 컨설팅",
    categoryColor: "text-orange-600 bg-orange-50",
    title: "커도의서재 세컨브랜드 팝업",
    desc: "커도의서재 세컨브랜드 팝업 중개 및 운영 컨설팅. 4월 20일~ 진행.",
    result: "진행중",
    resultColor: "text-[#1E90FF]",
    img: "https://readdy.ai/api/search-image?query=elegant%20bookstore%20cafe%20popup%20space%20with%20warm%20lighting%2C%20books%20and%20coffee%20display%2C%20sophisticated%20interior%20design%2C%20modern%20minimalist%20retail%20concept%2C%20cozy%20reading%20atmosphere&width=400&height=300&seq=kllink-portfolio-04&orientation=landscape",
  },
  {
    category: "PG 영업대행",
    categoryColor: "text-emerald-600 bg-emerald-50",
    title: "KIS정보통신 PG 총판 계약",
    desc: "KIS정보통신 PG 총판 계약 체결. 가맹점 확보 및 결제 수수료 Recurring 수익 구조 구축.",
    result: "계약 완료",
    resultColor: "text-emerald-600",
    img: "https://readdy.ai/api/search-image?query=modern%20payment%20terminal%20card%20reader%20on%20clean%20desk%2C%20professional%20fintech%20product%20photography%2C%20sleek%20design%2C%20white%20background%2C%20business%20payment%20solution&width=400&height=300&seq=kllink-portfolio-05&orientation=landscape",
  },
  {
    category: "제품소싱",
    categoryColor: "text-[#0B1F3A] bg-[#0B1F3A]/5",
    title: "닥터88+ 의료치료기기 소싱",
    desc: "2급 의료치료기기 닥터88+ 독점 소싱 계약. 병원 및 의료기관 B2B 공급 채널 구축.",
    result: "소싱 완료",
    resultColor: "text-emerald-600",
    img: "https://readdy.ai/api/search-image?query=medical%20therapy%20device%20equipment%20on%20clean%20white%20background%2C%20professional%20medical%20product%20photography%2C%20modern%20healthcare%20technology%2C%20clinical%20precision%20instrument&width=400&height=300&seq=kllink-portfolio-06&orientation=landscape",
  },
];

export default function InterviewSection() {
  return (
    <section className="py-24 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#0B1F3A]" />
          <span className="text-xs font-bold text-[#0B1F3A] tracking-widest uppercase">Portfolio</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] leading-tight">
              진행 프로젝트
            </h2>
            <p className="text-gray-500 text-base mt-3">
              실제 진행 중인 사업 사례와 성과를 확인하세요
            </p>
          </div>
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-sm font-semibold text-[#1E90FF] hover:underline whitespace-nowrap cursor-pointer"
          >
            전체 포트폴리오 <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-transform cursor-pointer"
            >
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className={`text-xs font-bold ${item.resultColor}`}>
                    {item.result}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Teaser */}
        <div className="mt-16 bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold text-[#0B1F3A] tracking-widest uppercase mb-2">Partners</div>
            <h3 className="text-xl font-black text-[#0B1F3A] mb-2">함께하는 파트너사</h3>
            <p className="text-sm text-gray-500">유통 · 물류 · 금융 · 기술 분야 전문 파트너와 협력합니다</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["KIS정보통신", "KCP", "COVAN", "페이테크", "사이다페이", "대운아이엘티"].map((partner) => (
              <div
                key={partner}
                className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-600"
              >
                {partner}
              </div>
            ))}
          </div>
          <Link
            to="/partners"
            className="flex items-center gap-2 bg-[#0B1F3A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1a3a5c] transition-colors whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            파트너 신청 <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
