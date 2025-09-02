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
      <main class="flex-1 p-8">
        {selected_component && (
          <div class="w-full">
            <ComponentHeader />
            <ComponentVariants />
            <ComponentCanvas />
          </div>
        )}
      </main>
    );
  }
}
