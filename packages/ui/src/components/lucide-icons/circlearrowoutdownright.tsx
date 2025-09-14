export default function CircleArrowOutDownRight(context) {
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
      <path d="M12 22a10 10 0 1 1 10-10" />
  <path d="M22 22 12 12" />
  <path d="M22 16v6h-6" />
    </svg>
  );
}
