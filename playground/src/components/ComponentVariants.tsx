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

  changeConfig({ event, key, configs }) {
    configs[key] = event.target.value;
  }
  render({ selected_component, configs }: any) {
    const component = componentsConfig[selected_component];
    // console.log(context.configs);
    return (
      <div class="mb-6">
        {/* Premium Controls Panel */}
        <div
          class={`bg-card/10 border border-border/40 rounded-xl overflow-hidden transition-colors duration-200`}
        >
          {/* Controls Header */}
          <div
            class={`flex items-center justify-between px-4 py-3 border-b border-border/40 bg-background/40`}
          >
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-2xl flex items-center justify-center">
                <span class="text-xl">⚙️</span>
              </div>
              <div>
                <h3 class={`text-base font-bold text-foreground`}>Controls</h3>
                <p class="text-xs text-muted-foreground">
                  Customize component properties
                </p>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              <button
                onclick={() => this.toggleControls()}
                class={`px-3 py-2 text-xs font-medium rounded-lg border border-border/40 bg-background/60 hover:bg-muted/50 transition-colors duration-200 flex items-center space-x-2`}
              >
                <span
                  class={`transition-transform ${this.showControls ? 'rotate-180' : ''}`}
                >
                  {this.showControls ? '▲' : '▼'}
                </span>
                <span>{this.showControls ? 'Hide' : 'Show'}</span>
              </button>
            </div>
          </div>

          {/* Controls Content with smooth animation */}
          <div
            class={`transition-all duration-300 ${this.showControls ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          >
            <div class="p-4">
              <div class="space-y-4">
                <div>
                  <label
                    class={`block text-xs font-bold mb-4 text-muted-foreground uppercase tracking-wider`}
                  >
                    Configurações
                  </label>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(component.configs).map(([key, value]) => (
                      <div class="group space-y-3">
                        <label class="text-xs font-semibold capitalize text-foreground">
                          {key}
                        </label>
                        <div class="relative">
                          <select
                            class="w-full px-3 py-2 rounded-lg border border-border/40 text-white bg-gradient-to-b bg-transparent text-sm transition-colors duration-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none appearance-none cursor-pointer"
                            value={configs[key]}
                            onchange={({ event }) =>
                              this.changeConfig({ event, key, configs })
                            }
                          >
                            {value.map((option) => (
                              <option
                                value={option}
                                class="bg-background text-foreground"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                          {/* Custom dropdown arrow */}
                          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <div class="w-2 h-2 border-r-2 border-b-2 border-muted-foreground rotate-45 transition-colors duration-300 group-hover:border-primary"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
