import Nullstack, { NullstackNode } from 'nullstack';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

export class AppLayout extends Nullstack {
  hydrate(context: any) {
    context.selected_component = 'button';
  }

  render(context: any): NullstackNode {
    return (
      <div class={`min-h-screen transition-colors duration-200`}>
        <Header />

        <div class="flex">
          <Sidebar />
          <div class="min-h bg-background p-4 w-full">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}
