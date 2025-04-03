import { Theme } from 'config/themes';
import { darkTheme } from './config/dark';
import { lightTheme } from './config/light';

export const themes: Record<Theme, typeof lightTheme> = {
  dark: darkTheme,
  light: lightTheme,
};
