import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { THEME_PREFIX } from 'config/themes';
import { fontSize } from 'styles/shared/config/fontSize';
import { gridSize } from 'styles/shared/config/gridSize';
import { sprinkles } from 'styles/shared/sprinkles.css';
import { themeContract } from 'styles/themes/contract.css';

export const button = recipe({
  base: {
    appearance: 'button',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    textAlign: 'left',
    textDecoration: 'none',

    selectors: {
      '&[aria-disabled="true"]': {
        cursor: 'not-allowed',
      },
      '&:after': {
        borderRadius: 'inherit',
        bottom: 0,
        boxShadow: '0 0 0 0 transparent',
        content: '""',
        left: 0,
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
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
            '&[aria-disabled="true"]': {
              backgroundColor: themeContract.colors[color].disabled,
            },
            '&:hover&:not([aria-disabled="true"])': {
              backgroundColor: themeContract.colors[color].D10,
            },
            '&:active&:not([aria-disabled="true"])': {
              backgroundColor: themeContract.colors[color].D20,
            },
            '&:after': {
              color: themeContract.colors[color].disabled,
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
            '&[aria-disabled="true"]': {
              backgroundColor: `var(--${THEME_PREFIX}-button-background-color-disabled)`,
            },
            '&:hover&:not([aria-disabled="true"])': {
              backgroundColor: `var(--${THEME_PREFIX}-button-background-color-hover)`,
            },
            '&:active&:not([aria-disabled="true"])': {
              backgroundColor: `var(--${THEME_PREFIX}-button-background-color-active)`,
            },
            '&:after': {
              color: `var(--${THEME_PREFIX}-button-background-color-halo)`,
            },
          },
        },
      },
    ),
    radius: {
      small: sprinkles({ borderRadius: 'small' }),
      medium: sprinkles({ borderRadius: 'medium' }),
      large: sprinkles({ borderRadius: 'large' }),
      pill: sprinkles({ borderRadius: 'pill' }),
    },
    size: {
      small: {
        fontSize: fontSize.small,
        padding: `${gridSize[2]} ${gridSize[4]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.25rem currentColor',
        },
      },
      medium: {
        fontSize: fontSize.medium,
        padding: `${gridSize[3]} ${gridSize[6]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.25rem currentColor',
        },
      },
      large: {
        fontSize: fontSize.large,
        padding: `${gridSize[4]} ${gridSize[8]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.4rem currentColor',
        },
      },
    },
  },

  defaultVariants: {
    color: 'accent',
    radius: 'medium',
    size: 'medium',
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
