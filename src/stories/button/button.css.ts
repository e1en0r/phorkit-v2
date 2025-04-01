import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { THEME_PREFIX } from 'config/themes';
import { themeContract } from 'styles/themes/contract.css';

export const button = recipe({
  base: {
    appearance: 'button',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    outline: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    textAlign: 'left',
    textDecoration: 'none',

    selectors: {
      '&[data-disabled="true"]': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      '&:after': {
        borderRadius: 'inherit',
        bottom: 0,
        boxShadow: '0 0 0 0 transparent',
        content: '""',
        left: 0,
        opacity: 0.2,
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        transition: 'box-shadow 150ms ease',
      },
    },
  },

  variants: {
    color: (['accent', 'success', 'warning', 'error', 'neutral'] as const).reduce<Record<string, object>>(
      (acc, color) => {
        acc[color] = {
          backgroundColor: themeContract.colors[color].normal,
          color: themeContract.colors[color].contrast,
          selectors: {
            '&:hover': {
              backgroundColor: themeContract.colors[color].D10,
            },
            '&:active': {
              backgroundColor: themeContract.colors[color].D20,
            },
            '&:after': {
              color: themeContract.colors[color].normal,
            },
          },
        };
        return acc;
      },
      {
        custom: {
          backgroundColor: `var(--${THEME_PREFIX}-button-background-color)`,
          color: `var(--${THEME_PREFIX}-button-color)`,

          selectors: {
            '&:hover': {
              backgroundColor: `var(--${THEME_PREFIX}-button-background-color-hover)`,
            },
            '&:active': {
              backgroundColor: `var(--${THEME_PREFIX}-button-background-color-active)`,
            },
          },
        },
      },
    ),
    rounded: {
      false: { borderRadius: '4px' },
      true: { borderRadius: '100px' },
    },
    size: {
      small: {
        fontSize: '0.8rem',
        padding: '0.5rem 1rem',

        '&:focus::after': {
          boxShadow: '0 0 0 0.3rem currentColor',
        },
      },
      medium: {
        fontSize: '1rem',
        padding: '0.75rem 1.5rem',

        '&:focus::after': {
          boxShadow: '0 0 0 0.3rem currentColor',
        },
      },
      large: {
        fontSize: '1.2rem',
        padding: '1rem 2rem',

        '&:focus::after': {
          boxShadow: '0 0 0 0.4rem currentColor',
        },
      },
    },
  },

  defaultVariants: {
    color: 'accent',
    rounded: false,
    size: 'medium',
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
