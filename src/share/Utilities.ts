import buildUrl from 'build-url';
import axios, { AxiosResponse } from 'axios';

import { API_KEY } from 'react-native-dotenv';
import { API_URL } from 'src/share/Constants';
import { DataDomain } from 'src/redux/Stocks/Types';

/**
 * Alpha Vantage API function calls when querying for data.
 * Each query must have a parameter of 'function' with it's value as one of the enum's.
 */
enum ApiFunctions {
  /**
   * Get Stock quote.
   *
   * https://www.alphavantage.co/documentation/#latestprice
   */
  GLOBAL_QUOTE = 'GLOBAL_QUOTE',
  /**
   * Get Stock Daily Adjusted
   *
   * https://www.alphavantage.co/documentation/#dailyadj
   */
  TIME_SERIES_DAILY_ADJUSTED = 'TIME_SERIES_DAILY_ADJUSTED',
  /**
   * Search for stock
   *
   * https://www.alphavantage.co/documentation/#symbolsearch
   */
  SYMBOL_SEARCH = 'SYMBOL_SEARCH',
}

/**
 * Fetch the stock quote data.
 *
 * Check https://www.alphavantage.co/documentation/#latestprice
 * @param symbol - Company stock symbol in uppercase. Ex: AAPL
 * @returns A promise when running axios with associated data interface
 */
export const fetchStockQuoteUrl = (
  symbol: string,
): Promise<AxiosResponse<DataDomain.StockQuote>> => {
  const url = buildUrl(API_URL, {
    queryParams: {
      function: ApiFunctions.GLOBAL_QUOTE,
      symbol,
      apikey: API_KEY,
    },
  });

  return axios.get(url);
};

/**
 * Fetch the stock daily adjusted data.
 *
 * Check https://www.alphavantage.co/documentation/#dailyadj
 * @param symbol - Company stock symbol in uppercase. Ex: AAPL
 * @param outputsize - 'compact' returns the last 100 data points. 'full' returns 20+ years of historical data
 * @returns A promise when running axios with associated data interface
 */
export const fetchStockDailyAdjustedUrl = (
  symbol: string,
  outputsize: 'compact' | 'full',
): Promise<AxiosResponse<DataDomain.StockDailyAdj>> => {
  const url = buildUrl(API_URL, {
    queryParams: {
      function: ApiFunctions.TIME_SERIES_DAILY_ADJUSTED,
      symbol,
      outputsize,
      apikey: API_KEY,
    },
  });
  return axios.get(url);
};

/**
 * Fetch the Stock search data.
 *
 * https://www.alphavantage.co/documentation/#symbolsearch
 * @param keyword - Keyword to use when searching. Can be symbol or company name
 * @returns A promise when running axios with associated data interface
 */
export const fetchStockSearchUrl = (
  keyword: string,
): Promise<AxiosResponse<DataDomain.StockSearch>> => {
  const url = buildUrl(API_URL, {
    queryParams: {
      function: ApiFunctions.SYMBOL_SEARCH,
      keyword,
      apikey: API_KEY,
    },
  });

  return axios.get(url);
};
