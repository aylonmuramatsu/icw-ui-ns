import Nullstack, { NullstackNode } from 'nullstack';

export class DirectColorTest extends Nullstack {
  render(): NullstackNode {
    return (
      <div class="p-4 border-2 border-red-500">
        <h2 class="text-xl font-bold mb-4">Teste Direto das Cores</h2>

        <div class="space-y-4">
          <div>
            <h3 class="font-semibold mb-2">CSS Custom Properties:</h3>
            <div class="bg-gray-100 p-2 rounded text-xs">
              {typeof window !== 'undefined' ? (
                <div>
                  <div>
                    --color-primary:{' '}
                    {getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--color-primary') || 'NÃO DEFINIDA'}
                  </div>
                  <div>
                    --color-secondary:{' '}
                    {getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--color-secondary') || 'NÃO DEFINIDA'}
                  </div>
                </div>
              ) : (
                'Carregando...'
              )}
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Todas as Cores do Tema:</h3>
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div class="w-16 h-16 bg-default rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Default</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Primary</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-secondary rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Secondary</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-accent rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Accent</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-success rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Success</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-warning rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Warning</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-error rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Error</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-info rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Info</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-muted rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Muted</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-disabled rounded-lg mb-2 mx-auto"></div>
                <span class="text-xs">Disabled</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Botões de Teste:</h3>
            <div class="flex flex-wrap gap-2">
              <button class="px-4 py-2 bg-default text-white rounded">
                Default
              </button>
              <button class="px-4 py-2 bg-primary text-white rounded">
                Primary
              </button>
              <button class="px-4 py-2 bg-secondary text-gray-900 rounded">
                Secondary
              </button>
              <button class="px-4 py-2 bg-accent text-white rounded">
                Accent
              </button>
              <button class="px-4 py-2 bg-success text-white rounded">
                Success
              </button>
              <button class="px-4 py-2 bg-warning text-gray-900 rounded">
                Warning
              </button>
              <button class="px-4 py-2 bg-error text-white rounded">
                Error
              </button>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Texto Colorido:</h3>
            <div class="flex flex-wrap gap-4">
              <span class="text-default font-bold">Default</span>
              <span class="text-primary font-bold">Primary</span>
              <span class="text-secondary font-bold">Secondary</span>
              <span class="text-accent font-bold">Accent</span>
              <span class="text-success font-bold">Success</span>
              <span class="text-warning font-bold">Warning</span>
              <span class="text-error font-bold">Error</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
