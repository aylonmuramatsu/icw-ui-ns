import Nullstack from 'nullstack'

export default class CircleCheck extends Nullstack {

  render(context) {
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
        style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

}
