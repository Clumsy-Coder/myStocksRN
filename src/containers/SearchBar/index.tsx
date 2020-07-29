import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Header, Icon, Input, Item, View } from 'native-base';
import AutoComplete from 'react-native-autocomplete-input';

import SearchResultItem from '@components/SearchResultItem';
import { AppState, AppActions } from '@redux/index.reducers';
import { Actions, DataDomain } from '@redux/Stocks/Types';
import { selectSearchKeyword, selectSymbolsMetadataData } from '@redux/Stocks/Selectors';
import { setSearchKeyword, clearSearchKeyword, fetchStockQuote } from '@redux/Stocks/Actions';
import { filterSearch } from '@share/Utilities';

interface SelectorProps {
  searchKeyword: string;
  symbolsMetadata: DataDomain.Symbols[];
}

interface DispatchProps {
  setKeyword: (keyword: string) => Actions.Search.SetSearchKeywordAction;
  clearKeyword: () => Actions.Search.ClearSearchKeywordAction;
  fetchQuote: (symbol: string) => Actions.Quote.FetchAction;
}

type Props = SelectorProps & DispatchProps;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    // marginHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  searchIcon: {
    // flex: 1,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderWidth: 0,
    flex: 2,
  },
  input: {
    fontSize: 20,
  },
  clearIcon: {
    // flex: 1,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

const SearchHeader: React.FC<Props> = (props: Props) => {
  const { setKeyword, clearKeyword, searchKeyword, fetchQuote, symbolsMetadata } = props;
  const [inFocus, setFocus] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View>
        <Item>
          <AutoComplete
            placeholder='Search'
            data={filterSearch(searchKeyword, symbolsMetadata)}
            onChangeText={setKeyword}
            renderItem={(obj: { item: DataDomain.Symbols }) => (
              <SearchResultItem
                data={obj.item}
                onPress={() => fetchQuote(obj.item.symbol)}
                key={`search-result-${obj.item.symbol}`}
              />
            )}
            // inputContainerStyle={styles.header}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              clearKeyword();
              setFocus(false);
            }}
            value={searchKeyword}
          />
        </Item>
      </View>
    </View>
  );
};

export const mapStateToProps = (state: AppState): SelectorProps => ({
  searchKeyword: selectSearchKeyword(state),
  symbolsMetadata: selectSymbolsMetadataData(state),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  setKeyword: (keyword: string) => dispatch(setSearchKeyword(keyword)),
  clearKeyword: () => dispatch(clearSearchKeyword()),
  fetchQuote: (symbol: string) => dispatch(fetchStockQuote(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
