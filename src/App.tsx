import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import AOS from 'aos';

import { Header } from './Components/Header';
import { Home } from './Pages/Home';

import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'load',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 450,
      easing: 'ease-in-out-quad',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export { App };
