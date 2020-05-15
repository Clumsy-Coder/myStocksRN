import { ActionTypes, FavoriteReducerState, FavoritesActions } from 'src/redux/Favorites/Types';

const initialState: FavoriteReducerState = {
  symbols: [],
};

const reducer = (state = initialState, action: FavoritesActions): FavoriteReducerState => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE_STOCK: {
      const set = new Set(...state.symbols);
      return {
        symbols: [...set],
      };
    }
    case ActionTypes.REMOVE_FAVORITE_STOCK: {
      const set = new Set(...state.symbols);
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
