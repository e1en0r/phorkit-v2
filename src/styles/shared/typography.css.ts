import { style } from '@vanilla-extract/css';

export const typographyLink = style({
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',

  ':hover': {
    opacity: 0.8,
  },

  ':focus': {
    outline: 'none',
    textShadow: '0px 0px 4px rgba(0, 0, 0, 0.50)',
  },
});
