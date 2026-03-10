interface PhoneMockupProps {
  className?: string;
  rotate?: string;
}

export default function PhoneMockup({
  className = "",
  rotate = "",
}: PhoneMockupProps) {
  return (
    <div
      className={`relative ${rotate} ${className}`}
    >
      <div className="w-[220px] h-[440px] lg:w-[260px] lg:h-[520px] bg-gray-100 rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl" />
        <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs font-medium">App Preview</span>
        </div>
      </div>
    </div>
  );
}
