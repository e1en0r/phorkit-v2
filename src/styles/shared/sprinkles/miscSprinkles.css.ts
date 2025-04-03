import { defineProperties } from '@vanilla-extract/sprinkles';

export const miscProperties = defineProperties({
  properties: {
    display: ['flex', 'inline-flex', 'grid'],
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    overflow: ['hidden', 'scroll', 'auto'],
    overflowX: ['hidden', 'scroll', 'auto'],
    overflowY: ['hidden', 'scroll', 'auto'],
  },
});
