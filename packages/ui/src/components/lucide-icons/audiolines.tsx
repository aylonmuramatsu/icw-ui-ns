export default function AudioLines(context) {
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
      <path d="M2 10v3" />
  <path d="M6 6v11" />
  <path d="M10 3v18" />
  <path d="M14 8v7" />
  <path d="M18 5v13" />
  <path d="M22 10v3" />
    </svg>
  );
}
