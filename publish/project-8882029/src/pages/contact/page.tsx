import { useState } from "react";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    try {
      const response = await fetch("https://readdy.ai/api/form/d7ndfm7u2vahpmebfju0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              문의하기
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              THE KL LINK GROUP에 대한 문의나 제안이 있으신가요?<br />
              아래 양식을 작성해 주시면 빠르게 답변 드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-[#1E90FF] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-6">
                연락처 정보
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                비즈니스 제안, 파트너십 문의, 서비스 관련 질문 등 어떤 내용이든 환영합니다.
                아래 연락처로 직접 연락하시거나, 오른쪽 양식을 작성해 주세요.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "ri-phone-line",
                    label: "대표번호",
                    value: "1800-7796",
                    href: "tel:1800-7796",
                  },
                  {
                    icon: "ri-smartphone-line",
                    label: "담당자 연락처",
                    value: "010-7256-9645",
                    href: "tel:010-7256-9645",
                  },
                  {
                    icon: "ri-mail-line",
                    label: "이메일",
                    value: "thekllink7256@gmail.com",
                    href: "mailto:thekllink7256@gmail.com",
                  },
                  {
                    icon: "ri-printer-line",
                    label: "FAX",
                    value: "0504-233-8436",
                    href: "#",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0B1F3A]/5 rounded-xl group-hover:bg-[#0B1F3A] transition-colors">
                      <i className={`${item.icon} text-lg text-[#0B1F3A] group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-sm font-semibold text-[#0B1F3A]">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-4">업무 시간</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">평일</span>
                    <span className="text-[#0B1F3A] font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">점심시간</span>
                    <span className="text-[#0B1F3A] font-medium">12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">주말/공휴일</span>
                    <span className="text-gray-400">휴무</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">문의 양식</h3>
              <form
                id="contact-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors bg-white"
                  >
                    <option value="">문의 유형을 선택해주세요</option>
                    <option value="business">비즈니스 제안</option>
                    <option value="partnership">파트너십 문의</option>
                    <option value="service">서비스 문의</option>
                    <option value="investment">투자/IR 문의</option>
                    <option value="etc">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors resize-none"
                    placeholder="문의 내용을 입력해주세요 (최대 500자)"
                  />
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    최대 500자
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#0B1F3A] text-white py-4 rounded-lg font-semibold hover:bg-[#1a3a5c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin" />
                      전송 중...
                    </span>
                  ) : (
                    "문의 보내기"
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700">
                      <i className="ri-check-line" />
                      <span className="text-sm font-medium">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.</span>
                    </div>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700">
                      <i className="ri-error-warning-line" />
                      <span className="text-sm font-medium">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}