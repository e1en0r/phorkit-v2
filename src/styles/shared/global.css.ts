import { globalStyle } from '@vanilla-extract/css';
import { themeContract } from 'styles/themes/contract.css';

globalStyle('html, body, #root', {
  height: '100vh',
  width: '100vw',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  overscrollBehaviorY: 'contain',
});

globalStyle('body', {
  vars: {
    '--scrollbar-track-color': themeContract.scrollbar.track,
    '--scrollbar-thumb-color': themeContract.scrollbar.thumb,
  },
});

globalStyle('body::-webkit-scrollbar', {
  width: '8px',
  height: '8px',
});

globalStyle('body::-webkit-scrollbar-track', {
  background: 'var(--scrollbar-track-color)',
  borderRadius: '4px',
});

/**
 * 1. Clip the background to the content-box, instead of the border-box.
 *    This allows the border style (1) to have a visual effect.
 * 2. The border will visually "squeeze" the scrollbar-thumb to
 *    be thinner.
 */
globalStyle('body::-webkit-scrollbar-thumb', {
  backgroundClip: 'content-box' /* [1] */,
  backgroundColor: 'var(--scrollbar-thumb-color)',
  borderRadius: '4px',
  border: '4px solid transparent' /* [2] */,
  minHeight: '60px',
});

/**
 * 1. Prevent a white square in the corner when there are both horizontal
 *    and vertical scrollbars.
 */
globalStyle('body::-webkit-scrollbar-corner', {
  backgroundColor: 'transparent' /* [1] */,
});
