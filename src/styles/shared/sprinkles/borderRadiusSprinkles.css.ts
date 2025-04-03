import { defineProperties } from '@vanilla-extract/sprinkles';
import { borderRadius } from 'styles/shared/config/borderRadius';

export const borderRadiusProperties = defineProperties({
  properties: {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  shorthands: {
    borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius'],
  },
});
