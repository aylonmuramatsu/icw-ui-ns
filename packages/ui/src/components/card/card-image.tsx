import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export interface CardImageProps {
  src: string;
  alt?: string;
  position?: 'top' | 'bottom';
  class?: string;
  style?: any;
}

export class CardImage extends Nullstack<CardImageProps> {
  render(
    context: BaseNullstackClientContext<unknown> & CardImageProps
  ): NullstackNode {
    const {
      src,
      alt = '',
      position = 'top',
      class: className,
      style,
      ...props
    } = context || {};

    const classes = [
      'card__image',
      className,
    ].filter(Boolean).join(' ');

    return (
      <img
        src={src}
        alt={alt}
        class={classes}
        data-position={position}
        style={style}
        {...props}
      />
    );
  }
}

