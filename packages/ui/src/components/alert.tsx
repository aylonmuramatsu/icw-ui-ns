import { tv } from '@insightcreativewebs/utils';
import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';
import { LucideIcons } from '..';

const alertVariants = tv({
  base: 'alert',
  variants: {
    color: {
      danger: 'alert-danger',
      primary: 'alert-primary',
      secondary: 'alert-secondary',
      success: 'alert-success',
      info: 'alert-info',
      warning: 'alert-warning',
    },
    size: {
      xs: 'alert-xs',
      sm: 'alert-sm',
      md: 'alert-md',
      lg: 'alert-lg',
    },
  },
  defaultVariants: {
    color: 'danger',
    size: 'sm',
  },
});

interface AlertProps {
  color?: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  class?: string;
  message?: string;
  children?: any;
}

export class Alert extends Nullstack {
  render({
    color = 'danger',
    size = 'sm',
    message,
    children,
    class: className,
  }: AlertProps & BaseNullstackClientContext<unknown>): NullstackNode {
    return (
      <div
        class={alertVariants({ color, size, className })}
        role="alert"
        aria-live="polite"
        style="pointer-events: none;"
      >
        <span class="alert__icon" aria-hidden="true">
          <LucideIcons.Info class="w-full h-full" />
        </span>
        <span>{message || children || 'Ocorreu um erro.'}</span>
      </div>
    );
  }
}
