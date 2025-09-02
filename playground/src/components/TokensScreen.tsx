import Nullstack from 'nullstack';
import { TokensManager } from './TokensManager';

interface TokensScreenProps {
  isDarkMode: boolean;
}

export class TokensScreen extends Nullstack {
  render({ isDarkMode }: TokensScreenProps) {
    return (
      <div class="space-y-6">
        <div class="mb-8">
          <div class="flex items-center space-x-4 mb-2">
            <span class="text-2xl">🎨</span>
            <div>
              <h1
                class={`text-3xl font-bold transition-colors duration-200 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Design Tokens
              </h1>
              <p
                class={`transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mt-1`}
              >
                Configure colors, typography, spacing and shadows
              </p>
            </div>
          </div>
        </div>
        <TokensManager isDarkMode={isDarkMode} />
      </div>
    );
  }
}

