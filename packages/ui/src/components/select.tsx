/* eslint-disable @typescript-eslint/ban-ts-comment */
import { tv } from '@icw/utils';
import Nullstack from 'nullstack';

const ui = tv({
  slots: {
    wrapper: 'select-wrapper',
    select: 'select',
    addon: 'select-addon',
  },
  variants: {
    error: {
      true: {
        select: 'select-error',
      },
    },
    disabled: {
      true: {
        select: 'select-disabled',
      },
    },
    readonly: {
      true: {
        select: 'select-readonly',
      },
    },
    position: {
      right: {
        addon: 'select-addon-right',
      },
      left: {
        addon: 'select-addon-left',
      },
    },
    'icon-left': {
      true: {
        select: 'select-icon-left',
      },
    },
    'icon-right': {
      true: {
        select: 'select-icon-right',
      },
    },
  },
}) as any;

export class Select extends Nullstack {
  render({ name, styles, error, disabled, readonly, children, ...props }: any) {
    const { wrapper, select, addon } = ui();
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
          <select
            id={name}
            name={name}
            disabled={isDisabled}
            readonly={readonly}
            class={select({
              className: styles?.select,
              error: !!error?.[name],
              disabled: isDisabled,
              readonly,
              'icon-left': !!props['icon-left'],
              'icon-right': !!props['icon-right'],
            })}
            {...props}
          >
            {children}
          </select>
        </div>
      </>
    );
  }
}
