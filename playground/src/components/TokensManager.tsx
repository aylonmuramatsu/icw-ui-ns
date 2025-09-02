import { defaultTheme } from '@icw/utils';
import Nullstack, { NullstackNode } from 'nullstack';

interface TokenValue {
  value: string | number | object;
  description?: string;
}

interface TokenCategory {
  [key: string]: TokenValue;
}

interface DesignTokens {
  [key: string]: TokenCategory;
}

export class TokensManager extends Nullstack {
  selectedTokenType = 'colors';
  tokens: DesignTokens = {};
  customDescriptions: Record<string, Record<string, string>> = {};

  // Inicializa os tokens baseados no defaultTheme
  initializeTokens() {
    const themeTokens: DesignTokens = {};

    // Processa cada categoria do defaultTheme
    for (const category in defaultTheme) {
      const categoryData = (defaultTheme as any)[category];
      themeTokens[category] = {};

      if (typeof categoryData === 'object' && categoryData !== null) {
        for (const tokenName in categoryData) {
          const tokenValue = categoryData[tokenName];
          themeTokens[category][tokenName] = {
            value: tokenValue,
            description:
              this.customDescriptions[category]?.[tokenName] ||
              this.generateDescription(category, tokenName, tokenValue),
          };
        }
      }
    }

    this.tokens = themeTokens;
  }

  // Gera descrições automáticas baseadas no nome e valor do token
  generateDescription(
    category: string,
    tokenName: string,
    tokenValue: any
  ): string {
    // Validação para evitar erros com tokenName undefined/null
    if (!tokenName || typeof tokenName !== 'string') {
      return `${category} token`;
    }

    const name = tokenName.replace(/([A-Z])/g, ' $1').toLowerCase();

    switch (category) {
      case 'colors':
        return `${name} color`;
      case 'typography':
        if (tokenName.indexOf('heading') !== -1) {
          return `${name} typography style`;
        } else if (tokenName.indexOf('body') !== -1) {
          return `${name} text style`;
        } else if (tokenName.indexOf('font') !== -1) {
          return `${name} font property`;
        } else {
          return `${name} typography token`;
        }
      case 'radius':
        return `${name} border radius`;
      case 'spacing':
        return `${name} spacing value`;
      case 'shadow':
        return `${name} shadow effect`;
      case 'opacity':
        return `${name} opacity value`;
      case 'fontFamily':
        return `${name} font family`;
      case 'extras':
        return `${name} extra token`;
      default:
        return `${name} ${category} token`;
    }
  }

  // Converte valor do token para string para exibição
  formatTokenValue(value: any): string {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return value.join(', ');
      } else {
        return JSON.stringify(value, null, 2);
      }
    }
    return String(value);
  }

  // Converte string de volta para o tipo original
  parseTokenValue(originalValue: any, stringValue: string): any {
    if (typeof originalValue === 'number') {
      return parseFloat(stringValue) || originalValue;
    } else if (typeof originalValue === 'object' && originalValue !== null) {
      if (Array.isArray(originalValue)) {
        return stringValue.split(',').map((item) => item.trim());
      } else {
        try {
          return JSON.parse(stringValue);
        } catch {
          return originalValue;
        }
      }
    }
    return stringValue;
  }

  updateToken(category: string, tokenName: string, value: string) {
    if (this.tokens[category]?.[tokenName]) {
      const originalValue = (defaultTheme as any)[category]?.[tokenName];
      const parsedValue = this.parseTokenValue(originalValue, value);

      this.tokens[category][tokenName].value = parsedValue;
      // Force re-render
      this.tokens = { ...this.tokens };
    }
  }

  updateTokenDescription(
    category: string,
    tokenName: string,
    description: string
  ) {
    if (this.tokens[category]?.[tokenName]) {
      this.tokens[category][tokenName].description = description;

      // Salva a descrição customizada
      if (!this.customDescriptions[category]) {
        this.customDescriptions[category] = {};
      }
      this.customDescriptions[category][tokenName] = description;

      // Force re-render
      this.tokens = { ...this.tokens };
    }
  }

  addToken(category: string, tokenName: string) {
    if (!this.tokens[category]) {
      this.tokens[category] = {};
    }

    this.tokens[category][tokenName] = {
      value:
        category === 'colors'
          ? '#000000'
          : category === 'typography'
            ? '1rem'
            : '0',
      description: `Custom ${tokenName} token`,
    };

    // Force re-render
    this.tokens = { ...this.tokens };
  }

  removeToken(category: string, tokenName: string) {
    if (this.tokens[category]?.[tokenName]) {
      delete this.tokens[category][tokenName];
      // Force re-render
      this.tokens = { ...this.tokens };
    }
  }

  exportTokens() {
    const tokensString = JSON.stringify(this.tokens, null, 2);
    navigator.clipboard.writeText(tokensString);
  }

  // Detecta se um token é do defaultTheme ou customizado
  isDefaultToken(category: string, tokenName: string): boolean {
    return (defaultTheme as any)[category]?.[tokenName] !== undefined;
  }

  renderTokenInput(
    category: string,
    tokenName: string,
    token: TokenValue | undefined,
    isDarkMode: boolean
  ) {
    if (!token) return null;

    const isDefault = this.isDefaultToken(category, tokenName);
    const formattedValue = this.formatTokenValue(token.value);

    return (
      <div
        class={`p-4 rounded-lg border transition-colors duration-200 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        } ${isDefault ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-green-500'}`}
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
            {isDefault && (
              <span class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                Default
              </span>
            )}
            {!isDefault && (
              <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Custom
              </span>
            )}
            {category === 'colors' && (
              <div
                class="w-6 h-6 rounded border border-gray-300"
                style={`background-color: ${formattedValue}`}
              />
            )}
          </div>
          {!isDefault && (
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
          )}
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
              value={formattedValue}
              onchange={(e: any) =>
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
              onchange={(e: any) =>
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
    // Inicializa tokens na primeira renderização
    if (Object.keys(this.tokens).length === 0) {
      this.initializeTokens();
    }

    const currentTokens = this.tokens[this.selectedTokenType] || {};
    const tokenTypes = Object.keys(this.tokens);

    return (
      <div class="space-y-6">
        {/* Token Type Selector */}
        <div class="flex space-x-2 overflow-x-auto pb-2">
          {tokenTypes.map((tokenType) => (
            <button
              class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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
              {tokenType.charAt(0).toUpperCase() + tokenType.slice(1)} (
              {Object.keys(currentTokens).length})
            </button>
          ))}
        </div>

        {/* Actions */}
        <div class="flex justify-between items-center">
          <div>
            <h3
              class={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {this.selectedTokenType.charAt(0).toUpperCase() +
                this.selectedTokenType.slice(1)}{' '}
              Tokens
            </h3>
            <p
              class={`text-sm mt-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {
                Object.keys(currentTokens).filter((name) =>
                  this.isDefaultToken(this.selectedTokenType, name)
                ).length
              }{' '}
              default tokens,{' '}
              {
                Object.keys(currentTokens).filter(
                  (name) => !this.isDefaultToken(this.selectedTokenType, name)
                ).length
              }{' '}
              custom tokens
            </p>
          </div>
          <div class="flex space-x-3">
            <button
              onclick={() =>
                this.addToken(
                  this.selectedTokenType,
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
          {Object.keys(currentTokens).map((tokenName) => {
            const token = currentTokens[tokenName];
            return token
              ? this.renderTokenInput(
                  this.selectedTokenType,
                  tokenName,
                  token,
                  isDarkMode
                )
              : null;
          })}
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
