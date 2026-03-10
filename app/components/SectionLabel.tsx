interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full">
      {children}
    </span>
  );
}
