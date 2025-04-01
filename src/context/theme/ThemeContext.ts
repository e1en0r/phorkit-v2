import { createContext } from 'react';
import { Theme } from 'config/themes';

export type ThemeContextValue = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

export const ThemeContext = createContext<ThemeContextValue | null>(null);
