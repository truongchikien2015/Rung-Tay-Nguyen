"use client";

import React, { FormEvent } from "react";

export default function Footer() {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (emailInput && emailInput.value) {
      alert(`Cảm ơn bạn đã đăng ký với email: ${emailInput.value}!`);
      emailInput.value = "";
    }
  };

  return (
    <footer className="bg-primary py-section-gap border-t border-primary-fixed-dim/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-container-max mx-auto px-margin-desktop text-white">
        <div className="md:col-span-4">
          <div className="font-headline-sm text-headline-sm text-on-primary mb-6 select-none">
            Gia Lai Protection
          </div>
          <p className="font-body-md text-body-md text-primary-fixed-dim/80 mb-8 max-w-xs leading-relaxed">
            Tổ chức phi lợi nhuận cam kết bảo tồn sự đa dạng sinh học và di sản văn hóa của vùng cao nguyên Gia Lai qua những hành động thiết thực và công nghệ hiện đại.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-primary-fixed-dim/30 flex items-center justify-center text-on-primary hover:bg-primary-fixed-dim/10 transition-colors shadow-sm"
              href="#"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-lg select-none">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-primary-fixed-dim/30 flex items-center justify-center text-on-primary hover:bg-primary-fixed-dim/10 transition-colors shadow-sm"
              href="mailto:contact@gialaiprotection.org"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-lg select-none">mail</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-primary mb-6 tracking-widest select-none">
            KHÁM PHÁ
          </h4>
          <ul className="space-y-4 font-bold">
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Về chúng tôi
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Tin tức bảo tồn
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Báo cáo năm
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-primary mb-6 tracking-widest select-none">
            HỖ TRỢ
          </h4>
          <ul className="space-y-4 font-bold">
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Volunteer Portal
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Environmental Data
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-primary-fixed-dim/80 hover:text-primary-fixed transition-all hover:underline decoration-secondary-container decoration-2"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-label-caps text-label-caps text-on-primary mb-6 tracking-widest select-none">
            NEWSLETTER
          </h4>
          <p className="font-body-md text-body-md text-primary-fixed-dim/80 mb-6 leading-relaxed">
            Nhận thông tin cập nhật về tình trạng rừng và các dự án mới nhất.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              name="email"
              required
              className="bg-white/10 border-b border-secondary-fixed-dim text-white p-3 flex-grow focus:outline-none focus:border-tertiary-fixed-dim transition-colors placeholder:text-primary-fixed-dim/50 rounded-sm"
              placeholder="Email của bạn"
              type="email"
            />
            <button
              type="submit"
              className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-6 py-3 font-label-caps text-label-caps rounded-sm hover:bg-tertiary-fixed transition-all cursor-pointer font-bold select-none"
            >
              GỬI
            </button>
          </form>
        </div>
        <div className="md:col-span-12 pt-12 border-t border-primary-fixed-dim/10 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-fixed-dim/60">
          <p className="font-body-md text-body-md">
            © {new Date().getFullYear()} Gia Lai Protection. Timeless Protection for the Central Highlands.
          </p>
          <div className="flex gap-8">
            <a
              className="font-label-caps text-label-caps text-primary-fixed-dim/60 hover:text-on-primary transition-all hover:underline"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-label-caps text-label-caps text-primary-fixed-dim/60 hover:text-on-primary transition-all hover:underline"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
