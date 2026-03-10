interface DecorativeStarProps {
  className?: string;
  size?: number;
}

export default function DecorativeStar({
  className = "",
  size = 24,
}: DecorativeStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L13.5 9.5L21 8L14.5 12L21 16L13.5 14.5L12 22L10.5 14.5L3 16L9.5 12L3 8L10.5 9.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
