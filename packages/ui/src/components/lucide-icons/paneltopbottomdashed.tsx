export default function PanelTopBottomDashed(context) {
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
      <path d="M14 16h1" />
  <path d="M14 8h1" />
  <path d="M19 16h2" />
  <path d="M19 8h2" />
  <path d="M3 16h2" />
  <path d="M3 8h2" />
  <path d="M9 16h1" />
  <path d="M9 8h1" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
}
