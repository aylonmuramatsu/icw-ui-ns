export default function GitPullRequestClosed(context) {
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
      <circle cx="6" cy="6" r="3" />
  <path d="M6 9v12" />
  <path d="m21 3-6 6" />
  <path d="m21 9-6-6" />
  <path d="M18 11.5V15" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  );
}
