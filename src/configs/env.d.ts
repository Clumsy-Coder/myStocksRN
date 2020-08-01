// Create module to deal with Typescript error when pulling env values using react-native-dotenv
// check https://github.com/zetachang/react-native-dotenv/issues/76#issuecomment-585171009
declare module '@env' {
  export const BUILD_VERSION: 'development' | string;
  export const API_KEY: string;
}
