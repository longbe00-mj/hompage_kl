import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { businesses } from '@/config/company';

export const metadata: Metadata = {
  title: '사업모델 | 더케이엘링크그룹',
  description: '유통중개, 제품소싱, PG영업대행, 팝업컨설팅, B2B컨설팅 5대 사업 모델',
};

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 페이지 제목 */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">5대 사업 모델</h1>
            <p className="text-lg text-gray-300 mt-4">
              안정적이고 반복적인 수익 구조를 갖춘 다각적 비즈니스
            </p>
          </div>
        </section>

        {/* 사업 모델 상세 */}
        <section className="py-16 md:py-24">
          <div className="container">
            {businesses.map((business, index) => (
              <div key={business.id} id={business.id} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <div className="text-6xl mb-4">{business.icon}</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          {business.title}
                        </h2>
                        <p className="text-blue-600 font-semibold mb-6">
                          {business.englishTitle}
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                          {business.description}
                        </p>

                        <div className="mb-8">
                          <h3 className="font-semibold text-gray-900 mb-4">
                            📋 주요 상품/서비스
                          </h3>
                          <ul className="space-y-3">
                            {business.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4">
                            💰 수익 모델
                          </h3>
                          <ul className="space-y-2">
                            {business.revenueModel.map((model, i) => (
                              <li key={i} className="text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                {model}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                          핵심 가치
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600 font-semibold mb-2">
                              차별성
                            </p>
                            <p className="text-gray-700">
                              {business.id === 'distribution'
                                ? '기존 네트워크를 통한 빠른 공급 가능'
                                : business.id === 'sourcing'
                                ? '독점 계약으로 차별화된 상품 제공'
                                : business.id === 'pg'
                                ? '총판 기반 저비용 고효율 결제 솔루션'
                                : '브랜드 DB와 네트워크를 활용한 통합 서비스'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 font-semibold mb-2">
                              성장성
                            </p>
                            <p className="text-gray-700">
                              {business.id === 'distribution'
                                ? '신규 상품 지속 추가를 통한 포트폴리오 확대'
                                : business.id === 'sourcing'
                                ? '글로벌 소싱을 통한 제품군 다양화'
                                : business.id === 'pg'
                                ? 'Recurring 수익으로 장기 현금흐름 확보'
                                : '팝업 시즌별 수익 극대화'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 h-full order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                          성공 사례
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600 font-semibold mb-2">
                              현재 진행
                            </p>
                            <p className="text-gray-700">
                              {business.id === 'distribution'
                                ? '수박원액 월 100kg, 우베 공급 시작'
                                : business.id === 'sourcing'
                                ? '닥터88+ 병원 판매 확대 중'
                                : business.id === 'pg'
                                ? '의료기관 100곳 이상 PG 계약'
                                : '빠빠빵 팝업 5월 개최, 커도의서재 신규 런칭'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 font-semibold mb-2">
                              예상 효과
                            </p>
                            <p className="text-gray-700">
                              {business.id === 'distribution'
                                ? '월 1,000만원 이상 순이익'
                                : business.id === 'sourcing'
                                ? '분기별 2,000만원 이상 주문'
                                : business.id === 'pg'
                                ? '월 500만원 이상 수수료 수익'
                                : '팝업당 5,000~10,000만원 매출'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="text-6xl mb-4">{business.icon}</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          {business.title}
                        </h2>
                        <p className="text-blue-600 font-semibold mb-6">
                          {business.englishTitle}
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                          {business.description}
                        </p>

                        <div className="mb-8">
                          <h3 className="font-semibold text-gray-900 mb-4">
                            📋 주요 상품/서비스
                          </h3>
                          <ul className="space-y-3">
                            {business.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4">
                            💰 수익 모델
                          </h3>
                          <ul className="space-y-2">
                            {business.revenueModel.map((model, i) => (
                              <li key={i} className="text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                {model}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {index < businesses.length - 1 && (
                  <div className="my-16 border-t border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 통합 전략 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="section-title text-center mb-12">
              5개 사업의 통합 시너지
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🔄 수익 구조의 다각화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    한 고객과의 거래가 5가지 방식으로 반복 수익을 창출합니다:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ 상품 공급 (유통중개)</li>
                    <li>✓ 의료기기 판매 (제품소싱)</li>
                    <li>✓ 결제 솔루션 (PG)</li>
                    <li>✓ 팝업 운영 (컨설팅)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    📊 데이터 기반 플랫폼 확장
                  </h3>
                  <p className="text-gray-600 mb-4">
                    모든 거래에서 나오는 데이터는 플랫폼의 핵심 자산:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ 어떤 상품이 잘 팔리는가</li>
                    <li>✓ 어느 채널이 효과적인가</li>
                    <li>✓ 어떤 고객이 가치있는가</li>
                    <li>✓ 최적의 조합은 무엇인가</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  최종 목표: B2B 연결 플랫폼
                </h3>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                  현재는 "중개 회사"이지만, 데이터 기반의 자동 매칭, CRM 통합 등을 통해
                  <strong className="text-blue-600"> "대한민국 1위 B2B 연결 플랫폼"</strong>으로 진화할 것입니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
