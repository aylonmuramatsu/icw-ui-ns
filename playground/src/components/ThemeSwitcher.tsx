import Nullstack from 'nullstack';

interface ThemeSwitcherProps {
  onThemeChange: (theme: any) => void;
}

export class ThemeSwitcher extends Nullstack {
  render({ onThemeChange }: ThemeSwitcherProps) {
    const themes = {
      default: {
        name: 'Tema Padrão',
        colors: {
          primary: '#270722',
          secondary: '#ECCE8E',
          accent: '#A259F7',
        },
      },
      coral: {
        name: 'Tema Coral',
        colors: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          accent: '#45B7D1',
          success: '#96CEB4',
          warning: '#FFEAA7',
          error: '#DDA0DD',
        },
      },
      ocean: {
        name: 'Tema Oceano',
        colors: {
          primary: '#2C3E50',
          secondary: '#3498DB',
          accent: '#1ABC9C',
          success: '#27AE60',
          warning: '#F39C12',
          error: '#E74C3C',
        },
      },
      sunset: {
        name: 'Tema Pôr do Sol',
        colors: {
          primary: '#E74C3C',
          secondary: '#F39C12',
          accent: '#F1C40F',
          success: '#27AE60',
          warning: '#E67E22',
          error: '#C0392B',
        },
      },
      forest: {
        name: 'Tema Floresta',
        colors: {
          primary: '#27AE60',
          secondary: '#2ECC71',
          accent: '#16A085',
          success: '#229954',
          warning: '#F39C12',
          error: '#E74C3C',
        },
      },
    };

    return (
      <div class="bg-surface border border-border rounded-lg p-6 mb-8">
        <h3 class="heading-3 text-primary mb-4">
          🎭 Trocar Tema em Tempo Real
        </h3>
        <p class="body-medium text-default mb-6">
          Clique em um tema abaixo para ver a mudança instantânea. O sistema
          funciona sem rebuild do Tailwind!
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onclick={() => onThemeChange(theme)}
              class="p-4 rounded-lg border border-border bg-surface hover:bg-muted transition-all duration-200 group"
            >
              <div class="flex items-center space-x-3 mb-3">
                <div
                  class="w-4 h-4 rounded-full border border-border"
                  style={`background: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`}
                ></div>
                <span class="text-sm font-medium text-default group-hover:text-primary transition-colors">
                  {theme.name}
                </span>
              </div>

              <div class="flex space-x-1">
                <div
                  class="w-3 h-3 rounded border border-border"
                  style={`background-color: ${theme.colors.primary}`}
                ></div>
                <div
                  class="w-3 h-3 rounded border border-border"
                  style={`background-color: ${theme.colors.secondary}`}
                ></div>
                <div
                  class="w-3 h-3 rounded border border-border"
                  style={`background-color: ${theme.colors.accent}`}
                ></div>
              </div>
            </button>
          ))}
        </div>

        <div class="mt-6 p-4 bg-muted rounded-lg">
          <h4 class="text-sm font-semibold text-default mb-2">
            💡 Como Funciona
          </h4>
          <ul class="text-xs text-default space-y-1">
            <li>
              • O ThemeProvider aplica CSS Custom Properties automaticamente
            </li>
            <li>• As cores são sobrescritas em tempo real no DOM</li>
            <li>• Não é necessário rebuild do Tailwind CSS</li>
            <li>• Funciona com qualquer projeto que use Tailwind</li>
          </ul>
        </div>
      </div>
    );
  }
}

