import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type SkeletonVariant = 'default' | 'wave' | 'pulse';
export type SkeletonShape = 'rectangle' | 'circle' | 'text';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  shape?: SkeletonShape;
  width?: string | number;
  height?: string | number;
  count?: number;          // Número de linhas (para shape="text")
  circle?: boolean;        // Atalho para shape="circle"
  rounded?: boolean;       // Bordas arredondadas
  animated?: boolean;      // Desabilitar animação
  class?: string;
  style?: any;
}

// ============================================
// SKELETON COMPONENT
// ============================================

export class Skeleton extends Nullstack<SkeletonProps> {
  getWidthStyle(width?: string | number): string {
    if (!width) return '';
    return typeof width === 'number' ? `${width}px` : width;
  }

  getHeightStyle(height?: string | number): string {
    if (!height) return '';
    return typeof height === 'number' ? `${height}px` : height;
  }

  renderSkeleton({
    shape,
    width,
    height,
    variant,
    rounded,
    animated,
    className,
    style
  }: any) {
    const widthStyle = this.getWidthStyle(width);
    const heightStyle = this.getHeightStyle(height);

    const inlineStyles = {
      ...(widthStyle && { width: widthStyle }),
      ...(heightStyle && { height: heightStyle }),
      ...style,
    };

    const classes = [
      'sk-base',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-shape={shape}
        data-variant={variant}
        data-rounded={rounded ? 'true' : 'false'}
        data-animated={animated !== false ? 'true' : 'false'}
        style={inlineStyles}
      />
    );
  }

  render(
    context: BaseNullstackClientContext<unknown> & SkeletonProps
  ): NullstackNode {
    const {
      variant = 'default',
      shape = 'rectangle',
      width,
      height,
      count = 1,
      circle = false,
      rounded = false,
      animated = true,
      class: className,
      style,
      ...props
    } = context || {};

    const finalShape = circle ? 'circle' : shape;
    const finalRounded = circle ? true : rounded;

    // Para shape="text" com count > 1, renderizar múltiplas linhas
    if (finalShape === 'text' && count > 1) {
      return (
        <div class="sk-group" {...props}>
          {Array.from({ length: count }).map((_, index) => {
            // Última linha é mais curta (80%)
            const isLast = index === count - 1;
            const lineWidth = isLast && !width ? '80%' : width;

            return this.renderSkeleton({
              shape: finalShape,
              width: lineWidth,
              height,
              variant,
              rounded: finalRounded,
              animated,
              className,
              style: index < count - 1 ? { ...style, marginBottom: '0.5rem' } : style,
            });
          })}
        </div>
      );
    }

    // Renderizar skeleton único
    return this.renderSkeleton({
      shape: finalShape,
      width,
      height,
      variant,
      rounded: finalRounded,
      animated,
      className,
      style,
      ...props,
    });
  }
}

