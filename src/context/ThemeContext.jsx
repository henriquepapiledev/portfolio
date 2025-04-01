import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
