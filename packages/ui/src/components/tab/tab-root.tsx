import Nullstack from "nullstack";

export class TabRoot extends Nullstack {
  active = null
  prepare(context: any) {
    const defaultConfigs = {
      active: null,
      variant: 'normal',
      size: 'xs'
    }
    const options = {
      active: context?.active || context?.default || defaultConfigs.active,
      variant: context?.variant || defaultConfigs.variant,
      size: context?.size || defaultConfigs.size,
      always_render: context?.['always-render'] || false,
    }
    this.active = options.active
    context.options = options

  }
  render(context: any): any {
    const tab_header = Array.from(context.children)?.filter((e: any) => typeof e === 'object' && e?.type?.name === 'Tab')
      ?.map((t: any) => {
        const key = t.attributes.key;
        if (t?.children?.length === 0) return false;
        const tab_button = t?.children?.find((c: any) => typeof c === 'object' && c?.type?.name === 'TabButton');
        if (!tab_button) return false;
        tab_button.attributes.key = key;
        return tab_button;
      })?.filter(x => x)

    const tab_content = Array.from(context.children)?.filter((e: any) => typeof e === 'object' && e?.type?.name === 'Tab')
      ?.map((t: any) => {
        const key = t.attributes.key;
        if (t?.children?.length === 0) return false;
        const tab_content = t?.children?.find((c: any) => typeof c === 'object' && c?.type?.name === 'TabContent');
        if (!tab_content) return false;
        tab_content.attributes.key = key;
        return tab_content;
      })?.filter(x => x)


    return (
      <div class="tabs" >
        <div class={[`tab-header`, context?.options.variant === 'pill' && 'tab-header-pill']}>
          {tab_header?.map((e, index) => {
            e.attributes.size = context?.options.size
            if (context?.options?.variant === 'pill')
              e.attributes.class = 'tab-button-pill'
            if (index === 0 && !this.active) {
              e.attributes.active = true;
            }
            else {
              e.attributes.active = this.active === e.attributes.key;

            }
            e.attributes.onChange = () => {
              this.active = e.attributes.key

              context?.onchange && context?.onchange(e.attributes.key)
            }
            return e;
          })}
        </div>
        {tab_content?.map((e, index) => {
          if (index === 0 && !this.active) {
            e.attributes.active = true;
          }
          else {
            e.attributes.active = this.active === e.attributes.key;

          }
          return e;
        })}
      </div>
    );
  }
}