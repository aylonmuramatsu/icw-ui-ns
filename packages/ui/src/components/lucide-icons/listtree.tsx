export default function ListTree(context) {
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
      <path d="M21 12h-8" />
  <path d="M21 6H8" />
  <path d="M21 18h-8" />
  <path d="M3 6v4c0 1.1.9 2 2 2h3" />
  <path d="M3 10v6c0 1.1.9 2 2 2h3" />
    </svg>
  );
}
