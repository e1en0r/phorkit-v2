import { createGlobalThemeContract } from '@vanilla-extract/css';
import { THEME_PREFIX } from 'config/themes';

const colorThemeContract = {
  normal: '',
  contrast: '',
  ghost: '',
  L10: '',
  L20: '',
  L30: '',
  D10: '',
  D20: '',
  D30: '',
};

const paletteThemeContract = {
  background: '',
  border: '',
  text: {
    normal: '',
    quiet: '',
    quieter: '',
    quietest: '',
  },
};

export const themeContract = createGlobalThemeContract(
  {
    colors: {
      accent: colorThemeContract,
      success: colorThemeContract,
      warning: colorThemeContract,
      error: colorThemeContract,
      neutral: colorThemeContract,
    },
    palettes: {
      primary: paletteThemeContract,
      secondary: paletteThemeContract,
      tertiary: paletteThemeContract,
      extreme: paletteThemeContract,
    },
    scrollbar: {
      track: '',
      thumb: '',
    },
    shadows: {
      small: '',
      medium: '',
      large: '',
    },
  },
  (_value, path) => `${THEME_PREFIX}-${path.join('-')}`,
);
