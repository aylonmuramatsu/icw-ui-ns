# 🎨 Sistema de Temas Baseado no DaisyUI (Nullstack Native)

Este sistema fornece 32+ temas pré-definidos inspirados no DaisyUI, com aplicação em tempo real, persistência automática e **100% compatível com Nullstack** (sem dependências externas como Zustand).

## 🚀 Características

- ✅ **32+ Temas Pré-definidos** - Todos os temas populares do DaisyUI
- ✅ **Aplicação Instantânea** - CSS custom properties, sem rebuild
- ✅ **Persistência Automática** - Salva tema no localStorage
- ✅ **Plugin Tailwind** - Similar ao DaisyUI, aplicação automática
- ✅ **Nullstack Native** - Sem dependências externas (Zustand, React, etc.)
- ✅ **Totalmente Acessível** - Suporte completo para screen readers
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **TypeScript** - Tipagem completa e autocompletar

## 📦 Instalação e Configuração

### 1. Configuração do Tailwind

No seu `tailwind.config.js`:

```javascript
const { defaultTheme } = require('@icw/utils');
const { icwThemePlugin, getThemeColors } = require('@icw/utils/src/tailwindThemePlugin');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,njs,nts}"],
  theme: {
    extend: {
      colors: {
        // Cores do sistema de temas (todas automáticas)
        ...getThemeColors(),
      },
    },
  },
  plugins: [
    // Plugin do sistema de temas (similar ao DaisyUI)
    icwThemePlugin({
      themes: ['light', 'dark', 'cupcake', 'synthwave', 'dracula'], // ou todos
      defaultTheme: 'light',
    }),
  ],
};
```

### 2. Inicialização na Aplicação

```tsx
import { initializeTheme } from '@icw/utils';
import Nullstack from 'nullstack';

class Application extends Nullstack {
  hydrate() {
    // Inicializar tema quando a aplicação carrega
    initializeTheme();
  }

  render() {
    return (
      <div>
        {/* Sua aplicação aqui - as cores são aplicadas automaticamente */}
      </div>
    );
  }
}

export default Application;
```

## 🎯 Componentes Disponíveis

### Seletor Dropdown

```tsx
import { ThemeSelector } from '@icw/ui';

class MyComponent extends Nullstack {
  render() {
    return (
      <div>
        <h3>Escolha um tema:</h3>
        <ThemeSelector showPreview />
      </div>
    );
  }
}
```

### Seletor Compacto (para Headers)

```tsx
import { ThemeSelectorCompact } from '@icw/ui';

class Header extends Nullstack {
  render() {
    return (
      <header class="flex items-center justify-between p-4">
        <h1>Minha App</h1>
        <ThemeSelectorCompact className="w-48" />
      </header>
    );
  }
}
```

### Grid de Temas

```tsx
import { ThemeGrid } from '@icw/ui';

class ThemeSettings extends Nullstack {
  render() {
    return (
      <div>
        <h2>Galeria de Temas</h2>
        <ThemeGrid />
      </div>
    );
  }
}
```

## 🎛️ Controle Programático

### Gerenciador de Temas Nativo

```tsx
import { themeManager } from '@icw/utils';
import Nullstack from 'nullstack';

class MyComponent extends Nullstack {
  currentTheme = 'light';
  
  hydrate() {
    // Obter tema atual
    const state = themeManager.getState();
    this.currentTheme = state.currentTheme;
    
    // Inscrever-se para mudanças
    this.unsubscribe = themeManager.subscribe((state) => {
      this.currentTheme = state.currentTheme;
    });
  }

  terminate() {
    // Limpar inscrição
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  changeToNightTheme() {
    themeManager.setTheme('night');
  }

  render() {
    return (
      <div>
        <p>Tema atual: {this.currentTheme}</p>
        <button onclick={this.changeToNightTheme}>
          Mudar para Night
        </button>
      </div>
    );
  }
}
```

### Temas Disponíveis

```tsx
import { themeManager } from '@icw/utils';

class CustomThemeSelector extends Nullstack {
  themeOptions = [];
  
  prepare() {
    this.themeOptions = themeManager.getAvailableThemes();
  }

  render() {
    return (
      <select 
        onchange={(e) => themeManager.setTheme(e.target.value)}
      >
        {this.themeOptions.map(theme => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    );
  }
}
```

## 🎨 Usando as Cores do Tema

O plugin automaticamente gera as CSS variables e classes. Use normalmente:

```tsx
class MyComponent extends Nullstack {
  render() {
    return (
      <div>
        {/* Cores principais */}
        <button class="bg-primary text-base-content">
          Botão Primary
        </button>
        
        <div class="bg-secondary text-base-content">
          Card Secondary
        </div>
        
        {/* Estados */}
        <p class="text-success">Sucesso!</p>
        <p class="text-warning">Atenção!</p>
        <p class="text-error">Erro!</p>
        <p class="text-info">Informação</p>
        
        {/* Backgrounds */}
        <div class="bg-base-100 text-base-content">
          Background principal
        </div>
        
        <div class="bg-base-200 text-base-content">
          Background secundário
        </div>

        {/* Classes utilitárias do plugin */}
        <div class="theme-primary">Classe tema primary</div>
        <div class="theme-secondary">Classe tema secondary</div>
      </div>
    );
  }
}
```

## 🎯 Temas Disponíveis

### Temas Claros
- `light` - Tema claro padrão
- `cupcake` - Rosa suave e aconchegante
- `bumblebee` - Amarelo vibrante e energético
- `emerald` - Verde natural e fresco
- `corporate` - Profissional e moderno
- `garden` - Verde natural inspirado na natureza
- `pastel` - Cores pastéis suaves
- `fantasy` - Cores vibrantes e fantásticas
- `wireframe` - Minimalista em escala de cinza
- `cmyk` - Inspirado em cores de impressão
- `autumn` - Tons quentes de outono
- `business` - Tema empresarial conservador
- `acid` - Cores ácidas e vibrantes
- `lemonade` - Amarelo refrescante
- `winter` - Tons frios de inverno
- `sunset` - Cores quentes do pôr do sol

### Temas Escuros
- `dark` - Tema escuro padrão
- `synthwave` - Estética retrô dos anos 80
- `retro` - Vintage e nostálgico
- `cyberpunk` - Futurista e neon
- `valentine` - Romântico e suave
- `halloween` - Laranja e roxo assombrado
- `forest` - Verde escuro da floresta
- `aqua` - Azul oceânico profundo
- `lofi` - Minimalista e tranquilo
- `black` - Preto puro e elegante
- `luxury` - Luxuoso e sofisticado
- `dracula` - Baseado no tema Dracula
- `night` - Azul escuro noturno
- `coffee` - Tons marrons aconchegantes
- `dim` - Escuro com contraste suave
- `nord` - Baseado na paleta Nord

## 🔧 Customização

### Criando um Tema Personalizado

```javascript
// No tailwind.config.js
const customThemes = {
  'meu-tema': {
    name: 'Meu Tema',
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      neutral: '#2c3e50',
      'base-100': '#ffffff',
      'base-200': '#f8f9fa',
      'base-300': '#e9ecef',
      'base-content': '#212529',
      info: '#3498db',
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
    },
    extras: {
      background: '#ffffff',
      surface: '#ffffff',
      border: '#dee2e6',
      'input-text': '#495057',
    },
  },
};

module.exports = {
  plugins: [
    icwThemePlugin({
      themes: ['light', 'dark', 'meu-tema'], // Incluir tema personalizado
      defaultTheme: 'light',
      customThemes, // Passar temas personalizados
    }),
  ],
};
```

### Aplicando Tema Personalizado Dinamicamente

```tsx
import { themeManager } from '@icw/utils';

class MyComponent extends Nullstack {
  applyCustomTheme() {
    const customTheme = {
      name: 'Tema Dinâmico',
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        // ... outras cores
      },
      extras: {
        background: '#ffffff',
        // ... outros extras
      },
    };
    
    themeManager.applyCustomTheme(customTheme);
  }

  render() {
    return (
      <button onclick={this.applyCustomTheme}>
        Aplicar Tema Personalizado
      </button>
    );
  }
}
```

## 🎨 Variáveis CSS Geradas

O plugin gera automaticamente:

```css
:root {
  /* Cores principais */
  --color-primary: #570df8;
  --color-secondary: #f000b8;
  --color-accent: #37cdbe;
  --color-neutral: #3d4451;
  
  /* Backgrounds */
  --color-base-100: #ffffff;
  --color-base-200: #f2f2f2;
  --color-base-300: #e5e6e6;
  --color-base-content: #1f2937;
  
  /* Estados */
  --color-info: #3abff8;
  --color-success: #36d399;
  --color-warning: #fbbd23;
  --color-error: #f87272;
  
  /* Extras */
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-border: #e5e7eb;
  --color-input-text: #1f2937;
}

/* Tema específico */
[data-theme="dark"] {
  --color-primary: #661ae6;
  --color-base-100: #2a303c;
  /* ... outras cores do tema escuro */
}
```

## 📱 Props dos Componentes

### ThemeSelector

```tsx
interface ThemeSelectorProps {
  showPreview?: boolean;  // Mostrar preview das cores (padrão: true)
  compact?: boolean;      // Versão compacta (padrão: false)
  className?: string;     // Classes CSS adicionais
}
```

### ThemeGrid

```tsx
interface ThemeGridProps {
  className?: string;     // Classes CSS adicionais
}
```

## 🔄 Como Funciona

1. **Plugin Tailwind**: Gera CSS variables para todos os temas
2. **ThemeManager**: Gerencia estado nativo sem dependências
3. **Data-theme**: Aplica atributo `data-theme` no `<html>`
4. **CSS Variables**: Mudança instantânea via CSS custom properties
5. **Persistência**: localStorage automático

## 🎉 Vantagens sobre o Sistema Anterior

- ✅ **Sem Zustand**: Sistema nativo do Nullstack
- ✅ **Plugin Tailwind**: Como o DaisyUI oficial
- ✅ **Zero Config**: Funciona out-of-the-box
- ✅ **Mais Temas**: 32+ opções
- ✅ **Melhor Performance**: Menos JavaScript, mais CSS
- ✅ **Compatibilidade**: Classes DaisyUI funcionam

## 📚 Exemplos Avançados

### Detecção de Preferência do Sistema

```tsx
import { themeManager } from '@icw/utils';

class AutoTheme extends Nullstack {
  hydrate() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      themeManager.setTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    themeManager.setTheme(mediaQuery.matches ? 'dark' : 'light');
  }
}
```

### Sistema de Tema por Contexto

```tsx
class ContextualTheme extends Nullstack {
  userRole = 'guest';
  
  hydrate() {
    const contextThemes = {
      admin: 'dark',
      user: 'light', 
      guest: 'wireframe'
    };
    
    themeManager.setTheme(contextThemes[this.userRole]);
  }
}
```

## 🐛 Troubleshooting

### Tema não está sendo aplicado

1. Verifique se `initializeTheme()` foi chamado
2. Confirme que o plugin está no `tailwind.config.js`
3. Verifique se as classes CSS estão sendo geradas

### Plugin não funciona

1. Verifique o caminho do plugin no require
2. Confirme que os temas estão sendo passados corretamente
3. Teste com um tema simples primeiro

### Persistência não funciona

1. Verifique se o localStorage está disponível
2. Confirme que não há conflitos de chaves no storage
3. Teste em uma aba privada/incógnita

---

**Dica**: Explore a demo interativa em `/playground` para ver todos os recursos em ação!

**Diferença Principal**: Este sistema é **100% nativo do Nullstack** e usa um **plugin Tailwind real** como o DaisyUI, oferecendo melhor performance e compatibilidade.