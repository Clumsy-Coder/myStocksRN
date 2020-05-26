import { Reducer } from 'redux';

import {
  ActionTypes,
  Reducer as FavoritesReducer,
  FavoritesActions,
} from 'src/redux/Favorites/Types';

const initialState: FavoritesReducer.FavoritesReducerState = {
  symbols: [],
};

const reducer: Reducer<FavoritesReducer.FavoritesReducerState, FavoritesActions> = (
  state = initialState,
  action,
): FavoritesReducer.FavoritesReducerState => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE_STOCK: {
      // create a map. 'key' is the stock symbol and the 'value' is the entire FavoriteStockData object
      const map = new Map(state.symbols.map((obj) => [obj['1. symbol'], obj]));
      map.set(action.stockMetadata['1. symbol'], action.stockMetadata);
      return {
        symbols: [...map.values()],
      };
    }
    case ActionTypes.REMOVE_FAVORITE_STOCK: {
      // create a map. 'key' is the stock symbol and the 'value' is the entire FavoriteStockData object
      const map = new Map(state.symbols.map((obj) => [obj['1. symbol'], obj]));
      map.delete(action.stockSymbol);
      return {
        symbols: [...map.values()],
      };
    }
    case ActionTypes.CLEAR_FAVORITE_STOCKS: {
      return {
        symbols: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
