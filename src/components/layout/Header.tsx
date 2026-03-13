"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Головна", href: "/" },
  { label: "Стандарти", href: "/standarty/" },
  { label: "Акустика", href: "/akustyka/" },
  { label: "Ергономіка", href: "/ergonomika/" },
  { label: "Кабіни", href: "/kabiny/" },
  { label: "Блог", href: "/blog/" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="cursor-pointer group flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              {/* Animated glow ring on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[6px]" />
              {/* Logo container */}
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-500 group-hover:rotate-[360deg]"
                >
                  {/* EU stars circle */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const r = 9;
                    const cx = 12 + r * Math.cos((angle - 90) * Math.PI / 180);
                    const cy = 12 + r * Math.sin((angle - 90) * Math.PI / 180);
                    return (
                      <circle
                        key={angle}
                        cx={cx}
                        cy={cy}
                        r="1.3"
                        fill="#FBBF24"
                        className="transition-all duration-300"
                      />
                    );
                  })}
                  {/* Building / office icon in center */}
                  <rect x="8" y="7" width="8" height="11" rx="1" fill="none" stroke="white" strokeWidth="1.5" />
                  <line x1="10.5" y1="9.5" x2="10.5" y2="11" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <line x1="13.5" y1="9.5" x2="13.5" y2="11" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <line x1="10.5" y1="13" x2="10.5" y2="14.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <line x1="13.5" y1="13" x2="13.5" y2="14.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  {/* Door */}
                  <rect x="10.5" y="15.5" width="3" height="2.5" rx="0.5" fill="white" opacity="0.6" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[17px] font-bold tracking-tight text-slate-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Євростандарти
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-600 leading-tight">
                Офісу
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname === link.href.replace(/\/$/, "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kabiny/"
              className="cursor-pointer ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Замовити кабіну
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="cursor-pointer lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-slate-100"
            aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden">
          <div className="h-16" />
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname === link.href.replace(/\/$/, "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`cursor-pointer w-full text-center text-lg font-medium transition-colors duration-200 py-3 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-800 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kabiny/"
              onClick={closeMobileMenu}
              className="cursor-pointer mt-4 w-full text-center px-6 py-3 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Замовити кабіну
            </Link>
          </nav>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
