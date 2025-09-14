/* eslint-disable @typescript-eslint/ban-ts-comment */
import { tv } from '@icw/utils';
import Nullstack from 'nullstack';

const ui = tv({
  slots: {
    wrapper: 'textarea-wrapper',
    textarea: 'textarea',
    addon: 'textarea-addon',
  },
  variants: {
    size: {
      xs: {
        textarea: 'textarea-xs',
      },
      sm: {
        textarea: 'textarea-sm',
      },
      md: {
        textarea: 'textarea-md',
      },
      lg: {
        textarea: 'textarea-lg',
      },
    },
    error: {
      true: {
        textarea: 'textarea-error',
      },
    },
    disabled: {
      true: {
        textarea: 'textarea-disabled',
      },
    },
    readonly: {
      true: {
        textarea: 'textarea-readonly',
      },
    },
    position: {
      right: {
        addon: 'textarea-addon-right',
      },
      left: {
        addon: 'textarea-addon-left',
      },
    },
    'icon-left': {
      true: {
        textarea: 'textarea-icon-left',
      },
    },
    'icon-right': {
      true: {
        textarea: 'textarea-icon-right pr-14',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
}) as any;

export class TextArea extends Nullstack {
  render({ name, error, styles, disabled, readonly, rows = 4, ...props }: any) {
    const { wrapper, textarea, addon } = ui();
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
          <textarea
            id={name}
            name={name}
            rows={rows}
            disabled={isDisabled}
            readonly={readonly}
            class={textarea({
              className: styles?.textarea,
              error: !!error,
              disabled: isDisabled,
              readonly: readonly,
              'icon-left': !!props['icon-left'],
              'icon-right': !!props['icon-right'],
            })}
            {...props}
          />
        </div>
      </>
    );
  }
}
