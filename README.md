# ICW UI Library

Bem-vindo ao **ICW UI Library**, uma biblioteca de componentes React/TypeScript pensada para acelerar o desenvolvimento de aplicações modernas, acessíveis e visualmente marcantes.

## 📦 Pacotes

Este monorepo contém dois pacotes principais:

- **`@icw/ui`** - Componentes de interface reutilizáveis
- **`@icw/utils`** - Utilitários para Tailwind CSS e temas

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
npm install @icw/ui @icw/utils
# ou
pnpm add @icw/ui @icw/utils
# ou
yarn add @icw/ui @icw/utils
```

### Configuração do Tailwind CSS

1. Importe o tema CSS no seu arquivo principal:

```css
@import "@icw/utils/theme.css";
```

2. Configure o Tailwind CSS para usar os utilitários:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@icw/ui/**/*.{js,ts,jsx,tsx}"
  ],
  // ... sua configuração
}
```

## 📖 Uso

```tsx
import { Button, Input, Form } from '@icw/ui';
import '@icw/utils/theme.css';

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
│   ├── ui/           # @icw/ui - Componentes
│   └── utils/        # @icw/utils - Utilitários
├── playground/       # Aplicação de demonstração
└── package.json      # Configuração do workspace
```
