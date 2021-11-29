import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './styles.module.scss';

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={styles.themeSetterContainer}>
      <input
        type='checkbox'
        id='switch'
        checked={theme === 'dark'}
        onChange={handleChange}
      />
      <label htmlFor='switch' />
    </div>
  );
}
