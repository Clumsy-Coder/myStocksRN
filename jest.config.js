module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx, ts, tsx}',
    '!**/node_modules/**',
    '!**/android/**',
    '!**/ios/**',
    '!**/.vscode/**',
    '!**/.circleci/**',
    '!metro.config.js',
    '!babel.config.js',
    '!jest.config.js',
    '!**/test-results/**',
  ],
  coverageDirectory: './test-results/coverage/',
  coverageReporters: ['text', 'html'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './test-results/test-reports.html',
        includeFailureMsg: true,
        theme: 'darkTheme',
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './test-results/junit',
      },
    ],
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
    },
  },
  setupFiles: ['./jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@?react-navigation)'],
};
