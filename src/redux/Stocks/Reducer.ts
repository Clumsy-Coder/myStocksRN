import { ActionTypesEnum, IStockState, StockActionTypes } from 'src/redux/Stocks/Types';

const initialState: IStockState = {};

const reducer = (state = initialState, action: StockActionTypes): IStockState => {
  switch (action.type) {
    case ActionTypesEnum.GET_STOCK_QUOTE_PENDING: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: false,
            data: null,
            error: null,
          },
        },
      };
    }
    case ActionTypesEnum.GET_STOCK_QUOTE_FULFILLED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: false,
            data: action.payload.data,
            error: null,
          },
        },
      };
    }
    case ActionTypesEnum.GET_STOCK_QUOTE_REJECTED: {
      return {
        ...state,
        [action.stockSymbol]: {
          ...state[action.stockSymbol],
          quote: {
            fetching: false,
            data: null,
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
