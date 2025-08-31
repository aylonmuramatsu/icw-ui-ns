import Nullstack, { NullstackNode } from 'nullstack';

interface TokenValue {
  value: string;
  description?: string;
}

interface TokenCategory {
  [key: string]: TokenValue;
}

interface DesignTokens {
  colors: TokenCategory;
  typography: TokenCategory;
  spacing: TokenCategory;
  shadows: TokenCategory;
}

export class TokensManager extends Nullstack {
  selectedTokenType = 'colors';
  tokens: DesignTokens = {
    colors: {
      primary: { value: '#3B82F6', description: 'Primary brand color' },
      secondary: { value: '#6B7280', description: 'Secondary brand color' },
      success: { value: '#10B981', description: 'Success state color' },
      warning: { value: '#F59E0B', description: 'Warning state color' },
      error: { value: '#EF4444', description: 'Error state color' },
      gray: { value: '#6B7280', description: 'Neutral gray color' },
      'gray-50': { value: '#F9FAFB', description: 'Lightest gray' },
      'gray-100': { value: '#F3F4F6', description: 'Very light gray' },
      'gray-200': { value: '#E5E7EB', description: 'Light gray' },
      'gray-300': { value: '#D1D5DB', description: 'Medium light gray' },
      'gray-400': { value: '#9CA3AF', description: 'Medium gray' },
      'gray-500': { value: '#6B7280', description: 'Medium dark gray' },
      'gray-600': { value: '#4B5563', description: 'Dark gray' },
      'gray-700': { value: '#374151', description: 'Very dark gray' },
      'gray-800': { value: '#1F2937', description: 'Almost black gray' },
      'gray-900': { value: '#111827', description: 'Darkest gray' },
    },
    typography: {
      'font-family': {
        value: 'Inter, system-ui, sans-serif',
        description: 'Primary font family',
      },
      'font-size-xs': { value: '0.75rem', description: 'Extra small text' },
      'font-size-sm': { value: '0.875rem', description: 'Small text' },
      'font-size-base': { value: '1rem', description: 'Base text size' },
      'font-size-lg': { value: '1.125rem', description: 'Large text' },
      'font-size-xl': { value: '1.25rem', description: 'Extra large text' },
      'font-size-2xl': { value: '1.5rem', description: '2x large text' },
      'font-size-3xl': { value: '1.875rem', description: '3x large text' },
      'font-weight-normal': { value: '400', description: 'Normal font weight' },
      'font-weight-medium': { value: '500', description: 'Medium font weight' },
      'font-weight-semibold': {
        value: '600',
        description: 'Semibold font weight',
      },
      'font-weight-bold': { value: '700', description: 'Bold font weight' },
      'line-height-tight': { value: '1.25', description: 'Tight line height' },
      'line-height-normal': { value: '1.5', description: 'Normal line height' },
      'line-height-relaxed': {
        value: '1.75',
        description: 'Relaxed line height',
      },
    },
    spacing: {
      'space-1': { value: '0.25rem', description: '4px spacing' },
      'space-2': { value: '0.5rem', description: '8px spacing' },
      'space-3': { value: '0.75rem', description: '12px spacing' },
      'space-4': { value: '1rem', description: '16px spacing' },
      'space-5': { value: '1.25rem', description: '20px spacing' },
      'space-6': { value: '1.5rem', description: '24px spacing' },
      'space-8': { value: '2rem', description: '32px spacing' },
      'space-10': { value: '2.5rem', description: '40px spacing' },
      'space-12': { value: '3rem', description: '48px spacing' },
      'space-16': { value: '4rem', description: '64px spacing' },
      'space-20': { value: '5rem', description: '80px spacing' },
      'space-24': { value: '6rem', description: '96px spacing' },
    },
    shadows: {
      'shadow-sm': {
        value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        description: 'Small shadow',
      },
      shadow: {
        value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        description: 'Default shadow',
      },
      'shadow-md': {
        value:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        description: 'Medium shadow',
      },
      'shadow-lg': {
        value:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        description: 'Large shadow',
      },
      'shadow-xl': {
        value:
          '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        description: 'Extra large shadow',
      },
      'shadow-2xl': {
        value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        description: '2x large shadow',
      },
    },
  };

  updateToken(category: keyof DesignTokens, tokenName: string, value: string) {
    if (this.tokens[category][tokenName]) {
      this.tokens[category][tokenName].value = value;
      // Force re-render
      this.tokens = { ...this.tokens };
    }
  }

  updateTokenDescription(
    category: keyof DesignTokens,
    tokenName: string,
    description: string
  ) {
    if (this.tokens[category][tokenName]) {
      this.tokens[category][tokenName].description = description;
      // Force re-render
      this.tokens = { ...this.tokens };
    }
  }

  addToken(category: keyof DesignTokens, tokenName: string) {
    this.tokens[category][tokenName] = { value: '', description: '' };
    // Force re-render
    this.tokens = { ...this.tokens };
  }

  removeToken(category: keyof DesignTokens, tokenName: string) {
    delete this.tokens[category][tokenName];
  }

  exportTokens() {
    const tokensString = JSON.stringify(this.tokens, null, 2);
    navigator.clipboard.writeText(tokensString);
  }

  renderTokenInput(
    category: keyof DesignTokens,
    tokenName: string,
    token: TokenValue | undefined,
    isDarkMode: boolean
  ) {
    if (!token) return null;
    return (
      <div
        class={`p-4 rounded-lg border transition-colors duration-200 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-3">
            <span
              class={`font-mono text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {tokenName}
            </span>
            {category === 'colors' && (
              <div
                class="w-6 h-6 rounded border border-gray-300"
                style={`background-color: ${token?.value || '#000000'}`}
              />
            )}
          </div>
          <button
            onclick={() => this.removeToken(category, tokenName)}
            class={`px-2 py-1 text-xs rounded transition-colors duration-200 ${
              isDarkMode
                ? 'text-red-400 hover:bg-red-400/10'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            Remove
          </button>
        </div>

        <div class="space-y-3">
          <div>
            <label
              class={`block text-xs font-medium mb-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Value
            </label>
            <input
              type="text"
              value={token?.value || ''}
              onchange={(e) =>
                this.updateToken(category, tokenName, e.target.value)
              }
              class={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 transition-all duration-200 outline-none font-mono ${
                isDarkMode
                  ? 'border-gray-600 bg-gray-900 text-white focus:border-white focus:ring-gray-700'
                  : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
              }`}
            />
          </div>

          <div>
            <label
              class={`block text-xs font-medium mb-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Description
            </label>
            <input
              type="text"
              value={token?.description || ''}
              onchange={(e) =>
                this.updateTokenDescription(category, tokenName, e.target.value)
              }
              placeholder="Optional description..."
              class={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 transition-all duration-200 outline-none ${
                isDarkMode
                  ? 'border-gray-600 bg-gray-900 text-white focus:border-white focus:ring-gray-700 placeholder-gray-500'
                  : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
              }`}
            />
          </div>
        </div>
      </div>
    );
  }

  render({ isDarkMode }: { isDarkMode: boolean }): NullstackNode {
    const currentTokens =
      this.tokens[this.selectedTokenType as keyof DesignTokens];

    return (
      <div class="space-y-6">
        {/* Token Type Selector */}
        <div class="flex space-x-2">
          {Object.keys(this.tokens).map((tokenType) => (
            <button
              class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                this.selectedTokenType === tokenType
                  ? isDarkMode
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-900 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
              onclick={() => (this.selectedTokenType = tokenType)}
            >
              {tokenType.charAt(0).toUpperCase() + tokenType.slice(1)}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div class="flex justify-between items-center">
          <h3
            class={`text-lg font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {this.selectedTokenType.charAt(0).toUpperCase() +
              this.selectedTokenType.slice(1)}{' '}
            Tokens
          </h3>
          <div class="flex space-x-3">
            <button
              onclick={() =>
                this.addToken(
                  this.selectedTokenType as keyof DesignTokens,
                  `new-${this.selectedTokenType}-token`
                )
              }
              class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Add Token
            </button>
            <button
              onclick={() => this.exportTokens()}
              class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
              }`}
            >
              Export JSON
            </button>
          </div>
        </div>

        {/* Tokens Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.entries(currentTokens).map(([tokenName, token]) =>
            token
              ? this.renderTokenInput(
                  this.selectedTokenType as keyof DesignTokens,
                  tokenName,
                  token,
                  isDarkMode
                )
              : null
          )}
        </div>

        {/* Empty State */}
        {Object.keys(currentTokens).length === 0 && (
          <div
            class={`text-center py-12 rounded-lg border-2 border-dashed ${
              isDarkMode
                ? 'border-gray-700 text-gray-400'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            <p class="text-lg font-medium mb-2">No tokens found</p>
            <p class="text-sm">Add your first token to get started</p>
          </div>
        )}
      </div>
    );
  }
}
