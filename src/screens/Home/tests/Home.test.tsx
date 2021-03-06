import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Container, Content, Spinner } from 'native-base';

import { Home, mapStateToProps, mapDispatchToProps } from 'src/screens/Home';
import StockCard from 'src/components/StockCard';
import { AppState } from 'src/redux/index.reducers';
import { Selectors } from 'src/redux/Stocks/Types';
import { fetchStockQuoteBatch, fetchSymbolsMetadata } from 'src/redux/Stocks/Actions';

import * as testdata from 'jest.testdata';

describe('<Home />', () => {
  const selectedStockQuoteTrim: Selectors.SelectQuoteTrim[] = [
    {
      fetching: false,
      companyName: testdata.stockQuoteData1.companyName,
      symbol: testdata.stockSymbol1,
      price: testdata.stockQuoteData1.latestPrice,
      changePercent: testdata.stockQuoteData1.changePercent,
      change: testdata.stockQuoteData1.change,
      currency: testdata.symbolsMetadata1.currency,
    },
    {
      fetching: false,
      companyName: testdata.stockQuoteData2.companyName,
      symbol: testdata.stockSymbol2,
      price: testdata.stockQuoteData2.latestPrice,
      changePercent: testdata.stockQuoteData2.changePercent,
      change: testdata.stockQuoteData2.change,
      currency: testdata.symbolsMetadata2.currency,
    },
    {
      fetching: false,
      companyName: testdata.stockQuoteData3.companyName,
      symbol: testdata.stockSymbol3,
      price: testdata.stockQuoteData3.latestPrice,
      changePercent: testdata.stockQuoteData3.changePercent,
      change: testdata.stockQuoteData3.change,
      currency: testdata.symbolsMetadata3.currency,
    },
  ];

  const homeProps = {
    selectedStockQuoteTrim,
    fetchQuoteBatch: jest.fn(),
    fetchSymbolsMeta: jest.fn(),
  };

  const testID = 'stocks-home-list';

  it('Should render correctly', () => {
    const wrapper = shallow(
      <Home {...homeProps} selectedStockQuoteTrim={selectedStockQuoteTrim} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should call fetchStockQuoteBatch in componentDidMount', () => {});

  it('Should render StockCard components', () => {
    const wrapper = shallow(
      <Home {...homeProps} selectedStockQuoteTrim={selectedStockQuoteTrim} />,
    );
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

  it('Should render spinner when loading data', () => {
    const props = {
      selectedStockQuoteTrim: [
        {
          fetching: false,
          companyName: testdata.stockQuoteData1.companyName,
          symbol: testdata.stockSymbol1,
          price: testdata.stockQuoteData1.latestPrice,
          changePercent: testdata.stockQuoteData1.changePercent,
          change: testdata.stockQuoteData1.change,
          currency: testdata.symbolsMetadata1.currency,
        },
        {
          fetching: true,
          companyName: testdata.stockQuoteData2.companyName,
          symbol: testdata.stockSymbol2,
          price: testdata.stockQuoteData2.latestPrice,
          changePercent: testdata.stockQuoteData2.changePercent,
          change: testdata.stockQuoteData2.change,
          currency: testdata.symbolsMetadata2.currency,
        },
        {
          fetching: false,
          companyName: testdata.stockQuoteData3.companyName,
          symbol: testdata.stockSymbol3,
          price: testdata.stockQuoteData3.latestPrice,
          changePercent: testdata.stockQuoteData3.changePercent,
          change: testdata.stockQuoteData3.change,
          currency: testdata.symbolsMetadata3.currency,
        },
      ],
      fetchQuoteBatch: jest.fn(),
      fetchSymbolsMeta: jest.fn(),
    };

    const wrapper = shallow(<Home {...props} />);

    expect(
      wrapper.equals(
        <Container style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <Content>
            <Spinner />
          </Content>
        </Container>,
      ),
    ).toEqual(true);
  });

  describe('mapStateToProps', () => {
    it(`Property 'selectedStockQuoteTrim' works properly`, () => {
      const rootState: AppState = {
        ...testdata.baseAppState,
        Stocks: {
          ...testdata.baseStocksState,
          symbols: {
            [testdata.stockSymbol1]: {
              chart: { ...testdata.baseStockChartState },
              quote: {
                fetching: false,
                data: testdata.stockQuoteData1,
                error: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              chart: { ...testdata.baseStockChartState },
              quote: {
                fetching: false,
                data: testdata.stockQuoteData2,
                error: undefined,
              },
            },
            [testdata.stockSymbol3]: {
              chart: { ...testdata.baseStockChartState },
              quote: {
                fetching: false,
                data: testdata.stockQuoteData3,
                error: undefined,
              },
            },
          },
          symbolsMetadata: {
            fetching: false,
            data: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
            error: undefined,
          },
        },
        Favorites: {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
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

    it('fetchSymbolsMeta works properly', () => {
      const dispatch = jest.fn();

      const dispatchToProps = mapDispatchToProps(dispatch);
      dispatchToProps.fetchSymbolsMeta();

      expect(dispatch.mock.calls[0].length).toEqual(1);
      expect(dispatch.mock.calls[0][0]).toEqual(fetchSymbolsMetadata());
    });
  });
});
