import { LAYOUT_GRID_BASE, LAYOUT_GRID_BASE_UNIT } from 'config/sizes';

const gridBase = LAYOUT_GRID_BASE;
const gridBaseUnit = LAYOUT_GRID_BASE_UNIT;

export const spacingSize = Array.from({ length: 20 }, (_, i) => i).reduce(
  (acc, i) => {
    acc[i] = i === 0 ? 0 : `${gridBase * i}${gridBaseUnit}`;
    return acc;
  },
  {} as Record<number, string | number>,
);

export const negativeSpacingSize = Array.from({ length: 20 }, (_, i) => i).reduce(
  (acc, i) => {
    acc[`neg-${i}`] = i === 0 ? 0 : `-${gridBase * i}${gridBaseUnit}`;
    return acc;
  },
  {} as Record<string, string | number>,
);
