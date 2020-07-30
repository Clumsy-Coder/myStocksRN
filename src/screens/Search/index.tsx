import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text, View, Container, Content, List } from 'native-base';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { filter, debounce } from 'lodash';

import SearchHeader from '@containers/SearchBar';
import StockSearchResultItem from '@components/SearchResultItem';
import { fetchStockQuote } from '@redux/Stocks/Actions';
import { selectSearchKeyword, selectSymbolsMetadataData } from '@redux/Stocks/Selectors';
import { AppState, AppActions } from '@redux/index.reducers';
import { DataDomain, Actions } from '@redux/Stocks/Types';
import { filterSearch } from '@share/Utilities';

interface SelectorProps {
  // searchResults: DataDomain.Symbols[];
  searchKeyword: string;
  symbolsMetadata: DataDomain.Symbols[];
}

interface DispatchProps {
  fetchQuote: (symbol: string) => Actions.Quote.FetchAction;
}

type Props = SelectorProps & DispatchProps;

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

export const Search: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Content>
        <SearchHeader />
      </Content>
    </Container>
  );
};

export const mapStateToProps = (state: AppState): SelectorProps => ({
  // searchResults: selectStockSearchResults(state),
  searchKeyword: selectSearchKeyword(state),
  symbolsMetadata: selectSymbolsMetadataData(state),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  fetchQuote: (symbol: string): Actions.Quote.FetchAction => dispatch(fetchStockQuote(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
