import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const dimension = recipe({
  variants: {
    width: {
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      },
      viewport: {
        width: '100vw',
      },
    },
    height: {
      full: {
        height: '100%',
      },
      auto: {
        height: 'auto',
      },
      viewport: {
        height: '100vh',
      },
    },
    overflow: {
      auto: {
        overflow: 'auto',
      },
      hidden: {
        overflow: 'hidden',
      },
      visible: {
        overflow: 'visible',
      },
      scroll: {
        overflow: 'scroll',
      },
    },
  },
});

export type DimensionVariants = NonNullable<RecipeVariants<typeof dimension>>;
