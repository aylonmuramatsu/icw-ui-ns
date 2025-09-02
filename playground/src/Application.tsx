import Nullstack, { NullstackNode } from 'nullstack';
import '../tailwind.css';
import { AppLayout } from './AppLayout';

declare function Head(): NullstackNode;

class Application extends Nullstack {
  renderHead() {
    return (
      <head>
        <title>Playground</title>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <body class="min-h-screen bg-backgroud text-base-content">
        <Head />
        <AppLayout />
      </body>
    );
  }
}

export default Application;
