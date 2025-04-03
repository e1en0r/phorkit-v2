import { createSprinkles } from '@vanilla-extract/sprinkles';
import { borderRadiusProperties } from './sprinkles/borderRadiusSprinkles.css';
import { flexProperties } from './sprinkles/flexSprinkles.css';
import { gridProperties } from './sprinkles/gridSprinkles.css';
import { miscProperties } from './sprinkles/miscSprinkles.css';
import { spacingProperties } from './sprinkles/spacingSprinkles.css';
import { textProperties } from './sprinkles/textSprinkles.css';

export const sprinkles = createSprinkles(
  borderRadiusProperties,
  flexProperties,
  gridProperties,
  miscProperties,
  spacingProperties,
  textProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
