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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    //Adicione nosso plugin aqui
    icwThemePlugin({
      themes: ['icw-instabook', 'cupcake', 'dracula'],
      defaultTheme: 'icw-instabook',
      customThemes: customThemes
    }),
  ],
};
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


## 🎉 Benefícios

1. **Zero configuração manual** - Não precisa configurar cores no Tailwind
2. **Funciona automaticamente** - Cores padrão já estão configuradas
3. **Tema dinâmico** - Cores são aplicadas em tempo real
4. **Flexibilidade** - Pode personalizar apenas as cores que quiser
5. **Simplicidade** - Configuração básica é muito simples

## 🔄 Como Funciona

1. **Cores padrão** - O Tailwind já vem com as cores configuradas com fallback
3. **Sobrescrita** - Se você passar um tema, ele sobrescreve as cores padrão
4. **Tempo real** - Mudanças são aplicadas instantaneamente

## 📁 Estrutura

```
packages/utils/src/
├── theme.js                    # Temas padrão
├── icw-theme-plugin.ts         # Plugin do ICW Theme
```

## 🚀 Configuração Rápida

1. **Adicione nosso plugin** no `tailwind.config.js`
2. **Customize se quiser** informe o custom theme na lista de temas e no defaultTheme
3. **Pronto!** As cores funcionam automaticamente

Não é necessário configurar nada mais! 🎉
