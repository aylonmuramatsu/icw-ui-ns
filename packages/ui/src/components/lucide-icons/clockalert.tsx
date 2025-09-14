export default function ClockAlert(context) {
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
      <path d="M12 6v6l4 2" />
  <path d="M20 12v5" />
  <path d="M20 21h.01" />
  <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
    </svg>
  );
}
