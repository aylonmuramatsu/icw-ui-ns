import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';
import { tv } from 'tailwind-variants';

interface ButtonGroupProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  class?: string;
}

const buttonGroupClasses = tv({
  base: 'button-group',
});

export class ButtonGroup extends Nullstack {
  render(
    context: BaseNullstackClientContext<unknown> & ButtonGroupProps
  ): NullstackNode {
    const { size = 'md', class: className, children, ...props }: any = context;

    return (
      <div
        class={buttonGroupClasses({ class: className })}
        role="group"
        data-size={size}
        {...props}
      >
        {Array.from(children).map((b: any) => {
          b.attributes.disabled = props.disabled;
          return b;
        })}
      </div>
    );
  }
}
