module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true
    // jest: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['scripts/*', 'src/setupProxy.js'],
      rules: {
        '@typescript-eslint/no-require-imports': ['off']
      }
    },
    {
      files: ['**/**.d.ts'],
      rules: {
        'spaced-comment': ['off']
      }
    }
  ]
};
