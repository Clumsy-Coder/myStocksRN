import axios, { AxiosResponse } from 'axios';

import * as api from 'src/share/Utilities';
import { StockQuote, StockChart, StockChartBatch, StockQuoteBatch } from 'src/redux/Stocks/Types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const stockQuoteData1: StockQuote = {
  symbol: 'AAPL',
  companyName: 'AAPL, Inc.',
  primaryExchange: 'NghcwnSo k ktxeor eYacE',
  open: 733,
  close: 744.34,
  high: 736,
  low: 725,
  latestPrice: 720.32,
  latestTime: 'May 8, 2020',
  latestUpdate: 1625938639425,
  latestVolume: 4134691,
  extendedPrice: 726.91,
  extendedChange: 3.1,
  extendedChangePercent: 0.4194815319493806,
  previousClose: 730.16,
  previousVolume: 4741435,
  change: -13.97,
  changePercent: -1.966,
  avgTotalVolume: 4147824,
  marketCap: 83884683022,
  peRatio: -626.03,
  week52High: 749.47,
  week52Low: 247.61,
  ytdChange: 75.35366771277485,
};

const stockQuoteData2: StockQuote = {
  symbol: 'SHOP',
  companyName: 'Shopify, Inc.',
  primaryExchange: 'NghcwnSo k ktxeor eYacE',
  open: 787.4,
  close: 774,
  high: 811.23,
  low: 767.58,
  latestPrice: 792,
  latestTime: 'May 15, 2020',
  latestUpdate: 1636599991338,
  latestVolume: 3040107,
  extendedPrice: 726.91,
  extendedChange: 3.1,
  extendedChangePercent: 0.4194815319493806,
  previousClose: 782.69,
  previousVolume: 2902183,
  change: 12.8,
  changePercent: 1.749,
  avgTotalVolume: 4230850,
  marketCap: 92286558532,
  peRatio: -679.72,
  week52High: 809.13,
  week52Low: 262.94,
  ytdChange: 93.42,
};

const stockChartData1: StockChart[] = [
  {
    date: '2020-05-11',
    open: 710.61,
    close: 758.74,
    high: 770.9,
    low: 737.75,
    volume: 3675742,
    change: 0,
    changePercent: 0,
    label: 'May 11',
    changeOverTime: 0,
  },
  {
    date: '2020-05-12',
    open: 798,
    close: 750.68,
    high: 803.67,
    low: 743.5,
    volume: 3773050,
    change: -8.41,
    changePercent: -1.0796,
    label: 'May 12',
    changeOverTime: -0.010945,
  },
];

const stockChartData2: StockChart[] = [
  {
    date: '2020-05-11',
    open: 314.3,
    close: 325.22,
    high: 331,
    low: 311.5,
    volume: 37002601,
    change: 0,
    changePercent: 0,
    label: 'May 11',
    changeOverTime: 0,
  },
  {
    date: '2020-05-12',
    open: 325.39,
    close: 319.98,
    high: 335.43,
    low: 323.47,
    volume: 41126129,
    change: -3.6,
    changePercent: -1.1787,
    label: 'May 12',
    changeOverTime: -0.01148,
  },
];

describe('Fetch data functions', () => {
  describe('fetchStockQuoteUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockQuote> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: stockQuoteData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockQuoteUrl('AAPL')).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteUrl('AAPL')).rejects.toThrow(new Error(''));
    });
  });

  describe('fetchStockChartUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockChart[]> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: stockChartData1,
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockChartUrl('AAPL', '5d', 'asc')).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockChartUrl('AAPL', '5d', 'asc')).rejects.toThrow(new Error(''));
    });
  });

  describe('fetchStockQuoteBatchUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockQuoteBatch> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: {
          SHOP: {
            quote: stockQuoteData2,
          },
          AAPL: {
            quote: stockQuoteData1,
          },
        },
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockQuoteBatchUrl(['SHOP', 'AAPL'])).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteBatchUrl(['SHOP', 'AAPL'])).rejects.toThrow(new Error(''));
    });
  });

  describe('fetchStockChartBatchUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockChartBatch> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: {
          SHOP: {
            chart: stockChartData2,
          },
          AAPL: {
            chart: stockChartData1,
          },
        },
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).resolves.toEqual(
        promiseResponse,
      );
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).rejects.toThrow(
        new Error(''),
      );
    });
  });

  describe('fetchStockQuoteChartBatchUrl', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockChartBatch> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: {
          SHOP: {
            chart: stockChartData2,
          },
          AAPL: {
            chart: stockChartData1,
          },
        },
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(
        api.fetchStockQuoteChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc'),
      ).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteChartBatchUrl(['SHOP', 'AAPL'], '5d', 'asc')).rejects.toThrow(
        new Error(''),
      );
    });
  });
});
