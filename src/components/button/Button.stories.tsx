import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn } from '@storybook/test';
import { sprinkles } from 'styles/shared/sprinkles.css';
import { Button, ButtonProps } from './Button';

const buttonWeights: ButtonProps['weight'][] = ['solid', 'ghost', 'outline', 'text'];

const ButtonGridDecorator = (color: ButtonProps['color']) => {
  const Decorator = (Story: StoryFn) => (
    <div className={sprinkles({ display: 'grid', gridTemplateRows: 2, gap: 4 })}>
      {[false, true].map(disabled => (
        <div className={sprinkles({ display: 'flex', margin: 'neg-2', flexWrap: 'wrap' })} key={String(disabled)}>
          {buttonWeights.map(weight => (
            <Button
              key={weight}
              {...Story.args}
              className={sprinkles({ margin: 2 })}
              color={color}
              disabled={disabled}
              weight={weight}
            >
              {weight ? `${weight.charAt(0).toUpperCase()}${weight.slice(1)}` : 'Submit'}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );

  Decorator.displayName = `ButtonGridDecorator(${color})`;
  return Decorator;
};

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

export const Accent: Story = {
  decorators: [ButtonGridDecorator('accent')],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

export const Success: Story = {
  decorators: [ButtonGridDecorator('success')],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

export const Warning: Story = {
  decorators: [ButtonGridDecorator('warning')],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

export const Error: Story = {
  decorators: [ButtonGridDecorator('error')],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

export const Neutral: Story = {
  decorators: [ButtonGridDecorator('neutral')],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};
