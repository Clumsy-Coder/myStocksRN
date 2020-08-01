import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar, mapStateToProps, mapDispatchToProps } from 'src/containers/SearchBar';
import { AppState } from 'src/redux/index.reducers';
import { Actions } from 'src/redux/Stocks/Types';
import { fetchStockQuote, setSearchKeyword } from 'src/redux/Stocks/Actions';

import * as testdata from 'jest.testdata';

describe('<SearchBar />', () => {
  it('Render correctly', () => {
    const props = {
      searchKeyword: '',
      symbolsMetadata: [
        testdata.symbolsMetadata1,
        testdata.symbolsMetadata2,
        testdata.symbolsMetadata3,
      ],
      setKeyword: jest.fn(),
      fetchQuote: jest.fn(),
    };
    const wrapper = shallow(<SearchBar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('All properties are present', () => {
      const rootState: AppState = {
        Stocks: {
          search: {
            keyword: '',
          },
          symbols: {},
          symbolsMetadata: {
            fetching: false,
            error: undefined,
            data: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
          },
        },
        Favorites: {
          symbols: [],
        },
      };

      const stateToProps = mapStateToProps(rootState);
      expect(stateToProps).toHaveProperty('searchKeyword');
      expect(stateToProps).toHaveProperty('symbolsMetadata');
      expect(stateToProps.searchKeyword).toEqual('');
      expect(stateToProps.symbolsMetadata).toEqual([
        testdata.symbolsMetadata1,
        testdata.symbolsMetadata2,
        testdata.symbolsMetadata3,
      ]);
    });
  });

  describe('mapDispatchToProps', () => {
    it('All dispatch properties are present', () => {
      const dispatch = jest.fn();

      interface DispatchProps {
        setKeyword: (keyword: string) => Actions.Search.SetSearchKeywordAction;
        fetchQuote: (symbol: string) => Actions.Quote.FetchAction;
      }

      const dispatchToProps: DispatchProps = mapDispatchToProps(dispatch);
      dispatchToProps.fetchQuote(testdata.stockSymbol1);
      dispatchToProps.setKeyword(testdata.stockSymbol1);

      expect(dispatch.mock.calls.length).toEqual(2);
      expect(dispatch.mock.calls[0][0]).toEqual(fetchStockQuote(testdata.stockSymbol1));
      expect(dispatch.mock.calls[1][0]).toEqual(setSearchKeyword(testdata.stockSymbol1));
    });
  });
});
