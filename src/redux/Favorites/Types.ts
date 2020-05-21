import { Action } from 'redux';

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
export interface FavoritesReducerState {
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
export interface AddFavoriteStockAction extends Action<ActionTypes.ADD_FAVORITE_STOCK> {
  type: ActionTypes.ADD_FAVORITE_STOCK;
  readonly stockSymbol: string;
}

/**
 * Remove stock from Favorites action
 */
export interface RemoveFavoriteStockAction extends Action<ActionTypes.REMOVE_FAVORITE_STOCK> {
  type: ActionTypes.REMOVE_FAVORITE_STOCK;
  readonly stockSymbol: string;
}

/**
 * Clear all stocks from Favorites action
 */
export interface ClearFavoriteStocksAction extends Action<ActionTypes.CLEAR_FAVORITE_STOCKS> {
  type: ActionTypes.CLEAR_FAVORITE_STOCKS;
}

/**
 * Union of actions for AddFavoriteStock, RemoveFavoriteStock, ClearFavoriteStocks
 */
export type FavoritesActions =
  | AddFavoriteStockAction
  | RemoveFavoriteStockAction
  | ClearFavoriteStocksAction;
