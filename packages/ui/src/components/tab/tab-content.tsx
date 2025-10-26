import { tv } from "@insightcreativewebs/utils";

const ui = tv({
  base: 'tab-content',
  variants: {
    active: {
      true: 'active'
    }
  }
}) as any
export const TabContent = (context: any) => {
  const { active, class: className } = context || {}
  return (<div class={ui({ active, className })}>{context.children}</div>);

}