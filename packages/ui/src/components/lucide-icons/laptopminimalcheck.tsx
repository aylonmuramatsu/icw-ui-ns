export default function LaptopMinimalCheck(context) {
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
      <path d="M2 20h20" />
  <path d="m9 10 2 2 4-4" />
  <rect x="3" y="4" width="18" height="12" rx="2" />
    </svg>
  );
}
