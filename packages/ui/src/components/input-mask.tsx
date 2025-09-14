import { tv } from '@icw/utils';
import Nullstack from 'nullstack';
import { mask, unmask } from 'remask';

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

export class InputMask extends Nullstack {
  parse({
    event,
    onchange,
    bind,
    name,
    mask: mask_value,
    oninput,
    unmasked,
    ...context
  }) {
    const original_value = event.target.value || '';
    const unmasked_value = unmask(mask(original_value, mask_value));
    const masked_value = this.applyMask({
      value: original_value,
      mask: mask_value,
    });

    //   // ...context,
    event.target.value = masked_value;
    if (bind) bind.object[bind.property] = unmasked_value;
    oninput({
      ...context,
      value: unmasked_value,
      masked: masked_value,
      unmasked,
      event,
    });
  }

  applyMask({ value, mask: mask_value }) {
    const formatted = mask(value || '', mask_value);
    return formatted;
  }
  render({
    name,
    type,
    error,
    styles,
    disabled,
    readonly,
    oninput,
    onclick,
    ...props
  }: any) {
    const { wrapper, input, addon } = ui();
    const isDisabled = disabled || readonly;
    return (
      <>
        <div class={wrapper({ className: styles?.wrapper })}>
          {props['icon-left'] && (
            <div class={addon({ position: 'left' })}>{props['icon-left']}</div>
          )}
          {props['icon-right'] && (
            <div class={addon({ position: 'right' })}>
              {props['icon-right']}
            </div>
          )}
          <input
            id={name}
            name={name}
            //@ts-ignore
            value={this.applyMask()}
            autocomplete="off"
            disabled={isDisabled}
            readonly={readonly}
            class={input({
              className: styles?.input,
              error: !!error?.[name],
              disabled: isDisabled,
              readonly: readonly,
              'icon-left': !!props['icon-left'],
              'icon-right': !!props['icon-right'],
            })}
            default
            onclick={onclick}
            oninput={this.parse}
          />
        </div>
      </>
    );
  }
}
