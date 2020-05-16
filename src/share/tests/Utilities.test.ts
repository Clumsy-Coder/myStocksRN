import axios, { AxiosResponse } from 'axios';

import * as api from 'src/share/Utilities';
import { StockQuote } from 'src/redux/Stocks/Types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Fetch data functions', () => {
  describe('Fetch stock quote', () => {
    it('Should return a Promise', async () => {
      const promiseResponse: AxiosResponse<StockQuote> = {
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
        data: {
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
        },
      };

      mockedAxios.get.mockReturnValue(Promise.resolve(promiseResponse));
      await expect(api.fetchStockQuoteUrl('AAPL')).resolves.toEqual(promiseResponse);
    });

    it('Should return Error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error('')));
      await expect(api.fetchStockQuoteUrl('AAPL')).rejects.toThrow(new Error(''));
    });
  });
});
