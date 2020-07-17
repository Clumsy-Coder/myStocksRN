import { Reducer } from 'redux';

import { ActionTypes, Reducer as StockReducer, Actions, DataDomain } from 'src/redux/Stocks/Types';

const initialState: StockReducer.ReducerState = {
  symbols: {},
  search: {
    keyword: '',
  },
  symbolsMetadata: {
    fetching: false,
    data: [],
    error: undefined,
  },
};

export const defaultQuote: DataDomain.Quote = {
  symbol: '',
  companyName: '',
  latestPrice: 0,
  latestVolume: 0,
  latestTime: '',
  latestUpdate: 0,
  change: 0,
  changePercent: 0,
  open: 0,
  close: 0,
  high: 0,
  low: 0,
  volume: 0,
  previousClose: 0,
  previousVolume: 0,
  week52High: 0,
  week52Low: 0,
  ytdChange: 0,
  peRatio: 0,
  marketCap: 0,
  avgTotalVolume: 0,
  primaryExchange: '',
};

const reducer: Reducer<StockReducer.ReducerState, Actions.StocksActions> = (
  state = initialState,
  action: Actions.StocksActions,
): StockReducer.ReducerState => {
  switch (action.type) {
    case ActionTypes.FETCH_STOCK_QUOTE_PENDING: {
      const chart: StockReducer.ChartData =
        state.symbols[action.stockSymbol] === undefined ||
        state.symbols[action.stockSymbol].chart === undefined
          ? {
              fetching: false,
              data: [],
              error: undefined,
            }
          : state.symbols[action.stockSymbol].chart;

      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            quote: {
              fetching: true,
              data:
                state.symbols[action.stockSymbol] !== undefined &&
                state.symbols[action.stockSymbol].quote !== undefined &&
                state.symbols[action.stockSymbol].quote.data !== defaultQuote
                  ? state.symbols[action.stockSymbol].quote.data
                  : defaultQuote,
              error: undefined,
            },
            chart,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_QUOTE_FULFILLED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            quote: {
              fetching: false,
              data: action.payload,
              error: undefined,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_QUOTE_REJECTED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            quote: {
              fetching: false,
              data: defaultQuote,
              error: action.error,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_PENDING: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            chart: {
              fetching: true,
              data:
                state.symbols[action.stockSymbol] !== undefined &&
                state.symbols[action.stockSymbol].chart !== undefined &&
                state.symbols[action.stockSymbol].chart.data.length > 0
                  ? state.symbols[action.stockSymbol].chart.data
                  : [],
              error: undefined,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_FULFILLED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            chart: {
              fetching: false,
              data: action.payload,
              error: undefined,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_REJECTED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            chart: {
              fetching: false,
              data: [],
              error: action.error,
            },
          },
        },
      };
    }
    case ActionTypes.SET_SEARCH_KEYWORD: {
      return {
        ...state,
        search: {
          ...state.search,
          keyword: action.keyword,
        },
      };
    }
    case ActionTypes.CLEAR_SEARCH_KEYWORD: {
      return {
        ...state,
        search: {
          ...state.search,
          keyword: '',
        },
      };
    }
    case ActionTypes.FETCH_SYMBOLS_METADATA_PENDING: {
      return {
        ...state,
        symbolsMetadata: {
          fetching: true,
          data: [],
          error: undefined,
        },
      };
    }
    case ActionTypes.FETCH_SYMBOLS_METADATA_FULFILLED: {
      return {
        ...state,
        symbolsMetadata: {
          fetching: false,
          data: action.payload,
          error: undefined,
        },
      };
    }
    case ActionTypes.FETCH_SYMBOLS_METADATA_REJECTED: {
      return {
        ...state,
        symbolsMetadata: {
          fetching: false,
          data: [],
          error: action.error,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
