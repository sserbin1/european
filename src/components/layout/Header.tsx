"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "../../../site.config";

const NAV_LINKS = [
  { label: "Головна", href: "/" },
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
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-gray-900" onClick={closeMobileMenu}>
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-10 h-10"
            aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="text-xl text-gray-900 hover:text-blue-600 transition-colors py-2">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="h-16" />
    </>
  );
}
