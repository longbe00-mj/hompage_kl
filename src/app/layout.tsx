import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '더케이엘링크그룹 | B2B 사업 연결 플랫폼',
  description: '유통중개, 제품소싱, PG영업대행, 팝업컨설팅을 통한 B2B 연결 플랫폼. 잇고 연결하라.',
  keywords: '유통중개, 제품소싱, PG, 팝업, 컨설팅, B2B',
  authors: [{ name: '더케이엘링크그룹' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '더케이엘링크그룹 | B2B 사업 연결 플랫폼',
    description: '잇고 연결하라 – 모든 비즈니스는 연결에서 시작된다',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F2937" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.0/remixicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
