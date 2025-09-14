import Nullstack from 'nullstack'

export default class Info extends Nullstack {

  render(context) {
    const { size = 24, color = 'currentColor', class: className = '' } = context
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
        style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }

}
