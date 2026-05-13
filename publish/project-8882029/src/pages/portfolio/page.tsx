import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

const portfolios = [
  {
    id: 1,
    title: "수박주스 원액 유통중개",
    category: "유통중개",
    client: "제조사 ↔ 유통사",
    desc: "수박주스 원액 제조사와 주요 유통 채널을 연결하여 안정적인 공급망을 구축했습니다.",
    result: "월 3,000만원+ 매출 창출",
    image: "https://readdy.ai/api/search-image?query=Fresh%20watermelon%20juice%20in%20glass%20bottles%20on%20clean%20white%20background%2C%20product%20photography%2C%20professional%20studio%20lighting%2C%20minimal%20style%2C%20high%20quality%20commercial%20photo&width=600&height=400&seq=portfolio1&orientation=landscape",
  },
  {
    id: 2,
    title: "우베(UVE) 제품소싱",
    category: "제품소싱",
    client: "우베 브랜드",
    desc: "해외 우수 브랜드 '우베'의 국내 시장 진출을 위한 제품소싱 및 유통 채널 매칭을 지원했습니다.",
    result: "국내 3대 유통사 입점 성공",
    image: "https://readdy.ai/api/search-image?query=Premium%20imported%20beauty%20and%20lifestyle%20products%20arranged%20on%20marble%20surface%2C%20elegant%20product%20display%2C%20soft%20natural%20lighting%2C%20luxury%20brand%20aesthetic&width=600&height=400&seq=portfolio2&orientation=landscape",
  },
  {
    id: 3,
    title: "빠빠빵 팝업스토어",
    category: "팝업 컨설팅",
    client: "빠빠빵",
    desc: "베이커리 브랜드 '빠빠빵'의 팝업스토어 기획부터 운영까지 전 과정을 컨설팅했습니다.",
    result: "2주간 5,000만원 매출 달성",
    image: "https://readdy.ai/api/search-image?query=Modern%20bakery%20pop-up%20store%20interior%20with%20warm%20lighting%2C%20bread%20display%2C%20cozy%20atmosphere%2C%20wooden%20shelves%2C%20professional%20retail%20photography&width=600&height=400&seq=portfolio3&orientation=landscape",
  },
  {
    id: 4,
    title: "커도의서재 PG 영업대행",
    category: "PG 영업대행",
    client: "커도의서재",
    desc: "독립서점 '커도의서재'의 온라인 결제 시스템 구축을 위한 PG 가입 및 결제 솔루션을 지원했습니다.",
    result: "결제 수수료 0.8% 절감",
    image: "https://readdy.ai/api/search-image?query=Cozy%20independent%20bookstore%20interior%20with%20wooden%20bookshelves%2C%20warm%20ambient%20lighting%2C%20reading%20corner%2C%20professional%20interior%20photography&width=600&height=400&seq=portfolio4&orientation=landscape",
  },
  {
    id: 5,
    title: "KIS정보통신 PG 가맹점 모집",
    category: "PG 영업대행",
    client: "KIS정보통신",
    desc: "KIS정보통신의 PG 서비스 가맹점 모집 및 영업대행을 통해 시장 점유율 확대를 지원했습니다.",
    result: "월 500+ 신규 가맹점 유치",
    image: "https://readdy.ai/api/search-image?query=Modern%20fintech%20payment%20terminal%20and%20digital%20payment%20concept%2C%20clean%20tech%20aesthetic%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20photography&width=600&height=400&seq=portfolio5&orientation=landscape",
  },
  {
    id: 6,
    title: "닥터88+ B2B 영업대행",
    category: "B2B 영업대행",
    client: "닥터88+",
    desc: "건강기능식품 브랜드 '닥터88+'의 호텔, 리조트, 골프장 등 B2B 채널 영업대행을 수행했습니다.",
    result: "20개+ B2B 채널 입점",
    image: "https://readdy.ai/api/search-image?query=Premium%20health%20supplement%20products%20in%20elegant%20packaging%20on%20clean%20background%2C%20professional%20product%20photography%2C%20soft%20studio%20lighting%2C%20wellness%20brand%20aesthetic&width=600&height=400&seq=portfolio6&orientation=landscape",
  },
];

const partners = [
  { name: "KIS정보통신", category: "PG/결제" },
  { name: "KCP", category: "PG/결제" },
  { name: "COVAN", category: "유통" },
  { name: "페이테크", category: "핀테크" },
  { name: "국제물류", category: "물류" },
  { name: "대운아이엘티", category: "IT" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              프로젝트 사례
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              THE KL LINK GROUP이 수행한 주요 프로젝트와 성과를 소개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-[#0B1F3A]/10 text-[#0B1F3A] rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 mb-3">{item.client}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <i className="ri-trophy-line text-[#1E90FF]" />
                    <span className="text-sm font-semibold text-[#0B1F3A]">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              협력 파트너
            </h2>
            <p className="text-gray-500 mt-4">
              THE KL LINK GROUP과 함께하는 주요 협력사들입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0B1F3A]/5 rounded-lg mx-auto mb-3">
                  <span className="text-lg font-bold text-[#0B1F3A]">{partner.name[0]}</span>
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-400">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "6+", label: "진행 프로젝트" },
              { num: "30+", label: "협력 브랜드" },
              { num: "50+", label: "유통 채널" },
              { num: "122억", label: "2026 목표 매출" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1E90FF] mb-2">{stat.num}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}