import { Button } from '@icw/ui';
import Nullstack from 'nullstack';

export class ColorTest extends Nullstack {
  render() {
    return (
      <div class="p-8 space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">
            Button com Customização via Tailwind-Variants
          </h2>

          {/* Button padrão */}
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">Button Padrão</h3>
            <div class="flex gap-2 flex-wrap">
              <Button variant="default">Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="info">Info</Button>
              <Button variant="warning">Warning</Button>
            </div>
          </div>

          {/* Button com customVariants - Sobrescrevendo variantes existentes */}
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">
              Button Customizado - Sobrescrevendo Variantes
            </h3>
            <div class="flex gap-2 flex-wrap">
              <Button
                variant="primary"
                customVariants={{
                  variant: {
                    primary:
                      'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500/50 border-2 border-purple-300',
                  },
                }}
              >
                Primary Customizado
              </Button>
              <Button
                variant="danger"
                customVariants={{
                  variant: {
                    danger:
                      'bg-red-800 text-yellow-200 hover:bg-red-900 focus:ring-red-500/50 font-bold',
                  },
                }}
              >
                Danger Customizado
              </Button>
            </div>
          </div>

          {/* Button com customVariants - Adicionando novas variantes */}
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">
              Button Customizado - Novas Variantes
            </h3>
            <div class="flex gap-2 flex-wrap">
              <Button
                variant="gradient"
                customVariants={{
                  variant: {
                    gradient:
                      'bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600 focus:ring-pink-500/50',
                  },
                }}
              >
                Gradient
              </Button>
              <Button
                variant="outline"
                customVariants={{
                  variant: {
                    outline:
                      'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500/50 bg-transparent',
                  },
                }}
              >
                Outline
              </Button>
              <Button
                variant="glass"
                customVariants={{
                  variant: {
                    glass:
                      'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 focus:ring-white/50',
                  },
                }}
              >
                Glass Effect
              </Button>
            </div>
          </div>

          {/* Button com customVariants - Customizando base e tamanhos */}
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">
              Button Customizado - Base e Tamanhos
            </h3>
            <div class="flex gap-2 flex-wrap items-center">
              <Button
                size="sm"
                customVariants={{
                  base: 'rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-200',
                  size: {
                    sm: 'px-6 py-2 text-sm',
                    md: 'px-8 py-3 text-base',
                    lg: 'px-10 py-4 text-lg',
                  },
                }}
              >
                Small Rounded
              </Button>
              <Button
                size="md"
                customVariants={{
                  base: 'rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-200',
                  size: {
                    sm: 'px-6 py-2 text-sm',
                    md: 'px-8 py-3 text-base',
                    lg: 'px-10 py-4 text-lg',
                  },
                }}
              >
                Medium Rounded
              </Button>
              <Button
                size="lg"
                customVariants={{
                  base: 'rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-200',
                  size: {
                    sm: 'px-6 py-2 text-sm',
                    md: 'px-8 py-3 text-base',
                    lg: 'px-10 py-4 text-lg',
                  },
                }}
              >
                Large Rounded
              </Button>
            </div>
          </div>

          {/* Button com customVariants - Mudando defaultVariants */}
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">
              Button Customizado - Default Variants
            </h3>
            <div class="flex gap-2 flex-wrap">
              <Button
                customVariants={{
                  defaultVariants: {
                    variant: 'success',
                    size: 'lg',
                  },
                }}
              >
                Default Success Large
              </Button>
              <Button
                variant="primary"
                customVariants={{
                  defaultVariants: {
                    size: 'sm',
                  },
                }}
              >
                Primary Small
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
