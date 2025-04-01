import { defineProperties } from '@vanilla-extract/sprinkles';
import { LAYOUT_GRID_BASE, LAYOUT_GRID_BASE_UNIT } from 'config/sizes';

const gridBase = LAYOUT_GRID_BASE;
const gridBaseUnit = LAYOUT_GRID_BASE_UNIT;

const gridSizes = {
  0: 0,
  1: `${gridBase}${gridBaseUnit}`,
  2: `${gridBase * 2}${gridBaseUnit}`,
  3: `${gridBase * 3}${gridBaseUnit}`,
  4: `${gridBase * 4}${gridBaseUnit}`,
  5: `${gridBase * 5}${gridBaseUnit}`,
  6: `${gridBase * 6}${gridBaseUnit}`,
  7: `${gridBase * 7}${gridBaseUnit}`,
  8: `${gridBase * 8}${gridBaseUnit}`,
  9: `${gridBase * 9}${gridBaseUnit}`,
  10: `${gridBase * 10}${gridBaseUnit}`,
};

export const gridProperties = defineProperties({
  properties: {
    paddingTop: gridSizes,
    paddingBottom: gridSizes,
    paddingLeft: gridSizes,
    paddingRight: gridSizes,
    marginTop: gridSizes,
    marginBottom: gridSizes,
    marginLeft: gridSizes,
    marginRight: gridSizes,
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
