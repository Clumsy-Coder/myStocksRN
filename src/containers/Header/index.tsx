import React from 'react';
import { StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Header, Icon, Input, Item } from 'native-base';

import { AppState, AppActions } from '@redux/index.reducers';
import { Actions } from '@redux/Stocks/Types';
import { selectSearchKeyword } from '@redux/Stocks/Selectors';
import { setSearchKeyword, clearSearchKeyword } from '@redux/Stocks/Actions';

interface SelectorProps {
  searchKeyword: string;
}

interface DispatchProps {
  setKeyword: (keyword: string) => Actions.Search.SetSearchKeywordAction;
  clearKeyword: () => Actions.Search.ClearSearchKeywordAction;
}

type Props = SelectorProps & DispatchProps;

const styles = StyleSheet.create({
  headerBorder: {
    paddingVertical: 30,
    backgroundColor: 'white',
  },
});

const SearchHeader: React.FC<Props> = (props: Props) => {
  const { setKeyword, clearKeyword, searchKeyword } = props;

  return (
    <Header searchBar style={styles.headerBorder}>
      <Item>
        <Icon name='search' type='MaterialIcons' />
        <Input
          placeholder='Search'
          onBlur={clearKeyword}
          onChangeText={setKeyword}
          value={searchKeyword}
        />
        <Icon name='clear' type='MaterialIcons' onPress={clearKeyword} />
      </Item>
    </Header>
  );
};

export const mapStateToProps = (state: AppState): SelectorProps => ({
  searchKeyword: selectSearchKeyword(state),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  setKeyword: (keyword: string): Actions.Search.SetSearchKeywordAction =>
    dispatch(setSearchKeyword(keyword)),
  clearKeyword: (): Actions.Search.ClearSearchKeywordAction => dispatch(clearSearchKeyword()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
