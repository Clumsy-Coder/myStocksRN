/*
██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗     ███████╗████████╗ █████╗ ████████╗███████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝    ███████╗   ██║   ███████║   ██║   █████╗
██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗    ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝
██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║    ███████║   ██║   ██║  ██║   ██║   ███████╗
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝

*/

/**
 * Favorites reducer state
 */
export interface FavoriteReducerState {
  symbols: string[];
}

// ---------------------------------------------------------------------------------------------- //
/*
 █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ████████╗██╗   ██╗██████╗ ███████╗███████╗
██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
███████║██║        ██║   ██║██║   ██║██╔██╗ ██║       ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║       ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║       ██║      ██║   ██║     ███████╗███████║
╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝

*/

/**
 * Favorites action types
 */
export enum ActionTypes {
  ADD_FAVORITE_STOCK = 'FAVORITES/ADD_FAVORITE_STOCK',
  REMOVE_FAVORITE_STOCK = 'FAVORITES/REMOVE_FAVORITE_STOCK',
  CLEAR_FAVORITE_STOCKS = 'FAVORITES/CLEAR_FAVORITE_STOCKS',
}

// ---------------------------------------------------------------------------------------------- //
/*
 █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

*/

/**
 * Add stock to Favorites action
 */
export interface AddFavoriteStockAction {
  type: ActionTypes.ADD_FAVORITE_STOCK;
  readonly stockSymbol: string;
}

/**
 * Remove stock from Favorites action
 */
export interface RemoveFavoriteStockAction {
  type: ActionTypes.REMOVE_FAVORITE_STOCK;
  readonly stockSymbol: string;
}

/**
 * Clear all stocks from Favorites action
 */
export interface ClearFavoriteStocksAction {
  type: ActionTypes.CLEAR_FAVORITE_STOCKS;
}

/**
 * Union of actions for AddFavoriteStock, RemoveFavoriteStock, ClearFavoriteStocks
 */
export type FavoritesActions =
  | AddFavoriteStockAction
  | RemoveFavoriteStockAction
  | ClearFavoriteStocksAction;
