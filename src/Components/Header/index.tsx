import { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Sling as Hamburger } from 'hamburger-react';
import ThemeSetter from '../ThemeSetter';

import styles from './styles.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.headerContainer}>
      <nav>
        <a href='/'>MeuFreela</a>
        <ul className={isOpen ? `${styles.active}` : ''}>
          <li>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              title='linkedin profile'
              rel='noreferrer noopener'
            >
              <FaLinkedinIn size={35} />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com'
              target='_blank'
              title='instagram profile'
              rel='noreferrer noopener'
            >
              <FaInstagram size={35} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              title='twitter profile'
              rel='noreferrer noopener'
            >
              <FaTwitter size={35} />
              <span>Twitter</span>
            </a>
          </li>
          <li className={styles.toggleTheme}>
            <div>
              <ThemeSetter />
              <span>Trocar o tema</span>
            </div>
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
