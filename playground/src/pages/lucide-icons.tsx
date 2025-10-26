import Nullstack from 'nullstack';

import { Button, LucideIcons } from '@insightcreativewebs/ui';

export class LucideIconsPage extends Nullstack {
  // Helper para copiar texto para a área de transferência
  async copyToClipboard({ text }) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  // Estado local para controle do ícone selecionado e feedback de cópia
  prepare(context) {
    context.selected_icon = null;
    context.copied_icon = null;
    context.search = '';
  }

  render(context) {
    // Lista todos os ícones exportados
    const icons = Object.entries(LucideIcons)
      .filter(([name]) => name[0] === name[0].toUpperCase())
      .filter(([name]) =>
        context.search
          ? name.toLowerCase().includes(context.search.toLowerCase())
          : true
      );

    // Pega o componente do ícone selecionado, se houver
    const SelectedIcon = context.selected_icon
      ? LucideIcons[context.selected_icon]
      : null;

    return (
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-3">
          <input
            placeholder="Buscar ícone..."
            value={context.search}
            oninput={({ event: e }) => (context.search = e.target.value)}
            class="w-64"
            aria-label="Buscar ícone"
          />
          {context.selected_icon && (
            <div class="ml-auto flex items-center gap-2">
              <span class="text-sm text-muted-foreground">
                {context.selected_icon}
              </span>
              <Button
                onclick={async () => {
                  const code = `<${context.selected_icon} />`;
                  const ok = await this.copyToClipboard({ text: code });
                  if (ok) {
                    context.copied_icon = context.selected_icon;
                    setTimeout(() => {
                      context.copied_icon = null;
                    }, 1200);
                  }
                }}
                size="sm"
                variant="outline"
                aria-label="Copiar código"
              >
                {context.copied_icon === context.selected_icon
                  ? 'Copiado!'
                  : 'Copiar'}
              </Button>
            </div>
          )}
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {icons.length === 0 && (
            <div class="col-span-full text-center text-muted-foreground py-8">
              Nenhum ícone encontrado.
            </div>
          )}
          {icons.map(([name, Icon]) => (
            <button
              key={name}
              class={`group flex flex-col items-center justify-center p-4 rounded-xl border border-border/30 bg-gradient-to-br from-gray-900/80 to-gray-950/80 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 cursor-pointer relative ${
                context.selected_icon === name
                  ? 'border-primary/80 ring-2 ring-primary/30 bg-primary/10'
                  : ''
              }`}
              onclick={() => (context.selected_icon = name)}
              aria-label={`Selecionar ícone ${name}`}
              type="button"
              tabIndex={0}
            >
              <span
                class={`text-3xl mb-2 transition-transform duration-150 ${
                  context.selected_icon === name
                    ? 'text-primary scale-125'
                    : 'text-primary group-hover:scale-110'
                }`}
              >
                <Icon />
              </span>
              <span
                class={`text-xs truncate max-w-[80px] transition-colors duration-150 ${
                  context.selected_icon === name
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {name}
              </span>
              {context.selected_icon === name && (
                <div class="absolute inset-0 rounded-xl ring-2 ring-primary/30 pointer-events-none animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
