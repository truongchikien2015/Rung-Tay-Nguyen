"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Gia Lai Forest"
          className="w-full h-full object-cover scale-105 transition-transform duration-75 will-change-transform"
          style={{
            transform: `translateY(${offsetY * 0.3}px) scale(1.05)`,
          }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEHLC4PbyR2GTtjuL4Qt4geYI4vlTT682ySnb28_4bXfqPVxdNdMFv5N95niOKNQEyFY2V5LpoIUchnEwqKSz8DwCIqNzr2QUwyBZEZ62ZhjQDsfbFkP9SmnRCPW-1QAObJg6sbsQNDp6N3zslZkali9ggUntZuJM8oGbMLljts0OerJVXYSDSdnX5xySsepAorqKmtMd3PWZChzRoniOwaY5sXg7Y18ZtskbIjtuMstfZvBVQRH1y6tRyx5Zaxt8W7XSmvOwPC_k"
        />
        <div className="absolute inset-0 hero-scrim"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
        <div className="max-w-3xl">
          <span className="font-label-caps text-label-caps text-tertiary-fixed-dim mb-4 block tracking-widest animate-fade-in">
            DI SẢN THIÊN NHIÊN HÙNG VĨ
          </span>
          <h1 className="font-display-lg text-display-lg text-white mb-8 leading-tight">
            Gia Lai - Trái Tim Xanh của Tây Nguyên
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-10 leading-relaxed max-w-xl">
            Nơi những cánh rừng thông cổ thụ và thác nước hùng vĩ kể câu chuyện về sự sống bền bỉ. Chúng ta là những người gác cổng cho tương lai xanh của đại ngàn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#action"
              className="bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Hành Động Ngay
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              href="#importance"
              className="border-2 border-primary-fixed-dim text-primary-fixed-dim hover:bg-primary-fixed-dim/10 font-label-caps text-label-caps px-8 py-4 rounded-lg flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Tìm Hiểu Thêm
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
