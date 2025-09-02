const { icwThemePlugin } = require('@icw/utils');

// 🎨 Temas customizados definidos aqui
const customThemes = {
  "icw-instabook": {
    name: 'ICW Instabook',
    colors: { 
      // ✅ Cores principais
      default: '#323232',
      primary: '#FF6B35',      // 🎨 Laranja da marca
      secondary: '#004E89',    // 🔵 Azul corporativo
      accent: '#FFD23F',       // 🟡 Amarelo destaque
      neutral: '#3d4451',      // 🌫️ Cinza neutro
      
      // ✅ Superfícies (obrigatórias)
      'base-100': '#FFFFFF',   // Fundo principal
      'base-200': '#f2f2f2',   // Fundo cards
      'base-300': '#e5e6e6',   // Fundo modais
      'base-content': '#1A202C', // Texto principal
      
      // ✅ Estados (obrigatórias)
      info: '#3abff8',         // Azul informativo
      success: '#38A169',      // Verde sucesso
      warning: '#fbbd23',      // Amarelo aviso
      error: '#E53E3E',        // Vermelho erro
      
      // ✅ Extras
      default: '#6B7280',      // Cor padrão
      muted: '#F3F4F6',        // Cor suave
      disabled: '#D1D5DB',     // Cor desabilitada
      overlay: 'rgba(0,0,0,0.5)', // Overlay
    },
    extras: {
      background: '#FFFFFF',    // Fundo alternativo
      surface: '#FFFFFF',       // Superfície
      border: '#e5e7eb',        // Bordas
      'input-text': '#1A202C',  // Texto inputs
    }
  }
};

module.exports = {
  content: [
    "./src/**/*.njs",
    "./src/**/*.jsx",
    "./src/**/*.nts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'crete-round': ['Crete Round', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // 🎨 Plugin ICW Theme
    icwThemePlugin({
      themes: ['icw-instabook', 'cupcake', 'dracula'],
      defaultTheme: 'icw-instabook',
      customThemes: customThemes
    }),
  ],
};