import * as selectors from 'src/redux/Stocks/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer } from 'src/redux/Stocks/Types';

const stockSymbol1 = 'IBM';
const stockSymbol2 = 'AAPL';
const stockSymbol3 = 'SHOP';

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

const stockQuoteData3: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'SHOP',
    '02. open': '804.6300',
    '03. high': '826.3799',
    '04. low': '793.6400',
    '05. price': '825.1700',
    '06. volume': '2761628',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '802.3500',
    '09. change': '22.8200',
    '10. change percent': '2.8441%',
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

const baseStockReducerState: Reducer.ReducerState = {
  symbols: {},
  search: {
    keyword: '',
    // results: {},
  },
};

const baseAppState: AppState = {
  Stocks: {
    ...baseStockReducerState,
  },
  Favorites: {
    symbols: [],
  },
};

describe('Stocks selectors', () => {
  describe('Empty store', () => {
    it('Handle with empty store', () => {
      const store: AppState = {
        Stocks: {
          symbols: {},
        },
        Favorites: {
          symbols: [],
        },
      };
      const expected = {
        symbols: {},
      };

      expect(selectors.selectAllStocks(store)).toEqual(expected);
    });
  });

  describe('Stock quote selectors', () => {
    describe('Select individual Stock by stockSymbol', () => {
      it('Select individual Stock with one StockData in store', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: Reducer.StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };

        expect(selectors.selectStock(rootState, { stockSymbol: stockSymbol1 })).toEqual(expected);
      });

      it('Select individual Stock with two StockData in store', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
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
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected1: Reducer.StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
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
        const rootState: AppState = {
          Stocks: {
            symbols: {
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
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected1: Reducer.StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: stockQuoteData2,
          },
        };
        const expected3: Reducer.StockData = {
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
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        expect(selectors.selectStockQuote(rootState, { stockSymbol: stockSymbol1 })).toEqual(
          expected,
        );
      });

      it('Select individual Stock quote with two StockData in store', () => {
        const stockState: AppState = {
          Stocks: {
            symbols: {
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
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        const expected2: Reducer.StockQuoteData = {
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
        const stockState: AppState = {
          Stocks: {
            symbols: {
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
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected1: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData1,
        };
        const expected2: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: stockQuoteData2,
        };
        const expected3: Reducer.StockQuoteData = {
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
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };
        const expected = false;
        expect(
          selectors.selectStockQuoteFetching(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });

      it("Select stock quote 'fetching' with two StockData in store", () => {
        const stockState: AppState = {
          Stocks: {
            symbols: {
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
        const stockState: AppState = {
          Stocks: {
            symbols: {
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
                [stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: stockQuoteData1,
                  },
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: DataDomain.StockQuote = stockQuoteData1;

          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected,
          );
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: DataDomain.StockQuote = stockQuoteData1;
          const expected2: DataDomain.StockQuote = stockQuoteData2;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: DataDomain.StockQuote = stockQuoteData1;
          const expected2: DataDomain.StockQuote = stockQuoteData2;
          const expected3: DataDomain.StockQuote = stockQuoteData3;
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
                [stockSymbol1]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: DataDomain.StockQuote | undefined = undefined;

          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected,
          );
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: DataDomain.StockQuote | undefined = undefined;
          const expected2: DataDomain.StockQuote | undefined = undefined;
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected1,
          );
          expect(selectors.selectStockQuoteData(rootState, { stockSymbol: stockSymbol2 })).toEqual(
            expected2,
          );
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected1: DataDomain.StockQuote | undefined = undefined;
          const expected2: DataDomain.StockQuote | undefined = undefined;
          const expected3: DataDomain.StockQuote | undefined = undefined;
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
                [stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${stockSymbol1}`),
                    data: undefined,
                  },
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: Error = new Error(`error for ${stockSymbol1}`);

          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected,
          );
        });

        it("Select 'error' with two StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
                [stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: stockQuoteData1,
                  },
                },
              },
            },
            Favorites: {
              symbols: [],
            },
          };

          const expected: Error | undefined = undefined;

          expect(selectors.selectStockQuoteError(rootState, { stockSymbol: stockSymbol1 })).toEqual(
            expected,
          );
        });

        it("Select 'error' with two StockData in store", () => {
          const rootState: AppState = {
            Stocks: {
              symbols: {
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
          const rootState: AppState = {
            Stocks: {
              symbols: {
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

  describe('Stock Daily Adjusted selectors', () => {
    describe('selectStockDailyAdjusted', () => {
      it('[Empty store]: Should return empty StockDailyAdjData', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockDailyAdjusted(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockDailyAdjData', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
                dailyAdj: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: Reducer.StockDailyAdjData = {
          fetching: true,
          error: undefined,
          data: undefined,
        };

        expect(
          selectors.selectStockDailyAdjusted(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedFetching', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockDailyAdjustedFetching(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });
      it('[Non-empty store]: Should return boolean', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
                dailyAdj: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = true;

        expect(
          selectors.selectStockDailyAdjustedFetching(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedData', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockDailyAdjustedData(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockDailyAdj', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
                dailyAdj: {
                  fetching: false,
                  error: undefined,
                  data: stockDailyAdjData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: DataDomain.StockDailyAdj = stockDailyAdjData1;

        expect(
          selectors.selectStockDailyAdjustedData(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedError', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockDailyAdjustedError(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return Error', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
                dailyAdj: {
                  fetching: false,
                  error: new Error(''),
                  data: undefined,
                },
              },
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected: Error = new Error('');

        expect(
          selectors.selectStockDailyAdjustedError(rootState, { stockSymbol: stockSymbol1 }),
        ).toEqual(expected);
      });
    });
  });

  describe('Stock search selectors', () => {
    describe('selectSearchKeyword', () => {
      it('[Empty store]: Should return empty strings', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {},
            search: {
              keyword: '',
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = '';

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return the proper value', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: stockQuoteData1,
                },
              },
            },
            search: {
              keyword: stockSymbol1,
            },
          },
          Favorites: {
            symbols: [],
          },
        };

        const expected = stockSymbol1;

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });
    });

    describe('selectSearchResults', () => {
      it('[Empty store]: Should return empty object', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
                data: [],
                error: undefined,
              },
            },
          },
        };

        const expected = {
          fetching: false,
          data: [],
          error: undefined,
        };

        expect(selectors.selectSearchResults(rootState)).toEqual(expected);
      });

      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              ...baseAppState.Stocks.symbols,
            },
          },
        };

        const expected = undefined;

        expect(selectors.selectSearchResults(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockSearch data', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
                data: stockSearchData.bestMatches,
                error: undefined,
              },
            },
          },
        };

        const expected = {
          fetching: false,
          data: stockSearchData.bestMatches,
          error: undefined,
        };

        expect(selectors.selectSearchResults(rootState)).toEqual(expected);
      });
    });

    describe('selectSearchFetching', () => {
      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
          },
        };

        const expected = undefined;

        expect(selectors.selectSearchFetching(rootState)).toEqual(expected);
      });

      it("[Non-empty store]: Should return 'fetching' value", () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
              },
            },
          },
        };

        const expected = false;

        expect(selectors.selectSearchFetching(rootState)).toEqual(expected);
      });
    });

    describe('selectSearchData', () => {
      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
          },
        };

        const expected = undefined;

        expect(selectors.selectSearchData(rootState)).toEqual(expected);
      });

      it('[Empty store]: Should return empty array', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
                data: [],
              },
            },
          },
        };

        const expected: never[] = [];

        expect(selectors.selectSearchData(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return DataDomain.StockSearchBase[]', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
                data: stockSearchData.bestMatches,
              },
            },
          },
        };

        const expected = stockSearchData.bestMatches;

        expect(selectors.selectSearchData(rootState)).toEqual(expected);
      });
    });

    describe('selectSearchError', () => {
      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
          },
        };

        const expected = undefined;

        expect(selectors.selectSearchError(rootState)).toEqual(expected);
      });

      it("[Non-empty store]: Should return 'error'", () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              results: {
                fetching: false,
                error: new Error(''),
              },
            },
          },
        };

        const expected = new Error('');

        expect(selectors.selectSearchError(rootState)).toEqual(expected);
      });
    });
  });
});
