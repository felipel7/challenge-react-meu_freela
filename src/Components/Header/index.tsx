import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <h3>MeuFreela</h3>

        <ul>
          <li>
            <a href='https://www.linkedin.com' title='linkedin profile'>
              <FaLinkedinIn size={32} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com' title='instagram profile'>
              <FaInstagram size={32} />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' title='twitter profile'>
              <FaTwitter size={32} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
