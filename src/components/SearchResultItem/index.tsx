import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Text, View } from 'native-base';

import { DataDomain } from '@redux/Stocks/Types';
import { NavigationRoutePath, StockDetailsNavigationProp } from '@routes/Types';

interface Props {
  data: DataDomain.Symbols;
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
      <Text>
        {data.symbol}: {data.name}
      </Text>
    </ListItem>
  );
};

export default StockSearchResultItem;
