import Nullstack from 'nullstack';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  isDarkMode: boolean;
  selectedComponent: string;
  selectedVariant: string;
  showTokensManager: boolean;
  onToggleTheme: () => void;
  onSelectComponent: (component: string) => void;
  onToggleTokensManager: () => void;
  onSelectVariant: (variant: string) => void;
}

export class Layout extends Nullstack {
  render({
    isDarkMode,
    selectedComponent,
    selectedVariant,
    showTokensManager,
    onToggleTheme,
    onSelectComponent,
    onToggleTokensManager,
    onSelectVariant,
  }: LayoutProps) {
    return (
      <div
        class={`min-h-screen transition-colors duration-200 ${
          isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
        }`}
      >
        <Header isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

        <div class="flex">
          <Sidebar
            isDarkMode={isDarkMode}
            selectedComponent={selectedComponent}
            showTokensManager={showTokensManager}
            onSelectComponent={onSelectComponent}
            onToggleTokensManager={onToggleTokensManager}
          />

          <MainContent
            selectedComponent={selectedComponent}
            selectedVariant={selectedVariant}
            showTokensManager={showTokensManager}
            isDarkMode={isDarkMode}
            onSelectVariant={onSelectVariant}
          />
        </div>
      </div>
    );
  }
}

