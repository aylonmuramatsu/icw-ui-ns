export default function CircleArrowOutUpRight(context) {
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
      <path d="M22 12A10 10 0 1 1 12 2" />
  <path d="M22 2 12 12" />
  <path d="M16 2h6v6" />
    </svg>
  );
}
