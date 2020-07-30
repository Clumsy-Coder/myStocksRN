import React from 'react';
import { StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Item } from 'native-base';
import AutoComplete from 'react-native-autocomplete-input';

import SearchResultItem from '@components/SearchResultItem';
import { AppState, AppActions } from '@redux/index.reducers';
import { Actions, DataDomain } from '@redux/Stocks/Types';
import { selectSearchKeyword, selectSymbolsMetadataData } from '@redux/Stocks/Selectors';
import { setSearchKeyword, fetchStockQuote } from '@redux/Stocks/Actions';
import { filterSearch } from '@share/Utilities';

interface SelectorProps {
  searchKeyword: string;
  symbolsMetadata: DataDomain.Symbols[];
}

interface DispatchProps {
  setKeyword: (keyword: string) => Actions.Search.SetSearchKeywordAction;
  fetchQuote: (symbol: string) => Actions.Quote.FetchAction;
}

type Props = SelectorProps & DispatchProps;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0,
  },
});

const SearchHeader: React.FC<Props> = (props: Props) => {
  const { setKeyword, fetchQuote, searchKeyword, symbolsMetadata } = props;

  return (
    <Item>
      <AutoComplete
        placeholder='Search'
        data={filterSearch(searchKeyword, symbolsMetadata)}
        onChangeText={setKeyword}
        renderItem={(obj: { item: DataDomain.Symbols }) => (
          <SearchResultItem data={obj.item} onPress={() => fetchQuote(obj.item.symbol)} />
        )}
        inputContainerStyle={styles.header}
        value={searchKeyword}
        keyExtractor={(item) => `search-result-${item.symbol}`}
      />
    </Item>
  );
};

export const mapStateToProps = (state: AppState): SelectorProps => ({
  searchKeyword: selectSearchKeyword(state),
  symbolsMetadata: selectSymbolsMetadataData(state),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  setKeyword: (keyword: string) => dispatch(setSearchKeyword(keyword)),
  fetchQuote: (symbol: string) => dispatch(fetchStockQuote(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
