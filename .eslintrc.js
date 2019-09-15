module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'prettier/prettier': ['error'],
    'no-use-before-define': 0,
    'import/order': 1,
    'no-param-reassign': 0,
    'import/newline-after-import': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'react/jsx-uses-vars': 2,
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
