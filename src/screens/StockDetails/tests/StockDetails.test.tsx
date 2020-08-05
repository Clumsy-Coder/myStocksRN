import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { RouteProp } from '@react-navigation/native';
import { Container, Content, Spinner } from 'native-base';

import { AppState } from 'src/redux/index.reducers';
import { Selectors, DataDomain } from '@redux/Stocks/Types';
import { fetchStockChart } from '@redux/Stocks/Actions';
import { defaultQuote } from '@redux/Stocks/Reducer';
import { StockDetailsScreen, mapStateToProps, mapDispatchToProps } from '@screens/StockDetails';
import { NavigationRoutePath, StockDetailsRouteProp } from '@routes/Types';

import * as testdata from 'jest.testdata';

const selectStockDetailsTrim1: Selectors.SelectStockDetailsTrim = {
  fetching: false,
  quote: testdata.stockQuoteData1,
  chart: testdata.stockChartData1,
};

const selectStockDetailsTrim2: Selectors.SelectStockDetailsTrim = {
  fetching: false,
  quote: testdata.stockQuoteData1,
  chart: testdata.stockChartData1,
};

const lineChartData1: { date: string; price: number }[] = testdata.stockChartData1.map((cur) => ({
  date: cur.date,
  price: cur.close,
}));

const lineChartData2: { date: string; price: number }[] = testdata.stockChartData2.map((cur) => ({
  date: cur.date,
  price: cur.close,
}));

describe('<StockDetailsScreen />', () => {
  const route: StockDetailsRouteProp = {
    key: '',
    name: NavigationRoutePath.StockDetails,
    params: {
      symbol: testdata.stockSymbol1,
    },
  };
  it('Renders correctly', () => {
    const props = {
      data: selectStockDetailsTrim1,
      lineChartData: lineChartData1,
      fetchChart: jest.fn(),
      route,
    };

    const wrapper = shallow(<StockDetailsScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe.skip('componentDidMount', () => {});

  describe.skip('componentWillUnmount', () => {});

  describe.skip('componentDidUpdate', () => {});

  describe('loading spinner', () => {
    it('should display spinner when loading data', () => {
      const props = {
        route,
        data: { fetching: true, quote: defaultQuote, chart: [] },
        lineChartData: [],
        fetchChart: jest.fn(),
      };

      const wrapper = shallow(<StockDetailsScreen {...props} />);

      expect(
        wrapper.equals(
          <Container>
            <Content>
              <Spinner />
            </Content>
          </Container>,
        ),
      ).toEqual(true);
    });
  });

  describe('mapStateToProps', () => {
    const rootState: AppState = {
      ...testdata.baseAppState,
      Stocks: {
        ...testdata.baseStocksState,
        symbols: {
          [testdata.stockSymbol1]: {
            chart: {
              ...testdata.baseStockChartState,
              data: testdata.stockChartData1,
            },
            quote: {
              fetching: false,
              data: testdata.stockQuoteData1,
              error: undefined,
            },
          },
        },
      },
    };

    it("property 'data' works properly", () => {
      const stateToProps = mapStateToProps(rootState, {
        data: {
          chart: [],
          fetching: false,
          quote: testdata.stockQuoteData1,
        },
        lineChartData: [],
        route: {
          key: '',
          name: NavigationRoutePath.StockDetails,
          params: {
            symbol: testdata.stockSymbol1,
          },
        },
        fetchChart: jest.fn(),
      });
      expect(stateToProps).toHaveProperty('data');
      expect(stateToProps.data).toEqual({
        fetching: false,
        quote: testdata.stockQuoteData1,
        chart: testdata.stockChartData1,
      });
    });

    it("property 'lineChartData' works properly", () => {
      const stateToProps = mapStateToProps(rootState, {
        data: {
          chart: [],
          fetching: false,
          quote: testdata.stockQuoteData1,
        },
        lineChartData: [],
        route: {
          key: '',
          name: NavigationRoutePath.StockDetails,
          params: {
            symbol: testdata.stockSymbol1,
          },
        },
        fetchChart: jest.fn(),
      });
      expect(stateToProps).toHaveProperty('lineChartData');
      expect(stateToProps.lineChartData).toEqual(
        testdata.stockChartData1.map((cur) => ({ date: cur.date, price: cur.close })),
      );
    });
  });

  describe('mapDispatchToProps', () => {
    it('fetchChart works properly', () => {
      const dispatch = jest.fn();

      const dispatchToProps = mapDispatchToProps(dispatch);
      dispatchToProps.fetchChart(testdata.stockSymbol1, DataDomain.ChartRange.ONE_MONTH);

      expect(dispatch.mock.calls[0].length).toEqual(1);
      expect(dispatch.mock.calls[0][0]).toEqual(
        fetchStockChart(testdata.stockSymbol1, DataDomain.ChartRange.ONE_MONTH),
      );
    });
  });
});
