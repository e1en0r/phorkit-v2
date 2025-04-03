import { defineProperties } from '@vanilla-extract/sprinkles';
import { gridSize } from 'styles/shared/config/gridSize';

export const gridProperties = defineProperties({
  properties: {
    paddingTop: gridSize,
    paddingBottom: gridSize,
    paddingLeft: gridSize,
    paddingRight: gridSize,
    marginTop: gridSize,
    marginBottom: gridSize,
    marginLeft: gridSize,
    marginRight: gridSize,
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
