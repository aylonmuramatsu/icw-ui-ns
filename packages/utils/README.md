# Sistema de Tema Automático

Este sistema permite que você use cores do tema automaticamente no Tailwind CSS, sem precisar configurar manualmente as cores no `tailwind.config.js`.

## 🚀 Como Usar

### 1. Configuração Básica (Recomendada)

**tailwind.config.js:**
```javascript
const { defaultTheme } = require('@icw/utils');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Cores que funcionam automaticamente com fallback
      colors: {
        primary: 'var(--color-primary, #270722)',
        secondary: 'var(--color-secondary, #ECCE8E)',
        muted: 'var(--color-muted, #F3F4F6)',
        accent: 'var(--color-accent, #A259F7)',
        success: 'var(--color-success, #22C55E)',
        warning: 'var(--color-warning, #FACC15)',
        error: 'var(--color-error, #EF4444)',
        info: 'var(--color-info, #3B82F6)',
        disabled: 'var(--color-disabled, #D1D5DB)',
        overlay: 'var(--color-overlay, rgba(0,0,0,0.5))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

**Application.tsx:**
```tsx
import { ThemeProvider } from '@icw/ui';

function App() {
  return (
    <ThemeProvider>
      {/* Seu app aqui - cores padrão aplicadas automaticamente */}
    </ThemeProvider>
  );
}
```

### 2. Com Tema Personalizado

**Application.tsx:**
```tsx
import { ThemeProvider } from '@icw/ui';

function App() {
  const customTheme = {
    colors: {
      primary: '#FF6B6B',    // Vermelho coral
      secondary: '#4ECDC4',  // Turquesa
      accent: '#45B7D1',     // Azul claro
      success: '#96CEB4',    // Verde suave
      warning: '#FFEAA7',    // Amarelo suave
      error: '#DDA0DD',      // Lavanda
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      {/* Seu app aqui - cores personalizadas aplicadas automaticamente */}
    </ThemeProvider>
  );
}
```

### 3. Uso nos Componentes

```tsx
function MyComponent() {
  return (
    <div>
      {/* Cores funcionam automaticamente */}
      <button class="bg-primary text-white px-4 py-2 rounded">
        Botão Primary
      </button>
      
      <div class="bg-secondary text-gray-900 p-4 rounded">
        Card Secondary
      </div>
      
      <p class="text-success">Texto de sucesso</p>
      <p class="text-error">Texto de erro</p>
    </div>
  );
}
```

## 🎨 Cores Disponíveis

O sistema suporta todas as cores do tema padrão:

- `primary` - Cor primária
- `secondary` - Cor secundária
- `muted` - Cor neutra
- `accent` - Cor de destaque
- `success` - Cor de sucesso
- `warning` - Cor de aviso
- `error` - Cor de erro
- `info` - Cor informativa
- `disabled` - Cor desabilitada
- `overlay` - Cor de overlay

## 🎯 Exemplos de Uso

### Exemplo 1: Tema Padrão
```tsx
<ThemeProvider />
```

### Exemplo 2: Tema Personalizado
```tsx
<ThemeProvider theme={{
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  }
}} />
```

### Exemplo 3: Apenas algumas cores
```tsx
<ThemeProvider theme={{
  colors: {
    primary: '#FF6B6B', // Só sobrescreve a cor primária
  }
}} />
```

## 🎉 Benefícios

1. **Zero configuração manual** - Não precisa configurar cores no Tailwind
2. **Funciona automaticamente** - Cores padrão já estão configuradas
3. **Tema dinâmico** - Cores são aplicadas em tempo real
4. **Flexibilidade** - Pode personalizar apenas as cores que quiser
5. **Simplicidade** - Configuração básica é muito simples

## 🔄 Como Funciona

1. **Cores padrão** - O Tailwind já vem com as cores configuradas com fallback
2. **ThemeProvider** - Aplica as cores via CSS custom properties
3. **Sobrescrita** - Se você passar um tema, ele sobrescreve as cores padrão
4. **Tempo real** - Mudanças são aplicadas instantaneamente

## 📁 Estrutura

```
packages/utils/src/
├── theme.ts                    # Tema padrão
├── tailwind-theme-plugin.ts    # Plugin do Tailwind
├── tailwind-config.ts         # Helpers de configuração
└── theme-provider.ts          # Lógica do provider
```

## 🚀 Configuração Rápida

1. **Copie o template** do `tailwind.config.js` acima
2. **Use o ThemeProvider** no seu app
3. **Pronto!** As cores funcionam automaticamente

Não é necessário configurar nada mais! 🎉
