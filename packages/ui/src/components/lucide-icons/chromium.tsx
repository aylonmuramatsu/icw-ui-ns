export default function Chromium(context) {
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
      <path d="M10.88 21.94 15.46 14" />
  <path d="M21.17 8H12" />
  <path d="M3.95 6.06 8.54 14" />
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
