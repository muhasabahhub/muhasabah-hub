import DecorativeStar from "./DecorativeStar";
import GradientOrb from "./GradientOrb";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <GradientOrb
        color="green"
        className="top-20 right-[10%] opacity-20"
        size="w-[500px] h-[500px]"
      />
      <GradientOrb
        color="gold"
        className="top-40 right-[25%] opacity-15"
        size="w-[400px] h-[400px]"
      />

      <DecorativeStar
        className="absolute top-32 left-[15%] text-brand-green/30 animate-spin-slow"
        size={32}
      />
      <DecorativeStar
        className="absolute top-60 left-[8%] text-brand-gold/40"
        size={20}
      />
      <DecorativeStar
        className="absolute bottom-40 right-[40%] text-brand-green/20 animate-spin-slow"
        size={28}
      />
      <DecorativeStar
        className="absolute top-28 right-[35%] text-brand-gold/30"
        size={16}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="w-full px-6 lg:px-8">
            <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
              Apps Built for the{" "}
              <span className="text-brand-green">Muslim</span> Life Journey
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
              Beautiful, purposeful tools for self-improvement — rooted in
              Islamic values.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10">
              <a
                href="#apps"
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] px-8 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
              >
                Explore Our Apps
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] px-8 py-3.5 text-sm font-semibold text-gray-900 border-2 border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center max-w-[280px] lg:max-w-none mx-auto lg:mx-0">
            <PhoneMockup
              className="animate-float z-10"
              rotate="-rotate-6"
            />
            <PhoneMockup
              className="animate-float-delayed -ml-16 mt-12 z-20"
              rotate="rotate-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
