export default function Grid3x2(context) {
  const { size = 24, color = 'currentColor', class: className = '' } = context;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={className}
      style={{ color: color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3v18" />
  <path d="M3 12h18" />
  <path d="M9 3v18" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
}
