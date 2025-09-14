import Nullstack, { NullstackNode } from 'nullstack';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

export class AppLayout extends Nullstack {
  hydrate(context: any) {
    context.selected_component = 'button';
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
