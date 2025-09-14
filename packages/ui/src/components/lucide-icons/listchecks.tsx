export default function ListChecks(context) {
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
      <path d="m3 17 2 2 4-4" />
  <path d="m3 7 2 2 4-4" />
  <path d="M13 6h8" />
  <path d="M13 12h8" />
  <path d="M13 18h8" />
    </svg>
  );
}
