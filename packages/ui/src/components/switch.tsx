import { tv } from '@insightcreativewebs/utils';
import Nullstack, { NullstackClientContext } from 'nullstack';

const ui = tv({
  slots: {
    wrapper: 'switch-wrapper',
    switch: 'switch',
    thumb: 'switch-thumb',
    input: 'switch-input',
    label: 'switch-label',
  },
  variants: {
    size: {
      sm: {
        switch: 'switch-sm',
      },
      md: {
        switch: 'switch-md',
      },
      lg: {
        switch: 'switch-lg',
      },
    },
    checked: {
      true: {
        switch: 'switch-checked',
      },
    },
    disabled: {
      true: {
        switch: 'switch-disabled',
        label: 'switch-label-disabled',
      },
    },
    color: {
      primary: {
        switch: 'switch-primary',
      },
      secondary: {
        switch: 'switch-secondary',
      },
      danger: {
        switch: 'switch-danger',
      },
      success: {
        switch: 'switch-success',
      },
      info: {
        switch: 'switch-info',
      },
      warning: {
        switch: 'switch-warning',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
}) as any;

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  name?: string;
  id?: string;
  class?: string;
  onchange?: (checked: boolean) => void;
}

export class Switch extends Nullstack<SwitchProps> {
  checked = false;

  handleToggle({ disabled, onchange, bind }: any & SwitchProps) {
    if (disabled) return;

    this.checked = !this.checked;
    if (bind) bind.object[bind.property] = this.checked;
    // Chama callback se fornecido
    if (onchange) {
      onchange(this.checked);
    }
  }

  handleKeyDown({ disabled, event }: any & SwitchProps) {
    if (disabled) return;

    // Space ou Enter togglea o switch
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      this.handleToggle({ disabled });
    }
  }

  hydrate(context: NullstackClientContext<SwitchProps>) {
    if (context.checked) {
      this.checked = context.checked;
    }
  }

  render({
    disabled = false,
    size = 'md',
    label,
    id,
    class: className,
    bind,
    color,
    ...props
  }: SwitchProps & any) {
    if (bind) {
      this.checked = bind.object[bind.property];
    }

    const slots = ui();

    return (
      <div class={slots.wrapper({ className: className })}>
        <button
          type="button"
          disabled={disabled}
          class={slots.switch({ size, checked: this.checked, disabled, color })}
          onclick={this.handleToggle}
          onkeydown={this.handleKeyDown}
        >
          <span class={slots.thumb()} />
        </button>

        {/* Input hidden para forms */}
        <input
          type="checkbox"
          name={id}
          id={id}
          disabled={disabled}
          class={slots.input()}
          tabindex={-1}
          {...props}
        />

        {label && (
          <label for={id} id={`${id}-label`} class={slots.label({ disabled })}>
            {label}
          </label>
        )}
      </div>
    );
  }
}
