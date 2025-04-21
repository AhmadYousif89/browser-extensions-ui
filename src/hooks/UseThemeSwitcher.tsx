import { useEffect, useState } from 'react';

export type Theme = 'system' | 'light' | 'dark';

export function useThemeSwitcher() {
  const [theme, setSelectedTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system',
  );

  const setTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
