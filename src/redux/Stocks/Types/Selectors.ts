export interface SelectQuoteTrim {
  fetching: boolean;
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  currency?: string;
}
