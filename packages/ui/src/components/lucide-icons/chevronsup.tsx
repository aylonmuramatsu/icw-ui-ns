export default function ChevronsUp(context) {
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
      <path d="m17 11-5-5-5 5" />
  <path d="m17 18-5-5-5 5" />
    </svg>
  );
}
