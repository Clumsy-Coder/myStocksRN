import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { Home, mapStateToProps, mapDispatchToProps } from 'src/screens/Home';
import StockCard from 'src/components/StockCard';
import { AppState } from 'src/redux/index.reducers';
import { Reducer, DataDomain, Selectors } from 'src/redux/Stocks/Types';
import { fetchStockQuoteBatch } from 'src/redux/Stocks/Actions';

const configureMockStore = configureStore<AppState>();

const stockSymbol1 = 'IBM';
const stockSymbol2 = 'AAPL';
const stockSymbol3 = 'SHOP';

const stockQuoteData1: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'IBM',
    '02. open': '119.3700',
    '03. high': '119.4650',
    '04. low': '117.5900',
    '05. price': '118.3900',
    '06. volume': '4179906',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '119.1200',
    '09. change': '-0.7300',
    '10. change percent': '-0.6128%',
  },
};

const stockQuoteData2: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'AAPL',
    '02. open': '315.7700',
    '03. high': '319.2300',
    '04. low': '315.3500',
    '05. price': '318.8900',
    '06. volume': '20240356',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '316.8500',
    '09. change': '2.0400',
    '10. change percent': '0.6438%',
  },
};

const stockQuoteData3: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'SHOP',
    '02. open': '804.6300',
    '03. high': '826.3799',
    '04. low': '793.6400',
    '05. price': '825.1700',
    '06. volume': '2761628',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '802.3500',
    '09. change': '22.8200',
    '10. change percent': '2.8441%',
  },
};

const stockDailyAdjData1: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'IBM',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '119.3700',
      '2. high': '119.4650',
      '3. low': '117.5900',
      '4. close': '118.3900',
      '5. adjusted close': '118.3900',
      '6. volume': '4179906',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '120.9900',
      '2. high': '121.7200',
      '3. low': '118.9700',
      '4. close': '119.1200',
      '5. adjusted close': '119.1200',
      '6. volume': '4018329',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockDailyAdjData2: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'AAPL',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '315.7700',
      '2. high': '319.2300',
      '3. low': '315.3500',
      '4. close': '318.8900',
      '5. adjusted close': '318.8900',
      '6. volume': '20240356',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '318.6600',
      '2. high': '320.8900',
      '3. low': '315.8700',
      '4. close': '316.8500',
      '5. adjusted close': '316.8500',
      '6. volume': '25672211',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockSearchData1: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'IBM',
      '2. name': 'International Business Machines Corporation',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'IBMM',
      '2. name': 'iShares iBonds Dec 2024 Term Muni Bond ETF',
      '3. type': 'ETF',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.8571',
    },
  ],
};

const stockSearchData2: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'AAPL',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'AAPL.ARG',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'Argentina',
      '5. marketOpen': '11:00',
      '6. marketClose': '17:00',
      '7. timezone': 'UTC-03',
      '8. currency': 'ARS',
      '9. matchScore': '0.7273',
    },
  ],
};

const stockSearchData3: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'SHOP',
      '2. name': 'Shopify Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'TTSH',
      '2. name': 'Tile Shop Holdings Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.7273',
    },
  ],
};

const baseStockReducerState: Reducer.ReducerState = {
  symbols: {},
  search: {
    // keyword: '',
    // results: {},
  },
};

const baseAppState: AppState = {
  Stocks: {
    ...baseStockReducerState,
  },
  Favorites: {
    symbols: [],
  },
};

describe('<Home />', () => {
  const selectedStockQuoteTrim: Selectors.SelectQuoteTrim[] = [
    {
      fetching: false,
      companyName: stockSearchData1.bestMatches[0]['2. name'],
      symbol: stockSymbol1,
      price: stockQuoteData1['Global Quote']['05. price'],
      changePercent: stockQuoteData1['Global Quote']['10. change percent'],
      change: stockQuoteData1['Global Quote']['09. change'],
    },
    {
      fetching: false,
      companyName: stockSearchData2.bestMatches[0]['2. name'],
      symbol: stockSymbol2,
      price: stockQuoteData2['Global Quote']['05. price'],
      changePercent: stockQuoteData2['Global Quote']['10. change percent'],
      change: stockQuoteData2['Global Quote']['09. change'],
    },
    {
      fetching: false,
      companyName: stockSearchData3.bestMatches[0]['2. name'],
      symbol: stockSymbol3,
      price: stockQuoteData3['Global Quote']['05. price'],
      changePercent: stockQuoteData3['Global Quote']['10. change percent'],
      change: stockQuoteData3['Global Quote']['09. change'],
    },
  ];

  const props = {
    selectedStockQuoteTrim,
    fetchQuoteBatch: jest.fn(),
  };

  const testID = 'stocks-home-list';

  it('Should render correctly', () => {
    const wrapper = shallow(<Home {...props} selectedStockQuoteTrim={selectedStockQuoteTrim} />);

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should call fetchStockQuoteBatch in componentDidMount', () => {});

  it('Should render StockCard components', () => {
    const wrapper = shallow(<Home {...props} selectedStockQuoteTrim={selectedStockQuoteTrim} />);
    const stockList = wrapper.find({ testID });

    expect(stockList.children().length).toEqual(3);
    expect(stockList.childAt(0).equals(<StockCard data={selectedStockQuoteTrim[0]} />)).toEqual(
      true,
    );
    expect(stockList.childAt(1).equals(<StockCard data={selectedStockQuoteTrim[1]} />)).toEqual(
      true,
    );
    expect(stockList.childAt(2).equals(<StockCard data={selectedStockQuoteTrim[2]} />)).toEqual(
      true,
    );
  });

  describe('mapStateToProps', () => {
    it(`Property 'selectedStockQuoteTrim' works properly`, () => {
      const rootState: AppState = {
        ...baseAppState,
        Stocks: {
          ...baseStockReducerState,
          symbols: {
            [stockSymbol1]: {
              quote: {
                fetching: false,
                data: stockQuoteData1,
                error: undefined,
              },
            },
            [stockSymbol2]: {
              quote: {
                fetching: false,
                data: stockQuoteData2,
                error: undefined,
              },
            },
            [stockSymbol3]: {
              quote: {
                fetching: false,
                data: stockQuoteData3,
                error: undefined,
              },
            },
          },
        },
        Favorites: {
          symbols: [
            stockSearchData1.bestMatches[0],
            stockSearchData2.bestMatches[0],
            stockSearchData3.bestMatches[0],
          ],
        },
      };

      const stateToProps = mapStateToProps(rootState);

      expect(stateToProps).toHaveProperty('selectedStockQuoteTrim');
      expect(Array.isArray(stateToProps.selectedStockQuoteTrim)).toEqual(true);
      expect(stateToProps.selectedStockQuoteTrim.length).toEqual(3);
      expect(stateToProps.selectedStockQuoteTrim[0]).toEqual(selectedStockQuoteTrim[0]);
      expect(stateToProps.selectedStockQuoteTrim[1]).toEqual(selectedStockQuoteTrim[1]);
      expect(stateToProps.selectedStockQuoteTrim[2]).toEqual(selectedStockQuoteTrim[2]);
    });
  });

  describe('mapDispatchToProps', () => {
    it('fetchQuoteBatch works properly', () => {
      const dispatch = jest.fn();

      const dispatchToProps = mapDispatchToProps(dispatch);
      dispatchToProps.fetchQuoteBatch();

      expect(dispatch.mock.calls[0].length).toEqual(1);
      expect(dispatch.mock.calls[0][0]).toEqual(fetchStockQuoteBatch());
    });
  });
});
