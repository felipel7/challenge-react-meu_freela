import { useContext } from 'react';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';
import Switch from 'react-switch';

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Switch
      checked={theme === 'light'}
      onChange={handleThemeToggle}
      onColor='#e6e6e6'
      checkedIcon={
        <MdOutlineWbSunny
          size={20}
          style={{ margin: '4.5px' }}
          color={'#666'}
        />
      }
      uncheckedIcon={
        <MdDarkMode size={20} style={{ margin: '4.5px' }} color={'#333'} />
      }
    />
  );
}
