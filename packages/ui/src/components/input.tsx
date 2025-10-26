/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export class Input extends Nullstack {
  render({
    name,
    type,
    errors,
    styles,
    size = 'md',
    disabled,
    readonly,
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
            type={type}
            name={name}
            autocomplete="off"
            disabled={isDisabled}
            readonly={readonly}
            class={input({
              className: styles?.input,
              size,
              error: !!errors?.[name],
              disabled: isDisabled,
              readonly: readonly,
              'icon-left': !!props['icon-left'],
              'icon-right': !!props['icon-right'],
            })}
            onclick={onclick}
            {...props}
          />
        </div>
      </>
    );
  }
}
