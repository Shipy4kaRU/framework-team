import { useLayoutEffect, useState, Dispatch } from 'react';
import { SetStateAction } from 'react';

type ThemeTypes = 'light' | 'dark';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)');
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = (): { theme: ThemeTypes; setTheme: Dispatch<SetStateAction<ThemeTypes>> } => {
  const [theme, setTheme] = useState<ThemeTypes>(() => {
    const localTheme = localStorage.getItem('theme') as ThemeTypes | null;
    return localTheme === 'light' || localTheme === 'dark' ? localTheme : defaultTheme;
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
