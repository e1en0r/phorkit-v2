export const HideToc = () => (
  <style>
    {`
      .sbdocs-wrapper > div:has(div > .toc-wrapper) {
        display: none;
      }
    `}
  </style>
);
