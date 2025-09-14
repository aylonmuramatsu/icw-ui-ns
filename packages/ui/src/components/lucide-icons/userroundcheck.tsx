export default function UserRoundCheck(context) {
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
      <path d="M2 21a8 8 0 0 1 13.292-6" />
  <circle cx="10" cy="8" r="5" />
  <path d="m16 19 2 2 4-4" />
    </svg>
  );
}
