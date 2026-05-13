'use client';

import { companyInfo } from '@/config/company';
import useInView from '@/hooks/useInView';

export default function IntroSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                <span className="text-blue-600">{companyInfo.name}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                단순한 중개 회사를 넘어 B2B 연결 플랫폼으로의 변신을 꿈꿉니다.
              </p>

              <div className="space-y-4 mb-8">
                <div className={`flex gap-4 p-4 rounded-lg card-shadow-hover-soft hover:bg-blue-50 ${isInView ? 'show-up-slide-left' : ''}`}
                  style={isInView ? { animationDelay: '0s' } : {}}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">명확한 비전</h3>
                    <p className="text-gray-600">
                      대한민국 1위 B2B 연결 플랫폼 구축
                    </p>
                  </div>
                </div>

                <div className={`flex gap-4 p-4 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isInView ? 'show-up-slide-left' : ''}`}
                  style={isInView ? { animationDelay: '0.1s' } : {}}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">다각적 수익</h3>
                    <p className="text-gray-600">
                      4개 사업모델 기반의 안정적이고 반복적인 수익 구조
                    </p>
                  </div>
                </div>

                <div className={`flex gap-4 p-4 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isInView ? 'show-up-slide-left' : ''}`}
                  style={isInView ? { animationDelay: '0.2s' } : {}}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">강력한 네트워크</h3>
                    <p className="text-gray-600">
                      유통사, 브랜드, 의료기관 등 다층적 네트워크 구축
                    </p>
                  </div>
                </div>

                <div className={`flex gap-4 p-4 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isInView ? 'show-up-slide-left' : ''}`}
                  style={isInView ? { animationDelay: '0.3s' } : {}}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">데이터 기반</h3>
                    <p className="text-gray-600">
                      거래 데이터를 자산화하여 플랫폼의 가치 극대화
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">
                경영철학: <strong>지속가능경영</strong>, <strong>홍익인간 제세이화</strong> 기반 가치 창출
              </p>
            </div>

            <div className={`bg-gray-50 rounded-2xl p-8 card-shadow-hover ${isInView ? 'show-up-slide-right' : ''}`}
              style={isInView ? { animationDelay: '0.3s' } : {}}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">핵심 지표</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">2026년 Q2 목표</p>
                  <p className="text-3xl font-bold text-blue-600">1억 원</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">2026년 Q3 목표</p>
                  <p className="text-3xl font-bold text-blue-600">2억 원</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">2026년 Q4 목표</p>
                  <p className="text-3xl font-bold text-blue-600">3~5억 원</p>
                </div>
              </div>

              <div className="hidden mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">수익 비중 전략</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">결제 인프라 구축</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">유통중개</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">팝업컨설팅</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">기타</span>
                    <span className="font-semibold">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
