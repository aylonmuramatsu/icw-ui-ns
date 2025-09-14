export default function Navigation2Off(context) {
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
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
  <path d="M14.53 8.88 12 2l-1.17 3.17" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}
