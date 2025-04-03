import { createSprinkles } from '@vanilla-extract/sprinkles';
import { borderRadiusProperties } from './sprinkles/borderRadiusSprinkles.css';
import { flexProperties } from './sprinkles/flexSprinkles.css';
import { fontSizeProperties } from './sprinkles/fontSizeSprinkles.css';
import { gridProperties } from './sprinkles/gridSprinkles.css';

export const sprinkles = createSprinkles(borderRadiusProperties, fontSizeProperties, flexProperties, gridProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
