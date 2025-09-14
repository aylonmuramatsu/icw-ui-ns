export default function ListFilterPlus(context) {
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
      <path d="M10 18h4" />
  <path d="M11 6H3" />
  <path d="M15 6h6" />
  <path d="M18 9V3" />
  <path d="M7 12h8" />
    </svg>
  );
}
