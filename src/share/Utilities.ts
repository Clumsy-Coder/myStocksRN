import buildUrl from 'build-url';
import axios, { AxiosResponse } from 'axios';

import { API_KEY } from 'react-native-dotenv';
import { API_URL } from 'src/share/Constants';
import { DataDomain } from 'src/redux/Stocks/Types';

/**
 * Fetch the stock quote data.
 * Check https://iexcloud.io/docs/api/#quote
 * @param symbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuoteUrl = (symbol: string): Promise<AxiosResponse<DataDomain.Quote>> =>
  axios.get(
    buildUrl(API_URL, {
      path: `stock/${symbol}/quote`,
      queryParams: {
        displayPercent: 'true',
        // filter: DataDomain.quoteFilter,
        token: API_KEY,
      },
    }),
  );

/**
 * Fetch the stock chart data.
 * Check https://iexcloud.io/docs/api/#charts
 * @param symbol - Company stock symbol in uppercase. Ex: AAPL
 * @param range - The range of the data to fetch. Ex: 5y
 */
export const fetchStockChartUrl = (
  symbol: string,
  range: DataDomain.ChartRange = 'max',
): Promise<AxiosResponse<DataDomain.Chart[]>> =>
  axios.get(
    buildUrl(API_URL, {
      path: `stock/${symbol}/chart`,
      queryParams: {
        range,
        displayPercent: 'true',
        // filter: DataDomain.chartFilter,
        token: API_KEY,
      },
    }),
  );

/**
 * Fetch the symbols metadata.
 * Check https://iexcloud.io/docs/api/#symbols
 */
export const fetchSymbolsMetadataUrl = (): Promise<AxiosResponse<DataDomain.Symbols[]>> =>
  axios.get(
    buildUrl(API_URL, {
      path: 'ref-data/symbols',
      queryParams: {
        token: API_KEY,
      },
    }),
  );
