export default function HardDriveDownload(context) {
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
      <path d="M12 2v8" />
  <path d="m16 6-4 4-4-4" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h.01" />
  <path d="M10 18h.01" />
    </svg>
  );
}
