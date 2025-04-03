import { defineProperties } from '@vanilla-extract/sprinkles';
import { fontSize } from 'styles/shared/config/fontSize';

export const textProperties = defineProperties({
  properties: {
    fontSize,
    textAlign: ['left', 'center', 'right'],
    textDecoration: ['none', 'underline', 'line-through'],
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
  },
});
