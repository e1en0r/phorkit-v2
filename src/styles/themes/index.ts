import { Theme } from 'config/themes';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export const themes: Record<Theme, typeof lightTheme> = {
  dark: darkTheme,
  light: lightTheme,
};
