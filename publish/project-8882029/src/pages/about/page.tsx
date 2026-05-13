import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              잇고, 연결하라
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              모든 비즈니스는 연결에서 시작됩니다. THE KL LINK GROUP은 기업 간 가치를 연결하는
              B2B 플랫폼 기업입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Company Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-6">
                (주)더케이엘링크그룹
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  THE KL LINK GROUP은 기업 간 가치를 연결하는 B2B 플랫폼 기업입니다.
                  유통중개, 제품소싱, B2B 영업대행, PG 영업대행, 팝업 컨설팅, 경영컨설팅 등
                  다양한 사업 모델을 통해 기업 간 연결의 가치를 창출합니다.
                </p>
                <p>
                  2026년 그랜드 오픈을 목표로, 네트워크 확보 → 거래 발생 → 데이터 자산화 → 플랫폼화의
                  4단계 전략을 통해 대한민국 1위 B2B 연결 플랫폼으로 성장하고 있습니다.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">회사 정보</h3>
              <div className="space-y-4">
                {[
                  { label: "상호명", value: "(주)더케이엘링크그룹" },
                  { label: "대표이사", value: "김성범" },
                  { label: "COO", value: "이서영" },
                  { label: "감사", value: "황정규" },
                  { label: "대표번호", value: "1800-7796" },
                  { label: "이메일", value: "thekllink7256@gmail.com" },
                  { label: "FAX", value: "0504-233-8436" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-medium text-[#0B1F3A]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Philosophy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              경영 철학
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-shield-check-line",
                title: "지속가능경영",
                desc: "ESG 경영을 바탕으로 한 지속가능한 비즈니스 모델 구축. 환경, 사회, 거버넌스를 고려한 책임 있는 경영을 실천합니다.",
              },
              {
                icon: "ri-heart-3-line",
                title: "홍익인간",
                desc: "모든 이해관계자에게 이익을 돌리는 경영 철학. 고객, 파트너, 직원 모두가 함께 성장하는 생태계를 지향합니다.",
              },
              {
                icon: "ri-links-line",
                title: "네트워크 → 데이터 → 플랫폼",
                desc: "네트워크를 통해 데이터를 축적하고, 데이터를 기반으로 한 플랫폼을 구축하여 지속적인 경쟁 우위를 확보합니다.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0B1F3A]/5 rounded-xl mb-5">
                  <i className={`${item.icon} text-xl text-[#0B1F3A]`} />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Shareholders
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              주주 구성
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "이성진",
                company: "국제물류",
                role: "주주",
                desc: "물류 및 유통 인프라를 보유한 전략적 투자자",
              },
              {
                name: "김대운",
                company: "대운아이엘티",
                role: "주주",
                desc: "IT 솔루션 및 플랫폼 기술력을 보유한 전략적 투자자",
              },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#0B1F3A] rounded-full mx-auto mb-5">
                  <span className="text-white font-bold text-lg">{item.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-1">{item.name}</h3>
                <p className="text-sm text-[#1E90FF] font-medium mb-3">{item.company}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            대한민국 1위 B2B 연결 플랫폼
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            2026년 그랜드 오픈을 통해 기업 간 모든 거래를 연결하는
            대한민국 대표 B2B 플랫폼으로 자리매김하겠습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: "5+", label: "사업 모델" },
              { num: "122억+", label: "연 수익 목표" },
              { num: "2026", label: "그랜드 오픈" },
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