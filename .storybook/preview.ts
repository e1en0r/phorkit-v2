import type { Preview } from '@storybook/react';
import 'modern-normalize/modern-normalize.css';
import '../src/styles/themes/index.css';
import { ThemeWrapper } from './ThemeWrapper';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Set the global theme for displaying components.',
      defaultValue: 'light',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light theme' },
          { value: 'dark', title: 'Dark theme' },
        ],
        dynamicTitle: true,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: [undefined, 'light', 'dark'],
      description: 'Component theme override',
      table: { category: 'Theme' },
    },
  },
  parameters: {
    backgrounds: {
      // disable: true,
      values: [
        { name: 'Dark background', value: '#0d0d10' },
        { name: 'Light background', value: '#fafafa' },
      ],
      default: 'Light background',
    },
    controls: {
      matchers: {
        color: /^[a-zA-Z]+Color$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [ThemeWrapper],
};

export default preview;
