import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';
import { tv } from 'tailwind-variants';

interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onclick?: () => void;
  class?: string;
}

const buttonVariants = tv({
  base: 'btn',
  variants: {
    variant: {
      solid: 'btn-solid',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
    },
    color: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      danger: 'btn-danger',
      success: 'btn-success',
      info: 'btn-info',
      warning: 'btn-warning',
    },
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
});

export class Button extends Nullstack {
  render(
    context: BaseNullstackClientContext<unknown> & ButtonProps
  ): NullstackNode {
    const {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
      onclick,
      class: className,
      children,
      ...props
    } = context;
    console.log('size', size);
    return (
      <button
        class={buttonVariants({ variant, color, size, class: className })}
        type={type}
        disabled={disabled}
        onclick={onclick}
        {...props}
      >
        {children}
      </button>
    );
  }
}
