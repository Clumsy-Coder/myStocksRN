import { Quote, Chart } from '@redux/Stocks/Types/DataDomain';

/**
 * Data that is used for displaying stock quote on the Home screen.
 */
export interface SelectQuoteTrim {
  fetching: boolean;
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  currency?: string;
}

/**
 * Data that is used for displaying stock details on the Stock Details screen.
 */
export interface SelectStockDetailsTrim {
  fetching: boolean;
  quote: Quote;
  chart: Chart[];
}

export type SelectorTypes = SelectQuoteTrim | SelectStockDetailsTrim;
