import { Reducer } from 'redux';

import { ActionTypes, StocksReducerState, StocksActions } from 'src/redux/Stocks/Types';

const initialState: StocksReducerState = {};

const reducer: Reducer<StocksReducerState, StocksActions> = (
  state = initialState,
  action: StocksActions,
): StocksReducerState => {
  switch (action.type) {
    case ActionTypes.FETCH_STOCK_QUOTE_PENDING: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: true,
            // data: undefined,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_QUOTE_FULFILLED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: false,
            data: action.payload.data,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_QUOTE_REJECTED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: false,
            data: undefined,
            error: action.error,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_PENDING: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          chart: {
            fetching: true,
            data: undefined,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_FULFILLED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          chart: {
            fetching: false,
            data: action.payload.data,
            error: undefined,
          },
        },
      };
    }
    case ActionTypes.FETCH_STOCK_CHART_REJECTED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          chart: {
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
