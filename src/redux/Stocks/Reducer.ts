import { Reducer } from 'redux';

import { ActionTypes, Reducer as StockReducer, StocksActions } from 'src/redux/Stocks/Types';

const initialState: StockReducer.ReducerState = {
  symbols: {},
  search: {
    keyword: '',
    results: {
      fetching: false,
      data: [],
      error: undefined,
    },
  },
};

const reducer: Reducer<StockReducer.ReducerState, StocksActions> = (
  state = initialState,
  action: StocksActions,
): StockReducer.ReducerState => {
  switch (action.type) {
    case ActionTypes.FETCH_STOCK_QUOTE_PENDING: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            quote: {
              fetching: true,
              // data: undefined,
              error: undefined,
            },
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
              data: undefined,
              error: action.error,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            dailyAdj: {
              fetching: true,
              data: undefined,
              error: undefined,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            dailyAdj: {
              fetching: false,
              data: action.payload,
              error: undefined,
            },
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            dailyAdj: {
              fetching: false,
              data: undefined,
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
    case ActionTypes.SET_STOCK_METADATA: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            metadata: action.payload,
          },
        },
      };
    }
    case ActionTypes.SEARCH_KEYWORD_PENDING: {
      return {
        ...state,
        search: {
          ...state.search,
          results: {
            fetching: true,
            data: undefined,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.SEARCH_KEYWORD_FULFILLED: {
      return {
        ...state,
        search: {
          ...state.search,
          results: {
            fetching: false,
            data: action.payload.bestMatches,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.SEARCH_KEYWORD_REJECTED: {
      return {
        ...state,
        search: {
          ...state.search,
          results: {
            fetching: false,
            data: undefined,
            error: action.error,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
