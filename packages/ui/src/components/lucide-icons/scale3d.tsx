export default function Scale3d(context) {
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
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
  <path d="M5.293 18.707 11 13" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="5" cy="5" r="2" />
    </svg>
  );
}
