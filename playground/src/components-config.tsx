import { Button } from '@icw/ui';
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
