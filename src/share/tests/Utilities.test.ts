import axios, { AxiosResponse } from 'axios';

import * as api from 'src/share/Utilities';
import { DataDomain } from 'src/redux/Stocks/Types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const stockSymbol1 = 'IBM';

const stockQuoteData1: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'IBM',
    '02. open': '119.3700',
    '03. high': '119.4650',
    '04. low': '117.5900',
    '05. price': '118.3900',
    '06. volume': '4179906',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '119.1200',
    '09. change': '-0.7300',
    '10. change percent': '-0.6128%',
  },
};

const stockQuoteData2: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'AAPL',
    '02. open': '315.7700',
    '03. high': '319.2300',
    '04. low': '315.3500',
    '05. price': '318.8900',
    '06. volume': '20240356',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '316.8500',
    '09. change': '2.0400',
    '10. change percent': '0.6438%',
  },
};

const stockDailyAdjData1: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'IBM',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '119.3700',
      '2. high': '119.4650',
      '3. low': '117.5900',
      '4. close': '118.3900',
      '5. adjusted close': '118.3900',
      '6. volume': '4179906',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '120.9900',
      '2. high': '121.7200',
      '3. low': '118.9700',
      '4. close': '119.1200',
      '5. adjusted close': '119.1200',
      '6. volume': '4018329',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockDailyAdjData2: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'AAPL',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '315.7700',
      '2. high': '319.2300',
      '3. low': '315.3500',
      '4. close': '318.8900',
      '5. adjusted close': '318.8900',
      '6. volume': '20240356',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '318.6600',
      '2. high': '320.8900',
      '3. low': '315.8700',
      '4. close': '316.8500',
      '5. adjusted close': '316.8500',
      '6. volume': '25672211',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockSearchData: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'IBM',
      '2. name': 'International Business Machines Corporation',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'IBMM',
      '2. name': 'iShares iBonds Dec 2024 Term Muni Bond ETF',
      '3. type': 'ETF',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.8571',
    },
  ],
};

const stockSearchData2: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'AAPL',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'AAPL.ARG',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'Argentina',
      '5. marketOpen': '11:00',
      '6. marketClose': '17:00',
      '7. timezone': 'UTC-03',
      '8. currency': 'ARS',
      '9. matchScore': '0.7273',
    },
  ],
};

describe('Fetch data functions', () => {
  describe('fetchStockQuoteUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.StockQuote> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: stockQuoteData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockQuoteUrl(stockSymbol1)).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteUrl(stockSymbol1)).rejects.toThrow(new Error(''));
    });
  });

  describe('fetchStockDailyAdjustedUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.StockDailyAdj> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: stockDailyAdjData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockDailyAdjustedUrl(stockSymbol1, 'compact')).resolves.toEqual(
        promiseResponse,
      );
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockDailyAdjustedUrl(stockSymbol1, 'compact')).rejects.toThrow(
        new Error(''),
      );
    });
  });

  describe('fetchStockSearchUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.StockSearch> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: stockSearchData,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockSearchUrl(stockSymbol1)).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockSearchUrl(stockSymbol1)).rejects.toThrow(new Error(''));
    });
  });

  // describe('fetchStockQuoteBatchUrl', () => {
  //   it('Should return a Promise', async () => {
  //     const promiseResponse: AxiosResponse<StockQuoteBatch> = {
  //       headers: {},
  //       status: 200,
  //       statusText: '',
  //       request: {},
  //       config: {},
  //       data: {
  //         SHOP: {
  //           quote: stockQuoteData2,
  //         },
  //         AAPL: {
  //           quote: stockQuoteData1,
  //         },
  //       },
  //     };

  //     mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
  //     await expect(api.fetchStockQuoteBatchUrl(['SHOP', 'AAPL'])).resolves.toEqual(promiseResponse);
  //   });

  //   it('Should return Error', async () => {
  //     mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
  //     await expect(api.fetchStockQuoteBatchUrl(['SHOP', 'AAPL'])).rejects.toThrow(new Error(''));
  //   });
  // });

  // describe('fetchStockChartBatchUrl', () => {
  //   it('Should return a Promise', async () => {
  //     const promiseResponse: AxiosResponse<StockChartBatch> = {
  //       headers: {},
  //       status: 200,
  //       statusText: '',
  //       request: {},
  //       config: {},
  //       data: {
  //         SHOP: {
  //           chart: stockDailyAdjData2,
  //         },
  //         AAPL: {
  //           chart: stockDailyAdjData1,
  //         },
  //       },
  //     };

  //     mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
  //     await expect(api.fetchStockChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).resolves.toEqual(
  //       promiseResponse,
  //     );
  //   });

  //   it('Should return Error', async () => {
  //     mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
  //     await expect(api.fetchStockChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).rejects.toThrow(
  //       new Error(''),
  //     );
  //   });
  // });

  // describe('fetchStockQuoteChartBatchUrl', () => {
  //   it('Should return a Promise', async () => {
  //     const promiseResponse: AxiosResponse<StockChartBatch> = {
  //       headers: {},
  //       status: 200,
  //       statusText: '',
  //       request: {},
  //       config: {},
  //       data: {
  //         SHOP: {
  //           chart: stockDailyAdjData2,
  //         },
  //         AAPL: {
  //           chart: stockDailyAdjData1,
  //         },
  //       },
  //     };

  //     mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
  //     await expect(
  //       api.fetchStockQuoteChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc'),
  //     ).resolves.toEqual(promiseResponse);
  //   });

  //   it('Should return Error', async () => {
  //     mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
  //     await expect(api.fetchStockQuoteChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).rejects.toThrow(
  //       new Error(''),
  //     );
  //   });
  // });
});
