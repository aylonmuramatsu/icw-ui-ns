export default function AppWindowMac(context) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M6 8h.01" />
  <path d="M10 8h.01" />
  <path d="M14 8h.01" />
    </svg>
  );
}
