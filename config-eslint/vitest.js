import vitest from 'eslint-plugin-vitest';

export default [
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
    },
  },
];
