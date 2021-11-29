import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ToastContainer } from 'react-toastify';

import { Hero } from '../../Components/Hero';
import { AboutUs } from '../../Components/AboutUs';
import { Contact } from '../../Components/Contact';
import { Footer } from '../../Components/Footer';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'dark' : 'light'}
        style={{ fontSize: '16px' }}
      />
      <main>
        <Hero />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export { Home };
