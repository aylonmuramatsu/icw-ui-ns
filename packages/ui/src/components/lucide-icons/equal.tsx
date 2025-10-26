export default function Equal(context) {
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
      <line x1="5" x2="19" y1="9" y2="9" />
  <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
}
