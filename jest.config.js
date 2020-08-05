module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: false,
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,jsx, ts, tsx}',
    './src/**',
    '!**/node_modules/**',
    '!**/android/**',
    '!**/ios/**',
    '!**/.vscode/**',
    '!**/.circleci/**',
    '!metro.config.js',
    '!babel.config.js',
    '!jest.config.js',
    '!./test-results/**',
    '!./src/configs/**',
    '!./src/**/**/tests/**/*.test.ts.snap',
    '!./src/**/**/tests/**/*.test.ts?.snap',
    '!./coverage/**',
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!.releaserc.js',
    '!index.js',
  ],
  // coverageDirectory: './test-results/coverage/',
  coverageReporters: ['text', 'text-summary', 'lcov', 'clover', 'json'],
  reporters: [
    'default',
    // [
    //   'jest-html-reporter',
    //   {
    //     pageTitle: 'Test Report',
    //     outputPath: './test-results/test-reports.html',
    //     includeFailureMsg: true,
    //     theme: 'darkTheme',
    //   },
    // ],
    [
      'jest-html-reporters',
      {
        publicPath: './test-results/',
        filename: 'test-report.html',
        expand: true,
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
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    'node_modules/(?!(jest-)?react-native|@?react-navigation|native-base|native-base-[a-z, -]*|victory-*|react-native-vector-icons)',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
