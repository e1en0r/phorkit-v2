import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const border = recipe({
  base: {
    borderStyle: 'solid',
    borderWidth: 0,
  },

  variants: {
    top: {
      true: {
        borderTopWidth: '1px',
      },
    },
    right: {
      true: {
        borderRightWidth: '1px',
      },
    },
    bottom: {
      true: {
        borderBottomWidth: '1px',
      },
    },
    left: {
      true: {
        borderLeftWidth: '1px',
      },
    },
  },
});

export type BorderVariants = NonNullable<RecipeVariants<typeof border>>;
