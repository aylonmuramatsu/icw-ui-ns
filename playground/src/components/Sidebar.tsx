import Nullstack, { NullstackNode } from 'nullstack';
import { componentsConfig } from '../components-config';

export class Sidebar extends Nullstack {
  render(context: any): NullstackNode {
    return (
      <aside
        class={`w-64 border-r border-border/20 min-h-screen transition-colors duration-200 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden overflow-y-auto text-white`}
      >
        {/* Subtle animated background */}
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute top-10 right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-4 w-16 h-16 bg-gradient-to-br from-violet-500/15 to-indigo-500/15 rounded-full blur-xl animate-pulse"
            style="animation-delay: 2s;"
          ></div>
        </div>

        <div class="relative z-10 p-3 h-full flex flex-col">
          {/* Header Section */}
          <div class="mb-4">
            <h2
              class={`text-xs font-bold mb-3 uppercase tracking-wider text-muted-foreground`}
            >
              Components
            </h2>
            <div class="space-y-1">
              {Object.keys(componentsConfig).map((key) => {
                const component = componentsConfig[key];
                const isSelected = context.selected_component === key;
                return (
                  <button
                    class={`group relative w-full text-left px-2 py-2 rounded-lg transition-all duration-300 hover:scale-[1.01] transform overflow-hidden flex items-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border border-primary/40 shadow-lg shadow-primary/15'
                        : 'hover:bg-gradient-to-br hover:from-gray-800/80 hover:via-gray-800/60 hover:to-gray-800/40 border border-transparent hover:border-border/40 hover:shadow'
                    }`}
                    onclick={{ selected_component: key }}
                    source={context}
                    style="min-height: 36px;"
                  >
                    {/* Subtle shine effect */}
                    <div
                      class={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ${isSelected ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}`}
                    ></div>
                    <span
                      class={`text-lg transition-transform duration-200 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}
                      style="min-width: 1.5rem; display: flex; align-items: center; justify-content: center;"
                    >
                      {component.icon}
                    </span>
                    <span
                      class={`font-semibold text-xs truncate transition-all duration-300 ${
                        isSelected
                          ? 'text-primary'
                          : 'text-foreground group-hover:text-primary'
                      }`}
                      style="max-width: 120px;"
                    >
                      {component.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Elegant Separator */}
          <div class="relative my-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
            </div>
            <div class="relative flex justify-center text-[10px] uppercase">
              <span class="bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-muted-foreground font-bold tracking-widest border border-border/20">
                Tools
              </span>
            </div>
          </div>

          {/* Tools Section */}
          <div class="flex-1">
            <button
              class={`group relative w-full text-left px-2 py-2 rounded-lg transition-all duration-300 hover:scale-[1.01] transform overflow-hidden flex items-center gap-2 hover:bg-gradient-to-br from-violet-500/20 via-indigo-500/15 to-purple-500/10 border border-transparent hover:border-violet-300/40 hover:shadow`}
              style="min-height: 36px;"
            >
              {/* Animated background */}
              <div class="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              {/* Shine effect */}
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-0 group-hover:opacity-5"></div>
              <span class="relative text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 p-1 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-lg border border-violet-500/10 flex items-center justify-center">
                🎨
              </span>
              <span
                class="font-semibold text-xs text-foreground group-hover:text-violet-400 transition-all duration-300 truncate"
                style="max-width: 120px;"
              >
                Design Tokens
              </span>
            </button>
          </div>

          {/* Footer gradient */}
          <div class="mt-auto pt-2">
            <div class="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </div>
        </div>
      </aside>
    );
  }
}
