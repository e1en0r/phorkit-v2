import React from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import { THEMES } from '../src/config/themes';

export const ThemeWrapper = (Story: StoryFn, context: StoryContext) => {
  const currentThemeClass = context.globals.theme === 'dark' ? THEMES.dark.className : THEMES.light.className;
  return <div className={currentThemeClass}>{Story({}, context)}</div>;
};
