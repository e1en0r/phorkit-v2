import { defineProperties } from '@vanilla-extract/sprinkles';
import { spacingSize } from 'styles/shared/config/spacingSize';

export const gridFractions = Array.from({ length: 12 }, (_, i) => i).reduce(
  (acc, i) => {
    acc[i + 1] = i === 0 ? '1fr' : `repeat(${i + 1}, 1fr)`;
    return acc;
  },
  {} as Record<number, string | number>,
);

export const gridProperties = defineProperties({
  properties: {
    gridTemplateColumns: gridFractions,
    gridTemplateRows: gridFractions,
    gridColumnGap: spacingSize,
    gridRowGap: spacingSize,
    gridGap: spacingSize,
    gridAutoFlow: ['row', 'column', 'dense'],
    gridAutoColumns: ['auto', 'min-content', 'max-content'],
    gridAutoRows: ['auto', 'min-content', 'max-content'],
  },
  shorthands: {
    grid: ['gridTemplateColumns', 'gridTemplateRows'],
    gap: ['gridColumnGap', 'gridRowGap'],
  },
});
