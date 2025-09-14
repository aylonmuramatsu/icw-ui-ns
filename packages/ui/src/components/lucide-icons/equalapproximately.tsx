export default function EqualApproximately(context) {
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
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
  <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    </svg>
  );
}
