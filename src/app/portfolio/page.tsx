import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '포트폴리오 | 더케이엘링크그룹',
  description: '더케이엘링크그룹의 진행 중인 프로젝트 및 성공 사례를 확인하세요.',
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: '빠빠빵 팝업',
      category: '팝업컨설팅',
      period: '2026년 5월 1일 ~ 14일',
      description: '백화점 팝업 중개 및 운영',
      results: ['5월 기간 한정 팝업 개최', '신규 브랜드 시장진입 지원'],
      status: 'upcoming',
    },
    {
      id: 2,
      title: '커도의서재',
      category: '브랜딩 컨설팅',
      period: '2026년 상반기',
      description: '신규 브랜드 런칭 및 마켓팅',
      results: ['브랜드 아이덴티티 구축', 'B2B 채널 발굴'],
      status: 'in-progress',
    },
    {
      id: 3,
      title: '수박원액 B2B 공급',
      category: '유통중개',
      period: '2026년 5월~',
      description: '커피 프랜차이즈 1kg 납품',
      results: ['월 100kg 이상 공급 목표', '5개월 내 안정적 채널 확보'],
      status: 'upcoming',
    },
    {
      id: 4,
      title: '닥터88+ 의료기기',
      category: '제품소싱',
      period: '2026년 진행',
      description: '병원 및 의료기관 영업 확대',
      results: ['100곳 이상 의료기관 계약', '분기별 2,000만원 이상 주문'],
      status: 'in-progress',
    },
    {
      id: 5,
      title: 'PG 총판 네트워크',
      category: 'PG 영업대행',
      period: '2026년 지속 확대',
      description: 'KIS, KCP, COVAN 등 다중 채널 구축',
      results: ['월 500만원 이상 수수료 수익', '병원 특화 PG 솔루션'],
      status: 'in-progress',
    },
    {
      id: 6,
      title: '추석/수능 팝업',
      category: '팝업컨설팅',
      period: '2026년 9월, 11월',
      description: '시즈널 팝업 중개',
      results: ['팝업당 5,000~10,000만원 매출', '분기별 순이익 2억 달성'],
      status: 'upcoming',
    },
  ];

  const statusColors = {
    'completed': 'bg-green-100 text-green-800 border-green-300',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-300',
    'upcoming': 'bg-amber-100 text-amber-800 border-amber-300',
  };

  const statusLabels = {
    'completed': '완료',
    'in-progress': '진행중',
    'upcoming': '예정',
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 페이지 제목 */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">포트폴리오</h1>
            <p className="text-lg text-gray-300 mt-4">
              더케이엘링크그룹의 진행 중인 프로젝트 및 성공 사례
            </p>
          </div>
        </section>

        {/* 프로젝트 목록 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          statusColors[project.status as keyof typeof statusColors]
                        }`}
                      >
                        {statusLabels[project.status as keyof typeof statusLabels]}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 mb-2">기간</p>
                      <p className="text-sm text-gray-700">{project.period}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">기대 성과</p>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 포트폴리오 이미지 갤러리 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">진행 중인 프로젝트</h2>
              <p className="section-subtitle">더케이엘링크그룹의 실제 진행 사례들</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 1, title: '수박주스 원액 유통중개', client: '제조사 ↔ 유통사', image: '/images/portfolio/portfolio-1.jpg' },
                { id: 2, title: '우베(UVE) 제품소싱', client: '우베 브랜드', image: '/images/portfolio/portfolio-2.jpg' },
                { id: 2.5, title: '화장품 제품 소싱', client: '제품 소싱', image: '/images/portfolio/portfolio-cosmetics.jpg' },
                { id: 3, title: '빠빠빵 팝업스토어', client: '빠빠빵', image: '/images/portfolio/portfolio-3.jpg' },
                { id: 4, title: '커도의서재 PG 영업대행', client: '커도의서재', image: '/images/portfolio/portfolio-4.jpg' },
                { id: 5, title: 'PG 가맹점 모집', client: 'KIS정보통신', image: '/images/portfolio/portfolio-5.jpg' },
                { id: 6, title: '닥터88+ B2B 영업대행', client: '닥터88+', image: '/images/portfolio/portfolio-6.jpg' },
                { id: 7, title: '+ 진행 대기 중', client: '새로운 프로젝트', image: null, waiting: true },
              ].map((item) => (
                <div
                  key={item.id}
                  className={item.waiting ? "bg-white rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center group" : "bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group"}
                  style={item.waiting ? { minHeight: '280px' } : {}}
                >
                  {item.waiting ? (
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-400 mb-2">{item.title}</h3>
                      <p className="text-xs text-gray-300">{item.client}</p>
                    </div>
                  ) : (
                    <>
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={item.image!}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-xs text-gray-400">{item.client}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 성과 요약 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="section-title text-center mb-12">2026년 목표 성과</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2분기</div>
                <p className="text-sm text-gray-600 mb-2">1억 원</p>
                <p className="text-xs text-gray-500">매출 목표</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3분기</div>
                <p className="text-sm text-gray-600 mb-2">2억 원</p>
                <p className="text-xs text-gray-500">매출 목표</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4분기</div>
                <p className="text-sm text-gray-600 mb-2">3~5억 원</p>
                <p className="text-xs text-gray-500">매출 목표</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-300 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">연간</div>
                <p className="text-sm text-gray-600 mb-2">6~8억 원</p>
                <p className="text-xs text-gray-500">총 매출</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="section-title mb-6">함께 성장할 파트너를 찾습니다</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              팝업 중개, 제품 납품, PG 계약, 컨설팅 등
              <br />
              다양한 협력 기회가 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cta-button bg-blue-600 hover:bg-blue-700"
              >
                문의하기
              </Link>
              <Link
                href="/partners"
                className="cta-button-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                파트너 신청
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
