import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Organization from '@/components/Organization/Organization';
import { companyInfo, strategicPhases } from '@/config/company';

export const metadata: Metadata = {
  title: '회사소개 | 더케이엘링크그룹',
  description: '(주)더케이엘링크그룹의 회사 정보, 비전, 조직구조 및 전략을 소개합니다.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 페이지 제목 */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">회사소개</h1>
            <p className="text-lg text-gray-300 mt-4">
              연결을 통해 비즈니스를 혁신하는 기업
            </p>
          </div>
        </section>

        {/* 회사 개요 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="section-title mb-6">기본정보</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">회사명</p>
                    <p className="text-lg text-blue-600 font-semibold">{companyInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">영문명</p>
                    <p className="text-lg text-gray-900">{companyInfo.englishName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">대표이사</p>
                    <p className="text-lg text-gray-900">{companyInfo.ceo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">감사</p>
                    <p className="text-lg text-gray-900">{companyInfo.auditor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">COO</p>
                    <p className="text-lg text-gray-900">{companyInfo.coo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">슬로건</p>
                    <p className="text-lg text-blue-600 font-semibold">{companyInfo.tagline}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="section-title mb-6">사업 철학</h2>
                <div className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">플랫폼 혁신 모델</h3>
                    <p className="text-gray-700 mb-4 font-medium">
                      '잇고, 연결'하는 네트워크 중심 수익화 모델에서 <strong>'홍익인간 제세이화'</strong> 시스템의 플랫폼 혁신 모델로 변모합니다.
                    </p>
                  </div>

                  <div className="border-t border-blue-200 pt-6 space-y-4">
                    <div>
                      <p className="text-gray-700">
                        제조를 잘하는 업체는 판매를 할 곳을 찾지 못하고, 판매를 잘 하는 곳은 아이템을 찾지 못하는 실정입니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        우리의 강점은 <strong>네트워크</strong>입니다. 우리는 각 계 각층의 전문가들로 구성되어 있습니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        산업 전반에 걸쳐 유통하고자 하는 제품이 있다면, 브랜드의 강점을 찾아서 맞춤형 판매처를 '잇고 연결'합니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        우리는 경영 전반을 설계하고, 그 구조적 컨설팅을 지원하며 <strong>브랜딩 빌드업</strong>을 통해 지속가능한 경영을 다각도로 도와 드립니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4대 핵심 가치 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title text-center mb-12">4대 핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">명확한 비전</h3>
                    <p className="text-gray-700">대한민국 1위 B2B 연결 플랫폼 구축</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">다각적 수익</h3>
                    <p className="text-gray-700"><strong>5개</strong> 사업모델 기반의 안정적이고 반복적인 수익 구조</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg border-2 border-emerald-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">강력한 네트워크</h3>
                    <p className="text-gray-700">유통사, 브랜드, 의료기관 등 다층적 네트워크 구축</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">데이터 기반</h3>
                    <p className="text-gray-700">거래 데이터를 자산화하여 플랫폼의 가치 극대화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 조직도 — 새 컴포넌트 */}
        <Organization />

        {/* 전략 단계 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title text-center mb-12">전략 추진 단계</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {strategicPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    phase.status === 'completed'
                      ? 'border-green-400 bg-green-50'
                      : phase.status === 'in-progress'
                      ? 'border-blue-400 bg-blue-50'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      {phase.phase}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        phase.status === 'completed'
                          ? 'bg-green-200 text-green-800'
                          : phase.status === 'in-progress'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {phase.status === 'completed'
                        ? '완료'
                        : phase.status === 'in-progress'
                        ? '진행중'
                        : '예정'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {phase.description}
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    {phase.timeline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
