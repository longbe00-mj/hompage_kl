import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <h1 className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://storage.readdy-site.link/project_files/1faa8578-0d8d-485b-9f84-4ab072123f4c/640fd1b9-7763-4377-bf3f-4894877f79b0_KakaoTalk_20260422_134740559_01-1.png?v=20b7c70ab480e15411a8acc8cfb0b345"
              alt="THE KL LINK GROUP"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors hover:opacity-70 ${
                scrolled ? "text-[#0B1F3A]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className={`text-sm font-medium whitespace-nowrap px-4 py-2 rounded-full border transition-all ${
              scrolled
                ? "border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white"
                : "border-white text-white hover:bg-white hover:text-[#0B1F3A]"
            }`}
          >
            제안 문의
          </Link>
          <Link
            to="/partners"
            className="text-sm font-semibold whitespace-nowrap bg-[#0B1F3A] text-white px-4 py-2 rounded-full hover:bg-[#1a3a5c] transition-colors"
          >
            파트너 신청
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-[#0B1F3A]" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-[#0B1F3A]" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-[#0B1F3A]" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-[#0B1F3A] hover:text-[#1E90FF] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <Link
              to="/contact"
              className="flex-1 text-sm font-medium text-center border border-[#0B1F3A] text-[#0B1F3A] px-4 py-2 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              제안 문의
            </Link>
            <Link
              to="/partners"
              className="flex-1 text-sm font-semibold text-center bg-[#0B1F3A] text-white px-4 py-2 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              파트너 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
