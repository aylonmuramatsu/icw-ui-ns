import { tv } from '@icw/utils';
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack';

const buttonVariants = tv({
  base: 'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      solid: '',
      outline: 'border-2 bg-transparent',
      ghost: 'bg-transparent shadow-none',
      link: 'bg-transparent underline px-0 py-0',
      default: '',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      danger: '',
      success: '',
      info: '',
      warning: '',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
  },
  compoundVariants: [
    // Solid
    {
      variant: 'solid',
      color: 'default',
      class: 'bg-default text-white hover:bg-default/80 focus:ring-default/50',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary/50',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class:
        'bg-secondary text-gray-900 hover:bg-secondary/80 focus:ring-secondary/50',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-error text-white hover:bg-error/80 focus:ring-error/50',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-success text-white hover:bg-success/80 focus:ring-success/50',
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-info text-white hover:bg-info/80 focus:ring-info/50',
    },
    {
      variant: 'solid',
      color: 'warning',
      class:
        'bg-warning text-gray-900 hover:bg-warning/80 focus:ring-warning/50',
    },
    // Outline
    {
      variant: 'outline',
      color: 'default',
      class:
        'border-default text-default hover:bg-default/10 focus:ring-default/50',
    },
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-primary text-primary hover:bg-primary/10 focus:ring-primary/50',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class:
        'border-secondary text-secondary hover:bg-secondary/10 focus:ring-secondary/50',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-error text-error hover:bg-error/10 focus:ring-error/50',
    },
    {
      variant: 'outline',
      color: 'success',
      class:
        'border-success text-success hover:bg-success/10 focus:ring-success/50',
    },
    {
      variant: 'outline',
      color: 'info',
      class: 'border-info text-info hover:bg-info/10 focus:ring-info/50',
    },
    {
      variant: 'outline',
      color: 'warning',
      class:
        'border-warning text-warning hover:bg-warning/10 focus:ring-warning/50',
    },
    // Ghost
    {
      variant: 'ghost',
      color: 'default',
      class: 'text-default hover:bg-default/10 focus:ring-default/50',
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-primary hover:bg-primary/10 focus:ring-primary/50',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-secondary hover:bg-secondary/10 focus:ring-secondary/50',
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: 'text-error hover:bg-error/10 focus:ring-error/50',
    },
    {
      variant: 'ghost',
      color: 'success',
      class: 'text-success hover:bg-success/10 focus:ring-success/50',
    },
    {
      variant: 'ghost',
      color: 'info',
      class: 'text-info hover:bg-info/10 focus:ring-info/50',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: 'text-warning hover:bg-warning/10 focus:ring-warning/50',
    },
    // Link
    {
      variant: 'link',
      color: 'default',
      class: 'text-default hover:underline focus:ring-default/50',
    },
    {
      variant: 'link',
      color: 'primary',
      class: 'text-primary hover:underline focus:ring-primary/50',
    },
    {
      variant: 'link',
      color: 'secondary',
      class: 'text-secondary hover:underline focus:ring-secondary/50',
    },
    {
      variant: 'link',
      color: 'danger',
      class: 'text-error hover:underline focus:ring-error/50',
    },
    {
      variant: 'link',
      color: 'success',
      class: 'text-success hover:underline focus:ring-success/50',
    },
    {
      variant: 'link',
      color: 'info',
      class: 'text-info hover:underline focus:ring-info/50',
    },
    {
      variant: 'link',
      color: 'warning',
      class: 'text-warning hover:underline focus:ring-warning/50',
    },
  ],
});

interface ButtonProps {
  children?: NullstackNode;
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'default';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'info'
    | 'warning';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  onclick?: () => void;
  // Customização avançada
  customVariants?: {
    base?: string;
    variant?: Record<string, string>;
    color?: Record<string, string>;
    size?: Record<string, string>;
    defaultVariants?: {
      variant?: string;
      color?: string;
      size?: string;
    };
    compoundVariants?: any[];
  };
}

export class Button extends Nullstack {
  render({
    children,
    variant = 'solid',
    color = 'default',
    size = 'md',
    class: className = '',
    onclick,
    customVariants,
  }: NullstackClientContext<ButtonProps>) {
    // Permite customização total dos variants
    let finalButtonVariants = buttonVariants;

    if (customVariants) {
      const mergedVariants = {
        variant: {
          solid: '',
          outline: 'border-2 bg-transparent', // só border-2, cor via compoundVariants custom
          ghost: 'bg-transparent shadow-none',
          link: 'bg-transparent underline px-0 py-0',
          default: '',
          ...customVariants.variant,
        },
        color: {
          default: '',
          primary: '',
          secondary: '',
          danger: '',
          success: '',
          info: '',
          warning: '',
          ...customVariants.color,
        },
        size: {
          sm: 'px-3 py-1.5 text-sm',
          md: 'px-4 py-2 text-base',
          lg: 'px-6 py-3 text-lg',
          ...customVariants.size,
        },
      };

      finalButtonVariants = tv({
        base:
          customVariants.base ||
          'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        variants: mergedVariants,
        defaultVariants: {
          variant: customVariants.defaultVariants?.variant || 'solid',
          color: customVariants.defaultVariants?.color || 'default',
          size: customVariants.defaultVariants?.size || 'md',
        },
        compoundVariants:
          customVariants.compoundVariants || buttonVariants.compoundVariants,
      });
    }

    // tv() espera um objeto com as chaves dos variants definidos
    const classes = finalButtonVariants({
      variant,
      color,
      size,
      class: className,
    });

    return (
      <button class={classes} onclick={onclick}>
        {children ?? 'Button'}
      </button>
    );
  }
}
