import { createGlobalTheme } from '@vanilla-extract/css';
import { THEMES } from 'config/themes';
import { themeContract } from './contract.css';
import { darkTheme } from './dark.css';
import { lightTheme } from './light.css';

createGlobalTheme(`.${THEMES.dark.className}`, themeContract, darkTheme);
createGlobalTheme(`.${THEMES.light.className}`, themeContract, lightTheme);
