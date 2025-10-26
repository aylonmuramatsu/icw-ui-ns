export default function DecimalsArrowLeft(context) {
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
      <path d="m13 21-3-3 3-3" />
  <path d="M20 18H10" />
  <path d="M3 11h.01" />
  <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  );
}
