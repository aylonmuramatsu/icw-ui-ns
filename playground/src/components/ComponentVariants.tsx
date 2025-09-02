import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';

export class ComponentVariants extends Nullstack {
  showControls = true;
  showProps = false;
  selected_variant = 'solid';
  prepare(context: any) {
    const { selected_component } = context;
    const base_component = componentsConfig[selected_component];
    // console.log(base_component);
    context.configs = Object.entries(base_component.configs).reduce(
      (acc, [key, value]) => {
        acc[key] = value?.length > 0 ? value[0] : null;
        // prev[key] = 'teste';
        return acc;
      },
      {}
    );
  }

  toggleControls() {
    this.showControls = !this.showControls;
  }

  toggleProps() {
    this.showProps = !this.showProps;
  }

  changeConfig({ event, key, value, configs }) {
    console.log(configs, event.target.value, key, value);
    configs[key] = event.target.value;
  }
  render({ selected_component, configs }: any) {
    const component = componentsConfig[selected_component];
    const Component = component.component;
    // console.log(context.configs);
    return (
      <div class="mb-6">
        {/* Storybook-style Controls Panel */}
        <div class={`border rounded-lg transition-colors duration-200 `}>
          {/* Controls Header */}
          <div
            class={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-200 `}
          >
            <div class="flex items-center space-x-2">
              <h3
                class={`text-sm font-semibold transition-colors duration-200 `}
              >
                ⚙️ Controls
              </h3>
            </div>

            <div class="flex items-center space-x-2">
              <button
                onclick={() => this.toggleControls()}
                class={`px-3 py-1.5 text-xs font-medium rounded border transition-all duration-200`}
              >
                {this.showControls ? '▼' : '▶'}
              </button>
            </div>
          </div>

          {/* Controls Content */}
          {this.showControls && (
            <div class="p-4">
              <div class="space-y-4">
                {/* Story Selector */}
                <div>
                  <label
                    class={`block text-sm font-medium mb-2 transition-colors duration-200 `}
                  >
                    Configurações
                  </label>
                  <div class="flex flex-wrap gap-4 ">
                    {Object.entries(component.configs).map(([key, value]) => (
                      <div class="flex flex-col min-w-[160px] mt-4">
                        <label class="text-xs font-semibold mb-1 capitalize transition-colors duration-200">
                          {key}
                        </label>
                        <select
                          class="px-3 py-2 rounded border text-sm transition-colors duration-200"
                          value={configs[key]}
                          onchange={({ event }) =>
                            this.changeConfig({ event, key, value })
                          }
                        >
                          {value.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
