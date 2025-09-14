export default function UndoDot(context) {
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
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
  <path d="M3 7v6h6" />
  <circle cx="12" cy="17" r="1" />
    </svg>
  );
}
