# ICW UI Library

Bem-vindo ao **ICW UI Library**, uma biblioteca de componentes React/TypeScript pensada para acelerar o desenvolvimento de aplicações modernas, acessíveis e visualmente marcantes.

## 📦 Pacotes

Este monorepo contém dois pacotes principais:

- **`@insightcreativewebs/ui`** - Componentes de interface reutilizáveis
- **`@insightcreativewebs/utils`** - Utilitários para Tailwind CSS e temas

## ✨ Características

- **Composição**: componentes complexos são montados a partir dos básicos
- **Responsividade**: pronto para qualquer tela, sem esforço extra
- **Customização em tempo real**: temas dinâmicos via CSS custom properties
- **Integração total**: tokens e temas centralizados
- **Zero dependências externas de UI**: tudo feito sob medida
- **TypeScript**: tipagem completa para melhor DX

## 🚀 Instalação

### Instalar os pacotes

```bash
npm install @insightcreativewebs/ui @insightcreativewebs/utils
# ou
pnpm add @insightcreativewebs/ui @insightcreativewebs/utils
# ou
yarn add @insightcreativewebs/ui @insightcreativewebs/utils
```

### Configuração do Tailwind CSS

1. Importe o tema CSS no seu arquivo principal:

```css
@import "@insightcreativewebs/utils/theme.css";
```
## 📖 Uso

```tsx
import { Button, Input, Form } from '@insightcreativewebs/ui';
import '@insightcreativewebs/utils/theme.css';

function App() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control>
          <Input name="nome" placeholder="Digite seu nome" />
        </Form.Control>
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- pnpm 8+

### Scripts disponíveis

```bash
# Instalar dependências
pnpm install

# Iniciar o playground
pnpm start

# Executar testes
pnpm test

# Verificar tipos
pnpm type-check

# Build dos pacotes
pnpm build

# Lint
pnpm lint
```

## 📁 Estrutura do Projeto

```
monorepo/
├── packages/
│   ├── ui/           # @insightcreativewebs/ui - Componentes
│   └── utils/        # @insightcreativewebs/utils - Utilitários
├── playground/       # Aplicação de demonstração
└── package.json      # Configuração do workspace
```
