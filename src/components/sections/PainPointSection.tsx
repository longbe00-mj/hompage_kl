'use client';

import useInView from '@/hooks/useInView';

export default function PainPointSection() {
  const { ref, isInView } = useInView();
  const painPoints = [
    {
      problem: '브랜드 파악 어려움',
      description: '어떤 브랜드가 시장에서 통할지, 어디에 팔릴지 예측 불가',
      solution: '데이터 기반 마켓 인사이트 제공',
    },
    {
      problem: '입점 경로 제한',
      description: '대형 유통 채널에 진입하기 어렵고 비용이 높음',
      solution: '기존 네트워크를 통한 빠른 입점 중개',
    },
    {
      problem: '운영 부담',
      description: '팝업 스토어 운영에 인력과 시간이 많이 소요',
      solution: '운영 대행 및 컨설팅 서비스 제공',
    },
    {
      problem: '결제 환경 미흡',
      description: '중소 가맹점은 PG 가입이 복잡하고 비용이 높음',
      solution: '총판 기반 저비용 고효율 PG 솔루션',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">B2B 시장의 현실 과제</h2>
          <p className="section-subtitle">
            우리는 이런 과제들을 해결하기 위해 존재합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((item, index) => (
            <div key={index} className={`relative p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200 card-shadow-hover ${isInView ? 'show-up-bounce' : ''}`}
              style={isInView ? { animationDelay: `${index * 0.15}s` } : {}}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white font-bold">
                    ✕
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  <div className="flex items-start gap-2 pt-4 border-t border-red-300">
                    <span className="text-green-600 font-bold mt-0.5">→</span>
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-1">
                        우리의 솔루션
                      </p>
                      <p className="text-sm text-green-600">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-8 bg-blue-50 rounded-lg border-2 border-blue-200 card-shadow-hover-soft ${isInView ? 'show-up-zoom' : ''}`}
          style={isInView ? { animationDelay: '0.6s' } : {}}
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                한 번의 연결, 지속적인 수익
              </h3>
              <p className="text-gray-600">
                더케이엘링크그룹은 단순한 중개를 넘어,
                <strong className="text-blue-600"> 거래가 발생할 때마다 수익을 창출</strong>하고,
                <strong className="text-blue-600"> 데이터를 축적</strong>하며,
                <strong className="text-blue-600"> 플랫폼으로 진화</strong>합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
