import { Link } from "react-router-dom";

const strategySteps = [
  {
    step: "1단계",
    title: "네트워크 확보",
    desc: "브랜드 DB · 유통사 DB · MD 네트워크 · 병원/프랜차이즈 DB 구축",
    icon: "ri-user-add-line",
    status: "완료",
    statusColor: "text-emerald-600 bg-emerald-50",
  },
  {
    step: "2단계",
    title: "거래 발생",
    desc: "팝업 중개 · 유통 공급 · PG 계약 — 연결 자체로 돈 버는 구조",
    icon: "ri-exchange-dollar-line",
    status: "진행중",
    statusColor: "text-[#1E90FF] bg-[#1E90FF]/10",
  },
  {
    step: "3단계",
    title: "데이터 자산화",
    desc: "브랜드별 매출 데이터 · 유통 채널 성과 · 핵심 KPI 축적",
    icon: "ri-database-2-line",
    status: "예정",
    statusColor: "text-orange-600 bg-orange-50",
  },
  {
    step: "4단계",
    title: "플랫폼화",
    desc: "브랜드 등록 · 입점 신청 · 자동 매칭 · 거래 중개 · CRM 관리",
    icon: "ri-apps-2-line",
    status: "목표",
    statusColor: "text-purple-600 bg-purple-50",
  },
];

export default function ConsultingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1F3A] via-[#0d2a4a] to-[#0B1F3A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-white/20" />
            <span className="text-xs font-bold text-white/40 tracking-widest uppercase">Growth Strategy</span>
            <div className="w-8 h-0.5 bg-white/20" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            네트워크 → 데이터 → <span className="text-[#1E90FF]">플랫폼</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            지금은 중개 회사, 목표는 플랫폼 기업.<br />
            팝업 + 유통 + PG 통합 플랫폼으로 진화합니다.
          </p>
        </div>

        {/* Strategy Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {strategySteps.map((step, idx) => (
            <div key={step.step} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
                    <i className={`${step.icon} text-[#1E90FF] text-xl`} />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${step.statusColor}`}>
                    {step.status}
                  </span>
                </div>
                <div className="text-xs text-white/30 font-bold mb-1">{step.step}</div>
                <div className="text-base font-black text-white mb-3">{step.title}</div>
                <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
              </div>
              {/* Arrow */}
              {idx < strategySteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center">
                  <i className="ri-arrow-right-s-line text-white/20 text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: Vision + CTA */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vision Card */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-xs text-white/30 font-bold tracking-widest uppercase mb-4">Final Vision</div>
            <h3 className="text-2xl font-black text-white mb-4">
              대한민국 1위<br />
              <span className="text-[#1E90FF]">B2B 연결 플랫폼</span>
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: "ri-store-3-line", text: "팝업 = 우리가 연결" },
                { icon: "ri-truck-line", text: "유통 = 우리가 연결" },
                { icon: "ri-bank-card-line", text: "결제 = 우리가 연결" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1E90FF]/20 rounded-lg flex-shrink-0">
                    <i className={`${item.icon} text-[#1E90FF] text-sm`} />
                  </div>
                  <span className="text-sm text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-xs text-white/30 mb-2">결국</div>
              <div className="text-base font-bold text-white">"모든 거래의 허브"</div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex-1 bg-[#1E90FF] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs text-white/70 font-bold tracking-widest uppercase mb-4">함께 성장하세요</div>
              <h3 className="text-2xl font-black text-white mb-4">
                THE KL LINK GROUP와<br />함께하세요
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                플랫폼 레볼루션을 통해 필요 자금 지원부터 제품 중개까지.
                비즈니스의 모든 연결을 책임집니다.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white text-[#1E90FF] font-bold px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-send-line" />
                제안 문의하기
              </Link>
              <Link
                to="/partners"
                className="flex items-center justify-center gap-2 bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/30 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-shake-hands-line" />
                파트너 신청
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
