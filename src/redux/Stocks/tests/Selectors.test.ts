import * as selectors from 'src/redux/Stocks/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer, Selectors as SelectorsType } from 'src/redux/Stocks/Types';

import * as testdata from 'jest.testdata';

const baseStockReducerState: Reducer.ReducerState = {
  symbols: {},
  search: {
    // keyword: '',
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
        ...baseAppState,
        Stocks: {
          symbols: {},
        },
      };
      const expected = {
        symbols: {},
      };

      expect(selectors.selectAllStocks(store)).toEqual(expected);
    });
  });

  describe('Stock quote selectors', () => {
    describe('[selectStock]: Select individual Stock by stockSymbol', () => {
      it('Select individual Stock with one StockData in store', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
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
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
              [testdata.stockSymbol3]: {
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
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData1,
          },
        };
        const expected2: Reducer.StockData = {
          quote: {
            fetching: false,
            error: undefined,
            data: testdata.stockQuoteData2,
          },
        };
        const expected3: Reducer.StockData = {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };
        const expected: Reducer.StockQuoteData = {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
            },
          },
        };
        const expected1: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData1,
        };
        const expected2: Reducer.StockQuoteData = {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData2,
                },
              },
              [testdata.stockSymbol3]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData3,
                },
              },
            },
          },
        };
        const expected1: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData1,
        };
        const expected2: Reducer.StockQuoteData = {
          fetching: false,
          error: undefined,
          data: testdata.stockQuoteData2,
        };
        const expected3: Reducer.StockQuoteData = {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
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
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
              [testdata.stockSymbol3]: {
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
              },
            },
          };

          const expected: DataDomain.StockQuote = testdata.stockQuoteData1;

          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.StockQuote = testdata.stockQuoteData1;
          const expected2: DataDomain.StockQuote = testdata.stockQuoteData2;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
                [testdata.stockSymbol3]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData3,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.StockQuote = testdata.stockQuoteData1;
          const expected2: DataDomain.StockQuote = testdata.stockQuoteData2;
          const expected3: DataDomain.StockQuote = testdata.stockQuoteData3;
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
              },
            },
          };

          const expected: DataDomain.StockQuote | undefined = undefined;

          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected);
        });

        it("Select 'data' with two StockData in store", () => {
          const rootState: AppState = {
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.StockQuote | undefined = undefined;
          const expected2: DataDomain.StockQuote | undefined = undefined;
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol1 }),
          ).toEqual(expected1);
          expect(
            selectors.selectStockQuoteData(rootState, { stockSymbol: testdata.stockSymbol2 }),
          ).toEqual(expected2);
        });

        it("Select 'data' with three StockData in store", () => {
          const rootState: AppState = {
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
                [testdata.stockSymbol3]: {
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
              },
            },
          };

          const expected1: DataDomain.StockQuote | undefined = undefined;
          const expected2: DataDomain.StockQuote | undefined = undefined;
          const expected3: DataDomain.StockQuote | undefined = undefined;
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: undefined,
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: undefined,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol2}`),
                    data: undefined,
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol1}`),
                    data: undefined,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol2}`),
                    data: undefined,
                  },
                },
                [testdata.stockSymbol3]: {
                  quote: {
                    fetching: false,
                    error: new Error(`error for ${testdata.stockSymbol3}`),
                    data: undefined,
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
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
            ...baseAppState,
            Stocks: {
              symbols: {
                [testdata.stockSymbol1]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData1,
                  },
                },
                [testdata.stockSymbol2]: {
                  quote: {
                    fetching: false,
                    error: undefined,
                    data: testdata.stockQuoteData2,
                  },
                },
                [testdata.stockSymbol3]: {
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

    describe('selectStockMetadata', () => {
      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                },
              },
            },
          },
        };

        const expected = undefined;

        expect(
          selectors.selectStockMetadata(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Empty store]: Should return StockSearchBase for a stock', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                },
                metadata: testdata.stockSearchData1.bestMatches[0],
              },
            },
          },
        };

        const expected = testdata.stockSearchData1.bestMatches[0];

        expect(
          selectors.selectStockMetadata(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });
  });

  describe('Stock Daily Adjusted selectors', () => {
    describe('selectStockDailyAdjusted', () => {
      it('[Empty store]: Should return empty StockDailyAdjData', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          selectors.selectStockDailyAdjusted(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockDailyAdjData', () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
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
          selectors.selectStockDailyAdjusted(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedFetching', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          selectors.selectStockDailyAdjustedFetching(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });
      it('[Non-empty store]: Should return boolean', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                dailyAdj: {
                  fetching: true,
                  error: undefined,
                  data: undefined,
                },
              },
            },
          },
        };

        const expected = true;

        expect(
          selectors.selectStockDailyAdjustedFetching(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedData', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          selectors.selectStockDailyAdjustedData(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return StockDailyAdj', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                dailyAdj: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockDailyAdjData1,
                },
              },
            },
          },
        };

        const expected: DataDomain.StockDailyAdj = testdata.stockDailyAdjData1;

        expect(
          selectors.selectStockDailyAdjustedData(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedError', () => {
      it('[Empty store]: Should return empty undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
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
          selectors.selectStockDailyAdjustedError(rootState, {
            stockSymbol: testdata.stockSymbol1,
          }),
        ).toEqual(expected);
      });

      it('[Non-empty store]: Should return Error', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  error: undefined,
                  data: testdata.stockQuoteData1,
                },
                dailyAdj: {
                  fetching: false,
                  error: new Error(''),
                  data: undefined,
                },
              },
            },
          },
        };

        const expected: Error = new Error('');

        expect(
          selectors.selectStockDailyAdjustedError(rootState, {
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
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              keyword: '',
            },
          },
        };

        const expected = '';

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });

      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            symbols: {},
          },
        };

        const expected = undefined;

        expect(selectors.selectSearchKeyword(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return the proper value', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseAppState.Stocks,
            search: {
              keyword: testdata.stockSymbol1,
            },
          },
        };

        const expected = testdata.stockSymbol1;

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
                data: testdata.stockSearchData1.bestMatches,
                error: undefined,
              },
            },
          },
        };

        const expected = {
          fetching: false,
          data: testdata.stockSearchData1.bestMatches,
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
                data: testdata.stockSearchData1.bestMatches,
              },
            },
          },
        };

        const expected = testdata.stockSearchData1.bestMatches;

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

  describe('Data processing', () => {
    describe('selectStockQuoteTrim', () => {
      it('[Empty store]: Should return empty array', () => {
        const rootState: AppState = {
          ...baseAppState,
        };

        const expected: SelectorsType.SelectQuoteTrim[] = [];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });

      it('[Non-empty store]: Should return array of SelectQuoteTrim objects', () => {
        const rootState: AppState = {
          ...baseAppState,
          Stocks: {
            ...baseStockReducerState,
            symbols: {
              [testdata.stockSymbol1]: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData1,
                  error: undefined,
                },
              },
              [testdata.stockSymbol2]: {
                quote: {
                  fetching: true,
                  data: undefined,
                  error: undefined,
                },
              },
              [testdata.stockSymbol3]: {
                quote: {
                  fetching: false,
                  data: testdata.stockQuoteData3,
                  error: undefined,
                },
              },
            },
          },
          Favorites: {
            symbols: [
              testdata.stockSearchData1.bestMatches[0],
              testdata.stockSearchData2.bestMatches[0],
              testdata.stockSearchData3.bestMatches[0],
            ],
          },
        };

        const expected: SelectorsType.SelectQuoteTrim[] = [
          {
            fetching: false,
            symbol: testdata.stockSymbol1,
            companyName: testdata.stockSearchData1.bestMatches[0]['2. name'],
            price: testdata.stockQuoteData1['Global Quote']['05. price'],
            change: testdata.stockQuoteData1['Global Quote']['09. change'],
            changePercent: testdata.stockQuoteData1['Global Quote']['10. change percent'],
          },
          {
            fetching: false,
            symbol: testdata.stockSymbol3,
            companyName: testdata.stockSearchData3.bestMatches[0]['2. name'],
            price: testdata.stockQuoteData3['Global Quote']['05. price'],
            change: testdata.stockQuoteData3['Global Quote']['09. change'],
            changePercent: testdata.stockQuoteData3['Global Quote']['10. change percent'],
          },
        ];

        expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
      });
    });
  });
});
