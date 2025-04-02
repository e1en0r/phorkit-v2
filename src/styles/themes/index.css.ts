import { createGlobalTheme } from '@vanilla-extract/css';
import { Theme, THEMES } from 'config/themes';
import { themeContract } from './contract.css';
import { themes } from './index';

Object.keys(themes).forEach(themeKey => {
  const theme = themeKey as Theme;
  createGlobalTheme(`.${THEMES[theme].className}`, themeContract, themes[theme]);
});
