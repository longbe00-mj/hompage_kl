import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { companyInfo } from '@/config/company';

export const metadata: Metadata = {
  title: '문의 | 더케이엘링크그룹',
  description: '더케이엘링크그룹에 문의사항이 있으신가요? 연락처와 문의 양식을 통해 쉽게 연락할 수 있습니다.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 페이지 제목 */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">문의</h1>
            <p className="text-lg text-gray-300 mt-4">
              언제든지 편하게 문의해주세요. 신속히 답변하겠습니다.
            </p>
          </div>
        </section>

        {/* 문의 정보 */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">전화</h3>
                <p className="text-gray-600 font-semibold text-lg">
                  설정 중
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-semibold text-gray-900 mb-2">이메일</h3>
                <p className="text-purple-600 font-semibold text-lg break-all">
                  {companyInfo.email}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  24시간 상시 접수
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-gray-900 mb-2">주소</h3>
                <p className="text-amber-600 font-semibold">
                  {companyInfo.address || '설정 중'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {companyInfo.address ? '본사 주소' : '상세 주소는 문의 시 안내'}
                </p>
              </div>
            </div>

            {/* 문의 양식 */}
            <div className="max-w-2xl mx-auto">
              <h2 className="section-title text-center mb-8">문의하기</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="section-title text-center mb-12">자주 묻는 질문</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: '팝업 중개는 어떤 절차로 진행되나요?',
                  a: '입점 신청 → 브랜드 검토 → 입점처 매칭 → 운영 지원 단계로 진행되며, 각 단계별 상담을 통해 진행됩니다.',
                },
                {
                  q: 'PG 총판 계약은 누구나 가능한가요?',
                  a: '음식점, 의료기관, 소매점 등 결제가 필요한 모든 사업장이 신청 가능합니다. 신청 후 심사 과정을 거칩니다.',
                },
                {
                  q: '제품 소싱 상담은 어떻게 받나요?',
                  a: '전화나 이메일로 문의하신 후, 담당자와의 1:1 상담을 통해 필요한 제품을 소개받을 수 있습니다.',
                },
                {
                  q: '대량 납품이 가능한가요?',
                  a: '네, 유통중개 사업을 통해 대량 납품이 가능합니다. 규모와 기간에 따라 맞춤 견적을 제공합니다.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-gray-600">A. {item.a}</p>
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
