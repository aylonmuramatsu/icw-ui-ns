export default function AlignStartVertical(context) {
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
      <rect width="9" height="6" x="6" y="14" rx="2" />
  <rect width="16" height="6" x="6" y="4" rx="2" />
  <path d="M2 2v20" />
    </svg>
  );
}
