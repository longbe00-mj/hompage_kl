'use client';

import Link from 'next/link';
import { businesses } from '@/config/company';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useInView from '@/hooks/useInView';

export default function ServicesSection() {
  const { ref, isInView } = useInView();
  const colorMap = {
    distribution: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500', tag: 'blue' },
    sourcing: { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-500', tag: 'slate' },
    pg: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500', tag: 'emerald' },
    popup: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500', tag: 'orange' },
    consulting: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-500', tag: 'violet' },
    branding: { text: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-500', tag: 'pink' },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-8 h-0.5 bg-gray-900" />
          <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">Business Model</span>
          <div className="w-8 h-0.5 bg-gray-900" />
        </div>

        <div className="text-center mb-16">
          <h2 className="section-title">6대 핵심 사업 모델</h2>
          <p className="section-subtitle">
            유통 · 소싱 · 결제 · 팝업 · 컨설팅 — 다층 수익 창출 구조
          </p>
        </div>

        {/* 5개 사업 모델 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businesses.map((business) => {
            const color = colorMap[business.id as keyof typeof colorMap] || colorMap.distribution;
            return (
              <div
                key={business.id}
                className={`bg-white rounded-2xl border-t-4 ${color.border} p-6 card-shadow-hover ${isInView ? 'show-up-bounce' : ''}`}
                style={isInView ? { animationDelay: `${businesses.indexOf(business) * 0.1}s` } : {}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-5xl ${color.text}`}>{business.icon}</div>
                  <span className={`text-xs font-bold px-3 py-1 ${color.bg} ${color.text} rounded-full`}>
                    {business.id === 'distribution' ? 'Cash Cow 1' :
                     business.id === 'sourcing' ? 'Cash Cow 2' :
                     business.id === 'pg' ? 'Cash Cow 3' :
                     business.id === 'popup' ? 'Cash Cow 4' :
                     business.id === 'consulting' ? 'Cash Cow 5' :
                     business.id === 'branding' ? 'Cash Cow 6' : 'Value Add'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {business.title}
                </h3>
                <p className={`${color.text} font-semibold text-sm mb-3`}>
                  {business.englishTitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {business.description}
                </p>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 mb-3 uppercase">핵심 항목</p>
                  <ul className="space-y-2">
                    {business.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                        <CheckCircle size={16} className={`${color.text} flex-shrink-0 mt-0.5`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-3 uppercase">수익 모델</p>
                  <ul className="space-y-2">
                    {business.revenueModel.map((model, i) => (
                      <li key={i} className={`text-sm ${color.text} font-semibold flex items-center gap-2`}>
                        <span className={`w-1.5 h-1.5 ${color.bg} rounded-full`}></span>
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

        </div>

        <div className="text-center">
          <Link
            href="/business"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 px-6 py-3 rounded-lg text-lg link-shadow-hover bg-blue-50 hover:bg-blue-100"
          >
            6대 사업 상세 보기
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
