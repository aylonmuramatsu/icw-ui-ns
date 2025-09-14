export default function ListStart(context) {
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
      <path d="M16 12H3" />
  <path d="M16 18H3" />
  <path d="M10 6H3" />
  <path d="M21 18V8a2 2 0 0 0-2-2h-5" />
  <path d="m16 8-2-2 2-2" />
    </svg>
  );
}
