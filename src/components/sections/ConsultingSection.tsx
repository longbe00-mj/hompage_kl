'use client';

import Link from 'next/link';

export default function ConsultingSection() {
  const consultingServices = [
    {
      title: '브랜딩 컨설팅',
      description: '신규 브랜드 구축 및 리브랜딩 전략 수립',
    },
    {
      title: '투자유치 지원',
      description: '사업 계획서 작성 및 투자자 미팅 지원',
    },
    {
      title: 'PG 총판 연결',
      description: '최적의 결제 솔루션 기획 및 계약 체결',
    },
    {
      title: '유통 채널 확보',
      description: 'B2B 납품처 발굴 및 영업 지원',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              경영 컨설팅
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              수박주스부터 의료기기까지, 브랜드 성장의 모든 단계를 함께합니다.
            </p>

            <div className="space-y-4 mb-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-blue-900">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{service.title}</h4>
                    <p className="text-blue-100">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-blue-100 mb-6">
              대표이사 김성범과 경영진이 직접 상담하여 맞춤형 전략을 제시합니다.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold link-shadow-hover hover:bg-gray-100"
            >
              컨설팅 문의하기
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6">진행 중인 프로젝트</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 card-shadow-hover-soft hover:bg-white hover:bg-opacity-10">
                <h4 className="font-semibold mb-2">🍞 빠빠빵 팝업</h4>
                <p className="text-blue-100 text-sm">
                  5월 1일 ~ 14일 기간 제한 팝업 운영
                </p>
              </div>
              <div className="p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 card-shadow-hover-soft hover:bg-white hover:bg-opacity-10">
                <h4 className="font-semibold mb-2">📚 커도의서재</h4>
                <p className="text-blue-100 text-sm">
                  신규 브랜드 런칭 및 시장진입 전략 수립
                </p>
              </div>
              <div className="p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 card-shadow-hover-soft hover:bg-white hover:bg-opacity-10">
                <h4 className="font-semibold mb-2">🍉 수박원액</h4>
                <p className="text-blue-100 text-sm">
                  커피 브랜드 B2B 공급 계약 개시
                </p>
              </div>
              <div className="p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 card-shadow-hover-soft hover:bg-white hover:bg-opacity-10">
                <h4 className="font-semibold mb-2">💊 닥터88+</h4>
                <p className="text-blue-100 text-sm">
                  의료기기 독점 총판 계약 및 병원 영업
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
