export default function ListCollapse(context) {
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
      <path d="M10 12h11" />
  <path d="M10 18h11" />
  <path d="M10 6h11" />
  <path d="m3 10 3-3-3-3" />
  <path d="m3 20 3-3-3-3" />
    </svg>
  );
}
