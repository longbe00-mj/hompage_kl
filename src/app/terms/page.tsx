import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">이용약관</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                최종 수정일: 2026년 4월 27일
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제1조 총칙</h2>
              <p className="text-gray-600 mb-6">
                본 약관은 더케이엘링크그룹(이하 "회사")이 제공하는 홈페이지 및 서비스 이용에 관한
                기본적인 사항을 규정합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제2조 서비스의 범위</h2>
              <p className="text-gray-600 mb-6">
                회사가 제공하는 서비스는 다음과 같습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>기업 정보 제공</li>
                <li>문의 및 상담</li>
                <li>파트너 신청</li>
                <li>제휴 상담</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제3조 이용자의 의무</h2>
              <p className="text-gray-600 mb-6">
                이용자는 다음의 행위를 하지 않아야 합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>불법적 행위</li>
                <li>사기, 사칭</li>
                <li>음란물 배포</li>
                <li>저작권 침해</li>
                <li>시스템 해킹, 바이러스 배포</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제4조 게시물</h2>
              <p className="text-gray-600 mb-6">
                이용자가 게시한 게시물(문의 내용 등)에 대한 저작권은 이용자에게 있으며,
                회사는 서비스 개선 목적으로 이를 활용할 수 있습니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제5조 책임의 제한</h2>
              <p className="text-gray-600 mb-6">
                회사는 이하의 사항으로 인한 손해에 대해 책임을 지지 않습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>천재지변, 전쟁, 테러 등 불가항력적 사유</li>
                <li>이용자의 부주의</li>
                <li>제3자의 개입</li>
                <li>시스템 유지보수로 인한 서비스 중단</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제6조 약관의 변경</h2>
              <p className="text-gray-600 mb-6">
                회사는 필요에 따라 약관을 변경할 수 있으며, 변경사항은 사전에 공지합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제7조 분쟁해결</h2>
              <p className="text-gray-600 mb-6">
                본 약관과 관련된 분쟁은 서울지방법원을 관할법원으로 합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제8조 문의</h2>
              <p className="text-gray-600">
                약관 관련 문의는 아래로 연락해주세요:
                <br />
                이메일: thekllink7256@gmail.com
                <br />
                전화: 1800-7796
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
