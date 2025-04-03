import clsx from 'clsx';
import React from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import { palette } from '../src/styles/shared/palette.css';
import { sprinkles } from '../src/styles/shared/sprinkles.css';
import { Theme, THEMES } from '../src/config/themes';

const ThemeItem = ({ context, theme, Story }: { context: StoryContext; theme: Theme; Story: StoryFn }) => (
  <div
    data-theme={theme}
    className={clsx(
      THEMES[theme].className,
      sprinkles({ display: 'flex', flex: 'auto', alignItems: 'center', padding: 4 }),
      palette({ palette: context.globals.palette ?? 'primary' }),
    )}
  >
    {Story({}, context)}
  </div>
);

export const ThemeWrapper = (Story: StoryFn, context: StoryContext) => {
  if (!context.args.theme && context.globals.theme === 'split') {
    return (
      <div
        className={clsx(
          sprinkles({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'stretch',
            alignItems: 'center',
            flex: 'auto',
          }),
        )}
      >
        <ThemeItem context={context} theme="light" Story={Story} />
        <ThemeItem context={context} theme="dark" Story={Story} />
      </div>
    );
  }

  return <ThemeItem context={context} theme={context.args.theme ?? context.globals.theme} Story={Story} />;
};
