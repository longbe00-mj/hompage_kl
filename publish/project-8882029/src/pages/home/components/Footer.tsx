import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Brand */}
          <div className="flex-shrink-0 max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://storage.readdy-site.link/project_files/1faa8578-0d8d-485b-9f84-4ab072123f4c/640fd1b9-7763-4377-bf3f-4894877f79b0_KakaoTalk_20260422_134740559_01-1.png?v=20b7c70ab480e15411a8acc8cfb0b345"
                alt="THE KL LINK GROUP"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              "잇고, 연결하라 – 모든 비즈니스는 연결에서 시작된다"
            </p>
            {/* SNS */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:thekllink7256@gmail.com"
                title="이메일"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg text-white/60 hover:bg-white/20 hover:text-white transition-all"
              >
                <i className="ri-mail-line text-sm" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg text-white/60 hover:bg-white/20 hover:text-white transition-all"
              >
                <i className="ri-linkedin-fill text-sm" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg text-white/60 hover:bg-white/20 hover:text-white transition-all"
              >
                <i className="ri-instagram-line text-sm" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-xs font-bold text-white/30 tracking-widest uppercase mb-4">Company</div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Business", href: "/business" },
                  { label: "Portfolio", href: "/portfolio" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white/30 tracking-widest uppercase mb-4">Services</div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "유통중개", href: "/business" },
                  { label: "제품소싱", href: "/business" },
                  { label: "PG 영업대행", href: "/business" },
                  { label: "팝업 컨설팅", href: "/business" },
                  { label: "경영컨설팅", href: "/business" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white/30 tracking-widest uppercase mb-4">Contact</div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "제안 문의", href: "/contact" },
                  { label: "파트너 신청", href: "/partners" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <i className="ri-phone-line text-[#1E90FF] text-xs" />
                    1800-7796
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <i className="ri-mail-line text-[#1E90FF] text-xs" />
                    thekllink7256@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <i className="ri-phone-line text-[#1E90FF] text-xs" />
                    010-7256-9645
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <address className="not-italic text-xs text-white/30 leading-relaxed text-center sm:text-left">
            상호명 : (주)더케이엘링크그룹 &nbsp;|&nbsp; 대표이사 : 김성범 &nbsp;|&nbsp;
            대표번호 : 1800-7796 &nbsp;|&nbsp; FAX : 0504-233-8436
          </address>
          <div className="text-xs text-white/20">
            Copyright &copy; 2026 THE KL LINK GROUP. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
