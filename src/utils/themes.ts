import { Theme, THEMES } from 'config/themes';

export const themed = (theme?: Theme): string | undefined => {
  if (theme) {
    return THEMES[theme].className;
  }
  return undefined;
};
