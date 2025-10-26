import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export interface CardHeaderProps {
  class?: string;
  style?: any;
}

export class CardHeader extends Nullstack<CardHeaderProps> {
  render(
    context: BaseNullstackClientContext<unknown> & CardHeaderProps
  ): NullstackNode {
    const {
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'card__header',
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

