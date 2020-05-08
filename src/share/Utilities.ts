import buildUrl from 'build-url';

import { API_KEY } from 'react-native-dotenv';
import { API_URL, stockFilters, chartRange } from 'src/share/Constants';

/**
 * Fetch the stock quote data.
 * Check https://iexcloud.io/docs/api/#quote
 * @param symbol Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuoteUrl = (symbol: string) =>
  buildUrl(API_URL, {
    path: `stock/${symbol}/quote`,
    queryParams: {
      filter: stockFilters,
      displayPercent: 'true',
      token: API_KEY,
    },
  });

/**
 * Fetch the stock chart data.
 * Check https://iexcloud.io/docs/api/#charts
 * @param symbol Company stock symbol in uppercase. Ex: AAPL
 * @param range The range of the data to fetch. Ex: 5y
 */
export const fetchStockChartUrl = (symbol: string, range: chartRange) =>
  buildUrl(API_URL, {
    path: `stock/${symbol}/chart`,
    queryParams: {
      range,
      filter: stockFilters,
      displayPercent: 'true',
      token: API_KEY,
    },
  });

/**
 * Fetch the stock quote data of multiple company symbols.
 * @param symbols Company stock symbol in uppercase. Ex: ['AAPL', 'SHOP']
 */
export const fetchStockQuoteBatchUrl = (symbols: string[]) =>
  buildUrl(API_URL, {
    path: 'stock/market/batch',
    queryParams: {
      types: 'quote',
      symbols,
      displayPercent: 'true',
      token: API_KEY,
    },
  });

/**
 * Fetch the stock chart data for multiple company symbols.
 * @param symbols Company stock symbol in uppercase. Ex: ['AAPL', 'SHOP']
 * @param range The range of the data to fetch. Ex: 5y
 */
export const fetchStockChartBatchUrl = (symbols: string[], range: chartRange) =>
  buildUrl(API_URL, {
    path: 'stock/market/batch',
    queryParams: {
      types: 'chart',
      symbols,
      range,
      displayPercent: 'true',
      token: API_KEY,
    },
  });

/**
 * Fetch the stock quote and chart data for multiple company symbols
 * @param symbols Company stock symbol in uppercase. Ex: ['AAPL', 'SHOP']
 * @param range The range of the data to fetch. Ex: 5y
 */
export const fetchStockQuoteChartBatchUrl = (symbols: string[], range: chartRange) =>
  buildUrl(API_URL, {
    path: 'stock/market/batch',
    queryParams: {
      types: ['quote', 'chart'],
      symbols,
      range,
      filter: stockFilters,
      displayPercent: 'true',
      token: API_KEY,
    },
  });
