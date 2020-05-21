import * as selectors from 'src/redux/Stocks/Selectors';
import { AppState } from 'src/redux/index.reducers';
import {
  StockData,
  StockQuote,
  StockQuoteData,
  StockChart,
  StockChartData,
} from 'src/redux/Stocks/Types';

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
  symbol: 'AMZN',
  companyName: 'Amazon.com, Inc.',
  primaryExchange: 'ASNDQA',
  open: 733,
  close: 744.34,
  high: 736,
  low: 725,
  latestPrice: 2450.054,
  latestTime: '12:24:25 PM',
  latestUpdate: 1655573764729,
  latestVolume: 4134691,
  extendedPrice: 726.91,
  extendedChange: 3.1,
  extendedChangePercent: 0.4194815319493806,
  previousClose: 2460.16,
  previousVolume: 3281429,
  change: 27.249,
  changePercent: 1.159,
  avgTotalVolume: 5657375,
  marketCap: 1240038670201,
  peRatio: 117.4,
  week52High: 2495,
  week52Low: 1649.69,
  ytdChange: 29.266,
};

const stockQuoteData3: StockQuote = {
  symbol: 'TSLA',
  companyName: 'Tesla, Inc.',
  primaryExchange: 'QNADSA',
  open: 733,
  close: 744.34,
  high: 736,
  low: 725,
  latestPrice: 850.44,
  latestTime: '12:32:20 PM',
  latestUpdate: 1600998619958,
  latestVolume: 4134691,
  extendedPrice: 726.91,
  extendedChange: 3.1,
  extendedChangePercent: 0.4194815319493806,
  previousClose: 826.56,
  previousVolume: 16839279,
  change: -6,
  changePercent: -0.739,
  avgTotalVolume: 18172797,
  marketCap: 156381480781,
  peRatio: -996.67,
  week52High: 978.98,
  week52Low: 179.8,
  ytdChange: 95.963,
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

describe('Stocks selectors', () => {
  describe('Empty store', () => {
    it('Handle with empty store', () => {
      const store: AppState = {
        Stocks: {},
        Favorites: {
          symbols: [],
        },
      };
      const expected = {};

      expect(selectors.selectAllStocks(store)).toEqual(expected);
    });
  });

  describe('Stock quote selectors', () => {
    describe('Select individual Stock by stockSymbol', () => {
      it('Select individual Stock with one StockData in store', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };

        expect(selectors.selectStock(rootState, { stockSymbol })).toEqual(expected);
      });

      it('Select individual Stock with two StockData in store', () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData2,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected1: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };
        const expected2: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData2,
          },
        };
        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol1 })).toEqual(expected1);
        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol2 })).toEqual(expected2);
      });

      it('Select individual Stock with three StockData in store', () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'TSLA';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData2,
              },
            },
            [stockSymbol3]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData3,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected1: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };
        const expected2: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData2,
          },
        };
        const expected3: StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData3,
          },
        };
        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol1 })).toEqual(expected1);
        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol2 })).toEqual(expected2);
        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol3 })).toEqual(expected3);
      });
    });

    describe('Select individual Stock quote by stockSymbol', () => {
      it('Select individual Stock quote with one StockData in store', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        expect(selectors.selectStockQuote(rootState, { stockSymbol })).toEqual(expected);
      });

      it('Select individual Stock quote with two StockData in store', () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData2,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        const expected2: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData2,
        };
        expect(selectors.selectStockQuote(stockState, { stockSymbol: stockSymbol1 })).toEqual(
          expected1,
        );
        expect(selectors.selectStockQuote(stockState, { stockSymbol: stockSymbol2 })).toEqual(
          expected2,
        );
      });

      it('Select individual Stock quote with three StockData in store', () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'TSLA';
        const stockState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData2,
              },
            },
            [stockSymbol3]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData3,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        const expected2: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData2,
        };
        const expected3: StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData3,
        };
        expect(selectors.selectStockQuote(stockState, { stockSymbol: stockSymbol1 })).toEqual(
          expected1,
        );
        expect(selectors.selectStockQuote(stockState, { stockSymbol: stockSymbol2 })).toEqual(
          expected2,
        );
        expect(selectors.selectStockQuote(stockState, { stockSymbol: stockSymbol3 })).toEqual(
          expected3,
        );
      });
    });

    describe("Select Stock quote 'fetching' by stockSymbol", () => {
      it("Select stock quote 'fetching' with one StockData in store", () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected = false;
        expect(selectors.selectStockQuoteFetching(rootState, { stockSymbol })).toEqual(expected);
      });

      it("Select stock quote 'fetching' with two StockData in store", () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1 = false;
        const expected2 = true;
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: stockSymbol2 }),
        ).toEqual(expected2);
      });

      it("Select stock quote 'fetching' with three StockData in store", () => {
        const stockSymbol1 = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'TSLA';
        const stockState: AppState = {
          Stocks: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [stockSymbol3]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData3,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1 = false;
        const expected2 = true;
        const expected3 = false;
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: stockSymbol2 }),
        ).toEqual(expected2);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: stockSymbol3 }),
        ).toEqual(expected3);
      });
    });

    describe("Select Stock quote 'data' by stockSymbol", () => {
      describe("Select valid stock quote 'data'", () => {
        it("Select 'data' with one StockData in store", () => {
          const stockSymbol = 'AAPL';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: StockQuote = stockQuoteData1;

          expect(selectors.selectStockQuoteData(rootState, { stockSymbol })).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData2,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: StockQuote = stockQuoteData1;
          const expected2: StockQuote = stockQuoteData2;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'data' with three StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'TSLA';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData2,
                },
              },
              [stockSymbol3]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData3,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: StockQuote = stockQuoteData1;
          const expected2: StockQuote = stockQuoteData2;
          const expected3: StockQuote = stockQuoteData3;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol3 })).toEqual(
            expected3,
          );
        });
      });

      describe("Select undefined Stock quote 'data'", () => {
        it("Select 'data' with one StockData in store", () => {
          const stockSymbol = 'AAPL';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: StockQuote | undefined = undefined;

          expect(selectors.selectStockQuoteData(rootState, { stockSymbol })).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: StockQuote | undefined = undefined;
          const expected2: StockQuote | undefined = undefined;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'data' with three StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'TSLA';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
              [stockSymbol3]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: StockQuote | undefined = undefined;
          const expected2: StockQuote | undefined = undefined;
          const expected3: StockQuote | undefined = undefined;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol3 })).toEqual(
            expected3,
          );
        });
      });
    });

    describe("Select Stock quote 'error' by stockSymbol", () => {
      describe("Select valid stock quote 'error'", () => {
        it("Select 'error' with one StockData in store", () => {
          const stockSymbol = 'AAPL';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol}`),
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: Error = new Error(`error for ${stockSymbol}`);

          expect(selectors.selectStockQuoteError(rootState, { stockSymbol })).toEqual(expected);
        });

        it("Select 'error' with two StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol1}`),
                  data: undefined,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol2}`),
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: Error = new Error(`error for ${stockSymbol1}`);
          const expected2: Error = new Error(`error for ${stockSymbol2}`);
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'error' with three StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'TSLA';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol1}`),
                  data: undefined,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol2}`),
                  data: undefined,
                },
              },
              [stockSymbol3]: {
                quote: {
                  fetching: false,
                  error: new Error(`error for ${stockSymbol3}`),
                  data: undefined,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: Error = new Error(`error for ${stockSymbol1}`);
          const expected2: Error = new Error(`error for ${stockSymbol2}`);
          const expected3: Error = new Error(`error for ${stockSymbol3}`);
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol3 })).toEqual(
            expected3,
          );
        });
      });

      describe("Select undefined stock quote 'error'", () => {
        it("Select 'error' with one StockData in store", () => {
          const stockSymbol = 'AAPL';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: Error | undefined = undefined;

          expect(selectors.selectStockQuoteError(rootState, { stockSymbol })).toEqual(expected);
        });

        it("Select 'error' with two StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData2,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: Error | undefined = undefined;
          const expected2: Error | undefined = undefined;
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'error' with three StockData in store", () => {
          const stockSymbol1 = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'TSLA';
          const rootState: AppState = {
            Stocks: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
              [stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData2,
                },
              },
              [stockSymbol3]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData3,
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: Error | undefined = undefined;
          const expected2: Error | undefined = undefined;
          const expected3: Error | undefined = undefined;
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol3 })).toEqual(
            expected3,
          );
        });
      });
    });
  });

  describe('Stock chart selectors', () => {
    describe('selectStockChart', () => {
      it('[Empty store]: Should return empty StockChartData', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(selectors.selectStockChart(rootState, { stockSymbol })).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockChartData', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
              chart: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: StockChartData = {
          fetching: true,
          error: undefined,
          data: undefined,
        };

        expect(selectors.selectStockChart(rootState, { stockSymbol })).toEqual(expected);
      });
    });

    describe('selectStockChartFetching', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(selectors.selectStockChartFetching(rootState, { stockSymbol })).toEqual(expected);
      });
      it('[Non-empty store]: Should return boolean', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
              chart: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = true;

        expect(selectors.selectStockChartFetching(rootState, { stockSymbol })).toEqual(expected);
      });
    });

    describe('selectStockChartData', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(selectors.selectStockChartData(rootState, { stockSymbol })).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockChart[]', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
              chart: {
                fetching: false,
                error: undefined,
                data: stockChartData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: StockChart[] = stockChartData1;

        expect(selectors.selectStockChartData(rootState, { stockSymbol })).toEqual(expected);
      });
    });

    describe('selectStockChartError', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(selectors.selectStockChartError(rootState, { stockSymbol })).toEqual(expected);
      });

      it('[Non-empty store]: Should return Error', () => {
        const stockSymbol = 'AAPL';
        const rootState: AppState = {
          Stocks: {
            [stockSymbol]: {
              quote: {
                fetching: false,
                error: undefined,
                data: stockQuoteData1,
              },
              chart: {
                fetching: false,
                error: new Error(''),
                data: undefined,
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: Error = new Error('');

        expect(selectors.selectStockChartError(rootState, { stockSymbol })).toEqual(expected);
      });
    });
  });
});
