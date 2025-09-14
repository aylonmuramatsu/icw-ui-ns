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
    const children = '';

    return `<${name} ${propsString}>${children}</${name}>`;
  }

  render({ selected_component, configs }: any) {
    const component = componentsConfig[selected_component];
    const Component: any = component.component;

    return (
      <div class="mt-8 ">
        {/* Ultra-Premium Canvas */}
        <div
          class={`bg-gradient-to-br from-gray-900/90 via-gray-950/80 to-gray-900/70 border-2 border-border/20 rounded-3xl shadow-2xl shadow-primary/10 backdrop-blur-sm overflow-hidden transition-all duration-500`}
        >
          {/* Canvas Header */}
          <div
            class={`relative flex items-center justify-between px-8 py-6 border-b border-border/20 bg-gradient-to-r from-muted/30 to-background/20`}
          >
            {/* Background decoration */}
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>

            <div class="relative flex items-center space-x-4">
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <span class="text-xl">🎨</span>
              </div>
              <div>
                <h3 class={`text-lg font-bold text-foreground`}>Canvas</h3>
                <p class="text-xs text-muted-foreground">
                  Component preview area
                </p>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <button
                onclick={() => this.toggleCode()}
                class={`group px-4 py-2.5 text-sm font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                  this.showCode
                    ? 'bg-primary/10 border-primary/30 text-primary shadow-lg shadow-primary/20'
                    : 'border-border/30 bg-background/60 hover:bg-muted/50 hover:border-primary/30'
                }`}
              >
                <span class="text-base">{this.showCode ? '📖' : '💻'}</span>
                <span>{this.showCode ? 'Hide' : 'Show'} Code</span>
              </button>
            </div>
          </div>

          {/* Canvas Content - Premium Showcase Area */}
          <div
            class={`relative p-6 min-h-[220px] transition-colors duration-200 flex justify-center items-center`}
            style={`
              background-color: #f3f4f6;
              background-image:
                radial-gradient(#d1d5db 1.2px, transparent 1.2px),
                radial-gradient(#d1d5db 1.2px, #f3f4f6 1.2px);
              background-size: 22px 22px;
              background-position: 0 0, 11px 11px;
            `}
          >
            <Component {...configs} disabled={configs.disabled === 'true'} />

            {/* Component showcase area */}
          </div>

          {/* Code Panel - Ultra-Modern Terminal Style */}
          <div
            class={`transition-all duration-500 ${this.showCode ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          >
            <div
              class={`border-t border-border/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}
            >
              {/* Code header with modern terminal look */}
              <div class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-slate-600/30">
                <div class="flex items-center space-x-4">
                  {/* Terminal dots */}
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                  </div>
                  <span class="text-sm font-mono text-slate-300 font-medium">
                    {/* //@ts-ignore */}
                    {Component ? Component.call().type.name : 'Component'}.tsx
                  </span>
                </div>

                <button
                  onclick={() => {
                    //@ts-ignore
                    navigator.clipboard.writeText(
                      this.tsxToString({ configs, selected_component })
                    );
                  }}
                  class="group px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center space-x-2"
                >
                  <span>📋</span>
                  <span>Copy Code</span>
                </button>
              </div>

              {/* Code content with syntax highlighting effect */}
              <div class="relative">
                <pre class="text-sm font-mono px-6 py-6 bg-slate-900/90 text-emerald-400 leading-relaxed whitespace-pre-wrap min-h-[150px] overflow-x-auto">
                  {/* //@ts-ignore */}
                  {this.tsxToString({ configs, selected_component })}
                </pre>

                {/* Subtle glow overlay */}
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
