export default function IterationCw(context) {
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
      <path d="M4 10a8 8 0 1 1 8 8H4" />
  <path d="m8 22-4-4 4-4" />
    </svg>
  );
}
