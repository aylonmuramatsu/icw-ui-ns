import Nullstack, { NullstackNode } from 'nullstack';

export class ThemeDebug extends Nullstack {
  render(): NullstackNode {
    return (
      <div class="p-4 bg-gray-100 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Debug do Tema</h3>

        <div class="space-y-2 text-sm">
          <div>
            <strong>CSS Custom Properties:</strong>
            <pre class="bg-white p-2 rounded mt-1 text-xs overflow-x-auto">
              {typeof window !== 'undefined'
                ? `--color-default: ${getComputedStyle(document.documentElement).getPropertyValue('--color-default')}
--color-primary: ${getComputedStyle(document.documentElement).getPropertyValue('--color-primary')}
--color-secondary: ${getComputedStyle(document.documentElement).getPropertyValue('--color-secondary')}
--color-accent: ${getComputedStyle(document.documentElement).getPropertyValue('--color-accent')}
--color-success: ${getComputedStyle(document.documentElement).getPropertyValue('--color-success')}
--color-warning: ${getComputedStyle(document.documentElement).getPropertyValue('--color-warning')}
--color-error: ${getComputedStyle(document.documentElement).getPropertyValue('--color-error')}`
                : 'Carregando...'}
            </pre>
          </div>

          <div>
            <strong>Elementos de Teste:</strong>
            <div class="grid grid-cols-5 gap-1 mt-1">
              <div class="w-6 h-6 bg-default rounded"></div>
              <div class="w-6 h-6 bg-primary rounded"></div>
              <div class="w-6 h-6 bg-secondary rounded"></div>
              <div class="w-6 h-6 bg-accent rounded"></div>
              <div class="w-6 h-6 bg-success rounded"></div>
              <div class="w-6 h-6 bg-warning rounded"></div>
              <div class="w-6 h-6 bg-error rounded"></div>
              <div class="w-6 h-6 bg-info rounded"></div>
              <div class="w-6 h-6 bg-muted rounded"></div>
              <div class="w-6 h-6 bg-disabled rounded"></div>
            </div>
          </div>

          <div>
            <strong>Classes Tailwind:</strong>
            <div class="flex flex-wrap gap-1 mt-1">
              <span class="inline-block px-2 py-1 bg-default text-white rounded text-xs">
                bg-default
              </span>
              <span class="inline-block px-2 py-1 bg-primary text-white rounded text-xs">
                bg-primary
              </span>
              <span class="inline-block px-2 py-1 bg-secondary text-gray-900 rounded text-xs">
                bg-secondary
              </span>
              <span class="inline-block px-2 py-1 bg-accent text-white rounded text-xs">
                bg-accent
              </span>
              <span class="inline-block px-2 py-1 bg-success text-white rounded text-xs">
                bg-success
              </span>
              <span class="inline-block px-2 py-1 bg-error text-white rounded text-xs">
                bg-error
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
