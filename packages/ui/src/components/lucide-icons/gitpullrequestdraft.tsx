export default function GitPullRequestDraft(context) {
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
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M18 6V5" />
  <path d="M18 11v-1" />
  <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  );
}
