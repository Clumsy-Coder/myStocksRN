import { BUILD_VERSION } from 'react-native-dotenv';

const PROD_API_URL = 'https://cloud.iexapis.com/stable/';
const DEV_API_URL = 'https://sandbox.iexapis.com/stable';
export const API_URL = BUILD_VERSION === 'development' ? DEV_API_URL : PROD_API_URL;

export type chartRange =
  | 'max'
  | '5y'
  | '2y'
  | '1y'
  | 'ytd'
  | '6m'
  | '3m'
  | '1m'
  | '1mm'
  | '5d'
  | '5dm';

export const stockFilters = [
  'symbol',
  'companyName',
  'calculationPrice',
  'open',
  'openTime',
  'close',
  'closeTime',
  'high',
  'low',
  'latestPrice',
  // "latestSource",
  'latestTime',
  'latestUpdate',
  'latestVolume',
  'volume',
  // "iexRealtimePrice",
  // "iexRealtimeSize",
  // "iexLastUpdated",
  // "delayedPrice",
  // "delayedPriceTime",
  // "oddLotDelayedPrice",
  // "oddLotDelayedPriceTime",
  // "extendedPrice",
  // "extendedChange",
  // "extendedChangePercent",
  // "extendedPriceTime",
  'previousClose',
  'previousVolume',
  'change',
  'changePercent',
  // "iexMarketPercent",
  // "iexVolume",
  'avgTotalVolume',
  // "iexBidPrice",
  // "iexBidSize",
  // "iexAskPrice",
  // "iexAskSize",
  'marketCap',
  'week52High',
  'week52Low',
  'ytdChange',
  'peRatio',
  // "lastTradeTime",
  // "isUSMarketOpen",
  'label',
  'changeOverTime',
];
