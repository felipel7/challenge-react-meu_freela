import { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Sling as Hamburger } from 'hamburger-react';
import ThemeSetter from '../ThemeSetter';

import styles from './styles.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <a href='/'>MeuFreela</a>
        <ul className={isOpen ? `${styles.active}` : ''}>
          <li>
            <a href='https://www.linkedin.com' title='linkedin profile'>
              <FaLinkedinIn size={32} />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com' title='instagram profile'>
              <FaInstagram size={32} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' title='twitter profile'>
              <FaTwitter size={32} />
              <span>Twitter</span>
            </a>
          </li>
          <li className={styles.toggleTheme}>
            <ThemeSetter />
          </li>
        </ul>
        <span onClick={() => setIsOpen(!isOpen)}>
          <Hamburger size={25} color={'#fff'} />
        </span>
      </nav>
    </header>
  );
};

export { Header };
