export default function Tv(context) {
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
      <path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />
    </svg>
  );
}
