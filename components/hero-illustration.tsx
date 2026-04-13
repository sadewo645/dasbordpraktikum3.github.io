export function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full max-w-md" aria-hidden="true">
      <defs>
        <linearGradient id="leaf" x1="0" x2="1">
          <stop offset="0%" stopColor="#8CCB91" />
          <stop offset="100%" stopColor="#4E8A62" />
        </linearGradient>
      </defs>
      <rect x="0" y="140" width="420" height="80" fill="#8b6b4f" opacity="0.2" />
      <circle cx="80" cy="56" r="24" fill="#dbead8" />
      <path d="M210 170 C200 100, 250 60, 300 40" stroke="#4E8A62" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M245 104 C220 75, 190 80, 170 110 C205 122, 228 119, 245 104 Z" fill="url(#leaf)" />
      <path d="M280 78 C252 54, 270 20, 314 16 C316 46, 305 67, 280 78 Z" fill="url(#leaf)" />
      <rect x="144" y="164" width="130" height="26" rx="12" fill="#386150" opacity="0.15" />
      <rect x="152" y="170" width="114" height="12" rx="6" fill="#386150" opacity="0.35" />
    </svg>
  );
}
