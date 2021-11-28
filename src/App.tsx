import { Header } from './Components/Header';
import { Home } from './Pages/Home';

import { ThemeProvider } from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export { App };
