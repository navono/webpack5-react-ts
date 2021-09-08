const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/require-default-props': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // These rules don't add much value, are better covered by TypeScript and good definition files
    // 'react/no-direct-mutation-state': 'off',
    // 'react/no-deprecated': 'off',
    'react/no-string-refs': 'off',
    'react/require-render-return': 'off',
    // "no-use-before-define": "off",

    // 'react/jsx-filename-extension': [
    //   'warn',
    //   {
    //     extensions: ['.jsx', '.tsx'],
    //   },
    // ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  // settings: {
  //   react: {
  //     version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
  //   },
  // },
};
