import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';
import { ComponentCanvas } from './ComponentCanvas';
import { ComponentHeader } from './ComponentHeader';
import { ComponentVariants } from './ComponentVariants';

export class MainContent extends Nullstack {
  hydrate({ selected_component, ...context }: any) {
    context.current_component = componentsConfig[selected_component];
  }

  render(context: any) {
    const { selected_component } = context;

    return (
      <main class="flex-1 min-h-0 overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white">
        <div class="h-full p-6 lg:p-8">
          {selected_component ? (
            <div class="max-w-7xl mx-auto h-full">
              {/* Content Container - escuro, destacando do header */}
              <div class="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 border border-border/40 rounded-2xl shadow-2xl shadow-primary/10 p-6 lg:p-8 h-full transition-colors duration-300">
                <div class="space-y-6 h-full flex flex-col">
                  {/* Header Section */}
                  <div class="flex-shrink-0">
                    <ComponentHeader />
                  </div>

                  {/* Variants Section */}
                  <div class="flex-shrink-0">
                    <div class="bg-gray-800/80 rounded-lg p-4 border border-border/30 shadow-inner shadow-primary/5">
                      <ComponentVariants />
                    </div>
                  </div>

                  {/* Canvas Section - Main Content Area */}
                  <div class="flex-1 min-h-0">
                    {/* <div class="bg-gray-900/80 rounded-lg border border-border/50 h-full shadow-lg shadow-primary/5"> */}
                    <ComponentCanvas />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty State */
            <div class="h-full flex items-center justify-center">
              <div class="text-center space-y-6 max-w-md mx-auto">
                <div class="w-24 h-24 mx-auto bg-gradient-to-br from-primary/30 to-violet-700/30 rounded-full flex items-center justify-center shadow-lg shadow-primary/10">
                  <span class="text-4xl text-primary">🎨</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    Welcome to Components Playground
                  </h3>
                  <p class="text-muted-foreground">
                    Select a component from the sidebar to start exploring and
                    testing.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }
}
