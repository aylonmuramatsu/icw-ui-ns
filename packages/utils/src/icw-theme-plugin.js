const { defaultThemes, typography } = require('./themes.js');

/**
 * Plugin do Tailwind CSS para aplicar temas DaisyUI-style
 * Similar ao sistema do DaisyUI mas adaptado para o projeto ICW
 */
function createThemePlugin({ addBase, addUtilities, config }) {
  // Configurações do plugin
  const pluginConfig = config('icw-theme') || {};
  const selectedThemes = pluginConfig.themes || Object.keys(defaultThemes);
  const defaultTheme = pluginConfig.defaultTheme || 'light';
  const customThemes = pluginConfig.customThemes || {};
  
  const allThemes = { ...defaultThemes, ...customThemes };
  
  // Gerar CSS base para cada tema
  const themeStyles = {};
  
  selectedThemes.forEach((themeName) => {
    const theme = allThemes[themeName];
    if (!theme) {
      console.warn(`Tema "${themeName}" não encontrado nos temas padrão nem customizados`);
      return;
    }

    // CSS para o tema padrão (aplicado no :root)
    if (themeName === defaultTheme) {
      themeStyles[':root'] = {
        ...generateCSSVariables(theme),
      };
    }

    // CSS para tema específico (aplicado via data-theme)
    themeStyles[`[data-theme="${themeName}"]`] = {
      ...generateCSSVariables(theme),
    };
  });

  // Aplicar estilos base
  addBase(themeStyles);

  // Adicionar utilities para cores semânticas
  addUtilities({
    '.theme-primary': {
      'background-color': 'var(--color-primary)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-primary)',
    },
    '.theme-secondary': {
      'background-color': 'var(--color-secondary)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-secondary)',
    },
    '.theme-accent': {
      'background-color': 'var(--color-accent)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-accent)',
    },
    '.theme-neutral': {
      'background-color': 'var(--color-neutral)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-neutral)',
    },
    '.theme-base-100': {
      'background-color': 'var(--color-base-100)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-base-100)',
    },
    '.theme-base-200': {
      'background-color': 'var(--color-base-200)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-base-200)',
    },
    '.theme-base-300': {
      'background-color': 'var(--color-base-300)',
      'color': 'var(--color-base-content)',
      'border-color': 'var(--color-base-300)',
    },
    '.theme-info': {
      'background-color': 'var(--color-info)',
      'color': 'white',
      'border-color': 'var(--color-info)',
    },
    '.theme-success': {
      'background-color': 'var(--color-success)',
      'color': 'white',
      'border-color': 'var(--color-success)',
    },
    '.theme-warning': {
      'background-color': 'var(--color-warning)',
      'color': 'white',
      'border-color': 'var(--color-warning)',
    },
    '.theme-error': {
      'background-color': 'var(--color-error)',
      'color': 'white',
      'border-color': 'var(--color-error)',
    },
  });

  // Adicionar utilities para tipografia
  addUtilities(generateTypographyUtilities());
}

/**
 * Gera CSS custom properties a partir de um tema
 */
function generateCSSVariables(theme) {
  const variables = {};
  
  // Cores principais
  Object.entries(theme.colors).forEach(([key, value]) => {
    variables[`--color-${key}`] = value;
  });
  
  // Extras
  if (theme.extras) {
    Object.entries(theme.extras).forEach(([key, value]) => {
      variables[`--color-${key}`] = value;
    });
  }
  
  return variables;
}

/**
 * Gera utilities de tipografia personalizadas
 */
function generateTypographyUtilities() {
  const utilities = {};

  Object.entries(typography).forEach(([name, styles]) => {
    utilities[`.${name}`] = {
      'font-size': styles.fontSize,
      'line-height': styles.lineHeight,
      'font-weight': styles.fontWeight,
      ...(styles.letterSpacing && { 'letter-spacing': styles.letterSpacing }),
      ...(styles.textTransform && { 'text-transform': styles.textTransform }),
    };
  });

  return utilities;
}

/**
 * Plugin principal para ser usado no tailwind.config.js
 */
function icwThemePlugin(options = {}) {
  return function({ addBase, addUtilities, config, theme, addComponents }) {
    const mergedConfig = {
      themes: Object.keys(defaultThemes),
      defaultTheme: 'light',
      ...options,
    };
    
    const themeColors = getThemeColors();
    console.log(getThemeColors())
    
    // Simular config para o plugin
    const mockConfig = (key) => {
      if (key === 'icw-theme') {
        return mergedConfig;
      }
      return config(key);
    };
    
    createThemePlugin({ addBase, addUtilities, config: mockConfig });
    
    const colorUtilities = {};

    // Gera .border-{color} para todas as cores do tema, inclusive info, success, warning, error, etc
    Object.entries(themeColors).forEach(([colorName, colorValue]) => {
      // Background colors
      colorUtilities[`.bg-${colorName}`] = { 
        'background-color': colorValue 
      };
      
      // Text colors
      colorUtilities[`.text-${colorName}`] = { 
        'color': colorValue 
      };
      
      // Border colors
      colorUtilities[`.border-${colorName}`] = { 
        'border-color': colorValue 
      };

      // Helpers para border individual (top, right, bottom, left)
      colorUtilities[`.border-t-${colorName}`] = {
        'border-top-color': colorValue
      };
      colorUtilities[`.border-r-${colorName}`] = {
        'border-right-color': colorValue
      };
      colorUtilities[`.border-b-${colorName}`] = {
        'border-bottom-color': colorValue
      };
      colorUtilities[`.border-l-${colorName}`] = {
        'border-left-color': colorValue
      };

      // Adiciona helpers para border-x e border-y
      colorUtilities[`.border-x-${colorName}`] = {
        'border-left-color': colorValue,
        'border-right-color': colorValue
      };
      colorUtilities[`.border-y-${colorName}`] = {
        'border-top-color': colorValue,
        'border-bottom-color': colorValue
      };

      // Ring colors
      colorUtilities[`.ring-${colorName}`] = { 
        '--tw-ring-color': colorValue 
      };
      
      // Decoration colors
      colorUtilities[`.decoration-${colorName}`] = { 
        'text-decoration-color': colorValue 
      };
      
      // Outline colors
      colorUtilities[`.outline-${colorName}`] = { 
        'outline-color': colorValue 
      };
      
      // Divide colors
      colorUtilities[`.divide-${colorName} > :not([hidden]) ~ :not([hidden])`] = { 
        'border-color': colorValue 
      };
      
      // Placeholder colors
      colorUtilities[`.placeholder-${colorName}::placeholder`] = { 
        'color': colorValue 
      };
      
      // Caret colors
      colorUtilities[`.caret-${colorName}`] = { 
        'caret-color': colorValue 
      };
      
      // Accent colors
      colorUtilities[`.accent-${colorName}`] = { 
        'accent-color': colorValue 
      };
    });
    
    // Adicionar todas as utilities de cores
    addUtilities(colorUtilities);
  };
}

// Exportar temas e cores para uso no tailwind.config.js
function getThemeColors() {
  const colors = {};
  
  // Cores básicas usando CSS variables
  const baseColors = [
    'primary', 'secondary', 'accent', 'neutral',
    'base-100', 'base-200', 'base-300', 'base-content',
    'info', 'success', 'warning', 'error',
    'default', 'muted', 'disabled', 'overlay'
  ];
  
  baseColors.forEach(color => {
    colors[color] = `var(--color-${color})`;
  });
  
  // Cores extras
  const extraColors = ['background', 'surface', 'border', 'input-text'];
  extraColors.forEach(color => {
    colors[color] = `var(--color-${color})`;
  });
  
  return colors;
}

module.exports = {
  icwThemePlugin,
  getThemeColors,
  themes: defaultThemes,
};
