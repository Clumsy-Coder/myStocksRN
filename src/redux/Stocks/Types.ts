/* eslint-disable @typescript-eslint/no-namespace */
import { Action } from 'redux';

/*
  ██████╗  █████╗ ████████╗ █████╗     ██████╗  ██████╗ ███╗   ███╗ █████╗ ██╗███╗   ██╗
  ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ██╔══██╗██╔═══██╗████╗ ████║██╔══██╗██║████╗  ██║
  ██║  ██║███████║   ██║   ███████║    ██║  ██║██║   ██║██╔████╔██║███████║██║██╔██╗ ██║
  ██║  ██║██╔══██║   ██║   ██╔══██║    ██║  ██║██║   ██║██║╚██╔╝██║██╔══██║██║██║╚██╗██║
  ██████╔╝██║  ██║   ██║   ██║  ██║    ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

*/

/**
 * Raw Data structures when fetching data from API
 */
export namespace DataDomain {
  /**
   * Data structure returned when fetching stock quote.
   *
   * https://www.alphavantage.co/documentation/#latestprice
   */
  export interface StockQuote {
    'Global Quote': {
      '01. symbol': string;
      '02. open': string;
      '03. high': string;
      '04. low': string;
      '05. price': string;
      '06. volume': string;
      '07. latest trading day': string;
      '08. previous close': string;
      '09. change': string;
      '10. change percent': string;
    };
  }

  /**
   * Data structure returned when fetching Stock Daily adjusted.
   *
   * https://www.alphavantage.co/documentation/#dailyadj
   */
  export interface StockDailyAdj {
    'Meta Data': {
      '1. Information': string;
      '2. Symbol': string;
      '3. Last Refreshed': string;
      '4. Output Size': string;
      '5. Time Zone': string;
    };
    'Time Series (Daily)': {
      // key for date has the format of YYYY-MM-DD
      [date: string]: {
        '1. open': string;
        '2. high': string;
        '3. low': string;
        '4. close': string;
        '5. adjusted close': string;
        '6. volume': string;
        '7. dividend amount': string;
        '8. split coefficient': string;
      };
    };
  }

  /**
   * Data structure returned when search for a stock.
   * This is only data for one stock search returned
   *
   * https://www.alphavantage.co/documentation/#symbolsearch
   */
  export interface StockSearchBase {
    '1. symbol': string;
    '2. name': string;
    '3. type': string;
    '4. region': string;
    '5. marketOpen': string;
    '6. marketClose': string;
    '7. timezone': string;
    '8. currency': string;
    '9. matchScore': string;
  }

  /**
   * Data structure returned when fetching Stock search.
   *
   * https://www.alphavantage.co/documentation/#symbolsearch
   */
  export interface StockSearch {
    bestMatches: StockSearchBase[];
  }
} // END namespace DataDomain

/**
 * A union of Stocks data domain types
 */
export type StocksDataDomain =
  | DataDomain.StockQuote
  | DataDomain.StockDailyAdj
  | DataDomain.StockSearch;

// ---------------------------------------------------------------------------------------------- //
/*
  ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗     ███████╗████████╗ █████╗ ████████╗███████╗
  ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
  ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝    ███████╗   ██║   ███████║   ██║   █████╗
  ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗    ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝
  ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║    ███████║   ██║   ██║  ██║   ██║   ███████╗
  ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝

*/

/**
 * Data structures used in Stocks Reducer
 */
export namespace Reducer {
  /**
   * Data structure for Stock quote used in Stock Reducer
   */
  export interface StockQuoteData {
    fetching: boolean;
    data?: DataDomain.StockQuote;
    error?: Error;
  }

  /**
   * Data structure for Stock Daily Adjusted used in Stock Reducer
   */
  export interface StockDailyAdjData {
    fetching: boolean;
    data?: DataDomain.StockDailyAdj;
    error?: Error;
  }

  export interface StockSearchResultData {
    fetching: boolean;
    data?: DataDomain.StockSearchBase[];
    error?: Error;
  }

  export interface StockSearch {
    keyword?: string;
    results?: Reducer.StockSearchResultData;
  }

  /**
   * A data structure wrapper for one Stock
   */
  export interface StockData {
    quote: StockQuoteData;
    dailyAdj?: StockDailyAdjData;
    metadata?: DataDomain.StockSearchBase;
  }

  /**
   * Stocks reducer state
   */
  export interface ReducerState {
    symbols: {
      [symbol: string]: StockData;
    };
    search?: Reducer.StockSearch;
  }
}

/**
 * A union of Stocks Reducer types
 */
export type StocksReducerTypes =
  | Reducer.StockQuoteData
  | Reducer.StockDailyAdjData
  | Reducer.StockData
  | Reducer.ReducerState;

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
 * Stocks action types
 */
export enum ActionTypes {
  FETCH_STOCK_QUOTE = 'STOCKS/FETCH_STOCK_QUOTE',
  FETCH_STOCK_QUOTE_PENDING = 'STOCKS/FETCH_STOCK_QUOTE_PENDING',
  FETCH_STOCK_QUOTE_FULFILLED = 'STOCKS/FETCH_STOCK_QUOTE_FULFILLED',
  FETCH_STOCK_QUOTE_REJECTED = 'STOCKS/FETCH_STOCK_QUOTE_REJECTED',

  FETCH_STOCK_DAILY_ADJUSTED = 'STOCKS/FETCH_STOCK_DAILY_ADJUSTED',
  FETCH_STOCK_DAILY_ADJUSTED_PENDING = 'STOCKS/FETCH_STOCK_DAILY_ADJUSTED_PENDING',
  FETCH_STOCK_DAILY_ADJUSTED_FULFILLED = 'STOCKS/FETCH_STOCK_DAILY_ADJUSTED_FULFILLED',
  FETCH_STOCK_DAILY_ADJUSTED_REJECTED = 'STOCKS/FETCH_STOCK_DAILY_ADJUSTED_REJECTED',

  SEARCH_KEYWORD = 'STOCKS/SEARCH_KEYWORD',
  SEARCH_KEYWORD_PENDING = 'STOCKS/SEARCH_KEYWORD_PENDING',
  SEARCH_KEYWORD_FULFILLED = 'STOCKS/SEARCH_KEYWORD_FULFILLED',
  SEARCH_KEYWORD_REJECTED = 'STOCKS/SEARCH_KEYWORD_REJECTED',

  SET_SEARCH_KEYWORD = 'STOCKS/SET_SEARCH_KEYWORD',
  CLEAR_SEARCH_KEYWORD = 'STOCKS/CLEAR_SEARCH_KEYWORD',

  SET_STOCK_METADATA = 'STOCKS/SET_STOCK_METADATA',

  // FETCH_STOCK_QUOTE_BATCH = 'STOCKS/FETCH_STOCK_QUOTE_BATCH',
  // FETCH_STOCK_DAILY_ADJUSTED_BATCH = 'STOCKS/FETCH_STOCK_DAILY_ADJUSTED_BATCH',
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

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK QUOTE ACTIONS                                       //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * All Actions interfaces regarding Stocks
 */
export namespace Actions {
  /**
   * All action interfaces for Stock Quote
   *
   * https://www.alphavantage.co/documentation/#latestprice
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
      readonly payload: DataDomain.StockQuote;
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
   * All action interfaces for Stocks Daily Adjusted
   *
   * https://www.alphavantage.co/documentation/#dailyadj
   */
  export namespace DailyAdjusted {
    /**
     * Fetch Stock Daily Adjusted action
     * Used for initializing for fetching the data.
     */
    export interface FetchAction extends Action<ActionTypes.FETCH_STOCK_DAILY_ADJUSTED> {
      type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED;
      readonly stockSymbol: string;
      readonly outputsize: 'compact' | 'full';
    }

    /**
     * Fetch Stock Daily Adjusted pending action
     */
    export interface FetchPendingAction
      extends Action<ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING> {
      type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING;
      readonly stockSymbol: string;
    }

    /**
     * Fetch Stock Daily Adjusted fulfilled action
     */
    export interface FetchFulfilledAction
      extends Action<ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED> {
      type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED;
      readonly stockSymbol: string;
      readonly payload: DataDomain.StockDailyAdj;
    }

    /**
     * Fetch Stock Daily Adjusted rejected action
     */
    export interface FetchRejectedAction
      extends Action<ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED> {
      type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED;
      readonly stockSymbol: string;
      readonly error: Error;
    }
  } // END namespace DailyAdjusted

  /**
   * All action interfaces for Stock search
   *
   * https://www.alphavantage.co/documentation/#symbolsearch
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

    /**
     * Fetch stock search fulfilled action
     */
    export interface FetchFulfilledAction extends Action<ActionTypes.SEARCH_KEYWORD_FULFILLED> {
      type: ActionTypes.SEARCH_KEYWORD_FULFILLED;
      readonly keyword: string;
      readonly payload: DataDomain.StockSearch;
    }

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

    export interface SetStockMetadata extends Action<ActionTypes.SET_STOCK_METADATA> {
      type: ActionTypes.SET_STOCK_METADATA;
      stockSymbol: string;
      payload: DataDomain.StockSearchBase;
    }
  } // END namespace Search
} // END namespace Action

/**
 * Union of action interfaces for Stock Quote
 */
export type StockQuoteActions =
  | Actions.Quote.FetchAction
  | Actions.Quote.FetchPendingAction
  | Actions.Quote.FetchFulfilledAction
  | Actions.Quote.FetchRejectedAction;

/**
 * Union of action interfaces for Stock Daily Adjusted
 */
export type StockDailyAdjustedActions =
  | Actions.DailyAdjusted.FetchAction
  | Actions.DailyAdjusted.FetchPendingAction
  | Actions.DailyAdjusted.FetchFulfilledAction
  | Actions.DailyAdjusted.FetchRejectedAction;

/**
 * Union of action interfaces for Stock search
 */
export type StockSearchActions =
  | Actions.Search.FetchAction
  | Actions.Search.FetchPendingAction
  | Actions.Search.FetchFulfilledAction
  | Actions.Search.FetchRejectedAction
  | Actions.Search.SetSearchKeywordAction
  | Actions.Search.ClearSearchKeywordAction
  | Actions.Search.SetStockMetadata;

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK ACTIONS UNIONS                                      //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Union of action for StockQuoteAction, StockDailyAdjustedAction and StockSearchActions
 */
export type StocksActions = StockQuoteActions | StockDailyAdjustedActions | StockSearchActions;
