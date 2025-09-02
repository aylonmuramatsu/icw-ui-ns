import Nullstack from 'nullstack';

interface StorybookPanelProps {
  title: string;
  isDarkMode: boolean;
  children: any;
  className?: string;
}

export class StorybookPanel extends Nullstack {
  render({ title, isDarkMode, children, className = '' }: StorybookPanelProps) {
    return (
      <div
        class={`border rounded-lg transition-colors duration-200 ${className} ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}
      >
        <div
          class={`border-b px-4 py-3 transition-colors duration-200 ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <h3
            class={`text-sm font-semibold transition-colors duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <div class="p-4">{children}</div>
      </div>
    );
  }
}

