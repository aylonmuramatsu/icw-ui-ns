import Nullstack, { NullstackNode } from 'nullstack';
import { componentsConfig } from './components-config';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

export class AppLayout extends Nullstack {
  hydrate(context: any) {
    context.selected_component = 'button';
    const base_component = componentsConfig['button'];
    context.configs = Object.entries(base_component.configs).reduce(
      (acc, [key, value]) => {
        acc[key] = value?.length > 0 ? value[0] : null;
        return acc;
      },
      {}
    );
  }

  render(_context: any): NullstackNode {
    return (
      <div
        class={`min-h-screen transition-colors duration-300 from-gray-900 via-gray-950 to-gray-900 b`}
      >
        <div class="relative z-10">
          <Header />

          <div class="flex">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}
