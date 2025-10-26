import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type ProgressColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

export type ProgressVariant = 'default' | 'gradient' | 'striped';

export interface ProgressProps {
  value?: number;          // Valor atual (0-100)
  max?: number;           // Valor máximo (padrão 100)
  color?: ProgressColor;
  size?: ProgressSize;
  variant?: ProgressVariant;
  showLabel?: boolean;    // Mostra porcentagem
  label?: string;         // Label customizado
  animated?: boolean;     // Anima as stripes
  indeterminate?: boolean; // Loading infinito
  class?: string;
  style?: any;
}

// ============================================
// PROGRESS COMPONENT
// ============================================

export class Progress extends Nullstack<ProgressProps> {
  getPercentage({ value = 0, max = 100 }: { value?: number; max?: number }): number {
    if (max === 0) return 0;
    const percentage = (value / max) * 100;
    return Math.min(100, Math.max(0, percentage));
  }

  getLabel({
    label,
    showLabel,
    value,
    max
  }: {
    label?: string;
    showLabel?: boolean;
    value?: number;
    max?: number;
  }): string | null {
    if (label) return label;
    if (!showLabel) return null;

    const percentage = this.getPercentage({ value, max });
    return `${Math.round(percentage)}%`;
  }

  render(
    context: BaseNullstackClientContext<unknown> & ProgressProps
  ): NullstackNode {
    const {
      value = 0,
      max = 100,
      color = 'primary',
      size = 'md',
      variant = 'default',
      showLabel = false,
      label,
      animated = false,
      indeterminate = false,
      class: className,
      style,
      ...props
    } = context || {};

    const percentage = this.getPercentage({ value, max });
    const displayLabel = this.getLabel({ label, showLabel, value, max });
    const shouldAnimate = animated || indeterminate;

    const containerClasses = [
      'progress',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={containerClasses}
        data-size={size}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || 'Progress'}
        style={style}
        {...props}
      >
        <div
          class="progress__bar"
          data-color={color}
          data-variant={variant}
          data-animated={shouldAnimate ? 'true' : 'false'}
          data-indeterminate={indeterminate ? 'true' : 'false'}
          style={indeterminate ? undefined : `width: ${percentage}%`}
        >
          {displayLabel && (
            <span class="progress__label">{displayLabel}</span>
          )}
        </div>
      </div>
    );
  }
}

