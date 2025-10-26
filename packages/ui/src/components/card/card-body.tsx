import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export interface CardBodyProps {
  class?: string;
  style?: any;
}

export class CardBody extends Nullstack<CardBodyProps> {
  render(
    context: BaseNullstackClientContext<unknown> & CardBodyProps
  ): NullstackNode {
    const {
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'card__body',
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

