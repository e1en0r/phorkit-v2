import { createSprinkles } from '@vanilla-extract/sprinkles';
import { flexProperties } from './sprinkles/flexSprinkles.css';
import { gridProperties } from './sprinkles/gridSprinkles.css';

export const sprinkles = createSprinkles(flexProperties, gridProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
