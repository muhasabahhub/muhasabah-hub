import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Prayer Tracking",
    description: "Log every Salah and track your Qadha with precision.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast Tracking",
    description: "Monitor missed fasts and plan your makeup days.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    title: "Progress Stats",
    description: "Visual stats and insights to keep you motivated.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Streak System",
    description: "Build momentum with daily streaks and milestones.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Detailed Log Keeping",
    description: "Never lose track of your progress.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Clean Interface",
    description: "Distraction-free design focused on what matters.",
  },
] as const;

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Everything You Need to Stay Consistent
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
          {FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={(Math.min(i, 2) * 200) as 0 | 200 | 400}
              className="h-full"
            >
              <div className="h-full flex flex-row items-start gap-4 bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
