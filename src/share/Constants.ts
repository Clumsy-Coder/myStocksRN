import { BUILD_VERSION } from 'react-native-dotenv';

export const PROD_API_URL = 'https://cloud.iexapis.com/stable/';
export const DEV_API_URL = 'https://sandbox.iexapis.com/stable/';
export const API_URL = BUILD_VERSION === 'development' ? DEV_API_URL : PROD_API_URL;
