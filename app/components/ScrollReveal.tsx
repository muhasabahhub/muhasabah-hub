"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 200
      ? "animation-delay-200"
      : delay === 400
        ? "animation-delay-400"
        : delay === 600
          ? "animation-delay-600"
          : "";

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
