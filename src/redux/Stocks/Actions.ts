import {
  IGetStockQuoteAC,
  IGetStockChartActionCreator,
  ActionTypesEnum,
} from 'src/redux/Stocks/Types';

export const fetchStockQuote = (symbol: string): IGetStockQuoteAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE,
  stockSymbol: symbol,
});

export const fetchStockChart = (symbol: string): IGetStockChartActionCreator => ({
  type: ActionTypesEnum.GET_STOCK_CHART,
  payload: symbol,
});
