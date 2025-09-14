export default function LaptopMinimal(context) {
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
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
  <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}
