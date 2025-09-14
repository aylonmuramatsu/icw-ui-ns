import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export class Header extends Nullstack {
  render(context: BaseNullstackClientContext<unknown>): NullstackNode {
    return (
      <header
        class={`border-b border-border/10 sticky top-0 z-50 transition-all duration-300 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800/90 backdrop-blur-xl shadow-md`}
      >
        <div class="max-w-7xl mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              {/* Logo with dark gradient */}
              <div
                class={`w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40`}
              >
                <span class={`font-black text-gray-100 text-sm tracking-tight`}>
                  UI
                </span>
              </div>

              {/* Brand info */}
              <div class="space-y-0.5">
                <h1
                  class={`text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent`}
                >
                  ICW UI - Component Library
                </h1>
                <p class={`text-sm text-gray-400 font-medium`}>
                  Design System & Documentation
                </p>
              </div>
            </div>

            {/* Actions */}
            <div class="flex items-center space-x-3">
              {/* Live Preview Badge - dark mode */}
              <div
                class={`group relative px-4 py-2 rounded-full bg-gradient-to-r from-emerald-800 to-green-900 text-emerald-200 font-medium text-sm shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-700/40 hover:scale-105`}
              >
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                  <span>Live Preview</span>
                </div>

                {/* Subtle glow effect */}
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-700/20 to-green-800/20 group-hover:from-emerald-700/30 group-hover:to-green-800/30 transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Settings button - dark mode */}
              <button class="w-10 h-10 rounded-xl bg-gray-800/70 hover:bg-gray-700 border border-border/20 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                <span class="text-lg text-gray-300 group-hover:rotate-90 transition-transform duration-300">
                  ⚙️
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle bottom gradient line */}
        <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </header>
    );
  }
}
