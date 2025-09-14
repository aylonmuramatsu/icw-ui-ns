export default function ArrowDownUp(context) {
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
      <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="m21 8-4-4-4 4" />
  <path d="M17 4v16" />
    </svg>
  );
}
