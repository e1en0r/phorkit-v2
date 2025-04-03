import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { THEME_PREFIX } from 'config/themes';
import { fontSize } from 'styles/shared/config/fontSize';
import { spacingSize } from 'styles/shared/config/spacingSize';
import { sprinkles } from 'styles/shared/sprinkles.css';
import { themeContract } from 'styles/themes/contract.css';

const buttonColors = ['accent', 'success', 'warning', 'error', 'neutral'] as const;

export const button = recipe({
  base: {
    appearance: 'button',
    border: '1px solid transparent',
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
        boxShadow: '0 0 0 0 transparent',
        content: '""',
        pointerEvents: 'none',
        position: 'absolute',
        // account for the border width
        bottom: '-1px',
        left: '-1px',
        right: '-1px',
        top: '-1px',
      },
    },
  },
  variants: {
    custom: {
      true: {
        backgroundColor: `var(--${THEME_PREFIX}-button-background-color)`,
        borderColor: `var(--${THEME_PREFIX}-button-border-color)`,
        color: `var(--${THEME_PREFIX}-button-color)`,
        selectors: {
          '&[aria-disabled="true"]': {
            backgroundColor: `var(--${THEME_PREFIX}-button-background-color-disabled)`,
            borderColor: `var(--${THEME_PREFIX}-button-border-color-disabled)`,
            color: `var(--${THEME_PREFIX}-button-color-disabled)`,
          },
          '&:hover&:not([aria-disabled="true"])': {
            backgroundColor: `var(--${THEME_PREFIX}-button-background-color-hover)`,
            borderColor: `var(--${THEME_PREFIX}-button-border-color-hover)`,
            color: `var(--${THEME_PREFIX}-button-color-hover)`,
          },
          '&:active&:not([aria-disabled="true"])': {
            backgroundColor: `var(--${THEME_PREFIX}-button-background-color-active)`,
            borderColor: `var(--${THEME_PREFIX}-button-border-color-active)`,
            color: `var(--${THEME_PREFIX}-button-color-active)`,
          },
          '&:after': {
            color: `var(--${THEME_PREFIX}-button-color-halo)`,
          },
        },
      },
    },
    radius: {
      small: sprinkles({ borderRadius: 'small' }),
      medium: sprinkles({ borderRadius: 'medium' }),
      large: sprinkles({ borderRadius: 'large' }),
      pill: sprinkles({ borderRadius: 'pill' }),
    },
    size: {
      small: {
        fontSize: fontSize.small,
        padding: `${spacingSize[2]} ${spacingSize[4]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.25rem currentColor',
        },
      },
      medium: {
        fontSize: fontSize.medium,
        padding: `${spacingSize[3]} ${spacingSize[6]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.25rem currentColor',
        },
      },
      large: {
        fontSize: fontSize.large,
        padding: `${spacingSize[4]} ${spacingSize[8]}`,

        '&:focus::after': {
          boxShadow: '0 0 0 0.4rem currentColor',
        },
      },
    },
  },
  defaultVariants: {
    custom: false,
    radius: 'medium',
    size: 'medium',
  },
});

export const solidButton = recipe({
  variants: {
    color: buttonColors.reduce<Record<string, object>>((acc, color) => {
      acc[color] = {
        backgroundColor: themeContract.colors[color].normal,
        borderColor: themeContract.colors[color].normal,
        color: themeContract.colors[color].contrast,
        selectors: {
          '&[aria-disabled="true"]': {
            backgroundColor: themeContract.colors[color].disabled,
            borderColor: themeContract.colors[color].disabled,
          },
          '&:hover&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].D10,
            borderColor: themeContract.colors[color].D10,
          },
          '&:active&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].D20,
            borderColor: themeContract.colors[color].D20,
          },
          '&:after': {
            color: themeContract.colors[color].disabled,
          },
        },
      };
      return acc;
    }, {}),
  },
  defaultVariants: {
    color: 'accent',
  },
});

export const ghostButton = recipe({
  variants: {
    color: buttonColors.reduce<Record<string, object>>((acc, color) => {
      acc[color] = {
        backgroundColor: themeContract.colors[color].ghost,
        borderColor: themeContract.colors[color].normal,
        color: themeContract.colors[color].normal,
        selectors: {
          '&[aria-disabled="true"]': {
            backgroundColor: 'transparent',
            borderColor: themeContract.colors[color].disabled,
            color: themeContract.colors[color].disabled,
          },
          '&:hover&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].normal,
            borderColor: themeContract.colors[color].D10,
            color: themeContract.colors[color].contrast,
          },
          '&:active&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].D10,
            borderColor: themeContract.colors[color].D20,
            color: themeContract.colors[color].contrast,
          },
          '&:after': {
            color: themeContract.colors[color].disabled,
          },
        },
      };
      return acc;
    }, {}),
  },
  defaultVariants: {
    color: 'accent',
  },
});

export const outlineButton = recipe({
  variants: {
    color: buttonColors.reduce<Record<string, object>>((acc, color) => {
      acc[color] = {
        backgroundColor: 'transparent',
        borderColor: themeContract.colors[color].normal,
        color: themeContract.colors[color].normal,
        selectors: {
          '&[aria-disabled="true"]': {
            borderColor: themeContract.colors[color].disabled,
            color: themeContract.colors[color].disabled,
          },
          '&:hover&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].ghost,
            borderColor: themeContract.colors[color].D10,
            color: themeContract.colors[color].D10,
          },
          '&:active&:not([aria-disabled="true"])': {
            backgroundColor: themeContract.colors[color].ghost,
            borderColor: themeContract.colors[color].D20,
            color: themeContract.colors[color].D20,
          },
          '&:after': {
            color: themeContract.colors[color].disabled,
          },
        },
      };
      return acc;
    }, {}),
  },
  defaultVariants: {
    color: 'accent',
  },
});

export const textButton = recipe({
  variants: {
    color: buttonColors.reduce<Record<string, object>>((acc, color) => {
      acc[color] = {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: themeContract.colors[color].normal,
        selectors: {
          '&[aria-disabled="true"]': {
            color: themeContract.colors[color].disabled,
          },
          '&:hover&:not([aria-disabled="true"])': {
            borderColor: themeContract.colors[color].D10,
            color: themeContract.colors[color].D10,
          },
          '&:active&:not([aria-disabled="true"])': {
            borderColor: themeContract.colors[color].D20,
            color: themeContract.colors[color].D20,
          },
          '&:after': {
            color: themeContract.colors[color].disabled,
          },
        },
      };
      return acc;
    }, {}),
  },
  defaultVariants: {
    color: 'accent',
  },
});

export const buttonWeights = {
  solid: solidButton,
  ghost: ghostButton,
  outline: outlineButton,
  text: textButton,
};

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>> & {
  color?: (typeof buttonColors)[number];
};
