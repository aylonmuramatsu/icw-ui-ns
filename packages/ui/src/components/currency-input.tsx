/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { tv } from '@insightcreativewebs/utils';
import Nullstack from 'nullstack';

const ui = tv({
  slots: {
    wrapper: 'input-wrapper',
    input: 'input',
    addon: 'input-addon',
  },
  variants: {
    size: {
      xs: {
        input: 'input-xs',
      },
      sm: {
        input: 'input-sm',
      },
      md: {
        input: 'input-md',
      },
      lg: {
        input: 'input-lg',
      },
    },
    error: {
      true: {
        input: 'input-error',
      },
    },
    disabled: {
      true: {
        input: 'input-disabled',
      },
    },
    readonly: {
      true: {
        input: 'input-readonly',
      },
    },
    position: {
      right: {
        addon: 'input-addon-right',
      },
      left: {
        addon: 'input-addon-left',
      },
    },
    'icon-left': {
      true: {
        input: 'input-icon-left',
      },
    },
    'icon-right': {
      true: {
        input: 'input-icon-right',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
}) as any;

export class CurrencyInput extends Nullstack {
  last_language = null;
  currency = null;
  parse({ event, bind, oninput, name }: any) {
    const original_value = event.target.value || '0.00';

    //@ts-ignore
    const unmasked_value = this.toNumber({ currency: original_value });
    //@ts-ignore
    const masked_value = this.applyMask({ value: unmasked_value });
    event.target.value = masked_value;

    if (bind) bind.object[bind.property] = unmasked_value;
    oninput &&
      oninput({
        name,
        value: unmasked_value,
        masked: masked_value,
        event,
      });


  }
  applyMask(context?: any) {
    const value = (context.value || 0)?.toFixed(context.options?.precision || 2)
    const formatted = `${new Intl.NumberFormat(context.options.locale || 'pt-br', {
      style: context.options?.useSymbol ? 'currency' : 'decimal',
      currency: 'BRL',
      minimumIntegerDigits: 1,
      minimumFractionDigits: context.options?.precision || 2,
    }).format(Number(this._removeNonNumerics(value)) / Math.pow(10, context.options.precision))}`

    return formatted
  }
  _removeNonNumerics(raw: string) {
    const dash = raw?.charAt(0) === '-' ? '-' : '';
    return `${dash}${raw?.replace(/[^0-9]/g, '')}`;
  }

  toNumber({ currency, options }) {
    return (
      Number(this._removeNonNumericsExceptDash(currency)) /
      Math.pow(10, options?.precision || 2)
    );
  }

  _removeNonNumericsExceptDash(raw: string) {
    const dash = raw?.charAt(0) === '-' ? '-' : '';
    return `${dash}${raw?.replace(/[^0-9]/g, '')}`;
  }

  prepare(context: any) {
    context.options = {
      precision: context.configs?.precision || 2,
      locale: context.configs?.locale || 'pt-br',
      currency: context.configs?.currency || 'brl',
      useSymbol: context.configs?.useSymbol || false,
    };
  }

  render({
    class: className,
    bind,
    name,
    styles,
    size = 'md',
    disabled,
    readonly,
    error,
    'icon-left': iconLeft,
    'icon-right': iconRight
  }: any) {
    const { wrapper, input, addon } = ui();
    const isDisabled = disabled || readonly;

    return (
      <div class={wrapper({ className: styles?.wrapper })}>
        {iconLeft && (
          <div class={addon({ position: 'left' })}>{iconLeft}</div>
        )}
        {iconRight && (
          <div class={addon({ position: 'right' })}>{iconRight}</div>
        )}
        <input
          type="text"
          autocomplete="off"
          //@ts-ignore
          id={name}
          class={input({
            className: styles?.input,
            error: error,
            disabled: isDisabled,
            readonly: readonly,
            size,
            'icon-left': !!iconLeft,
            'icon-right': !!iconRight,
          })}
          value={this.applyMask()}
          oninput={this.parse}
          onclick={({ event: e }) =>
            e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)
          }
          default
        />
      </div>
    );
  }
}
