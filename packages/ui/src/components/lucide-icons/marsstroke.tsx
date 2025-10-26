export default function MarsStroke(context) {
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
      <path d="m14 6 4 4" />
  <path d="M17 3h4v4" />
  <path d="m21 3-7.75 7.75" />
  <circle cx="9" cy="15" r="6" />
    </svg>
  );
}
