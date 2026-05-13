import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#0B1F3A]" />
          <span className="text-xs font-bold text-[#0B1F3A] tracking-widest uppercase">About THE KL LINK GROUP</span>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] leading-tight mb-6">
              단순 중개를 넘어,<br />
              <span className="text-[#1E90FF]">수익창출형 플랫폼</span>으로
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              (주)더케이엘링크그룹은 유통허브 · 세일즈엔진 · 결제통제 · 투자허브를 하나의 구조로 묶는
              <strong className="text-[#0B1F3A]"> 수익통합 플랫폼</strong>입니다.
              한 번 연결로 계속 수익이 발생하는 구조를 만들어갑니다.
            </p>

            {/* Philosophy */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: "ri-leaf-line", text: "지속가능경영 – 홍익인간 제세이화 기반 가치 창출" },
                { icon: "ri-links-line", text: "연결을 통한 시장 효율화" },
                { icon: "ri-bar-chart-box-line", text: "네트워크 → 데이터 → 플랫폼 전환 전략" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0B1F3A]/5 rounded-lg flex-shrink-0">
                    <i className={`${item.icon} text-[#1E90FF] text-base`} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 bg-[#0B1F3A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1a3a5c] transition-colors whitespace-nowrap cursor-pointer"
              >
                회사 소개 보기
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/business"
                className="flex items-center justify-center gap-2 border border-[#0B1F3A] text-[#0B1F3A] font-semibold px-6 py-3 rounded-full hover:bg-[#0B1F3A] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                사업 모델 보기
              </Link>
            </div>
          </div>

          {/* Right: Company Info Card */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-[#0B1F3A] rounded-2xl p-8 text-white">
              <div className="text-xs text-white/50 font-bold tracking-widest uppercase mb-6">Company Overview</div>

              <div className="flex flex-col gap-5">
                {[
                  { label: "회사명", value: "(주)더케이엘링크그룹" },
                  { label: "대표이사", value: "김성범 (CEO)" },
                  { label: "COO", value: "이서영" },
                  { label: "감사", value: "황정규 (경영관리)" },
                  { label: "대표번호", value: "1800-7796" },
                  { label: "이메일", value: "thekllink7256@gmail.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs text-white/40 w-20 flex-shrink-0 pt-0.5">{item.label}</span>
                    <span className="text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shareholders */}
            <div className="mt-4 bg-gray-50 rounded-2xl p-6">
              <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">주주 구성</div>
              <div className="flex flex-col gap-3">
                {[
                  { name: "이성진", role: "국제물류회사 이사" },
                  { name: "김대운", role: "대운아이엘티 대표" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0B1F3A] rounded-full flex-shrink-0">
                      <span className="text-white text-xs font-bold">{s.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0B1F3A]">{s.name}</div>
                      <div className="text-xs text-gray-400">{s.role}</div>
                    </div>
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
