import chroma from 'chroma-js';

const baseColors = {
  primary: '#0b84ff',
  success: '#4fba71',
  warning: '#ff9f0a',
  error: '#f13d2c',
  neutral: '#b6b8c0',
};

export const darkTheme = {
  colors: {
    accent: {
      normal: baseColors.primary,
      contrast: '#0d0d10',
      disabled: chroma(baseColors.primary).brighten(0.75).shade(0.75).hex(),
      ghost: chroma(baseColors.primary).brighten(0.75).shade(0.85).hex(),
      D10: chroma(baseColors.primary).brighten(0.5).hex(),
      D20: chroma(baseColors.primary).brighten(0.75).hex(),
      L10: chroma(baseColors.primary).darken(0.5).hex(),
      L20: chroma(baseColors.primary).darken(0.75).hex(),
    },
    success: {
      normal: baseColors.success,
      contrast: '#0d0d10',
      disabled: chroma(baseColors.success).brighten(0.75).shade(0.8).hex(),
      ghost: chroma(baseColors.success).brighten(0.75).shade(0.85).hex(),
      D10: chroma(baseColors.success).brighten(0.5).hex(),
      D20: chroma(baseColors.success).brighten(0.75).hex(),
      L10: chroma(baseColors.success).darken(0.5).hex(),
      L20: chroma(baseColors.success).darken(0.75).hex(),
    },
    warning: {
      normal: baseColors.warning,
      contrast: '#0d0d10',
      disabled: chroma(baseColors.warning).brighten(0.75).shade(0.8).hex(),
      ghost: chroma(baseColors.warning).brighten(0.75).shade(0.85).hex(),
      D10: chroma(baseColors.warning).brighten(0.5).hex(),
      D20: chroma(baseColors.warning).brighten(0.75).hex(),
      L10: chroma(baseColors.warning).darken(0.5).hex(),
      L20: chroma(baseColors.warning).darken(0.75).hex(),
    },
    error: {
      normal: baseColors.error,
      contrast: '#0d0d10',
      disabled: chroma(baseColors.error).brighten(0.75).shade(0.8).hex(),
      ghost: chroma(baseColors.error).brighten(0.75).shade(0.85).hex(),
      D10: chroma(baseColors.error).brighten(0.5).hex(),
      D20: chroma(baseColors.error).brighten(0.75).hex(),
      L10: chroma(baseColors.error).darken(0.5).hex(),
      L20: chroma(baseColors.error).darken(0.75).hex(),
    },
    neutral: {
      normal: baseColors.neutral,
      contrast: '#0d0d10',
      disabled: chroma(baseColors.neutral).brighten(0.75).shade(0.8).hex(),
      ghost: chroma(baseColors.neutral).brighten(0.75).shade(0.85).hex(),
      D10: chroma(baseColors.neutral).brighten(0.5).hex(),
      D20: chroma(baseColors.neutral).brighten(0.75).hex(),
      L10: chroma(baseColors.neutral).darken(0.5).hex(),
      L20: chroma(baseColors.neutral).darken(0.75).hex(),
    },
  },
  palettes: {
    primary: {
      background: '#17171d',
      border: '#3d3f49',
      text: {
        normal: '#d6d7d9',
        quiet: '#8f9096',
        quieter: '#6b6c75',
        quietest: '#474954',
      },
    },
    secondary: {
      background: '#212128',
      border: '#474954',
      text: {
        normal: '#e8e9ea',
        quiet: '#8f9096',
        quieter: '#6b6c75',
        quietest: '#474954',
      },
    },
    tertiary: {
      background: '#34353e',
      border: '#474954',
      text: {
        normal: '#fafafa',
        quiet: '#8f9096',
        quieter: '#6b6c75',
        quietest: '#474954',
      },
    },
    extreme: {
      background: '#0d0d10',
      border: '#3d3f49',
      text: {
        normal: '#fafafa',
        quiet: '#d6d7d9',
        quieter: '#8f9096',
        quietest: '#6b6c75',
      },
    },
  },
  scrollbar: {
    track: 'transparent',
    thumb: '#34353e',
  },
  shadows: {
    small: '0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
    medium: '0px 2px 4px 1px rgba(0, 0, 0, 0.1)',
    large: '0px 8px 40px 0px rgba(0, 0, 0, 0.1)',
  },
};
