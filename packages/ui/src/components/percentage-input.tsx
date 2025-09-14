/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { tv } from '@icw/utils';
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

export class PercentageInput extends Nullstack {
  last_language = null;
  currency = null;
  parse({ event, bind, oninput, ...context }: any) {
    const original_value = event.target.value || '0.00';
    //@ts-ignore
    const unmasked_value = this.toNumber({ currency: original_value });
    //@ts-ignore
    const masked_value = this.applyMask({ value: unmasked_value });
    event.target.value = masked_value;
    if (bind) bind.object[bind.property] = unmasked_value;

    oninput &&
      oninput({
        ...context,
        value: unmasked_value,
        masked: masked_value,
        event,
      });
  }
  applyMask(context: any) {
    const value =
      context.value?.toFixed(context.options?.precision || 2) || '0.00';
    const numeric = this._removeNonNumerics(value);
    let number =
      Number(numeric) / Math.pow(10, context.options?.precision || 2);
    // Não permite negativo
    if (number < 0) number = 0;
    // Formata para string local
    return number.toLocaleString(context.options.locale, {
      minimumIntegerDigits: 1,
      minimumFractionDigits: context.options.precision || 2,
      maximumFractionDigits: context.options.precision || 2,
    });
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

  onKeyDown({ event: e, options }) {
    // Permite teclas de controle, delete, backspace, setas, tab, etc
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Home',
      'End',
    ];
    if (allowedKeys.includes(e.key)) return;

    // Permite Ctrl/Cmd + C/V/X/A
    if (
      (e.ctrlKey || e.metaKey) &&
      ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())
    )
      return;

    // Só permite números
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Simula o valor após a digitação
    const input = e.currentTarget;
    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;
    const value = input.value;

    // Insere o novo caractere na posição do cursor
    const newValue =
      value.substring(0, selectionStart) +
      e.key +
      value.substring(selectionEnd);

    const numeric = this._removeNonNumerics(newValue);
    const number = Number(numeric) / Math.pow(10, options.precision);

    if (number > options.maxValue) {
      e.preventDefault();
      return;
    }
  }

  prepare(context: any) {
    context.options = {
      maxValue: context.configs?.maxValue || 100,
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
    'max-value': max_value,
    error,
    ...props
  }: any) {
    const { wrapper, input, addon } = ui();
    const isDisabled = disabled || readonly;

    return (
      <div class={wrapper({ className: styles?.wrapper })}>
        {props['icon-left'] && (
          <div class={addon({ position: 'left' })}>{props['icon-left']}</div>
        )}
        {props['icon-right'] && (
          <div class={addon({ position: 'right' })}>{props['icon-right']}</div>
        )}
        <input
          id={name}
          type="text"
          autocomplete="off"
          //@ts-ignore
          value={this.applyMask()}
          class={input({
            className: styles?.input,
            error: error,
            disabled: isDisabled,
            readonly: readonly,
            size,
            'icon-left': !!props['icon-left'],
            'icon-right': !!props['icon-right'],
          })}
          maxValue={max_value}
          name={name}
          onclick={({ event: e }) =>
            e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)
          }
          default
          onkeydown={this.onKeyDown}
          oninput={this.parse}
          {...props}
        />
      </div>
    );
  }
}
