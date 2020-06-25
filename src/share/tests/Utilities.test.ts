/* eslint-disable jest/no-commented-out-tests */
import axios, { AxiosResponse } from 'axios';

import * as api from 'src/share/Utilities';
import { DataDomain } from 'src/redux/Stocks/Types';

import * as testdata from 'jest.testdata';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Fetch data functions', () => {
  describe('fetchStockQuoteUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.Quote> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: testdata.stockQuoteData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockQuoteUrl(testdata.stockSymbol1)).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteUrl(testdata.stockSymbol1)).rejects.toThrow(new Error(''));
    });
  });

  describe('fetchStockChartUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.Chart[]> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: testdata.stockChartData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockChartUrl(testdata.stockSymbol1, 'max')).resolves.toEqual(
        promiseResponse,
      );
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockChartUrl(testdata.stockSymbol1, 'max')).rejects.toThrow(
        new Error(''),
      );
    });
  });

  describe('fetchSymbolsMetadataUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<DataDomain.Symbols[]> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchSymbolsMetadataUrl()).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchSymbolsMetadataUrl()).rejects.toThrow(new Error(''));
    });
  });

  // describe('fetchStockSearchUrl', () => {
  //   it('Should return a Promise', async () => {
  //     const promiseResponse: AxiosResponse<DataDomain.StockSearch> = {
  //       headers: {},
  //       status: 200,
  //       statusText: '',
  //       request: {},
  //       config: {},
  //       data: testdata.stockSearchData1,
  //     };

  //     mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
  //     await expect(api.fetchStockSearchUrl(testdata.stockSymbol1)).resolves.toEqual(
  //       promiseResponse,
  //     );
  //   });

  //   it('Should return Error', async () => {
  //     mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
  //     await expect(api.fetchStockSearchUrl(testdata.stockSymbol1)).rejects.toThrow(new Error(''));
  //   });
  // });

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
  //           quote: testdata.stockQuoteData2,
  //         },
  //         AAPL: {
  //           quote: testdata.stockQuoteData1,
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
  //           chart: testdata.stockDailyAdjData2,
  //         },
  //         AAPL: {
  //           chart: testdata.stockDailyAdjData1,
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
  //           chart: testdata.stockDailyAdjData2,
  //         },
  //         AAPL: {
  //           chart: testdata.stockDailyAdjData1,
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
