"use client";

import { useState, useCallback } from "react";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";
import PhoneMockup from "./PhoneMockup";
import GradientOrb from "./GradientOrb";

const FEATURE_PILLS = [
  "Prayer Tracking",
  "Fast Tracking",
  "Streak System",
  "Progress Stats",
];

function StoreBadges() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <a href="#">
        <img
          src="/images/app-store-badge.svg.svg"
          alt="Download on the App Store"
          className="w-[160px] h-[58px] object-contain"
        />
      </a>
      <a href="#">
        <img
          src="/images/google-play-badge.png.png"
          alt="Get it on Google Play"
          className="w-[160px] h-[58px] object-contain"
        />
      </a>
    </div>
  );
}

function NotifyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    },
    []
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">You&apos;re on the list!</h3>
            <p className="mt-2 text-sm text-gray-500">
              We&apos;ll notify you when our next app launches.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-900">
              Get Notified
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Be the first to know when our next app launches.
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Apps() {
  const [notifyOpen, setNotifyOpen] = useState(false);

  return (
    <section id="apps" className="py-24 lg:py-32 relative overflow-hidden">
      <GradientOrb
        color="green"
        className="-left-40 top-20 opacity-10"
        size="w-[600px] h-[600px]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Our Apps</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Tools for the Journey
            </h2>
          </div>
        </ScrollReveal>

        {/* Qadha Tracker Card */}
        <ScrollReveal>
          <div className="mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <GradientOrb
              color="gold"
              className="-right-20 -top-20 opacity-10"
              size="w-[300px] h-[300px]"
            />
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 relative">
              <div className="flex-1">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Qadha Tracker
                </h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Track and make up your missed Salah and fasts with ease. Stay
                  consistent, build streaks, and never lose count again.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {FEATURE_PILLS.map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-1.5 text-xs font-medium text-brand-green bg-brand-green/10 rounded-full"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="hidden lg:block mt-8">
                  <StoreBadges />
                </div>
              </div>
              <div className="mt-10 lg:mt-0 flex justify-center">
                <PhoneMockup rotate="rotate-3" />
              </div>
              <div className="mt-8 lg:hidden flex justify-center">
                <StoreBadges />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Coming Soon Card */}
        <ScrollReveal>
          <div className="mt-8 bg-gray-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <GradientOrb
              color="gold"
              className="-right-20 -top-20 opacity-10"
              size="w-[300px] h-[300px]"
            />
            <div className="relative z-20 text-center py-8">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Something New is Coming
              </h3>
              <p className="mt-3 text-gray-500 max-w-md mx-auto">
                Another tool for the Muslim journey. Stay tuned.
              </p>
              <button
                type="button"
                onClick={() => setNotifyOpen(true)}
                className="mt-6 inline-flex items-center px-8 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Notify Me
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <NotifyModal
        open={notifyOpen}
        onClose={() => setNotifyOpen(false)}
      />
    </section>
  );
}
