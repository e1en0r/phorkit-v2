import { defineProperties } from '@vanilla-extract/sprinkles';
import { negativeSpacingSize, spacingSize } from 'styles/shared/config/spacingSize';

export const spacingProperties = defineProperties({
  properties: {
    paddingTop: spacingSize,
    paddingBottom: spacingSize,
    paddingLeft: spacingSize,
    paddingRight: spacingSize,
    marginTop: { ...spacingSize, ...negativeSpacingSize },
    marginBottom: { ...spacingSize, ...negativeSpacingSize },
    marginLeft: { ...spacingSize, ...negativeSpacingSize },
    marginRight: { ...spacingSize, ...negativeSpacingSize },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});
