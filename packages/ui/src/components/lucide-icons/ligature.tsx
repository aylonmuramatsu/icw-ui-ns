export default function Ligature(context) {
  const { size = 24, color = 'currentColor', class: className = '' } = context;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={className}
      style={{ color: color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 12h2v8" />
  <path d="M14 20h4" />
  <path d="M6 12h4" />
  <path d="M6 20h4" />
  <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </svg>
  );
}
