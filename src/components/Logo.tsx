export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Candlestick / chart icon */}
      <rect x="6" y="6" width="3" height="28" rx="1.5" fill="white" />
      <rect x="2.5" y="13" width="10" height="12" rx="2" fill="white" />
      <rect x="20" y="10" width="3" height="24" rx="1.5" fill="white" opacity="0.6" />
      <rect x="16.5" y="16" width="10" height="11" rx="2" fill="white" opacity="0.6" />
      <text
        x="40"
        y="28"
        fill="white"
        fontFamily="monospace"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.5"
      >
        TRADEUM
      </text>
    </svg>
  );
};