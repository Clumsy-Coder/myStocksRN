module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'tests/*': './__tests__',
          src: './src',
          '@redux': './src/redux/',
          '@components': './src/components/',
          '@containers': './src/containers/',
          '@routes': './src/routes/',
          '@screens': './src/screens/',
          '@share': './src/share/',
          '@configs': './src/configs/',
        },
      },
    ],
  ],
};
