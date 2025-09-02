import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';
import { ComponentExamples } from './ComponentExamples';
import { ComponentHeader } from './ComponentHeader';
import { ComponentVariants } from './ComponentVariants';
import { TokensScreen } from './TokensScreen';

interface MainContentProps {
  selectedComponent: string;
  selectedVariant: string;
  showTokensManager: boolean;
  isDarkMode: boolean;
  onSelectVariant: (variant: string) => void;
}

export class MainContent extends Nullstack {
  render({
    selectedComponent,
    selectedVariant,
    showTokensManager,
    isDarkMode,
    onSelectVariant,
  }: MainContentProps) {
    const currentComponent = componentsConfig[selectedComponent];

    return (
      <main class="flex-1 p-8">
        {showTokensManager ? (
          <TokensScreen isDarkMode={isDarkMode} />
        ) : (
          currentComponent && (
            <div>
              <ComponentHeader
                component={currentComponent}
                isDarkMode={isDarkMode}
              />
              <ComponentVariants
                component={currentComponent}
                selectedVariant={selectedVariant}
                isDarkMode={isDarkMode}
                onSelectVariant={onSelectVariant}
              />
              <ComponentExamples
                component={currentComponent}
                isDarkMode={isDarkMode}
              />
            </div>
          )
        )}
      </main>
    );
  }
}

