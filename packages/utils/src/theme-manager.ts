//@ts-ignore
import * as themes from './themes';

export type ThemeName = keyof typeof themes.defaultTheme;
export type ThemeConfig = typeof themes[ThemeName];
// Nova interface para configuração expandida
interface ThemeManagerConfig {
  customThemes?: Record<string, any>;
  defaultTheme?: string;
  availableThemes?: string[];
}

class ThemeManager {
  private config: ThemeManagerConfig = {};
  
  // Getter para todos os temas (padrão + customizados)
  get allThemes() {
    return {
      ...themes.defaultThemes,
      ...(this.config.customThemes || {})
    };
  }
  
  private findTheme(themeName: string) {
    if (this.allThemes[themeName]) {
      return this.allThemes[themeName];
    }
    return null;
  }


  setTheme(themeName: string) {
    const theme = this.findTheme(themeName);
    if (!theme) {
      console.warn(`Tema "${themeName}" não encontrado`);
      return;
    }

    this.config.defaultTheme = themeName
    this.applyThemeToDOM(theme);
  }
  
  getAvailableThemes() {
    const allThemes = this.allThemes;
    
    return Object.entries(allThemes).map(([key, theme]: any) => ({
      value: key,
      label: theme.name,
      colors: theme.colors,
      isCustom: !themes.defaultThemes[key], // Flag para identificar temas customizados
    }));
  }
  
  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || this.config.defaultTheme || 'light';
  }

  private applyThemeToDOM(theme: ThemeConfig) {
    if (typeof document === 'undefined') {
      return;
    }
    
    const root = document.documentElement;
    // Aplicar cores principais
    Object.entries(theme.colors).forEach(([key, value]:any) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Aplicar extras
    if (theme.extras) {
      Object.entries(theme.extras).forEach(([key, value]:any) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
    // Aplicar atributo data-theme para compatibilidade com DaisyUI
    root.setAttribute('data-theme', theme);
  }
}

// Instância singleton
export const theme_manager = new ThemeManager();
