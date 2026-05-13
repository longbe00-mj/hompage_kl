export default function PainPointSection() {
  const roadmap = [
    {
      period: "1~4월",
      status: "완료",
      statusColor: "bg-emerald-500",
      items: ["법인 설립 완료", "주주 구성 완료", "네트워크 DB 구축", "총판 계약 체결"],
    },
    {
      period: "5~6월",
      status: "진행중",
      statusColor: "bg-[#1E90FF]",
      items: ["팝업 월 10개 연결", "수박원액 공급 개시", "PG 총판 확장", "홈페이지 POC"],
    },
    {
      period: "7~8월",
      status: "예정",
      statusColor: "bg-gray-300",
      items: ["홈페이지 그랜드 오픈", "플랫폼 구축", "채널영업 팀빌딩", "DB 기반 영업"],
    },
    {
      period: "9~12월",
      status: "목표",
      statusColor: "bg-orange-400",
      items: ["추석/수능 팝업 중개", "PG 병원 확장", "유통 확대", "영업이익 5억 달성"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#0B1F3A]" />
          <span className="text-xs font-bold text-[#0B1F3A] tracking-widest uppercase">2026 Roadmap</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Why KL LINK */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] leading-tight mb-6">
              왜 더케이엘링크그룹인가?
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              단순 중개회사가 아닌, <strong className="text-[#0B1F3A]">수익창출형 플랫폼 법인</strong>으로서
              유통 + PG + 팝업 통합 반복 수익 구조를 보유합니다.
            </p>

            {/* Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  icon: "ri-refresh-line",
                  title: "반복 수익 구조",
                  desc: "PG 결제 수수료 쉐어로 한 번 계약 후 지속 수익 발생",
                  color: "text-[#1E90FF]",
                  bg: "bg-[#1E90FF]/5",
                },
                {
                  icon: "ri-database-2-line",
                  title: "데이터 자산화",
                  desc: "브랜드 DB · 유통사 DB · MD 네트워크 구축 완료",
                  color: "text-[#0B1F3A]",
                  bg: "bg-[#0B1F3A]/5",
                },
                {
                  icon: "ri-scales-line",
                  title: "Asset Light 모델",
                  desc: "재고 리스크 ZERO, 높은 확장성의 중개 플랫폼",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: "ri-global-line",
                  title: "플랫폼 확장성",
                  desc: "홈페이지 → B2B 연결 플랫폼으로 단계적 전환",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
              ].map((item) => (
                <div key={item.title} className={`${item.bg} rounded-xl p-5`}>
                  <div className={`w-9 h-9 flex items-center justify-center mb-3`}>
                    <i className={`${item.icon} text-xl ${item.color}`} />
                  </div>
                  <div className="font-bold text-[#0B1F3A] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* IR Point */}
            <div className="bg-[#0B1F3A] rounded-2xl p-6 text-white">
              <div className="text-xs text-white/40 font-bold tracking-widest uppercase mb-4">투자 포인트 (IR)</div>
              <div className="flex flex-col gap-3">
                {[
                  "이미 매출 발생 구조 완성",
                  "3개 이상의 수익모델 보유",
                  "네트워크 기반 진입장벽",
                  "반복 수익 구조 (PG + 유통)",
                  "플랫폼 확장 가능성",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#1E90FF] rounded-full flex-shrink-0">
                      <i className="ri-check-line text-white text-xs" />
                    </div>
                    <span className="text-sm text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Roadmap */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="text-sm font-bold text-[#0B1F3A] mb-6">2026년 실행 로드맵</div>
            <div className="flex flex-col gap-4">
              {roadmap.map((step, idx) => (
                <div key={step.period} className="flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${step.statusColor} flex-shrink-0 mt-1`} />
                    {idx < roadmap.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-black text-[#0B1F3A]">{step.period}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${step.statusColor}`}>
                        {step.status}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {step.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Goal */}
            <div className="mt-6 bg-gradient-to-br from-[#1E90FF]/10 to-[#0B1F3A]/10 rounded-2xl p-6 border border-[#1E90FF]/20">
              <div className="text-xs text-[#1E90FF] font-bold tracking-widest uppercase mb-2">2026 Final Goal</div>
              <div className="text-2xl font-black text-[#0B1F3A] mb-1">영업이익 5억</div>
              <div className="text-sm text-gray-500">대한민국 1위 B2B 연결 플랫폼</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
