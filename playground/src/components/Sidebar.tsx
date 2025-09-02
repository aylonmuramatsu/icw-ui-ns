import Nullstack, { NullstackNode } from 'nullstack';
import { componentsConfig } from '../components-config';

export class Sidebar extends Nullstack {
  render(context: any): NullstackNode {
    return (
      <aside
        class={`w-80 border-r min-h-screen transition-colors duration-200 bg-background`}
      >
        <div class="p-6">
          <h2
            class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 `}
          >
            Components
          </h2>
          <div class="space-y-1">
            {Object.keys(componentsConfig).map((key) => {
              const component = componentsConfig[key];
              return (
                <button
                  class={`w-full text-left px-3 py-1.5 rounded-lg body-small transition-all duration-200 ${context.selected_component === key ? '' : ''} `}
                  onclick={{ selected_component: key }}
                  source={context}
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-lg">{component.icon}</span>
                    <div class="text-left">
                      <div class="font-medium">{component.name}</div>
                      <div
                        class={`text-xs mt-0.5 transition-colors duration-200`}
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
          <div class={`my-6 border-t border-gray-200`} />

          {/* Design Tokens Menu Item */}
          <h2
            class={`text-sm font-semibold mb-4 uppercase tracking-wide transition-colors duration-200 `}
          >
            Tools
          </h2>
          <button
            class={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 `}
          >
            <div class="flex items-center space-x-3">
              <span class="text-lg">🎨</span>
              <div class="text-left">
                <div class="font-medium">Design Tokens</div>
                <div class={`text-xs mt-0.5 transition-colors duration-200`}>
                  Configure colors, typography, spacing
                </div>
              </div>
            </div>
          </button>
        </div>
      </aside>
    );
  }
}
