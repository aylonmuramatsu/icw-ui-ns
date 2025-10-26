import {
  Alert,
  Button,
  ButtonGroup,
  CurrencyInput,
  DurationInput,
  Input,
  InputMask,
  LucideIcons,
  Modal,
  overlay,
  OverlayManager,
  PercentageInput,
  Select,
  Switch,
  Table,
  TextArea,
} from '@insightcreativewebs/ui';
import { useRegisterOverlay } from '@insightcreativewebs/utils';

import Nullstack, { BaseNullstackClientContext, NullstackNode } from 'nullstack';

class ModalGenerico extends Nullstack {

  render({ overlay: { visible, key } }: any) {
    return (
      <Modal visible={visible}>
        <Modal.Dialog>
          <Modal.Header>Titulo</Modal.Header>
          <Modal.Body>Corpo</Modal.Body>
          <Modal.Footer>
            <div class="flex flex-1 w-full justify-end">
              <Button
                onclick={() => {
                  overlay.close(key)
                }}
              >
                Fechar
              </Button>

            </div>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }

}

export interface ComponentVariant {
  name: string;
  props: Record<string, any>;
}

// A tipagem correta para o campo "component" deve aceitar tanto um componente Nullstack (classe ou função) quanto uma string (para elementos nativos).
export interface ComponentConfig {
  name: string;
  description: string;
  icon: string;
  component: ((props: any) => NullstackNode) | string;
  configs: Record<string, string[]>;
}

// Configuração dos componentes do playground
export const componentsConfig: Record<string, ComponentConfig> = {
  button: {
    name: 'Button',
    description: 'Botões com diferentes variações, cores, tamanhos e estados',
    icon: '🎯',
    component: (props) => <Button {...props}>Button</Button>,
    configs: {
      variant: ['solid', 'outline', 'ghost'],
      color: ['primary', 'secondary', 'danger', 'success', 'info', 'warning'],
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
    },
  },
  button_group: {
    name: 'Button Group',
    description: 'Agrupador de botoes',
    icon: '🎯',
    component: (props) => (
      <ButtonGroup {...props}>
        <Button color="primary">Botao 1</Button>
        <Button color="secondary">Botao 2</Button>
      </ButtonGroup>
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
    },
  },
  alert: {
    name: 'Alert',
    description: 'Mensagem de alerta',
    icon: '🎯',
    component: (props) => <Alert {...props} message="Falha para identificar" />,
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      color: ['primary', 'secondary', 'danger', 'success', 'info', 'warning'],
    },
  },
  input: {
    name: 'Input',
    description: 'Input de texto',
    icon: '🎯',
    component: (props) => (
      <Input
        {...props}
        icon-left={<LucideIcons.User class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
    },
  },
  currency_input: {
    name: 'CurrencyInput',
    description: 'Input Monetários',
    icon: '🎯',
    component: (props) => (
      <CurrencyInput
        {...props}
        icon-left={<LucideIcons.User class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  percentage_input: {
    name: 'PercentageInput',
    description: 'Input Monetários',
    icon: '🎯',
    component: (props) => (
      <PercentageInput
        {...props}
        configs={{
          maxValue: 50,
        }}
        icon-left={<LucideIcons.User class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  duration_input: {
    name: 'DurationInput',
    description: 'Input Tempo no padrao HHH:MM',
    icon: '🎯',
    component: (props) => (
      <DurationInput
        {...props}
        icon-left={<LucideIcons.User class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  input_mask: {
    name: 'InputMask',
    description: 'Input de mascara utilizando remask',
    icon: '🎯',
    component: (props) => (
      <InputMask
        {...props}
        mask="99999-999"
        icon-left={<LucideIcons.MapPin class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  textarea: {
    name: 'TextArea',
    description: 'TextArea para descrições',
    icon: '🎯',
    component: (props) => (
      <TextArea
        {...props}
        mask="99999-999"
        icon-left={<LucideIcons.MapPin class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ArrowRight class="text-red-500 size-4" />}
      />
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  switch: {
    name: 'Switch',
    description: 'Switch para descrições',
    icon: '🎯',
    component: (props) => <Switch {...props} label="Switch Label" />,
    configs: {
      size: ['sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      color: ['primary', 'secondary', 'danger', 'success', 'info', 'warning'],
    },
  },
  select: {
    name: 'Select',
    description: 'Select',
    icon: '🎯',
    component: (props) => (
      <Select
        {...props}
        value="1"
        icon-left={<LucideIcons.MapPin class="text-red-500 size-4" />}
        icon-right={<LucideIcons.ChevronDown class="text-red-500 size-4" />}
      >
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
        <option value="4">Item 4</option>
      </Select>
    ),
    configs: {
      size: ['xs', 'sm', 'md', 'lg'],
      disabled: ['false', 'true'],
      error: ['false', 'true'],
    },
  },
  table: {
    name: 'Table',
    description: 'Table',
    icon: '🎯',
    component: (props) => {
      // Função simples para mascarar telefone (mock)
      function mask(value: string, masks: string[]) {
        // Apenas retorna o valor para exibição no playground
        return value;
      }

      // Definição das colunas
      const columns = {
        id: {
          label: '#'
        },
        name: {
          label: 'Nome',
          sort: true
        },
        phone: {
          label: 'Telefone',
          content: (value: string, row: any) => {
            return <span>{mask(value, ['(99) 9 9999-9999', '(99) 9999-9999'])}</span>
          }
        }
      };

      // Geração de dados mockados baseado nas colunas
      const data = [
        { id: 1, name: 'João Silva', phone: '11987654321' },
        { id: 2, name: 'Maria Souza', phone: '11912345678' },
        { id: 3, name: 'Carlos Lima', phone: '1134567890' },
      ];

      return <Table {...props} data={data} columns={columns} />;
    },
    configs: {
      compact: ['false', 'true'],
      data: [],

    },
  },
  overlay: {
    name: 'Overlay',
    description: '',
    icon: '🎯',
    component: (props) => {


      // const component = new Component();

      // useRegisterOverlay('@modal/common', ModalGenerico)

      return <OverlayShowCase />
    },
    configs: {
      compact: ['false', 'true'],
      data: [],

    },
  },
};

class OverlayShowCase extends Nullstack {
  modal: any = null
  hydrate(context: BaseNullstackClientContext<unknown>) {
    this.modal = useRegisterOverlay('@modal/common', ModalGenerico)
  }
  terminate(context: BaseNullstackClientContext<unknown>) {
    this.modal.unregister();
  }
  render(context: BaseNullstackClientContext<unknown>): NullstackNode {

    return (
      <div>
        <OverlayManager />
        <Button onclick={() => overlay.show('@modal/common')} >Abrir Modal</Button>
      </div>
    )
  }
}