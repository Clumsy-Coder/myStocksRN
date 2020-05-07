module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jest'],
  rules: {
    'react/jsx-one-expression-per-line': ['off'],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  ignorePatterns: ['test-results'],
};
