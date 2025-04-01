import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from '@storybook/test';
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

export const Accent: Story = {
  args: {
    color: 'accent',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByText('Submit');
    await expect(button).toBeInTheDocument();

    const styles = window.getComputedStyle(button);
    await expect(['rgb(0, 96, 206)', 'rgb(0, 186, 238)']).toContain(styles.backgroundColor);
  },
};

export const Success: Story = {
  args: {
    color: 'success',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByText('Submit');
    await expect(button).toBeInTheDocument();

    const styles = window.getComputedStyle(button);
    await expect(['rgb(124, 187, 63)', 'rgb(126, 206, 25)']).toContain(styles.backgroundColor);
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByText('Submit');
    await expect(button).toBeInTheDocument();

    const styles = window.getComputedStyle(button);
    await expect(styles.backgroundColor).toBe('rgb(255, 142, 13)');
  },
};

export const Error: Story = {
  args: {
    color: 'error',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByText('Submit');
    await expect(button).toBeInTheDocument();

    const styles = window.getComputedStyle(button);
    await expect(styles.backgroundColor).toBe('rgb(255, 50, 50)');
  },
};

export const Neutral: Story = {
  args: {
    color: 'neutral',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByText('Submit');
    await expect(button).toBeInTheDocument();

    const styles = window.getComputedStyle(button);
    await expect(['rgb(128, 128, 134)', 'rgb(107, 108, 117)']).toContain(styles.backgroundColor);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button');
    await expect(button).toBeDisabled();
  },
};

export const Custom: Story = {
  args: {
    color: 'custom',
    style: {
      '--phork-button-background-color': '#3247b7',
      '--phork-button-background-color-hover': '#2c3ea0',
      '--phork-button-background-color-active': '#253589',
      '--phork-button-color': '#fff',
    } as React.CSSProperties,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button');
    await expect(button).toHaveStyle({
      '--phork-button-background-color': '#3247b7',
      '--phork-button-background-color-hover': '#2c3ea0',
      '--phork-button-background-color-active': '#253589',
      '--phork-button-color': '#fff',
    });
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button');
    await expect(button).toHaveClass('phork-light-theme');
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button');
    await expect(button).toHaveClass('phork-dark-theme');
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
    const button = await canvas.findByRole('link');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('href', '#example');
  },
};
