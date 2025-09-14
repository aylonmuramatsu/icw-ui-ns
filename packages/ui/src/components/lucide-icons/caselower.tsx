export default function CaseLower(context) {
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
      <path d="M10 9v7" />
  <path d="M14 6v10" />
  <circle cx="17.5" cy="12.5" r="3.5" />
  <circle cx="6.5" cy="12.5" r="3.5" />
    </svg>
  );
}
