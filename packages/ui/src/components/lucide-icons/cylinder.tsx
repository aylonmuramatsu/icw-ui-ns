export default function Cylinder(context) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  );
}
