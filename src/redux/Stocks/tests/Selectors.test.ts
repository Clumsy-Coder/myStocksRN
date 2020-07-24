/* eslint-disable jest/no-commented-out-tests */
import * as selectors from 'src/redux/Stocks/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer, Selectors as SelectorsTypes } from 'src/redux/Stocks/Types';
import { defaultQuote } from '@redux/Stocks/Reducer';

import * as testdata from 'jest.testdata';

const selectStockQuoteTrim1: SelectorsTypes.SelectQuoteTrim = {
  fetching: false,
  symbol: testdata.stockSymbol1,
  companyName: testdata.stockQuoteData1.companyName,
  price: testdata.stockQuoteData1.latestPrice,
  change: testdata.stockQuoteData1.change,
  changePercent: testdata.stockQuoteData1.changePercent,
  currency: testdata.symbolsMetadata1.currency,
};

const selectStockQuoteTrim2: SelectorsTypes.SelectQuoteTrim = {
  fetching: false,
  symbol: testdata.stockSymbol2,
  companyName: testdata.stockQuoteData2.companyName,
  price: testdata.stockQuoteData2.latestPrice,
  change: testdata.stockQuoteData2.change,
  changePercent: testdata.stockQuoteData2.changePercent,
  currency: testdata.symbolsMetadata2.currency,
};

const selectStockQuoteTrim3: SelectorsTypes.SelectQuoteTrim = {
  fetching: false,
  symbol: testdata.stockSymbol3,
  companyName: testdata.stockQuoteData3.companyName,
  price: testdata.stockQuoteData3.latestPrice,
  change: testdata.stockQuoteData3.change,
  changePercent: testdata.stockQuoteData3.changePercent,
  currency: testdata.symbolsMetadata3.currency,
};

describe('Stocks selectors', () => {
  describe('Empty store', () => {
    it('Handle with empty store', () => {
      const store: AppState = {
        ...testdata.baseAppState,
      };
      const expected: Reducer.ReducerState = {
        ...testdata.baseStocksState,
        symbols: {},
        symbolsMetadata: {
          fetching: false,
          data: [],
          error: undefined,
        },
      };

      expect(selectors.selectAllStocks(store)).toEqual(expected);
    });
  });

  describe('Stock quote selectors', () => {
    describe('[selectStock]: Select individual Stock by stockSymbol', () => {
      it('Select individual Stock with one StockData in store', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData1,
          },
        };

        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol1 })).toEqual(
          expected,
        );
      });

      it('Select individual Stock with two StockData in store', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
            },
          },
        };

        const expected1: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData2,
          },
        };
        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol1 })).toEqual(
          expected1,
        );
        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol2 })).toEqual(
          expected2,
        );
      });

      it('Select individual Stock with three StockData in store', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
              [testdata.stockSymbol3]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData3,
                },
              },
            },
          },
        };

        const expected1: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData2,
          },
        };
        const expected3: Reducer.StockData = {
          chart: { ...testdata.baseStockChartState },
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData3,
          },
        };
        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol1 })).toEqual(
          expected1,
        );
        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol2 })).toEqual(
          expected2,
        );
        expect(selectors.selectStock(rootState, { stockSymbol: testdata.stockSymbol3 })).toEqual(
          expected3,
        );
      });
    });

    describe('[selectStockQuote]: Select individual Stock quote by stockSymbol', () => {
      it('Select individual Stock quote with one StockData in store', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };
        const expected: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData1,
        };
        expect(
          selectors.selectStockQuote(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('Select individual Stock quote with two StockData in store', () => {
        const stockState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
            },
          },
        };
        const expected1: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData1,
        };
        const expected2: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData2,
        };
        expect(
          selectors.selectStockQuote(stockState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuote(stockState, { stockSymbol: testdata.stockSymbol2 }),
        ).toEqual(expected2);
      });

      it('Select individual Stock quote with three StockData in store', () => {
        const stockState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
              [testdata.stockSymbol3]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData3,
                },
              },
            },
          },
        };
        const expected1: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData1,
        };
        const expected2: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData2,
        };
        const expected3: Reducer.QuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData3,
        };
        expect(
          selectors.selectStockQuote(stockState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuote(stockState, { stockSymbol: testdata.stockSymbol2 }),
        ).toEqual(expected2);
        expect(
          selectors.selectStockQuote(stockState, { stockSymbol: testdata.stockSymbol3 }),
        ).toEqual(expected3);
      });
    });

    describe("[selectStockQuoteFetching]: Select Stock quote 'fetching' by stockSymbol", () => {
      it("Select stock quote 'fetching' with one StockData in store", () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };
        const expected = false;
        expect(
          selectors.selectStockQuoteFetching(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it("Select stock quote 'fetching' with two StockData in store", () => {
        const stockState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: true,
                  error: undefined,
                  data: defaultQuote,
                },
              },
            },
          },
        };
        const expected1 = false;
        const expected2 = true;
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: testdata.stockSymbol2 }),
        ).toEqual(expected2);
      });

      it("Select stock quote 'fetching' with three StockData in store", () => {
        const stockState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: true,
                  error: undefined,
                  data: defaultQuote,
                },
              },
              [testdata.stockSymbol3]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData3,
                },
              },
            },
          },
        };
        const expected1 = false;
        const expected2 = true;
        const expected3 = false;
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected1);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: testdata.stockSymbol2 }),
        ).toEqual(expected2);
        expect(
          selectors.selectStockQuoteFetching(stockState, { stockSymbol: testdata.stockSymbol3 }),
        ).toEqual(expected3);
      });
    });

    describe("[selectStockQuoteData]: Select Stock quote 'data' by stockSymbol", () => {
      describe("Select valid stock quote 'data'", () => {
        it("Select 'data' with one StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
              },
            },
          };

          const expected: DataDomain.Quote = testdata.stockQuoteData1;

          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.Quote = testdata.stockQuoteData1;
          const expected2: DataDomain.Quote = testdata.stockQuoteData2;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
                [testdata.stockSymbol3]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData3,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.Quote = testdata.stockQuoteData1;
          const expected2: DataDomain.Quote = testdata.stockQuoteData2;
          const expected3: DataDomain.Quote = testdata.stockQuoteData3;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol3 }),
          ).toEqual(expected3);
        });
      });

      describe("Select undefined Stock quote 'data'", () => {
        it("Select 'data' with one StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected: DataDomain.Quote = defaultQuote;

          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.Quote = defaultQuote;
          const expected2: DataDomain.Quote = defaultQuote;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol3]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.Quote = defaultQuote;
          const expected2: DataDomain.Quote = defaultQuote;
          const expected3: DataDomain.Quote = defaultQuote;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol3 }),
          ).toEqual(expected3);
        });
      });
    });

    describe("[selectStockQuoteError]: Select Stock quote 'error' by stockSymbol", () => {
      describe("Select valid stock quote 'error'", () => {
        it("Select 'error' with one StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected: Error = new Error(`error for ${testdata.stockSymbol1}`);

          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'error' with two StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol2}`),
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected1: Error = new Error(`error for ${testdata.stockSymbol1}`);
          const expected2: Error = new Error(`error for ${testdata.stockSymbol2}`);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'error' with three StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol2}`),
                    data: defaultQuote,
                  },
                },
                [testdata.stockSymbol3]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol3}`),
                    data: defaultQuote,
                  },
                },
              },
            },
          };

          const expected1: Error = new Error(`error for ${testdata.stockSymbol1}`);
          const expected2: Error = new Error(`error for ${testdata.stockSymbol2}`);
          const expected3: Error = new Error(`error for ${testdata.stockSymbol3}`);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol3 }),
          ).toEqual(expected3);
        });
      });

      describe("Select undefined stock quote 'error'", () => {
        it("Select 'error' with one StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
              },
            },
          };

          const expected: Error | undefined = undefined;

          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'error' with two StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
              },
            },
          };

          const expected1: Error | undefined = undefined;
          const expected2: Error | undefined = undefined;
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'error' with three StockData in store", () => {
          const rootState: AppState = {
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
              symbols: {
                [testdata.stockSymbol1]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
                [testdata.stockSymbol3]: {
                  chart: { ...testdata.baseStockChartState },
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData3,
                  },
                },
              },
            },
          };

          const expected1: Error | undefined = undefined;
          const expected2: Error | undefined = undefined;
          const expected3: Error | undefined = undefined;
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
          expect(
            selectors.selectStockQuoteError(rootState, { stockSymbol: testdata.stockSymbol3 }),
          ).toEqual(expected3);
        });
      });
    });

    // describe('selectStockMetadata', () => {
    //   it('[Empty store]: Should return undefined', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         symbols: {
    //           [testdata.stockSymbol1]: {
    //             quote: {
    //               fetching: false,
    //               data: testdata.stockQuoteData1,
    //             },
    //           },
    //         },
    //       },
    //     };

    //     const expected = undefined;

    //     expect(
    //       selectors.selectStockMetadata(rootState, { stockSymbol: testdata.stockSymbol1 }),
    //     ).toEqual(expected);
    //   });

    //   it('[Empty store]: Should return StockSearchBase for a stock', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         symbols: {
    //           [testdata.stockSymbol1]: {
    //             quote: {
    //               fetching: false,
    //               data: testdata.stockQuoteData1,
    //             },
    //             metadata: testdata.stockSearchData1.bestMatches[0],
    //           },
    //         },
    //       },
    //     };

    //     const expected = testdata.stockSearchData1.bestMatches[0];

    //     expect(
    //       selectors.selectStockMetadata(rootState, { stockSymbol: testdata.stockSymbol1 }),
    //     ).toEqual(expected);
    //   });
    // });
  });

  describe('Stock Chart selectors', () => {
    describe('selectStockChart', () => {
      it('[Empty store]: Should return empty ChartData', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected = testdata.baseStockChartState;

        expect(
          selectors.selectStockChart(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return ChartData', () => {
        const rootState: AppState = {
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                chart: {
                  fetching: true,
                  error: undefined,
                  data: [],
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: Reducer.ChartData = {
          fetching: true,
          error: undefined,
          data: [],
        };

        expect(
          selectors.selectStockChart(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockChartFetching', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected = testdata.baseStockChartState.fetching;

        expect(
          selectors.selectStockChartFetching(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });
      it('[Non-empty store]: Should return boolean', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                chart: {
                  fetching: true,
                  error: undefined,
                  data: [],
                },
              },
            },
          },
        };

        const expected = true;

        expect(
          selectors.selectStockChartFetching(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });
    });

    describe('selectStockChartData', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected = testdata.baseStockChartState.data;

        expect(
          selectors.selectStockChartData(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return Chart', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                chart: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockChartData1,
                },
              },
            },
          },
        };

        const expected: DataDomain.Chart[] = testdata.stockChartData1;

        expect(
          selectors.selectStockChartData(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockChartError', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockChartError(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return Error', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                chart: {
                  fetching: false,
                  error: new Error(''),
                  data: [],
                },
              },
            },
          },
        };

        const expected: Error = new Error('');

        expect(
          selectors.selectStockChartError(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });
    });
  });

  describe('Stock search selectors', () => {
    describe('selectSearchKeyword', () => {
      it('[Empty store]: Should return empty strings', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            ...testdata.baseAppState.Stocks,
            search: {
              keyword: '',
            },
          },
        };

        const expected = '';

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });

      it('[Empty store]: Should return empty string', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {},
          },
        };

        const expected = '';

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return the proper value', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            ...testdata.baseAppState.Stocks,
            search: {
              keyword: testdata.stockSymbol1,
            },
          },
        };

        const expected = testdata.stockSymbol1;

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });
    });

    // describe('selectSearchResults', () => {
    //   it('[Empty store]: Should return empty object', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //             data: [],
    //             error: undefined,
    //           },
    //         },
    //       },
    //     };

    //     const expected = {
    //       fetching: false,
    //       data: [],
    //       error: undefined,
    //     };

    //     expect(selectors.selectSearchResults(rootState)).toEqual(expected);
    //   });

    //   it('[Empty store]: Should return undefined', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         symbols: {
    //           ...testdata.baseAppState.Stocks.symbols,
    //         },
    //       },
    //     };

    //     const expected = undefined;

    //     expect(selectors.selectSearchResults(rootState)).toEqual(expected);
    //   });

    //   it('[Non-empty store]: Should return StockSearch data', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //             data: testdata.stockSearchData1.bestMatches,
    //             error: undefined,
    //           },
    //         },
    //       },
    //     };

    //     const expected = {
    //       fetching: false,
    //       data: testdata.stockSearchData1.bestMatches,
    //       error: undefined,
    //     };

    //     expect(selectors.selectSearchResults(rootState)).toEqual(expected);
    //   });
    // });

    // describe('selectSearchFetching', () => {
    //   it('[Empty store]: Should return undefined', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //       },
    //     };

    //     const expected = undefined;

    //     expect(selectors.selectSearchFetching(rootState)).toEqual(expected);
    //   });

    //   it("[Non-empty store]: Should return 'fetching' value", () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //           },
    //         },
    //       },
    //     };

    //     const expected = false;

    //     expect(selectors.selectSearchFetching(rootState)).toEqual(expected);
    //   });
    // });

    // describe('selectSearchData', () => {
    //   it('[Empty store]: Should return undefined', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //       },
    //     };

    //     const expected = undefined;

    //     expect(selectors.selectSearchData(rootState)).toEqual(expected);
    //   });

    //   it('[Empty store]: Should return empty array', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //             data: [],
    //           },
    //         },
    //       },
    //     };

    //     const expected: never[] = [];

    //     expect(selectors.selectSearchData(rootState)).toEqual(expected);
    //   });

    //   it('[Non-empty store]: Should return DataDomain.StockSearchBase[]', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //             data: testdata.stockSearchData1.bestMatches,
    //           },
    //         },
    //       },
    //     };

    //     const expected = testdata.stockSearchData1.bestMatches;

    //     expect(selectors.selectSearchData(rootState)).toEqual(expected);
    //   });
    // });

    // describe('selectSearchError', () => {
    //   it('[Empty store]: Should return undefined', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //       },
    //     };

    //     const expected = undefined;

    //     expect(selectors.selectSearchError(rootState)).toEqual(expected);
    //   });

    //   it("[Non-empty store]: Should return 'error'", () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...testdata.baseAppState.Stocks,
    //         search: {
    //           results: {
    //             fetching: false,
    //             error: new Error(''),
    //           },
    //         },
    //       },
    //     };

    //     const expected = new Error('');

    //     expect(selectors.selectSearchError(rootState)).toEqual(expected);
    //   });
    // });
  });

  describe('Stock Symbols Metadata selectors', () => {
    describe('selectSymbolsMetadata', () => {
      it('[Empty store]: Should return empty SymbolsMetadata', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
        };

        const expected: Reducer.SymbolsData = {
          fetching: false,
          data: [],
          error: undefined,
        };

        expect(selectors.selectSymbolsMetadata(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return SymbolsMetadata', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [
                testdata.symbolsMetadata1,
                testdata.symbolsMetadata2,
                testdata.symbolsMetadata3,
              ],
              error: undefined,
            },
          },
        };

        const expected: Reducer.SymbolsData = {
          fetching: false,
          data: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
          error: undefined,
        };

        expect(selectors.selectSymbolsMetadata(rootState)).toEqual(expected);
      });
    });

    describe('selectSymbolsMetadataFetching', () => {
      it('[Empty store]: Should return default value', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
        };

        const expected = false;

        expect(selectors.selectSymbolsMetadataFetching(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return boolean', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: true,
              data: [],
              error: undefined,
            },
          },
        };

        const expected = true;

        expect(selectors.selectSymbolsMetadataFetching(rootState)).toEqual(expected);
      });
    });

    describe('selectSymbolsMetadataData', () => {
      it('[Empty store]: Should return empty array', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
        };

        const expected: DataDomain.Symbols[] = [];

        expect(selectors.selectSymbolsMetadataData(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return array of Symbols Metadata', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [
                testdata.symbolsMetadata1,
                testdata.symbolsMetadata2,
                testdata.symbolsMetadata3,
              ],
              error: undefined,
            },
          },
        };

        const expected: DataDomain.Symbols[] = [
          testdata.symbolsMetadata1,
          testdata.symbolsMetadata2,
          testdata.symbolsMetadata3,
        ];

        expect(selectors.selectSymbolsMetadataData(rootState)).toEqual(expected);
      });
    });

    describe('selectSymbolsMetadataError', () => {
      it('[Empty store]: Should return default value', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
        };

        const expected = undefined;

        expect(selectors.selectSymbolsMetadataError(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return the proper value', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [],
              error: new Error(''),
            },
          },
        };

        const expected = new Error('');

        expect(selectors.selectSymbolsMetadataError(rootState)).toEqual(expected);
      });
    });
  });

  describe('Data processing', () => {
    describe('selectStockQuoteTrim', () => {
      it('[Empty store]: Should return empty array', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
        };
        const expected: SelectorsTypes.SelectQuoteTrim[] = [];
        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('Should handle if a Stock Quote data is undefined', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Favorites: {
            symbols: ['IBM', 'AAPL', 'SHOP'],
          },
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [
                testdata.symbolsMetadata1,
                testdata.symbolsMetadata2,
                testdata.symbolsMetadata3,
              ],
              error: undefined,
            },
            symbols: {
              AAPL: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData2,
                  error: undefined,
                },
              },
              SHOP: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData3,
                  error: undefined,
                },
              },
            },
          },
        };

        const expected: SelectorsTypes.SelectQuoteTrim[] = [
          {
            symbol: testdata.stockSymbol1,
            change: 0,
            changePercent: 0,
            companyName: 'International Business Machines Corporation',
            fetching: true,
            price: 0,
            currency: '',
          },
          selectStockQuoteTrim2,
          selectStockQuoteTrim3,
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('Should handle if all data is provided', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Favorites: {
            symbols: ['IBM', 'AAPL', 'SHOP'],
          },
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [
                testdata.symbolsMetadata1,
                testdata.symbolsMetadata2,
                testdata.symbolsMetadata3,
              ],
              error: undefined,
            },
            symbols: {
              IBM: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                  error: undefined,
                },
              },
              AAPL: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData2,
                  error: undefined,
                },
              },
              SHOP: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData3,
                  error: undefined,
                },
              },
            },
          },
        };

        const expected: SelectorsTypes.SelectQuoteTrim[] = [
          selectStockQuoteTrim1,
          selectStockQuoteTrim2,
          selectStockQuoteTrim3,
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('Should handle if all data is NOT provided', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Favorites: {
            symbols: ['IBM', 'AAPL', 'SHOP'],
          },
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [],
              error: undefined,
            },
            symbols: {
              IBM: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: defaultQuote,
                  error: new Error(''),
                },
              },
              AAPL: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: defaultQuote,
                  error: new Error(''),
                },
              },
              SHOP: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: defaultQuote,
                  error: new Error(''),
                },
              },
            },
          },
        };

        const expected: SelectorsTypes.SelectQuoteTrim[] = [
          {
            ...selectStockQuoteTrim1,
            companyName: '',
            price: 0,
            change: 0,
            changePercent: 0,
            currency: '',
          },
          {
            ...selectStockQuoteTrim2,
            companyName: '',
            price: 0,
            change: 0,
            changePercent: 0,
            currency: '',
          },
          {
            ...selectStockQuoteTrim3,
            companyName: '',
            price: 0,
            change: 0,
            changePercent: 0,
            currency: '',
          },
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('Should return default data if stock quote is set to defaultQuote', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Favorites: {
            symbols: ['IBM', 'AAPL', 'SHOP'],
          },
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [
                testdata.symbolsMetadata1,
                testdata.symbolsMetadata2,
                testdata.symbolsMetadata3,
              ],
              error: undefined,
            },
            symbols: {
              IBM: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: true,
                  data: defaultQuote,
                  error: undefined,
                },
              },
              AAPL: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData2,
                  error: undefined,
                },
              },
              SHOP: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData3,
                  error: undefined,
                },
              },
            },
          },
        };

        const expected: SelectorsTypes.SelectQuoteTrim[] = [
          {
            symbol: testdata.stockSymbol1,
            change: 0,
            changePercent: 0,
            companyName: 'International Business Machines Corporation',
            fetching: true,
            price: 0,
            currency: '',
          },
          selectStockQuoteTrim2,
          selectStockQuoteTrim3,
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('Should return default data if symbolsMetadata is not provided', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Favorites: {
            symbols: ['IBM', 'AAPL', 'SHOP'],
          },
          Stocks: {
            ...testdata.baseStocksState,
            symbolsMetadata: {
              fetching: false,
              data: [testdata.symbolsMetadata2, testdata.symbolsMetadata3],
              error: undefined,
            },
            symbols: {
              IBM: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: true,
                  data: defaultQuote,
                  error: undefined,
                },
              },
              AAPL: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData2,
                  error: undefined,
                },
              },
              SHOP: {
                chart: { ...testdata.baseStockChartState },
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData3,
                  error: undefined,
                },
              },
            },
          },
        };

        const expected: SelectorsTypes.SelectQuoteTrim[] = [
          {
            symbol: testdata.stockSymbol1,
            change: 0,
            changePercent: 0,
            companyName: '',
            fetching: true,
            price: 0,
            currency: '',
          },
          selectStockQuoteTrim2,
          selectStockQuoteTrim3,
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });
    });

    describe('selectStockDetailsTrim', () => {
      it('[Empty store]: Should return default value', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              IBM: {
                quote: {
                  fetching: true,
                  data: defaultQuote,
                  error: undefined,
                },
                chart: {
                  ...testdata.baseStockChartState,
                  fetching: true,
                },
              },
            },
          },
        };
        const expected: SelectorsTypes.SelectStockDetailsTrim = {
          fetching: true,
          quote: defaultQuote,
          chart: [],
        };
        expect(selectors.selectStockDetailsTrim(rootState, { stockSymbol: 'IBM' })).toEqual(
          expected,
        );
      });

      it('Should handle if all data is provided', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              IBM: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                  error: undefined,
                },
                chart: {
                  fetching: false,
                  data: testdata.stockChartData1,
                  error: undefined,
                },
              },
            },
          },
        };
        const expected: SelectorsTypes.SelectStockDetailsTrim = {
          fetching: false,
          quote: testdata.stockQuoteData1,
          chart: testdata.stockChartData1,
        };
        expect(selectors.selectStockDetailsTrim(rootState, { stockSymbol: 'IBM' })).toEqual(
          expected,
        );
      });
    });

    describe('selectStockDetailsLineChart', () => {
      it('Empty store]: Should return empty array', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              IBM: {
                quote: {
                  fetching: true,
                  data: defaultQuote,
                  error: undefined,
                },
                chart: {
                  ...testdata.baseStockChartState,
                  fetching: true,
                },
              },
            },
          },
        };
        const expected: { date: string; price: number }[] = [];
        expect(selectors.selectStockDetailsLineChart(rootState, { stockSymbol: 'IBM' })).toEqual(
          expected,
        );
      });

      it('Should handle if all data us provided', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {
              IBM: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                  error: undefined,
                },
                chart: {
                  fetching: false,
                  data: testdata.stockChartData1,
                  error: undefined,
                },
              },
            },
          },
        };
        const expected: { date: string; price: number }[] = testdata.stockChartData1.map((cur) => ({
          date: cur.date,
          price: cur.close,
        }));
        expect(selectors.selectStockDetailsLineChart(rootState, { stockSymbol: 'IBM' })).toEqual(
          expected,
        );
      });
    });
  });
});
