export default function TurkishLira(context) {
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
      <path d="M15 4 5 9" />
  <path d="m15 8.5-10 5" />
  <path d="M18 12a9 9 0 0 1-9 9V3" />
    </svg>
  );
}
