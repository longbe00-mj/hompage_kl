'use client';

import Link from 'next/link';
import { companyInfo, businesses } from '@/config/company';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사정보 */}
          <div>
            <h3 className="text-white font-bold mb-4">{companyInfo.englishName}</h3>
            <p className="text-sm mb-4">{companyInfo.tagline}</p>
            <div className="text-sm space-y-2">
              <p>대표: {companyInfo.ceo}</p>
              <p>전화: <span className="text-gray-400">설정 중</span></p>
              <p>이메일: {companyInfo.email}</p>
            </div>
          </div>

          {/* 사업모델 */}
          <div>
            <h4 className="text-white font-semibold mb-4">사업영역</h4>
            <ul className="text-sm space-y-2">
              {businesses.map((business) => (
                <li key={business.id}>
                  <Link
                    href={`/business#${business.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {business.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-white font-semibold mb-4">빠른 링크</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  파트너
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {getCurrentYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
