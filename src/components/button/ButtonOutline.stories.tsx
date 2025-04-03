import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import * as baseStories from './ButtonSolid.stories';

const meta = {
  title: 'Controls/Button/Outline',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Submit',
    onClick: fn(),
    weight: 'outline',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  render: args => <Button {...baseStories.Accent.args} {...args} />,
};

export const Success: Story = {
  render: args => <Button {...baseStories.Success.args} {...args} />,
};

export const Warning: Story = {
  render: args => <Button {...baseStories.Warning.args} {...args} />,
};

export const Error: Story = {
  render: args => <Button {...baseStories.Error.args} {...args} />,
};

export const Neutral: Story = {
  render: args => <Button {...baseStories.Neutral.args} {...args} />,
};

export const Disabled: Story = {
  render: args => <Button {...baseStories.Disabled.args} {...args} />,
};
