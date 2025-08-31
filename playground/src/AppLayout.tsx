import { Button } from '@icw/ui';
import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';
import { ComponentConfig, componentsConfig } from './components-config';
import { TokensManager } from './components/TokensManager';
import { generateComponentCode } from './utils/code-generator';

export class AppLayout extends Nullstack {
  selectedComponent = 'button';
  selectedVariant = 'default';
  isDarkMode = false;
  showTokensManager = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleTokensManager() {
    this.showTokensManager = !this.showTokensManager;
  }

  renderHeader() {
    return (
      <header
        class={`border-b sticky top-0 z-50 transition-colors duration-200 ${
          this.isDarkMode
            ? 'bg-gray-900 border-gray-800'
            : 'bg-white border-gray-100'
        }`}
      >
        <div class="max-w-7xl mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <div
                class={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  this.isDarkMode ? 'bg-white' : 'bg-black'
                }`}
              >
                <span
                  class={`font-bold text-sm transition-colors duration-200 ${
                    this.isDarkMode ? 'text-black' : 'text-white'
                  }`}
                >
                  UI
                </span>
              </div>
              <div>
                <h1
                  class={`text-xl font-semibold transition-colors duration-200 ${
                    this.isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Component Library
                </h1>
                <p
                  class={`text-sm transition-colors duration-200 ${
                    this.isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  Design System & Documentation
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                onclick={() => this.toggleTheme()}
                class={`p-2 rounded-lg transition-all duration-200 ${
                  this.isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {this.isDarkMode ? '🌞' : '🌙'}
              </button>
              <div
                class={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${
                  this.isDarkMode
                    ? 'bg-emerald-900/50 text-emerald-400 border-emerald-800'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}
              >
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  renderSidebar() {
    return (
      <aside
        class={`w-80 border-r min-h-screen transition-colors duration-200 ${
          this.isDarkMode
            ? 'bg-gray-900 border-gray-800'
            : 'bg-gray-50 border-gray-200'
        }`}
      >
        <div class="p-6">
          <h2
            class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 ${
              this.isDarkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            Components
          </h2>
          <div class="space-y-1">
            {Object.keys(componentsConfig).map((key) => {
              const component = componentsConfig[key];
              return (
                <button
                  class={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    this.selectedComponent === key && !this.showTokensManager
                      ? this.isDarkMode
                        ? 'bg-gray-800 text-white border border-gray-700'
                        : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                      : this.isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                  onclick={() => {
                    this.selectedComponent = key;
                    this.showTokensManager = false;
                  }}
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-lg">{component.icon}</span>
                    <div class="text-left">
                      <div class="font-medium">{component.name}</div>
                      <div
                        class={`text-xs mt-0.5 transition-colors duration-200 ${
                          this.selectedComponent === key &&
                          !this.showTokensManager
                            ? this.isDarkMode
                              ? 'text-gray-400'
                              : 'text-gray-500'
                            : this.isDarkMode
                              ? 'text-gray-500'
                              : 'text-gray-500'
                        }`}
                      >
                        {component.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Separator */}
          <div
            class={`my-6 border-t ${
              this.isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          />

          {/* Design Tokens Menu Item */}
          <h2
            class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 ${
              this.isDarkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            Tools
          </h2>
          <button
            class={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              this.showTokensManager
                ? this.isDarkMode
                  ? 'bg-gray-800 text-white border border-gray-700'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : this.isDarkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
            onclick={() => this.toggleTokensManager()}
          >
            <div class="flex items-center space-x-3">
              <span class="text-lg">🎨</span>
              <div class="text-left">
                <div class="font-medium">Design Tokens</div>
                <div
                  class={`text-xs mt-0.5 transition-colors duration-200 ${
                    this.showTokensManager
                      ? this.isDarkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                      : this.isDarkMode
                        ? 'text-gray-500'
                        : 'text-gray-500'
                  }`}
                >
                  Configure colors, typography, spacing
                </div>
              </div>
            </div>
          </button>
        </div>
      </aside>
    );
  }

  renderTokensScreen() {
    return (
      <div class="space-y-6">
        <div class="mb-8">
          <div class="flex items-center space-x-4 mb-2">
            <span class="text-2xl">🎨</span>
            <div>
              <h1
                class={`text-3xl font-bold transition-colors duration-200 ${
                  this.isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Design Tokens
              </h1>
              <p
                class={`transition-colors duration-200 ${
                  this.isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mt-1`}
              >
                Configure colors, typography, spacing and shadows
              </p>
            </div>
          </div>
        </div>
        <TokensManager isDarkMode={this.isDarkMode} />
      </div>
    );
  }

  renderComponentHeaderSection(component: ComponentConfig) {
    return (
      <div class="mb-8">
        <div class="flex items-center space-x-4 mb-2">
          <span class="text-2xl">{component.icon}</span>
          <div>
            <h1
              class={`text-3xl font-bold transition-colors duration-200 ${
                this.isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {component.name}
            </h1>
            <p
              class={`transition-colors duration-200 ${
                this.isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } mt-1`}
            >
              {component.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderVariantsSection(component: ComponentConfig) {
    const currentVariant = component.variants[this.selectedVariant];
    const ComponentClass = component.component;
    const generatedCode = generateComponentCode(component, currentVariant);

    // Se não há variante selecionada, não renderiza nada
    if (!currentVariant) {
      return (
        <div class="text-center py-12">
          <p
            class={`text-gray-500 ${this.isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            No variant selected
          </p>
        </div>
      );
    }

    return (
      <div class="space-y-6">
        {/* Variant Selector */}
        <div class="flex space-x-2">
          {Object.keys(component.variants).map((key) => {
            const variant = component.variants[key];
            return (
              <button
                class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  this.selectedVariant === key
                    ? this.isDarkMode
                      ? 'bg-white text-gray-900'
                      : 'bg-gray-900 text-white'
                    : this.isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                onclick={() => (this.selectedVariant = key)}
              >
                {variant.name}
              </button>
            );
          })}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div
            class={`rounded-xl border p-8 transition-colors duration-200 ${
              this.isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3
              class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 ${
                this.isDarkMode ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              Preview
            </h3>
            <div
              class={`flex items-center justify-center min-h-[120px] rounded-lg transition-colors duration-200 ${
                this.isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              {ComponentClass === 'input' ? (
                <input
                  {...currentVariant.props}
                  class={`px-4 py-2 border rounded-lg focus:ring-2 transition-all duration-200 outline-none ${
                    this.isDarkMode
                      ? 'border-gray-600 bg-gray-800 text-white focus:border-white focus:ring-gray-700'
                      : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
                  }`}
                />
              ) : (
                <ComponentClass {...currentVariant.props} />
              )}
            </div>
          </div>

          {/* Code */}
          <div class="bg-gray-900 rounded-xl p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Code
              </h3>
              <button
                class="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-medium rounded-lg transition-all duration-200"
                onclick={() => navigator.clipboard.writeText(generatedCode)}
              >
                Copy
              </button>
            </div>
            <pre class="text-sm text-gray-300 overflow-x-auto">
              <code>{generatedCode}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  renderExamplesSection(component: ComponentConfig) {
    const ComponentClass = component.component;

    return (
      <div class="mt-12">
        <h2
          class={`text-xl font-semibold mb-6 transition-colors duration-200 ${
            this.isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Examples
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            class={`rounded-xl border p-6 transition-colors duration-200 ${
              this.isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3
              class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 ${
                this.isDarkMode ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              All Variants
            </h3>
            <div class="space-y-3">
              {Object.keys(component.variants).map((key) => {
                const variant = component.variants[key];
                return (
                  <div
                    key={variant.name}
                    class={`p-4 rounded-lg transition-colors duration-200 ${
                      this.isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
                    }`}
                  >
                    {ComponentClass === 'input' ? (
                      <input
                        {...variant.props}
                        class={`px-3 py-2 border rounded-lg focus:ring-2 transition-all duration-200 outline-none ${
                          this.isDarkMode
                            ? 'border-gray-600 bg-gray-800 text-white focus:border-white focus:ring-gray-700'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
                        }`}
                      />
                    ) : (
                      <ComponentClass {...variant.props} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            class={`rounded-xl border p-6 transition-colors duration-200 ${
              this.isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <h3
              class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 ${
                this.isDarkMode ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              In Context
            </h3>
            <div class="space-y-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <label
                    class={`text-sm font-medium min-w-[60px] transition-colors duration-200 ${
                      this.isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    class={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 transition-all duration-200 outline-none ${
                      this.isDarkMode
                        ? 'border-gray-600 bg-gray-800 text-white focus:border-white focus:ring-gray-700 placeholder-gray-500'
                        : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
                    }`}
                  />
                </div>
                <div class="flex items-center space-x-3">
                  <label
                    class={`text-sm font-medium min-w-[60px] transition-colors duration-200 ${
                      this.isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    class={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 transition-all duration-200 outline-none ${
                      this.isDarkMode
                        ? 'border-gray-600 bg-gray-800 text-white focus:border-white focus:ring-gray-700 placeholder-gray-500'
                        : 'border-gray-300 focus:border-gray-900 focus:ring-gray-100'
                    }`}
                  />
                </div>
              </div>
              <div class="flex space-x-3 pt-2">
                <Button variant="primary">Save</Button>
                <Button variant="secondary">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render(context: BaseNullstackClientContext<unknown>): NullstackNode {
    const currentComponent = componentsConfig[this.selectedComponent];

    return (
      <div
        class={`min-h-screen transition-colors duration-200 ${
          this.isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
        }`}
      >
        {this.renderHeader()}

        <div class="flex">
          {this.renderSidebar()}

          <main class="flex-1 p-8">
            {this.showTokensManager
              ? this.renderTokensScreen()
              : currentComponent && (
                  <div>
                    {this.renderComponentHeaderSection(currentComponent)}
                    {this.renderVariantsSection(currentComponent)}
                    {this.renderExamplesSection(currentComponent)}
                  </div>
                )}
          </main>
        </div>
      </div>
    );
  }
}
