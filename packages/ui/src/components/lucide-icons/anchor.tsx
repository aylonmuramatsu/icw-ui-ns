export default function Anchor(context) {
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
      <path d="M12 22V8" />
  <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  <circle cx="12" cy="5" r="3" />
    </svg>
  );
}
