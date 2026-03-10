"use client";

import { useState, useEffect, useCallback } from "react";

function CrescentIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="#1a6b3c"
        stroke="#1a6b3c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#apps", label: "Apps" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <a href="#home" className="flex items-center gap-2">
            <CrescentIcon />
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Muhasabah Hub
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apps"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
            >
              Download App
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-gray-600"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/55 backdrop-blur-xl shadow-lg shadow-black/5 border-t border-white/50">
          <div className="py-2">
            {NAV_LINKS.map((link, i) => (
              <div key={link.href}>
                {i > 0 && <div className="mx-6 border-t border-gray-200/40" />}
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className="block text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green/5 py-4 px-6 transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="mx-6 border-t border-gray-200/40" />
            <div className="px-6 py-4">
              <a
                href="#apps"
                onClick={closeMobile}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
