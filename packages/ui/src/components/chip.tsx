import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type ChipColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning';

export type ChipSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ChipProps {
  color?: ChipColor;
  size?: ChipSize;
  variant?: 'solid' | 'outline' | 'soft';
  avatar?: string; // URL da imagem
  icon?: any;
  removable?: boolean;
  onRemove?: (event?: any) => void;
  onclick?: (event?: any) => void;
  selected?: boolean;
  disabled?: boolean;
  class?: string;
  style?: any;
}

// ============================================
// CHIP COMPONENT
// ============================================

export class Chip extends Nullstack<ChipProps> {
  handleRemove = ({ onRemove, event }: any) => {
    event?.stopPropagation();
    if (onRemove) {
      onRemove(event);
    }
  };

  handleClick = ({ onclick, disabled, event }: any) => {
    if (disabled) return;
    if (onclick) {
      onclick(event);
    }
  };

  render(
    context: BaseNullstackClientContext<unknown> & ChipProps
  ): NullstackNode {
    const {
      color = 'primary',
      size = 'md',
      variant = 'solid',
      avatar,
      icon,
      removable = false,
      onRemove,
      onclick,
      selected = false,
      disabled = false,
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const isClickable = !!onclick || selected !== undefined;

    const classes = [
      'chip',
      isClickable && 'chip--clickable',
      disabled && 'chip--disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-color={color}
        data-size={size}
        data-variant={variant}
        data-selected={selected ? 'true' : 'false'}
        style={style}
        onclick={(event) => this.handleClick({ onclick, disabled, event })}
        role={isClickable ? 'button' : undefined}
        tabindex={isClickable && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {/* Avatar */}
        {avatar && (
          <img
            src={avatar}
            alt=""
            class="chip__avatar"
            data-size={size}
          />
        )}

        {/* Icon */}
        {!avatar && icon && <span class="chip__icon">{icon}</span>}

        {/* Content */}
        {children && <span class="chip__content">{children}</span>}

        {/* Remove button */}
        {removable && (
          <button
            type="button"
            class="chip__remove"
            onclick={(event) => this.handleRemove({ onRemove, event })}
            disabled={disabled}
            aria-label="Remover"
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
      </div>
    );
  }
}

