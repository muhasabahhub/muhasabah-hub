interface GradientOrbProps {
  color: "green" | "gold";
  className?: string;
  size?: string;
}

export default function GradientOrb({
  color,
  className = "",
  size = "w-96 h-96",
}: GradientOrbProps) {
  const bg =
    color === "green"
      ? "bg-brand-green"
      : "bg-brand-gold";

  return (
    <div
      className={`absolute rounded-full blur-3xl animate-pulse-soft ${bg} ${size} ${className}`}
      aria-hidden="true"
    />
  );
}
