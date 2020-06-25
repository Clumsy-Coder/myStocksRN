import { DataDomain } from '@redux/Stocks/Types';

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
 * Data that is used for displaying stock details on the Home screen.
 */
export interface SelectStockDetailsTrim {
  fetching: boolean;
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  currency?: string;
  open: number;
  close: number;
  previousClose: number;
  previousVolume: number;
  high: number;
  low: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  peRatio: number;
  charts: DataDomain.Chart[];
}

export type SelectorTypes = SelectQuoteTrim | SelectStockDetailsTrim;
