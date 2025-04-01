import baseConfig from './config-eslint/base.js';
import importConfig from './config-eslint/import.js';
import prettierConfig from './config-eslint/prettier.js';
import reactBaseConfig from './config-eslint/react.base.js';
import storybookConfig from './config-eslint/storybook.js';
import typescriptConfig from './config-eslint/typescript.js';
import vitestConfig from './config-eslint/vitest.js';

export default [
  ...baseConfig,
  ...importConfig,
  ...reactBaseConfig,
  ...storybookConfig,
  ...vitestConfig,
  ...typescriptConfig,
  ...prettierConfig,

  { ignores: ['config-eslint/*', '.storybook', 'vitest.workspace.ts'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];
