export default function CornerRightDown(context) {
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
      <path d="m10 15 5 5 5-5" />
  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  );
}
