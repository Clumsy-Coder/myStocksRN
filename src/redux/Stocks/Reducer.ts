import { Reducer } from 'redux';

import { ActionTypes, Reducer as StockReducer, Actions } from 'src/redux/Stocks/Types';

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

const reducer: Reducer<StockReducer.ReducerState, Actions.StocksActions> = (
  state = initialState,
  action: Actions.StocksActions,
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
    case ActionTypes.FETCH_STOCK_CHART_PENDING: {
      return {
        ...state,
        symbols: {
          ...state.symbols,
          [action.stockSymbol]: {
            ...state.symbols[action.stockSymbol],
            chart: {
              fetching: true,
              data: undefined,
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

    default: {
      return state;
    }
  }
};

export default reducer;
