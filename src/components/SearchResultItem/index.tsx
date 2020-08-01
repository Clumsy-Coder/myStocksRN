import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Text, Left, Right, Icon } from 'native-base';

import { DataDomain } from '@redux/Stocks/Types';
import { NavigationRoutePath, StockDetailsNavigationProp } from '@routes/Types';

interface Props {
  data: DataDomain.Symbols;
  /**
   * function used for fetching Stock Quote. Check src/Containers/SearchBar/index.tsx .
   * The stock quote needs to be fetched before rendering data in StockDetails screen.
   * Or it will crash.
   */
  onPress: () => void;
}

const StockSearchResultItem: React.FC<Props> = (props: Props) => {
  const { data, onPress: onPressHandler } = props;
  const navigation = useNavigation<StockDetailsNavigationProp>();

  return (
    <ListItem
      onPress={(): void => {
        onPressHandler();
        navigation.navigate(NavigationRoutePath.StockDetails, { symbol: data.symbol });
      }}
      key={`search-result-item-${data.symbol}`}
    >
      <Left>
        <Text>
          {data.symbol}: {data.name}
        </Text>
      </Left>
      <Right>
        <Icon name='arrow-forward' type='MaterialIcons' />
      </Right>
    </ListItem>
  );
};

export default StockSearchResultItem;
