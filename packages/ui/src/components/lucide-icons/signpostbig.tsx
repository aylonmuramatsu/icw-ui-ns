export default function SignpostBig(context) {
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
      <path d="M10 9H4L2 7l2-2h6" />
  <path d="M14 5h6l2 2-2 2h-6" />
  <path d="M10 22V4a2 2 0 1 1 4 0v18" />
  <path d="M8 22h8" />
    </svg>
  );
}
