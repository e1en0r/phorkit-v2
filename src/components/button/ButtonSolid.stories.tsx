import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Controls/Button/Solid',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Submit',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    color: 'accent',
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByText('Submit'))[0];
    await expect(button).toBeInTheDocument();
  },
};

export const Success: Story = {
  args: {
    color: 'success',
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByText('Submit'))[0];
    await expect(button).toBeInTheDocument();
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByText('Submit'))[0];
    await expect(button).toBeInTheDocument();
  },
};

export const Error: Story = {
  args: {
    color: 'error',
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByText('Submit'))[0];
    await expect(button).toBeInTheDocument();
  },
};

export const Neutral: Story = {
  args: {
    color: 'neutral',
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByText('Submit'))[0];
    await expect(button).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByRole('button'))[0];
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');
  },
};

export const Link: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#example" target="_blank">
        Submit
      </a>
    ),
  },
  play: async ({ canvas }) => {
    const button = (await canvas.findAllByRole('link'))[0];
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('href', '#example');
  },
};
