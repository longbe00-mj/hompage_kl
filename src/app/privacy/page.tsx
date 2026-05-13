import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                최종 수정일: 2026년 4월 27일
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 개인정보 수집 항목</h2>
              <p className="text-gray-600 mb-4">
                더케이엘링크그룹은 다음과 같은 개인정보를 수집합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>이름, 이메일, 연락처 (전화번호)</li>
                <li>회사명, 직급, 부서</li>
                <li>문의 내용 및 유형</li>
                <li>IP 주소, 접속 로그</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 개인정보 이용 목적</h2>
              <p className="text-gray-600 mb-4">
                수집된 개인정보는 다음의 목적으로만 이용됩니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>문의 및 상담 응답</li>
                <li>제휴 신청 및 계약</li>
                <li>서비스 개선 및 통계</li>
                <li>법적 의무 이행</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 개인정보 보관 기간</h2>
              <p className="text-gray-600 mb-6">
                개인정보는 이용목적이 달성될 때까지 보관하며, 이후 지체없이 파기됩니다.
                다만, 관련 법령에서 보관을 요구하는 경우에는 법령이 정한 기간 동안 보관합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 개인정보 제3자 제공</h2>
              <p className="text-gray-600 mb-6">
                더케이엘링크그룹은 개인정보를 제3자에게 제공하지 않습니다.
                다만, 다음의 경우는 예외입니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>이용자의 명시적 동의가 있는 경우</li>
                <li>법령에 따른 의무</li>
                <li>범죄 수사 목적으로 공개 요청이 있는 경우</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 개인정보 보안</h2>
              <p className="text-gray-600 mb-6">
                더케이엘링크그룹은 개인정보 보안을 위해 다음의 조치를 취합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>SSL 암호화 통신</li>
                <li>안전한 데이터베이스 관리</li>
                <li>접근 권한 제한</li>
                <li>정기적인 보안 감사</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 이용자의 권리</h2>
              <p className="text-gray-600 mb-6">
                이용자는 다음의 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>개인정보 조회 및 수정</li>
                <li>개인정보 삭제 요청</li>
                <li>개인정보 이용 거부</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 정책 변경</h2>
              <p className="text-gray-600 mb-6">
                본 개인정보처리방침은 관련 법령 변화에 따라 변경될 수 있습니다.
                변경사항은 사전에 공지합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. 문의</h2>
              <p className="text-gray-600">
                개인정보 관련 문의는 아래로 연락해주세요:
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
