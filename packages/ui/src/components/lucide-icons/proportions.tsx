export default function Proportions(context) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M12 9v11" />
  <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </svg>
  );
}
