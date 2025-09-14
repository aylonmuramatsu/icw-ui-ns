export default function IndentIncrease(context) {
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
      <path d="M21 12H11" />
  <path d="M21 18H11" />
  <path d="M21 6H11" />
  <path d="m3 8 4 4-4 4" />
    </svg>
  );
}
