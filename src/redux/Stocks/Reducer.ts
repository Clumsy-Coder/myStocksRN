import { ActionTypesEnum, IStockState, StockActionTypes } from 'src/redux/Stocks/Types';

const initialState: IStockState = {};

const reducer = (state = initialState, action: StockActionTypes): IStockState => {
  switch (action.type) {
    case ActionTypesEnum.GET_STOCK_QUOTE_PENDING: {
      return {
        ...state,
        [action.payload]: {
          quote: {
            fetching: false,
            data: null,
            error: null,
          },
        },
      };
    }
    case ActionTypesEnum.GET_STOCK_QUOTE_FULFILLED: {
      return state;
    }
    case ActionTypesEnum.GET_STOCK_QUOTE_REJECTED: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
