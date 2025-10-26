export default function SeparatorVertical(context) {
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
      <path d="M12 3v18" />
  <path d="m16 16 4-4-4-4" />
  <path d="m8 8-4 4 4 4" />
    </svg>
  );
}
