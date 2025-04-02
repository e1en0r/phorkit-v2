import chroma from 'chroma-js';

const baseColors = {
  primary: '#09649c',
  success: '#017541',
  warning: '#9a5500',
  error: '#9d0000',
  neutral: '#3a3a40',
};

export const lightTheme = {
  colors: {
    accent: {
      normal: baseColors.primary,
      contrast: '#fff',
      disabled: chroma(baseColors.primary).brighten(0.75).tint(0.5).hex(),
      ghost: chroma(baseColors.primary).brighten(0.75).tint(0.75).hex(),
      L10: chroma(baseColors.primary).brighten(0.5).hex(),
      L20: chroma(baseColors.primary).brighten(0.75).hex(),
      D10: chroma(baseColors.primary).darken(0.5).hex(),
      D20: chroma(baseColors.primary).darken(0.75).hex(),
    },
    success: {
      normal: baseColors.success,
      contrast: '#fff',
      disabled: chroma(baseColors.success).brighten(0.75).tint(0.5).hex(),
      ghost: chroma(baseColors.success).brighten(0.75).tint(0.75).hex(),
      L10: chroma(baseColors.success).brighten(0.5).hex(),
      L20: chroma(baseColors.success).brighten(0.75).hex(),
      D10: chroma(baseColors.success).darken(0.5).hex(),
      D20: chroma(baseColors.success).darken(0.75).hex(),
    },
    warning: {
      normal: baseColors.warning,
      contrast: '#fff',
      disabled: chroma(baseColors.warning).brighten(0.75).tint(0.5).hex(),
      ghost: chroma(baseColors.warning).brighten(0.75).tint(0.75).hex(),
      L10: chroma(baseColors.warning).brighten(0.5).hex(),
      L20: chroma(baseColors.warning).brighten(0.75).hex(),
      D10: chroma(baseColors.warning).darken(0.5).hex(),
      D20: chroma(baseColors.warning).darken(0.75).hex(),
    },
    error: {
      normal: baseColors.error,
      contrast: '#fff',
      disabled: chroma(baseColors.error).brighten(0.75).tint(0.5).hex(),
      ghost: chroma(baseColors.error).brighten(0.75).tint(0.75).hex(),
      L10: chroma(baseColors.error).brighten(0.5).hex(),
      L20: chroma(baseColors.error).brighten(0.75).hex(),
      D10: chroma(baseColors.error).darken(0.5).hex(),
      D20: chroma(baseColors.error).darken(0.75).hex(),
    },
    neutral: {
      normal: baseColors.neutral,
      contrast: '#fff',
      disabled: chroma(baseColors.neutral).brighten(0.75).tint(0.5).hex(),
      ghost: chroma(baseColors.neutral).brighten(0.75).tint(0.75).hex(),
      L10: chroma(baseColors.neutral).brighten(0.5).hex(),
      L20: chroma(baseColors.neutral).brighten(0.75).hex(),
      D10: chroma(baseColors.neutral).darken(0.5).hex(),
      D20: chroma(baseColors.neutral).darken(0.75).hex(),
    },
  },
  palettes: {
    primary: {
      background: '#fafafa',
      border: '#d1d1d6',
      text: {
        normal: '#27272c',
        quiet: '#595960',
        quieter: '#bfbfc1',
        quietest: '#e1e1e2',
      },
    },
    secondary: {
      background: '#f4f4f5',
      border: '#c6c6cc',
      text: {
        normal: '#27272c',
        quiet: '#595960',
        quieter: '#bfbfc1',
        quietest: '#e1e1e2',
      },
    },
    tertiary: {
      background: '#e8e8eb',
      border: '#d1d1d6',
      text: {
        normal: '#1d1d23',
        quiet: '#3a3a40',
        quieter: '#595960',
        quietest: '#bfbfc1',
      },
    },
    extreme: {
      background: '#ffffff',
      border: '#d1d1d6',
      text: {
        normal: '#27272c',
        quiet: '#595960',
        quieter: '#bfbfc1',
        quietest: '#e1e1e2',
      },
    },
  },
  scrollbar: {
    track: 'transparent',
    thumb: '#dddde0',
  },
  shadows: {
    small: '0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
    medium: '0px 2px 4px 1px rgba(0, 0, 0, 0.1)',
    large: '0px 8px 40px 0px rgba(0, 0, 0, 0.1)',
  },
};
