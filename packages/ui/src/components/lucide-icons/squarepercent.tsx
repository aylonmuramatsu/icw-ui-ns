export default function SquarePercent(context) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m15 9-6 6" />
  <path d="M9 9h.01" />
  <path d="M15 15h.01" />
    </svg>
  );
}
