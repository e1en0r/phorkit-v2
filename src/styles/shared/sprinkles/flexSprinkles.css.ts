import { defineProperties } from '@vanilla-extract/sprinkles';

export const flexProperties = defineProperties({
  properties: {
    alignContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['auto', 'stretch', 'flex-start', 'center', 'flex-end'],
    flex: ['auto', 'none', 'min-content', 'max-content'],
    flexBasis: ['auto', 'content', 'min-content', 'max-content'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: ['0', '1'],
    flexShrink: ['0', '1'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
  },
});
