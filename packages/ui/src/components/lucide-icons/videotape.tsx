export default function Videotape(context) {
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
  <path d="M2 8h20" />
  <circle cx="8" cy="14" r="2" />
  <path d="M8 12h8" />
  <circle cx="16" cy="14" r="2" />
    </svg>
  );
}
