import { tv } from '@icw/utils';
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack';

// Ajuste: o ring-color deve estar sempre presente, não só no focus
const buttonVariants = tv({
  base: 'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ring-2 ring-offset-1 focus:ring-2', // Adicionado focus:ring-2
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
      class: 'bg-default text-white hover:bg-default/80 ring-default',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-primary text-white hover:bg-primary/80 ring-primary',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'bg-secondary text-gray-900 hover:bg-secondary/80 ring-secondary',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-error text-white hover:bg-error/80 ring-error',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-success text-white hover:bg-success/80 ring-success',
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-info text-white hover:bg-info/80 ring-info',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-warning text-gray-900 hover:bg-warning/80 ring-warning',
    },
    // Outline
    {
      variant: 'outline',
      color: 'default',
      class:
        'border-default text-default hover:bg-default/10 ring-default focus:border-default',
    },
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-primary text-primary hover:bg-primary/10 ring-primary focus:border-primary',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class:
        'border-secondary text-secondary hover:bg-secondary/10 ring-secondary focus:border-secondary',
    },
    {
      variant: 'outline',
      color: 'danger',
      class:
        'border-error text-error hover:bg-error/10 ring-error focus:border-error',
    },
    {
      variant: 'outline',
      color: 'success',
      class:
        'border-success text-success hover:bg-success/10 ring-success focus:border-success',
    },
    {
      variant: 'outline',
      color: 'info',
      class:
        'border-info text-info hover:bg-info/10 ring-info focus:border-info',
    },
    {
      variant: 'outline',
      color: 'warning',
      class:
        'border-warning text-warning hover:bg-warning/10 ring-warning focus:border-warning',
    },
    // Ghost
    {
      variant: 'ghost',
      color: 'default',
      class: 'text-default hover:bg-default/10 ring-default',
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-primary hover:bg-primary/10 ring-primary',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-secondary hover:bg-secondary/10 ring-secondary',
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: 'text-error hover:bg-error/10 ring-error',
    },
    {
      variant: 'ghost',
      color: 'success',
      class: 'text-success hover:bg-success/10 ring-success',
    },
    {
      variant: 'ghost',
      color: 'info',
      class: 'text-info hover:bg-info/10 ring-info',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: 'text-warning hover:bg-warning/10 ring-warning',
    },
    // Link
    {
      variant: 'link',
      color: 'default',
      class: 'text-default hover:underline ring-default',
    },
    {
      variant: 'link',
      color: 'primary',
      class: 'text-primary hover:underline ring-primary',
    },
    {
      variant: 'link',
      color: 'secondary',
      class: 'text-secondary hover:underline ring-secondary',
    },
    {
      variant: 'link',
      color: 'danger',
      class: 'text-error hover:underline ring-error',
    },
    {
      variant: 'link',
      color: 'success',
      class: 'text-success hover:underline ring-success',
    },
    {
      variant: 'link',
      color: 'info',
      class: 'text-info hover:underline ring-info',
    },
    {
      variant: 'link',
      color: 'warning',
      class: 'text-warning hover:underline ring-warning',
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
          'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ring-2 ring-offset-2 focus:ring-2', // Adicionado focus:ring-2
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
