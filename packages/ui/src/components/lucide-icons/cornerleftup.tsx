export default function CornerLeftUp(context) {
  const { color = 'currentColor', class: className = '' } = context;
  
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 9 9 4 4 9" />
  <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </svg>
  );
}
