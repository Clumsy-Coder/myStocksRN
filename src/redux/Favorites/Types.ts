/* eslint-disable @typescript-eslint/no-namespace */
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
 * Data structures used in Favorites Reducer
 */
export namespace Reducer {
  /**
   * Data structure used for storing stock metadata.
   * This structure comes from searching a stock.
   * Check https://www.alphavantage.co/documentation/#symbolsearch
   */
  export interface FavoriteStockData {
    '1. symbol': string;
    '2. name': string;
    // '3. type': string;
    '4. region': string;
    // '5. marketOpen': string;
    // '6. marketClose': string;
    '7. timezone': string;
    '8. currency': string;
    // '9. matchScore': string;
  }

  /**
   * Favorites reducer state
   */
  export interface FavoritesReducerState {
    symbols: FavoriteStockData[];
  }
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
 * All Actions interfaces regarding Favorites
 */
export namespace Actions {
  /**
   * Add stock to Favorites action
   */
  export interface AddFavoriteStockAction extends Action<ActionTypes.ADD_FAVORITE_STOCK> {
    type: ActionTypes.ADD_FAVORITE_STOCK;
    readonly stockMetadata: Reducer.FavoriteStockData;
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
}

/**
 * Union of actions for AddFavoriteStock, RemoveFavoriteStock, ClearFavoriteStocks
 */
export type FavoritesActions =
  | Actions.AddFavoriteStockAction
  | Actions.RemoveFavoriteStockAction
  | Actions.ClearFavoriteStocksAction;
