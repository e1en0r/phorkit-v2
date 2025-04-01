import { Theme } from 'config/themes';
import { useThemeContext } from 'context/theme';

export const useTheme = (initialTheme?: Theme): Theme => {
  const [theme] = useThemeContext();
  return initialTheme ?? theme;
};
