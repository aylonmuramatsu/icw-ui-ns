export default function SquarePilcrow(context) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
  <path d="M12 7v10" />
  <path d="M16 7v10" />
    </svg>
  );
}
