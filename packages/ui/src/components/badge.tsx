import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning';

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

export interface BadgeProps {
  color?: BadgeColor;
  size?: BadgeSize;
  rounded?: boolean;
  variant?: 'solid' | 'outline' | 'soft';
  dot?: boolean;
  icon?: any;
  removable?: boolean;
  onRemove?: () => void;
  class?: string;
  style?: any;
}

// ============================================
// BADGE COMPONENT
// ============================================

export class Badge extends Nullstack<BadgeProps> {
  handleRemove = ({ onRemove, event }: any) => {
    event?.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  render(
    context: BaseNullstackClientContext<unknown> & BadgeProps
  ): NullstackNode {
    const {
      color = 'primary',
      size = 'md',
      rounded = false,
      variant = 'solid',
      dot = false,
      icon,
      removable = false,
      onRemove,
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'badge',
      className,
    ].filter(Boolean).join(' ');

    return (
      <span
        class={classes}
        data-color={color}
        data-size={size}
        data-variant={variant}
        data-rounded={rounded ? 'true' : 'false'}
        style={style}
        {...props}
      >
        {/* Dot indicator */}
        {dot && <span class="badge__dot" data-color={color} />}

        {/* Icon */}
        {icon && <span class="badge__icon">{icon}</span>}

        {/* Content */}
        {children && <span class="badge__content">{children}</span>}

        {/* Remove button */}
        {removable && (
          <button
            type="button"
            class="badge__remove"
            onclick={(event) => this.handleRemove({ onRemove, event })}
            aria-label="Remover badge"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
}

