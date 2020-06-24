import { Reducer } from 'redux';

import { ActionTypes, Reducer as FavoritesReducer, Actions } from 'src/redux/Favorites/Types';

const initialState: FavoritesReducer.ReducerState = {
  symbols: [],
};

const reducer: Reducer<FavoritesReducer.ReducerState, Actions.FavoritesActions> = (
  state = initialState,
  action,
): FavoritesReducer.ReducerState => {
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
