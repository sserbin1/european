"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Головна", href: "/" },
  { label: "Стандарти", href: "/blog/yevropeyski-standarty-ofisnogo-prostoru" },
  { label: "Акустика", href: "/blog/akustyka-v-ofisi-chomu-tysha-tse-produktyvnist" },
  { label: "Ергономіка", href: "/blog/ergonomika-robochogo-mistsya-za-yevropeyskimi-normamy" },
  { label: "Кабіни", href: "/kabiny/" },
  { label: "Блог", href: "/blog/" },
];

export default function Header() {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-2.5"
            onClick={closeMobileMenu}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isScrolled ? "#1E293B" : "#fff"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M3 9h6" />
              <path d="M3 15h6" />
            </svg>
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Євростандарти Офісу
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isScrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
            className={`cursor-pointer lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isScrolled ? "#1E293B" : "#fff"}
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="cursor-pointer w-full text-center text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors duration-200 py-3 rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
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
