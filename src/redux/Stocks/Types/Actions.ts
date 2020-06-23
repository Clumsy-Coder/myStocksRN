/* eslint-disable @typescript-eslint/no-namespace */
import { Action } from 'redux';

import ActionTypes from '@redux/Stocks/Types/ActionTypes';
import * as DataDomain from '@redux/Stocks/Types/DataDomain';

/**
 * All action interfaces for Stock Quote
 *
 * https://iexcloud.io/docs/api/#quote
 */
export namespace Quote {
  /**
   * Fetch Stock Quote action.
   * Used for initializing for fetching the data.
   */
  export interface FetchAction extends Action<ActionTypes.FETCH_STOCK_QUOTE> {
    type: ActionTypes.FETCH_STOCK_QUOTE;
    readonly stockSymbol: string; // stock symbol
  }

  /**
   * Fetch Stock Quote pending action
   */
  export interface FetchPendingAction extends Action<ActionTypes.FETCH_STOCK_QUOTE_PENDING> {
    type: ActionTypes.FETCH_STOCK_QUOTE_PENDING;
    readonly stockSymbol: string;
  }

  /**
   * Fetch Stock Quote fulfilled action
   */
  export interface FetchFulfilledAction extends Action<ActionTypes.FETCH_STOCK_QUOTE_FULFILLED> {
    type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED;
    readonly stockSymbol: string;
    readonly payload: DataDomain.Quote;
  }

  /**
   * Fetch Stock Quote rejected action
   */
  export interface FetchRejectedAction extends Action<ActionTypes.FETCH_STOCK_QUOTE_REJECTED> {
    type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED;
    readonly stockSymbol: string;
    readonly error: Error;
  }
} // END namespace Quote

/**
 * All action interfaces for Stocks Chart
 *
 * https://iexcloud.io/docs/api/#charts
 */
export namespace Chart {
  /**
   * Fetch Stock Chart action
   * Used for initializing for fetching the data.
   */
  export interface FetchAction extends Action<ActionTypes.FETCH_STOCK_CHART> {
    type: ActionTypes.FETCH_STOCK_CHART;
    readonly stockSymbol: string;
    readonly chartRange: DataDomain.ChartRange;
  }

  /**
   * Fetch Stock Chart pending action
   */
  export interface FetchPendingAction extends Action<ActionTypes.FETCH_STOCK_CHART_PENDING> {
    type: ActionTypes.FETCH_STOCK_CHART_PENDING;
    readonly stockSymbol: string;
  }

  /**
   * Fetch Stock Chart fulfilled action
   */
  export interface FetchFulfilledAction extends Action<ActionTypes.FETCH_STOCK_CHART_FULFILLED> {
    type: ActionTypes.FETCH_STOCK_CHART_FULFILLED;
    readonly stockSymbol: string;
    readonly payload: DataDomain.Chart[];
  }

  /**
   * Fetch Stock Chart rejected action
   */
  export interface FetchRejectedAction extends Action<ActionTypes.FETCH_STOCK_CHART_REJECTED> {
    type: ActionTypes.FETCH_STOCK_CHART_REJECTED;
    readonly stockSymbol: string;
    readonly error: Error;
  }
} // END namespace Chart

/**
 * All action interfaces for Stock search
 *
 */
export namespace Search {
  /**
   * Fetch stock search action
   * Used for initializing for fetching the data.
   */
  export interface FetchAction extends Action<ActionTypes.SEARCH_KEYWORD> {
    type: ActionTypes.SEARCH_KEYWORD;
    readonly keyword: string;
  }

  /**
   * Fetch stock search pending action
   */
  export interface FetchPendingAction extends Action<ActionTypes.SEARCH_KEYWORD_PENDING> {
    type: ActionTypes.SEARCH_KEYWORD_PENDING;
    readonly keyword: string;
  }

  // /**
  //  * Fetch stock search fulfilled action
  //  */
  // export interface FetchFulfilledAction extends Action<ActionTypes.SEARCH_KEYWORD_FULFILLED> {
  //   type: ActionTypes.SEARCH_KEYWORD_FULFILLED;
  //   readonly keyword: string;
  //   readonly payload: DataDomain.StockSearch;
  // }

  /**
   * Fetch stock searched rejected action
   */
  export interface FetchRejectedAction extends Action<ActionTypes.SEARCH_KEYWORD_REJECTED> {
    type: ActionTypes.SEARCH_KEYWORD_REJECTED;
    readonly keyword: string;
    readonly error: Error;
  }

  export interface SetSearchKeywordAction extends Action<ActionTypes.SET_SEARCH_KEYWORD> {
    type: ActionTypes.SET_SEARCH_KEYWORD;
    readonly keyword: string;
  }

  export interface ClearSearchKeywordAction extends Action<ActionTypes.CLEAR_SEARCH_KEYWORD> {
    type: ActionTypes.CLEAR_SEARCH_KEYWORD;
  }

  // export interface SetStockMetadata extends Action<ActionTypes.SET_STOCK_METADATA> {
  //   type: ActionTypes.SET_STOCK_METADATA;
  //   stockSymbol: string;
  //   payload: DataDomain.StockSearchBase;
  // }
} // END namespace Search

/**
 * All action interfaces for Stock Batch actions
 */
export namespace Batch {
  /**
   * Fetch stock quote batch action
   * Used for initializing for fetching the data.
   */
  export interface FetchQuoteAction extends Action<ActionTypes.FETCH_STOCK_QUOTE_BATCH> {
    type: ActionTypes.FETCH_STOCK_QUOTE_BATCH;
  }
}

/**
 * All action interfaces for Symbols metadata
 *
 * https://iexcloud.io/docs/api/#symbols
 */
export namespace SymbolsMetadata {
  /**
   * Fetch all Symbols metadata action.
   * Used for initializing for fetching the data.
   */
  export interface FetchAction extends Action<ActionTypes.FETCH_SYMBOLS_METADATA> {
    type: ActionTypes.FETCH_SYMBOLS_METADATA;
  }

  /**
   * Fetch all Symbols metadata  pending action
   */
  export interface FetchPendingAction extends Action<ActionTypes.FETCH_SYMBOLS_METADATA_PENDING> {
    type: ActionTypes.FETCH_SYMBOLS_METADATA_PENDING;
  }

  /**
   * Fetch all Symbols metadata  fulfilled action
   */
  export interface FetchFulfilledAction
    extends Action<ActionTypes.FETCH_SYMBOLS_METADATA_FULFILLED> {
    type: ActionTypes.FETCH_SYMBOLS_METADATA_FULFILLED;
    readonly payload: DataDomain.Symbols[];
  }

  /**
   * Fetch all Symbols metadata  rejected action
   */
  export interface FetchRejectedAction extends Action<ActionTypes.FETCH_SYMBOLS_METADATA_REJECTED> {
    type: ActionTypes.FETCH_SYMBOLS_METADATA_REJECTED;
    readonly error: Error;
  }
}

/**
 * Union of action interfaces for Stock Quote
 */
export type QuoteActions =
  | Quote.FetchAction
  | Quote.FetchPendingAction
  | Quote.FetchFulfilledAction
  | Quote.FetchRejectedAction;

/**
 * Union of action interfaces for Stock Chart
 */
export type ChartActions =
  | Chart.FetchAction
  | Chart.FetchPendingAction
  | Chart.FetchFulfilledAction
  | Chart.FetchRejectedAction;

/**
 * Union of action interfaces for Stock search
 */
export type SearchActions =
  | Search.FetchAction
  | Search.FetchPendingAction
  // | Search.FetchFulfilledAction
  | Search.FetchRejectedAction
  | Search.SetSearchKeywordAction
  | Search.ClearSearchKeywordAction;
// | Search.SetStockMetadata;

export type BatchActions = Batch.FetchQuoteAction;

/**
 * Union of action interfaces for Symbols metadata
 */
export type SymbolsMetadataActions =
  | SymbolsMetadata.FetchAction
  | SymbolsMetadata.FetchPendingAction
  | SymbolsMetadata.FetchFulfilledAction
  | SymbolsMetadata.FetchRejectedAction;

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK ACTIONS UNIONS                                      //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Union of action for QuoteAction, ChartAction, SearchActions and SymbolsMetadataActions
 */
export type StocksActions =
  | QuoteActions
  | ChartActions
  | SearchActions
  | BatchActions
  | SymbolsMetadataActions;
