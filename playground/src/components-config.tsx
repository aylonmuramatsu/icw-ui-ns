import { Alert, Button, ButtonGroup, Input, LucideIcons } from '@icw/ui';

import { NullstackNode } from 'nullstack';

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
  // input: {
  //   name: 'Input',
  //   description: 'Campos de entrada',
  //   icon: '📝',
  //   component: 'input',
  //   variants: {
  //     default: {
  //       name: 'Default',
  //       props: {
  //         type: 'text',
  //         placeholder: 'Digite algo...',
  //       },
  //     },
  //     email: {
  //       name: 'Email',
  //       props: {
  //         type: 'email',
  //         placeholder: 'seu@email.com',
  //       },
  //     },
  //   },
  // },
};
