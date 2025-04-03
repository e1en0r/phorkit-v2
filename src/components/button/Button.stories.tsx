import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from '@storybook/test';
import { sprinkles } from 'styles/shared/sprinkles.css';
import { Button } from './Button';

const meta = {
  title: 'Controls/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Submit',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  args: {
    color: 'custom',
    style: {
      '--phork-button-background-color': '#3247b7',
      '--phork-button-border-color': '#3247b7',
      '--phork-button-color': '#fff',
      '--phork-button-background-color-disabled': '#c0c2ef',
      '--phork-button-border-color-disabled': '#c0c2ef',
      '--phork-button-color-disabled': '#fff',
      '--phork-button-background-color-hover': '#2c3ea0',
      '--phork-button-border-color-hover': '#2c3ea0',
      '--phork-button-color-hover': '#fff',
      '--phork-button-background-color-active': '#253589',
      '--phork-button-border-color-active': '#253589',
      '--phork-button-color-active': '#fff',
      '--phork-button-color-halo': 'rgba(50, 71, 183, 0.3)',
    } as React.CSSProperties,
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByRole('button'))[0];
    await expect(button).toHaveStyle({
      '--phork-button-background-color': '#3247b7',
      '--phork-button-border-color': '#3247b7',
      '--phork-button-color': '#fff',
      '--phork-button-background-color-disabled': '#c0c2ef',
      '--phork-button-border-color-disabled': '#c0c2ef',
      '--phork-button-color-disabled': '#fff',
      '--phork-button-background-color-hover': '#2c3ea0',
      '--phork-button-border-color-hover': '#2c3ea0',
      '--phork-button-color-hover': '#fff',
      '--phork-button-background-color-active': '#253589',
      '--phork-button-border-color-active': '#253589',
      '--phork-button-color-active': '#fff',
      '--phork-button-color-halo': 'rgba(50, 71, 183, 0.3)',
    });
  },
  // hide from the sidebar navigation
  tags: ['!dev'],
};

export const Accents: Story = {
  render: args => (
    <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })}>
      <Button {...args} className={sprinkles({ margin: 2 })} color="accent" weight="solid" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="accent" weight="ghost" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="accent" weight="outline" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="accent" weight="text" />
    </div>
  ),
};

export const Success: Story = {
  render: args => (
    <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })}>
      <Button {...args} className={sprinkles({ margin: 2 })} color="success" weight="solid" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="success" weight="ghost" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="success" weight="outline" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="success" weight="text" />
    </div>
  ),
};

export const Warning: Story = {
  render: args => (
    <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })}>
      <Button {...args} className={sprinkles({ margin: 2 })} color="warning" weight="solid" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="warning" weight="ghost" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="warning" weight="outline" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="warning" weight="text" />
    </div>
  ),
};

export const Error: Story = {
  render: args => (
    <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })}>
      <Button {...args} className={sprinkles({ margin: 2 })} color="error" weight="solid" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="error" weight="ghost" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="error" weight="outline" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="error" weight="text" />
    </div>
  ),
};

export const Neutral: Story = {
  render: args => (
    <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })}>
      <Button {...args} className={sprinkles({ margin: 2 })} color="neutral" weight="solid" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="neutral" weight="ghost" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="neutral" weight="outline" />
      <Button {...args} className={sprinkles({ margin: 2 })} color="neutral" weight="text" />
    </div>
  ),
};
