import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeContract } from 'styles/themes/contract.css';

export const palette = recipe({
  variants: {
    palette: {
      primary: {
        backgroundColor: themeContract.palettes.primary.background,
        borderColor: themeContract.palettes.primary.border,
        color: themeContract.palettes.primary.text.normal,
      },
      secondary: {
        backgroundColor: themeContract.palettes.secondary.background,
        borderColor: themeContract.palettes.secondary.border,
        color: themeContract.palettes.secondary.text.normal,
      },
      tertiary: {
        backgroundColor: themeContract.palettes.tertiary.background,
        borderColor: themeContract.palettes.tertiary.border,
        color: themeContract.palettes.tertiary.text.normal,
      },
      extreme: {
        backgroundColor: themeContract.palettes.extreme.background,
        borderColor: themeContract.palettes.extreme.border,
        color: themeContract.palettes.extreme.text.normal,
      },
    },
  },

  defaultVariants: {
    palette: 'primary',
  },
});

export type PaletteVariants = NonNullable<RecipeVariants<typeof palette>>;
