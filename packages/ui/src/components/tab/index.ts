import { Tab } from './tab';
import { TabButton } from './tab-button';
import { TabContent } from './tab-content';
import { TabRoot } from './tab-root';

type TabType = typeof TabRoot & {
  Tab: typeof Tab;
  TabButton: typeof TabButton;
  Content: typeof TabContent;
};

const Tabs = TabRoot as TabType;
Tabs.Tab = Tab;
Tabs.TabButton = TabButton;
Tabs.Content = TabContent;

export { Tabs };
