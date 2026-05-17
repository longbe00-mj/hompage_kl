'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/about', label: '회사소개' },
    { href: '/business', label: '사업모델' },
    { href: '/portfolio', label: '포트폴리오' },
    { href: '/partners', label: '파트너' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo.png"
            alt="KL Link Group Logo"
            width={325}
            height={64}
            priority
            className="h-full w-auto"
          />
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 헤더 하단 띠 */}
      <div className="h-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500"></div>

      {/* 모바일 네비게이션 */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-3 text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
