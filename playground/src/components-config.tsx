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
  variants: Record<string, ComponentVariant>;
}

// Configuração dos componentes do playground
export const componentsConfig: Record<string, ComponentConfig> = {
  button: {
    name: 'Button',
    description: 'Botões com diferentes variações',
    icon: '🎯',
    component: (props) => <Button {...props}>Teste</Button>,
    variants: {
      default: {
        name: 'Default',
        props: { children: 'Botão Padrão' },
      },
      primary: {
        name: 'Primary',
        props: {
          children: 'Botão Primary',
          variant: 'primary',
        },
      },
      secondary: {
        name: 'Secondary',
        props: {
          children: 'Botão Secondary',
          variant: 'secondary',
        },
      },
    },
  },
  input: {
    name: 'Input',
    description: 'Campos de entrada',
    icon: '📝',
    component: 'input',
    variants: {
      default: {
        name: 'Default',
        props: {
          type: 'text',
          placeholder: 'Digite algo...',
        },
      },
      email: {
        name: 'Email',
        props: {
          type: 'email',
          placeholder: 'seu@email.com',
        },
      },
    },
  },
};
