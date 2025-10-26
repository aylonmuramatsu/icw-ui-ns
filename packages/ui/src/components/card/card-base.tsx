import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardBaseProps {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
  onclick?: () => void;
  class?: string;
  style?: any;
}

export class CardBase extends Nullstack<CardBaseProps> {
  render(
    context: BaseNullstackClientContext<unknown> & CardBaseProps
  ): NullstackNode {
    const {
      variant = 'default',
      padding = 'md',
      hoverable = false,
      clickable = false,
      onclick,
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'card',
      hoverable && 'card--hoverable',
      clickable && 'card--clickable',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-variant={variant}
        data-padding={padding}
        onclick={onclick}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
}

