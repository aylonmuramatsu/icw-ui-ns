import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

export class Header extends Nullstack {
  render(context: BaseNullstackClientContext<unknown>): NullstackNode {
    return (
      <header
        class={`border-b sticky top-0 z-50 transition-colors duration-200 bg-background
          `}
      >
        <div class="max-w-7xl mx-auto px-6 py-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <div
                class={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200`}
              >
                <span
                  class={`font-bold body-medium transition-colors duration-200`}
                >
                  UI
                </span>
              </div>
              <div>
                <h1
                  class={`text-xl font-semibold transition-colors duration-200`}
                >
                  ICW UI - Component Library
                </h1>
                <p class={`body-medium transition-colors duration-200 `}>
                  Design System & Documentation
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div
                class={`px-3 py-1 rounded-full body-small font-medium border transition-colors duration-200 bg-success text-white`}
              >
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
