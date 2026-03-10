"use client";

import { useState, useCallback } from "react";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                We&apos;d Love to Hear From You
              </h2>
              <p className="mt-4 text-gray-500">
                Reach us at{" "}
                <a
                  href="mailto:info@muhasabahhub.com"
                  className="text-brand-green font-medium hover:underline"
                >
                  info@muhasabahhub.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    We&apos;ll get back to you soon, in sha Allah.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green bg-white resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
