export default function SatelliteDish(context) {
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
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
  <path d="m9 15 3-3" />
  <path d="M17 13a6 6 0 0 0-6-6" />
  <path d="M21 13A10 10 0 0 0 11 3" />
    </svg>
  );
}
