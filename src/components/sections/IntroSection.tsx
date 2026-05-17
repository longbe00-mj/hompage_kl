'use client';

import { companyInfo } from '@/config/company';

export default function IntroSection() {

  return (
    <section className="py-16 md:py-24 bg-white">
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
  );
}
