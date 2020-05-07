import { IGetStockQuoteAC, IGetStockChartAC, ActionTypesEnum } from 'src/redux/Stocks/Types';

export const fetchStockQuote = (stockSymbol: string): IGetStockQuoteAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE,
  stockSymbol,
});

export const fetchStockChart = (stockSymbol: string): IGetStockChartAC => ({
  type: ActionTypesEnum.GET_STOCK_CHART,
  stockSymbol,
});
