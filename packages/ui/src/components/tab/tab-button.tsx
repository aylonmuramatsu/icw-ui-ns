import { tv } from "@insightcreativewebs/utils";



const ui = tv({
  base: 'tab-button',
  variants: {
    active: {
      true: 'active',
    },
    size: {
      xs: 'tab-button-xs',
      sm: 'tab-button-sm',
      md: 'tab-button-md',
      lg: 'tab-button-lg',
    }
  },

}) as any;
export const TabButton = (context: any) => {
  const { active, size = 'md', class: className, onChange } = context || {}

  return (
    <div class={ui({ className, active, size })} onclick={onChange} default>
      {context.children}
    </div>
  )

}