export interface Viewports {
  '2xsmall': { max: number };
  xsmall: { min: number; max: number };
  small: { min: number; max: number };
  medium: { min: number; max: number };
  large: { min: number; max: number };
  xlarge: { min: number; max: number };
  '2xlarge': { min: number };
}

export const VIEWPORTS = {
  '2xsmall': { max: 414 },
  xsmall: { min: 415, max: 575.999 },
  small: { min: 576, max: 768.999 },
  medium: { min: 769, max: 992.999 },
  large: { min: 993, max: 1200.999 },
  xlarge: { min: 1201, max: 1400.999 },
  '2xlarge': { min: 1401 },
};

export type ViewportKey = keyof Viewports;
