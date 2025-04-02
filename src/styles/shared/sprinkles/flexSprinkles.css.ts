import { defineProperties } from '@vanilla-extract/sprinkles';

export const flexProperties = defineProperties({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flex: ['auto', 'none', 'min-content', 'max-content'],
  },
});
