import { Reducer } from 'redux';

import { ActionTypes, Reducer as StockReducer, StocksActions } from 'src/redux/Stocks/Types';

const initialState: StockReducer.ReducerState = {
  symbols: {},
  searchKeyword: '',
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
        searchKeyword: action.keyword,
      };
    }
    case ActionTypes.CLEAR_SEARCH_KEYWORD: {
      return {
        ...state,
        searchKeyword: '',
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
