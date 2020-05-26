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
      const set = new Set([...state.symbols]);
      set.add(action.stockSymbol);
      return {
        symbols: [...set],
      };
    }
    case ActionTypes.REMOVE_FAVORITE_STOCK: {
      const set = new Set([...state.symbols]);
      set.delete(action.stockSymbol);
      return {
        symbols: [...set],
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
