/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { tv } from '@insightcreativewebs/utils';
import Nullstack, { NullstackNode } from 'nullstack';

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

export class DurationInput extends Nullstack {
  ref = null;
  maxHours = 999;
  maxMinutes = 59;

  initiate({ bind, maxHours = 999, maxMinutes = 59 }: any) {
    this.maxHours = maxHours;
    this.maxMinutes = maxMinutes;

    // Inicializa com a máscara vazia se não houver valor
    if (bind && !bind.object[bind.property]) {
      const hourLength = this.maxHours.toString().length;
      const minuteLength = this.maxMinutes.toString().length;
      bind.object[bind.property] =
        `${'-'.repeat(hourLength)}:${'-'.repeat(minuteLength)}`;
    }
  }

  onChange({ event: e }: any) {
    const value = e.target.value;
    const hourLength = this.maxHours.toString().length;
    const minuteLength = this.maxMinutes.toString().length;

    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Se não há números, retorna a máscara vazia
    if (numbers.length === 0) {
      return `${'-'.repeat(hourLength)}:${'-'.repeat(minuteLength)}`;
    }

    // Preenche com hífens à direita até completar o tamanho da máscara
    const paddedNumbers = numbers.padEnd(hourLength + minuteLength, '-');

    // Separa horas e minutos
    const hours = paddedNumbers.substring(0, hourLength);
    const minutes = paddedNumbers.substring(
      hourLength,
      hourLength + minuteLength
    );

    // Formata o resultado
    const formatted = `${hours}:${minutes}`;

    return formatted;
  }

  onKeyDown({ event: e }: any) {
    if (!e) {
      return;
    }

    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End',
    ];

    // Permite Ctrl/Cmd + C/V/X/A
    if (
      (e.ctrlKey || e.metaKey) &&
      ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())
    ) {
      return;
    }

    const hourLength = this.maxHours.toString().length;
    const minuteLength = this.maxMinutes.toString().length;
    const maxLength = hourLength + minuteLength;

    // Remove tudo que não é número do valor atual
    const currentNumbers = e.target.value.replace(/\D/g, '');

    // Se está digitando um número
    if (/^\d$/.test(e.key)) {
      // Se já atingiu o tamanho máximo, não permite mais digitar
      if (currentNumbers.length >= maxLength) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      // Encontra a posição do cursor em relação aos números (ignorando ':')
      const cursorPos = e.target.selectionStart;
      let numberPosition = 0;

      // Calcula a posição do cursor nos números (ignorando os ':')
      for (let i = 0; i < cursorPos && i < e.target.value.length; i++) {
        if (e.target.value[i] !== ':' && e.target.value[i] !== '-') {
          numberPosition++;
        }
      }

      // Insere o novo dígito na posição do cursor
      const newNumbers =
        currentNumbers.slice(0, numberPosition) +
        e.key +
        currentNumbers.slice(numberPosition);

      // Reformata com os novos números
      const paddedNumbers = newNumbers.padEnd(hourLength + minuteLength, '-');
      const hours = paddedNumbers.substring(0, hourLength);
      const minutes = paddedNumbers.substring(
        hourLength,
        hourLength + minuteLength
      );
      e.target.value = `${hours}:${minutes}`;

      // Mantém o cursor na posição após a inserção
      const newCursorPosition = Math.min(numberPosition + 1, newNumbers.length);
      let visualPosition = 0;
      let numberCount = 0;

      // Calcula a posição visual considerando o ':'
      for (let i = 0; i < e.target.value.length; i++) {
        if (e.target.value[i] !== ':' && e.target.value[i] !== '-') {
          numberCount++;
        }
        if (numberCount >= newCursorPosition) {
          visualPosition = i + 1;
          break;
        }
        if (e.target.value[i] === ':') {
          visualPosition = i + 1;
        } else {
          visualPosition = i + 1;
        }
      }

      setTimeout(() => {
        e.target.setSelectionRange(visualPosition, visualPosition);
      }, 0);

      // Dispara o evento de input para atualizar o bind
      const inputEvent = new Event('input', { bubbles: true });
      e.target.dispatchEvent(inputEvent);
    }

    // Se está tentando apagar
    if (e.key === 'Backspace' || e.key === 'Delete') {
      // Se não há números digitados, não permite apagar
      if (currentNumbers.length === 0) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      // Encontra a posição do cursor em relação aos números
      const cursorPos = e.target.selectionStart;
      let numberPosition = 0;

      // Calcula a posição do cursor nos números (ignorando os ':' e '-')
      for (let i = 0; i < cursorPos && i < e.target.value.length; i++) {
        if (e.target.value[i] !== ':' && e.target.value[i] !== '-') {
          numberPosition++;
        }
      }

      // Remove o número na posição do cursor (ou anterior se Backspace)
      let newNumbers;
      if (e.key === 'Backspace') {
        // Remove o número anterior ao cursor
        if (numberPosition > 0) {
          newNumbers =
            currentNumbers.slice(0, numberPosition - 1) +
            currentNumbers.slice(numberPosition);
        } else {
          newNumbers = currentNumbers;
        }
      } else {
        // Delete
        // Remove o número na posição do cursor
        if (numberPosition < currentNumbers.length) {
          newNumbers =
            currentNumbers.slice(0, numberPosition) +
            currentNumbers.slice(numberPosition + 1);
        } else {
          newNumbers = currentNumbers;
        }
      }

      // Reformata com os números restantes
      if (newNumbers.length === 0) {
        e.target.value = `${'-'.repeat(hourLength)}:${'-'.repeat(minuteLength)}`;
      } else {
        const paddedNumbers = newNumbers.padEnd(hourLength + minuteLength, '-');
        const hours = paddedNumbers.substring(0, hourLength);
        const minutes = paddedNumbers.substring(
          hourLength,
          hourLength + minuteLength
        );
        e.target.value = `${hours}:${minutes}`;
      }

      // Mantém o cursor na posição correta após apagar
      let newCursorPosition;
      if (e.key === 'Backspace') {
        // Para Backspace, cursor fica onde estava o número removido
        newCursorPosition = Math.max(0, numberPosition - 1);
      } else {
        // Para Delete, cursor fica na mesma posição
        newCursorPosition = Math.min(numberPosition, newNumbers.length);
      }

      // Calcula a posição visual considerando os números restantes
      let visualPosition = 0;
      let numberCount = 0;

      for (let i = 0; i < e.target.value.length; i++) {
        if (e.target.value[i] !== ':' && e.target.value[i] !== '-') {
          if (numberCount === newCursorPosition) {
            visualPosition = i;
            break;
          }
          numberCount++;
        }
        if (
          numberCount === newCursorPosition &&
          (e.target.value[i] === ':' || e.target.value[i] === '-')
        ) {
          visualPosition = i;
          break;
        }
      }

      // Se chegou ao final sem encontrar a posição, coloca no final
      if (newCursorPosition >= newNumbers.length) {
        visualPosition = e.target.value.length;
      }

      setTimeout(() => {
        e.target.setSelectionRange(visualPosition, visualPosition);
      }, 0);

      // Dispara o evento de input para atualizar o bind
      const inputEvent = new Event('input', { bubbles: true });
      e.target.dispatchEvent(inputEvent);
    }

    // Só permite números e as teclas permitidas
    if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
      return;
    }
  }

  onClick({ event: e }: any) {
    if (!e || !e.currentTarget) {
      return;
    }

    // Remove tudo que não é número do valor atual
    const currentNumbers = e.currentTarget.value.replace(/\D/g, '');

    // Se não há números digitados, posiciona cursor no início
    if (currentNumbers.length === 0) {
      e.currentTarget.setSelectionRange(0, e.currentTarget.length);
    }
    // Se há números, permite navegação livre do cursor
  }

  render({
    class: className,
    bind,
    name,
    styles,
    error,
    disabled,
    readonly,
    oninput,
    ...props
  }: any): NullstackNode {
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
          ref={this.ref}
          type="text"
          autocomplete="off"
          disabled={isDisabled}
          readonly={readonly}
          maxlength={7}
          class={input({
            className: styles?.input,
            error: !!error,
            disabled: isDisabled,
            readonly,
            'icon-left': !!props['icon-left'],
            'icon-right': !!props['icon-right'],
          })}
          name={name}
          {...props}
          onkeydown={({ event }) => this.onKeyDown({ event })}
          onclick={({ event }) => this.onClick({ event })}
          oninput={({ event }) => {
            if (bind) bind.object[bind.property] = this.onChange({ event });
            oninput && oninput();
          }}
          default
        />
      </div>
    );
  }
}
