export default function MoveUpRight(context) {
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
      <path d="M13 5H19V11" />
  <path d="M19 5L5 19" />
    </svg>
  );
}
