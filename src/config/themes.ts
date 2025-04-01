export const THEME_PREFIX = 'phork';

export const THEMES = {
  light: {
    className: 'phork-light-theme',
  },
  dark: {
    className: 'phork-dark-theme',
  },
};

export type Theme = keyof typeof THEMES;
