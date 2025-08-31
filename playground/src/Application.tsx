import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack';

import '../tailwind.css';
import { AppLayout } from './AppLayout';
declare function Head(): NullstackNode;

class Application extends Nullstack {
  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <body>
        <Head />
        <AppLayout />
      </body>
    );
  }
}

export default Application;
