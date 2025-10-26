export default function MoveDiagonal2(context) {
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
      <path d="M19 13v6h-6" />
  <path d="M5 11V5h6" />
  <path d="m5 5 14 14" />
    </svg>
  );
}
