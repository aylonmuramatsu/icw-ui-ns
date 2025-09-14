export default function Mail(context) {
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
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
