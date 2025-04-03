import type { Preview } from '@storybook/react';
import 'modern-normalize/modern-normalize.css';
import '../src/index.css';
import '../src/styles/themes/index.css';
import { ThemeWrapper } from './ThemeWrapper';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Set the global theme for displaying components.',
      defaultValue: 'split',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light theme', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark theme', icon: 'circle' },
          { value: 'split', title: 'Split view', icon: 'mirror' },
        ],
        dynamicTitle: true,
      },
    },
    palette: {
      description: 'Set the global background color.',
      defaultValue: 'primary',
      toolbar: {
        items: [
          { value: 'primary', title: 'Primary palette' },
          { value: 'secondary', title: 'Secondary palette' },
          { value: 'tertiary', title: 'Tertiary palette' },
          { value: 'extreme', title: 'Extreme palette' },
        ],
        dynamicTitle: true,
      },
    },
  },
  argTypes: {
    style: {
      description: 'Component style override',
      table: { category: 'Style' },
    },
    theme: {
      control: 'inline-radio',
      options: [undefined, 'light', 'dark'],
      description: 'Component theme override',
      table: { category: 'Theme' },
    },
  },
  parameters: {
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    controls: {
      matchers: {
        color: /^[a-zA-Z]+Color$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        title: 'Table of Contents',
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Introduction', 'Changelog', 'Colors', '*'],
      },
    },
  },
  decorators: [ThemeWrapper],
};

export default preview;
