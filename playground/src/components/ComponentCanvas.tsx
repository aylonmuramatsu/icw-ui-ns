import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';

export class ComponentCanvas extends Nullstack {
  showCode = false;

  toggleCode() {
    this.showCode = !this.showCode;
  }

  // Helper para converter TSX para string
  tsxToString({ configs, selected_component }: any) {
    const component = componentsConfig[selected_component];
    const Component = component.component;
    //@ts-ignore
    const name = Component.call().type.name;
    // Monta as props a partir das configs
    //@ts-ignore
    const propsString = Object.entries(configs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    // Children padrão (pode customizar depois se quiser)
    const children = Component?.children;

    return `<${name} ${propsString}>${children}</${name}>`;
  }

  render({ selected_component, configs }: any) {
    const component = componentsConfig[selected_component];
    const Component: any = component.component;

    return (
      <div class="mt-6">
        {/* Storybook-style Canvas */}
        <div class={`border rounded-lg transition-colors duration-200 `}>
          {/* Canvas Header */}
          <div
            class={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-200 `}
          >
            <div class="flex items-center space-x-4">
              <h3
                class={`text-sm font-semibold transition-colors duration-200`}
              >
                Canvas
              </h3>
            </div>

            <div class="flex items-center space-x-2">
              <button
                onclick={() => this.toggleCode()}
                class={[
                  `px-3 py-1.5 text-xs font-medium rounded border transition-all duration-200`,
                  this.showCode && 'bg-primary',
                ]}
              >
                {this.showCode ? 'Hide' : 'Show'} Code
              </button>
              <button
                class={`px-3 py-1.5 text-xs font-medium rounded border transition-all duration-200 `}
              >
                ⚙️ Controls
              </button>
            </div>
          </div>

          {/* Canvas Content */}
          <div class={`p-8 min-h-[200px] transition-colors duration-200 `}>
            <div class="flex items-center justify-center min-h-[120px]">
              <Component variant={configs.variant} color={configs.color} />
            </div>
          </div>

          {/* Code Panel - Storybook style */}
          {this.showCode && (
            <div class={`border-t transition-colors duration-200 `}>
              <div
                class={`flex items-center justify-between px-4 py-2 border-b transition-colors duration-200 `}
              >
                <div class="flex items-center space-x-2">
                  <span
                    class={`text-xs font-mono transition-colors duration-200`}
                  >
                    JSX
                  </span>
                </div>
                <button
                  onclick={() => {
                    //@ts-ignore
                    navigator.clipboard.writeText(this.tsxToString());
                  }}
                  class={`text-xs px-2 py-1 rounded transition-colors duration-200 `}
                >
                  Copy
                </button>
              </div>
              <div class="p-0 bg-[#1e1e1e] rounded-b-lg overflow-hidden border-t border-[#222]">
                <div class="flex items-center px-3 py-1.5 bg-[#181818] border-b border-[#222]">
                  <span class="w-2 h-2 rounded-full bg-[#ff5f56] mr-1.5"></span>
                  <span class="w-2 h-2 rounded-full bg-[#ffbd2e] mr-1.5"></span>
                  <span class="w-2 h-2 rounded-full bg-[#27c93f]"></span>
                  <span class="ml-4 text-xs text-[#bbb] font-mono select-none">
                    {/* //@ts-ignore */}
                    {Component ? Component.call().type.name : 'Component'}.tsx
                  </span>
                </div>
                <pre
                  class="text-sm font-mono px-4 py-3 bg-transparent text-[#27c93f] leading-relaxed whitespace-pre-wrap"
                  style="min-height: 120px;"
                >
                  {/* //@ts-ignore */}
                  {this.tsxToString()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
