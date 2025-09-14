export default function Binary(context) {
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
      <rect x="14" y="14" width="4" height="6" rx="2" />
  <rect x="6" y="4" width="4" height="6" rx="2" />
  <path d="M6 20h4" />
  <path d="M14 10h4" />
  <path d="M6 14h2v6" />
  <path d="M14 4h2v6" />
    </svg>
  );
}
