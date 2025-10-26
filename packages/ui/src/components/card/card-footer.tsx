import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export interface CardFooterProps {
  class?: string;
  style?: any;
}

export class CardFooter extends Nullstack<CardFooterProps> {
  render(
    context: BaseNullstackClientContext<unknown> & CardFooterProps
  ): NullstackNode {
    const {
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'card__footer',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
}

