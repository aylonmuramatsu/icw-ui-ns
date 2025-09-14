export default function Pilcrow(context) {
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
      <path d="M13 4v16" />
  <path d="M17 4v16" />
  <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </svg>
  );
}
