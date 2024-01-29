import { ReactNode, createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type TTheme = '' | 'dark' | 'light';

interface ThemeContextProps {
  theme?: TTheme;
  changeTheme?: () => void;
}

interface AppThemeProviderProps {
  children: ReactNode;
}

const localStorageThemeName = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const [theme, setTheme] = useState<TTheme>('dark');

  function changeTheme() {
    const newTheme: TTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    setLocalStorage(localStorageThemeName, newTheme);
  }

  useEffect(() => {
    const themevalue: TTheme = getLocalStorage(localStorageThemeName);
    const defaultTheme = themevalue === null ? 'dark' : themevalue;
    setTheme(defaultTheme);
  }, [getLocalStorage]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
