import {
  IGetStockQuoteAction,
  IGetStockChartAction,
  ActionTypesEnum,
} from 'src/redux/Stocks/Types';

export const fetchStockQuote = (symbol: string): IGetStockQuoteAction => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE,
  payload: symbol,
});

export const fetchStockChart = (symbol: string): IGetStockChartAction => ({
  type: ActionTypesEnum.GET_STOCK_CHART,
  payload: symbol,
});
