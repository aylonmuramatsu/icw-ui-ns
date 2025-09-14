export default function WrapText(context) {
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
      <path d="m16 16-2 2 2 2" />
  <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
  <path d="M3 18h7" />
  <path d="M3 6h18" />
    </svg>
  );
}
