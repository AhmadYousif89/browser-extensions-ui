import SunIcon from '../../assets/images/icon-sun.svg?react';
import MoonIcon from '../../assets/images/icon-moon.svg?react';
import { useThemeSwitcher } from '../hooks/UseThemeSwitcher';

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeSwitcher();

  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && systemIsDark);

  const handleThemeChange = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      id='theme-btn'
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={handleThemeChange}>
      <span className='sr-only'>Toggle theme</span>
      <SunIcon className={isDark ? 'active' : ''} />
      <MoonIcon className={isDark ? '' : 'active'} />
      <span className='sr-only'>Switch to {isDark ? 'light' : 'dark'} mode</span>
    </button>
  );
}
