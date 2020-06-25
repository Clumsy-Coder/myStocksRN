/* eslint-disable jest/no-commented-out-tests */
import * as selectors from 'src/redux/Stocks/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer, Selectors as SelectorsType } from 'src/redux/Stocks/Types';

import * as testdata from 'jest.testdata';

describe('Stocks selectors', () => {
  describe('Empty store', () => {
    it('Handle with empty store', () => {
      const store: AppState = {
        ...testdata.baseAppState,
      };
      const expected: Reducer.ReducerState = {
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
                  quote: {
                    fetching: true,
                    error: undefined,
                    data: undefined,
                  },
                },
              },
            },
          };

          const expected: DataDomain.Quote | undefined = undefined;

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

          const expected1: DataDomain.Quote | undefined = undefined;
          const expected2: DataDomain.Quote | undefined = undefined;
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

          const expected1: DataDomain.Quote | undefined = undefined;
          const expected2: DataDomain.Quote | undefined = undefined;
          const expected3: DataDomain.Quote | undefined = undefined;
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
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
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
            ...testdata.baseAppState,
            Stocks: {
              ...testdata.baseStocksState,
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

  describe('Stock Daily Adjusted selectors', () => {
    describe('selectStockDailyAdjusted', () => {
      it('[Empty store]: Should return empty ChartData', () => {
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
              },
            },
          },
        };

        const expected = undefined;

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
                  data: undefined,
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
          data: undefined,
        };

        expect(
          selectors.selectStockChart(rootState, { stockSymbol: testdata.stockSymbol1 }),
        ).toEqual(expected);
      });
    });

    describe('selectStockDailyAdjustedFetching', () => {
      it('[Empty store]: Should return empty undefined', () => {
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
              },
            },
          },
        };

        const expected = undefined;

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
                  data: undefined,
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

    describe('selectStockDailyAdjustedData', () => {
      it('[Empty store]: Should return empty undefined', () => {
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
              },
            },
          },
        };

        const expected = undefined;

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

    describe('selectStockDailyAdjustedError', () => {
      it('[Empty store]: Should return empty undefined', () => {
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
                  data: undefined,
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

      it('[Empty store]: Should return undefined', () => {
        const rootState: AppState = {
          ...testdata.baseAppState,
          Stocks: {
            ...testdata.baseStocksState,
            symbols: {},
          },
        };

        const expected = undefined;

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

  describe('Data processing', () => {
    // describe('selectStockQuoteTrim', () => {
    //   it('[Empty store]: Should return empty array', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //     };
    //     const expected: SelectorsType.SelectQuoteTrim[] = [];
    //     expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
    //   });
    //   it('[Non-empty store]: Should return array of SelectQuoteTrim objects', () => {
    //     const rootState: AppState = {
    //       ...testdata.baseAppState,
    //       Stocks: {
    //         ...testdata.baseStocksState,
    //         ...baseStockReducerState,
    //         symbols: {
    //           [testdata.stockSymbol1]: {
    //             quote: {
    //               fetching: false,
    //               data: testdata.stockQuoteData1,
    //               error: undefined,
    //             },
    //           },
    //           [testdata.stockSymbol2]: {
    //             quote: {
    //               fetching: true,
    //               data: undefined,
    //               error: undefined,
    //             },
    //           },
    //           [testdata.stockSymbol3]: {
    //             quote: {
    //               fetching: false,
    //               data: testdata.stockQuoteData3,
    //               error: undefined,
    //             },
    //           },
    //         },
    //       },
    //       Favorites: {
    //         symbols: [
    //           testdata.stockSearchData1.bestMatches[0],
    //           testdata.stockSearchData2.bestMatches[0],
    //           testdata.stockSearchData3.bestMatches[0],
    //         ],
    //       },
    //     };
    //     const expected: SelectorsType.SelectQuoteTrim[] = [
    //       {
    //         fetching: false,
    //         symbol: testdata.stockSymbol1,
    //         companyName: testdata.stockSearchData1.bestMatches[0]['2. name'],
    //         price: testdata.stockQuoteData1['Global Quote']['05. price'],
    //         change: testdata.stockQuoteData1['Global Quote']['09. change'],
    //         changePercent: testdata.stockQuoteData1['Global Quote']['10. change percent'],
    //       },
    //       {
    //         fetching: false,
    //         symbol: testdata.stockSymbol3,
    //         companyName: testdata.stockSearchData3.bestMatches[0]['2. name'],
    //         price: testdata.stockQuoteData3['Global Quote']['05. price'],
    //         change: testdata.stockQuoteData3['Global Quote']['09. change'],
    //         changePercent: testdata.stockQuoteData3['Global Quote']['10. change percent'],
    //       },
    //     ];
    //     expect(selectors.selectStockQuoteTrim(rootState)).toEqual(expected);
    //   });
    // });
  });
});
