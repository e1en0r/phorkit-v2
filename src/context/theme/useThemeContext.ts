import { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeContext';

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};
