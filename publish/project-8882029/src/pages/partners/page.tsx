import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

const partnerTypes = [
  {
    title: "브랜드/제조사",
    desc: "제품을 유통 채널에 공급하고 싶은 브랜드 및 제조사",
    benefits: ["유통 채널 확대", "입점 컨설팅", "매출 성장 지원"],
    icon: "ri-building-2-line",
  },
  {
    title: "유통사/리테일",
    desc: "차별화된 상품을 찾는 유통사 및 리테일 기업",
    benefits: ["우수 상품 소싱", "공급망 안정화", "트렌드 상품 확보"],
    icon: "ri-store-line",
  },
  {
    title: "PG/결제사",
    desc: "가맹점을 확보하고 싶은 결제대행사",
    benefits: ["가맹점 모집 대행", "영업 인프라 활용", "시장 확대 지원"],
    icon: "ri-bank-card-line",
  },
  {
    title: "서비스/컨설팅",
    desc: "기업 성장을 위한 전문 서비스 기업",
    benefits: ["공동 프로젝트", "시너지 창출", "네트워크 공유"],
    icon: "ri-user-shared-line",
  },
];

const currentPartners = [
  { name: "KIS정보통신", category: "PG/결제", type: "결제 솔루션" },
  { name: "KCP", category: "PG/결제", type: "결제 대행" },
  { name: "COVAN", category: "유통", type: "유통 채널" },
  { name: "페이테크", category: "핀테크", type: "결제 기술" },
  { name: "국제물류", category: "물류", type: "물류 인프라" },
  { name: "대운아이엘티", category: "IT", type: "기술 개발" },
  { name: "수박주스 원액", category: "F&B", type: "제조사" },
  { name: "우베(UVE)", category: "뷰티", type: "브랜드" },
  { name: "빠빠빵", category: "F&B", type: "베이커리" },
  { name: "커도의서재", category: "리테일", type: "독립서점" },
  { name: "닥터88+", category: "헬스", type: "건강기능식품" },
  { name: "KIS PG", category: "PG/결제", type: "영업대행" },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Partners
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              파트너십
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              THE KL LINK GROUP은 다양한 분야의 파트너들과 함께 성장하는 생태계를 구축하고 있습니다.
              함께할 파트너를 기다리고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Partnership Types
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              함께하는 파트너
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0B1F3A] rounded-xl mx-auto mb-5">
                  <i className={`${type.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{type.title}</h3>
                <p className="text-sm text-gray-500 mb-5">{type.desc}</p>
                <div className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <i className="ri-check-line text-[#1E90FF]" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              주요 협력사
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentPartners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0B1F3A]/5 rounded-lg">
                    <span className="text-sm font-bold text-[#0B1F3A]">{partner.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">{partner.name}</h3>
                    <p className="text-xs text-gray-400">{partner.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-[#1E90FF]/10 text-[#1E90FF] rounded">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            파트너가 되어주세요
          </h2>
          <p className="text-white/60 mb-8">
            THE KL LINK GROUP과 함께 성장할 기업을 기다리고 있습니다.<br />
            아래 연락처로 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <i className="ri-phone-line text-[#1E90FF]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50">대표번호</div>
                <div className="text-sm font-semibold">1800-7796</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <i className="ri-mail-line text-[#1E90FF]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50">이메일</div>
                <div className="text-sm font-semibold">thekllink7256@gmail.com</div>
              </div>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a7fd9] transition-colors"
          >
            파트너 신청하기
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}