export default function Webcam(context) {
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
      <circle cx="12" cy="10" r="8" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 22h10" />
  <path d="M12 22v-4" />
    </svg>
  );
}
