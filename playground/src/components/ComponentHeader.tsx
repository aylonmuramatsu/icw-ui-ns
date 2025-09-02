import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';

export class ComponentHeader extends Nullstack {
  render({ selected_component }: any) {
    const component = componentsConfig[selected_component];
    return (
      <div class=" w-full">
        {/* Storybook-style Breadcrumb */}
        <div class="">
          <nav class={`text-sm transition-colors duration-200 `}>
            <span class="font-medium">Components</span>
            <span class="mx-2">/</span>
            <span class={`transition-colors duration-200 `}>
              {component.name}
            </span>
          </nav>
        </div>

        {/* Component Header */}
        <div class="flex items-center space-x-6 ">
          <div
            class={`text-4xl p-4 rounded-xl transition-colors duration-200 `}
          >
            {component.icon}
          </div>
          <div class="flex-1">
            <h1 class={`heading-3 font-bold transition-colors duration-200 `}>
              {component.name}
            </h1>
          </div>
        </div>

        {/* Documentation Panel */}
        <div class={`border rounded-lg p-6 transition-colors duration-200 `}>
          <div class="flex items-start space-x-4">
            <div class={`text-2xl transition-colors duration-200 `}>📘</div>
            <div class="flex-1">
              <h3
                class={`text-lg font-semibold mb-2 transition-colors duration-200 `}
              >
                Como usar este componente
              </h3>
              <p class={`transition-colors duration-200 `}>
                {component.description}
              </p>
              <div class="mt-4 flex items-center space-x-4">
                <div
                  class={`inline-flex items-center text-sm transition-colors duration-200 `}
                >
                  <span class="mr-2">🎮</span>
                  Use os controles para experimentar
                </div>
                <div
                  class={`inline-flex items-center text-sm transition-colors duration-200 `}
                >
                  <span class="mr-2">📋</span>
                  Copie o código JSX gerado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
