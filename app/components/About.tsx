import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const CARDS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Purposeful Design",
    description:
      "Every screen, every interaction is designed with intention — to help you focus on what matters most.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Rooted in Values",
    description:
      "Built on Islamic principles of self-accountability and growth. Faith-first, always.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Built for Consistency",
    description:
      "Streaks, reminders, and progress tracking to help you stay on your journey day after day.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Building with Purpose
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed text-left sm:text-center">
              Muhasabah — the Islamic practice of self-reflection — is at the
              heart of everything we build. Our apps are designed to help Muslims
              track, improve, and stay consistent in their worship and daily
              lives.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-3 items-stretch gap-8">
          {CARDS.map((card, i) => (
            <ScrollReveal
              key={card.title}
              delay={(i * 200) as 0 | 200 | 400}
              className="h-full"
            >
              <div className="h-full flex flex-col items-center bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/10 shrink-0 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
