import { Hero } from '../../Components/Hero';
import { AboutUs } from '../../Components/AboutUs';
import { Contact } from '../../Components/Contact';
import { Footer } from '../../Components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
};

export { Home };
