import Nullstack from 'nullstack';
import { componentsConfig } from '../components-config';

export class ComponentHeader extends Nullstack {
  render({ selected_component }: any) {
    const component = componentsConfig[selected_component];
    return (
      <div class="w-full space-y-6">
        {/* Modern Breadcrumb */}
        <div class="flex items-center space-x-2">
          <nav class="flex items-center space-x-2 text-sm">
            <span class="font-semibold text-muted-foreground">Components</span>
            <span class="text-muted-foreground/50">•</span>
            <span class="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {component.name}
            </span>
          </nav>
        </div>

        {/* Hero Section - Enhanced */}
        <div class="relative">
          {/* Animated background gradient with subtle motion */}
          <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/0 to-violet-500/10 animate-gradient-move"></div>
            <div class="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-violet-500/10 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div
              class="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-full blur-xl opacity-30 animate-pulse"
              style="animation-delay: 1.5s;"
            ></div>
          </div>

          <div class="relative p-8 border border-border/30 rounded-2xl bg-card/30 shadow-xl shadow-primary/5">
            <div class="flex items-center space-x-8">
              {/* Icon with animated glow and floating effect */}
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-violet-500/30 rounded-2xl blur-2xl scale-125 group-hover:scale-150 transition-transform duration-700 group-hover:opacity-80 opacity-60 animate-float"></div>
                <div class="relative text-5xl p-5 rounded-2xl bg-card/40 border border-border/30 shadow-lg shadow-primary/10 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                  {component.icon}
                </div>
              </div>

              {/* Content with subtle fade-in */}
              <div class="flex-1 pt-2 animate-fade-in">
                <h1 class="text-4xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  {component.name}
                </h1>
                <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {component.description}
                </p>
                {/* Quick actions */}
                <div class="mt-4 flex flex-wrap gap-3">
                  <span class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 rounded-full text-xs font-semibold text-primary/90">
                    <span class="mr-1.5">✨</span>
                    UI Premium
                  </span>
                  <span class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-muted/10 to-background/10 border border-border/20 rounded-full text-xs font-medium text-muted-foreground">
                    <span class="mr-1.5">#</span>
                    {selected_component}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Card */}
        <div class="bg-card/10 border border-border/30 rounded-xl p-5">
          <div class="flex items-start space-x-5">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
              <span class="text-2xl">📘</span>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-3 text-foreground">
                Como usar este componente
              </h3>
              <p class="text-muted-foreground mb-4 leading-relaxed text-sm">
                Explore as diferentes variações, cores, tamanhos e estados deste
                componente usando os controles interativos abaixo.
              </p>

              {/* Action badges */}
              <div class="flex flex-wrap gap-3">
                <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-700">
                  <span class="mr-2 text-base">🎮</span>
                  Use os controles para experimentar
                </div>
                <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-700">
                  <span class="mr-2 text-base">📋</span>
                  Copie o código JSX gerado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
