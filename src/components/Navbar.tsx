"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "shadow-md border-b border-primary/5"
          : "shadow-sm shadow-primary/10"
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop py-4">
        <div className="font-headline-sm text-headline-sm font-bold text-primary cursor-pointer hover:opacity-90 transition-opacity">
          Gia Lai Vigilant
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-label-caps text-label-caps text-secondary font-bold border-b-2 border-secondary py-1 transition-all"
            href="#"
          >
            Ecosystem
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-1"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-1"
            href="#action"
          >
            Take Action
          </a>
        </div>
        <button className="bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps px-6 py-3 rounded-lg transition-all active:scale-95 cursor-pointer shadow-sm hover:shadow-md">
          Tham Gia Ngay
        </button>
      </div>
    </nav>
  );
}
