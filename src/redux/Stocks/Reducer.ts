import { ActionTypesEnum, StockState, StockActionTypes } from 'src/redux/Stocks/Types';

const initialState: StockState = {};

const reducer = (state = initialState, action: StockActionTypes): StockState => {
  switch (action.type) {
    case ActionTypesEnum.FETCH_STOCK_QUOTE_PENDING: {
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
    case ActionTypesEnum.FETCH_STOCK_QUOTE_FULFILLED: {
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
    case ActionTypesEnum.FETCH_STOCK_QUOTE_REJECTED: {
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
    case ActionTypesEnum.FETCH_STOCK_CHART_PENDING: {
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
    case ActionTypesEnum.FETCH_STOCK_CHART_FULFILLED: {
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
    case ActionTypesEnum.FETCH_STOCK_CHART_REJECTED: {
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
