import { checkA11y, injectAxe } from 'axe-playwright';
import type { TestRunnerConfig } from '@storybook/test-runner';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
