import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '파트너 | 더케이엘링크그룹',
  description: '더케이엘링크그룹의 파트너와 협력사 정보, 제휴 신청',
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 페이지 제목 */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">파트너</h1>
            <p className="text-lg text-gray-300 mt-4">
              함께 성장할 파트너 모집 중입니다
            </p>
          </div>
        </section>

        {/* 파트너쉽 안내 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title text-center mb-12">파트너쉽 기회</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  팝업 중개 파트너
                </h3>
                <p className="text-gray-600 mb-4">
                  백화점, 쇼핑몰, 문화센터 등의 팝업 공간에서 귀사의 상품을 판매할 수 있도록 중개합니다.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ 입점처 발굴 및 계약</li>
                  <li>✓ 운영 대행 (선택사항)</li>
                  <li>✓ 마케팅 지원</li>
                  <li>✓ 실시간 판매 모니터링</li>
                </ul>
                <p className="text-sm font-semibold text-blue-600">
                  중개 수수료 10~20% + 운영비
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  유통 파트너
                </h3>
                <p className="text-gray-600 mb-4">
                  커피 프랜차이즈, 호텔, 병원, 식품회사 등 B2B 고객에게 귀사의 상품을 공급합니다.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ 대량 납품 계약</li>
                  <li>✓ 정기적 주문 확보</li>
                  <li>✓ 판매 데이터 공유</li>
                  <li>✓ 마진율 최적화</li>
                </ul>
                <p className="text-sm font-semibold text-purple-600">
                  공급 마진 20~40%
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  PG 총판 파트너
                </h3>
                <p className="text-gray-600 mb-4">
                  결제 솔루션 공급자가 되어 가맹점을 모집하고 운영합니다.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ 가맹점 모집 지원</li>
                  <li>✓ 설치 수수료 수익</li>
                  <li>✓ 결제 수수료 공유 (Recurring)</li>
                  <li>✓ 운영 지원</li>
                </ul>
                <p className="text-sm font-semibold text-green-600">
                  가장 안정적인 반복 수익
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  컨설팅 파트너
                </h3>
                <p className="text-gray-600 mb-4">
                  투자유치, 브랜딩, 채널 확보 등 경영 전반에 대한 컨설팅을 제공합니다.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ 브랜딩 전략</li>
                  <li>✓ 투자유치 지원</li>
                  <li>✓ 채널 개발</li>
                  <li>✓ 지분 스왑 가능</li>
                </ul>
                <p className="text-sm font-semibold text-amber-600">
                  프로젝트 수익 + 지분 옵션
                </p>
              </div>
            </div>

            {/* 파트너 요구사항 */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">파트너 자격</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">필수 요건</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">3년 이상 해당 업종 경험</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">안정적인 신용도</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">장기 협력 의지</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">고객 네트워크 보유</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">우대 사항</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">★</span>
                      <span className="text-gray-700">유통/프랜차이즈 경험</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">★</span>
                      <span className="text-gray-700">B2B 채널 보유</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">★</span>
                      <span className="text-gray-700">글로벌 네트워크</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">★</span>
                      <span className="text-gray-700">성장 가능성</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 신청 CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">파트너 신청</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              함께 성장할 파트너를 모집하고 있습니다.
              <br />
              아래 버튼을 통해 파트너 신청서를 제출해주세요.
            </p>
            <a
              href="/contact?type=partnership"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              파트너 신청서 작성
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
