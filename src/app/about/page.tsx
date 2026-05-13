import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
                    <p className="text-lg text-gray-900">{companyInfo.name}</p>
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
                <h2 className="section-title mb-6">경영 철학</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">지속가능경영</h3>
                    <p className="text-gray-600">
                      단기 수익만을 추구하지 않고, 장기적 가치 창출을 통해 사업을 지속 발전시킵니다.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">홍익인간 제세이화</h3>
                    <p className="text-gray-600">
                      모든 이해관계자의 이익을 동시에 추구하며, 사회 전체의 화합과 번영을 목표로 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 조직구조 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="section-title text-center mb-12">조직구조</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col items-center justify-center">
                <div className="mb-8">
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                    대표이사: {companyInfo.ceo}
                  </div>
                </div>

                <div className="flex gap-8 flex-wrap justify-center mb-8">
                  <div className="text-center">
                    <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold">
                      감사<br />{companyInfo.auditor}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">경영관리</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold">
                      COO<br />{companyInfo.coo}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">등기이사</p>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-8 w-full">
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">주주구성</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-300 rounded-lg">
                      <p className="font-semibold text-gray-900">이성진</p>
                      <p className="text-sm text-gray-600">국제물류회사 이사</p>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg">
                      <p className="font-semibold text-gray-900">김대운</p>
                      <p className="text-sm text-gray-600">대운아이엘티 대표</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
