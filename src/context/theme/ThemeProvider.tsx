import React, { useEffect, useState } from 'react';
import { Theme, THEMES } from 'config/themes';
import { ThemeContext } from './ThemeContext';

export interface ThemeProps {
  children: React.ReactNode;
  element?: HTMLElement;
  theme?: Theme;
}

export function ThemeProvider({
  children,
  element = document.body,
  theme: initialTheme = 'light',
}: ThemeProps): React.ReactElement {
  const value = useState<Theme>(initialTheme);
  const [currentTheme] = value;

  useEffect(() => {
    const themeClasses = [THEMES.dark.className, THEMES.light.className];
    const currentThemeClass = currentTheme === 'dark' ? THEMES.dark.className : THEMES.light.className;

    element.classList.remove(...themeClasses);
    element.classList.add(currentThemeClass);
  }, [element.classList, currentTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.displayName = 'ThemeProvider';
