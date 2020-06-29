import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text, H1, H3 } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Selectors } from 'src/redux/Stocks/Types';
import { StockDetailsNavigationProp, NavigationRoutePath } from '@routes/Types';

interface OwnProps {
  data: Selectors.SelectQuoteTrim;
}

const styleSheet = StyleSheet.create({
  // main container
  container: {
    // backgroundColor: 'blue',
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
  },
  // company
  companyContainer: {
    flex: 3,
    flexDirection: 'column',
    // backgroundColor: 'orange',
    justifyContent: 'space-around',
  },
  companyStockSymbol: {
    fontWeight: 'bold',
  },
  companySymbol: {
    fontWeight: 'bold',
  },
  companyName: {},
  // price
  priceContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  priceValue: {},
  priceChangeContainer: {
    borderRadius: 4,
    padding: 1,
    paddingVertical: 2,
    paddingRight: 5,
    width: '100%',
    alignItems: 'flex-end',
  },
  priceChange: {
    color: 'white',
  },
  priceRed: {
    backgroundColor: 'red',
  },
  priceGreen: {
    backgroundColor: 'green',
  },
});

const StockCard: React.FC<OwnProps> = (props: OwnProps) => {
  const { data } = props;
  const navigation = useNavigation<StockDetailsNavigationProp>();

  if (data.fetching) {
    return (
      <ListItem>
        <Text>Loading</Text>
      </ListItem>
    );
  }

  const change = data.change === undefined ? '0' : data.change;

  return (
    <ListItem
      style={styleSheet.container}
      onPress={(): void =>
        navigation.navigate(NavigationRoutePath.StockDetails, { symbol: data.symbol })
      }
    >
      <View style={styleSheet.listItemContainer}>
        <View style={styleSheet.companyContainer}>
          <H1 style={styleSheet.companySymbol}>{data.symbol}</H1>
          <H3 style={styleSheet.companyName}>{data.companyName}</H3>
        </View>
        <View style={styleSheet.priceContainer}>
          <H3>{data.price.toFixed(2)}</H3>
          <View
            style={[
              styleSheet.priceChangeContainer,
              +change > 0 ? styleSheet.priceGreen : styleSheet.priceRed,
            ]}
          >
            <H3 style={styleSheet.priceChange}>{data.change}</H3>
          </View>
        </View>
      </View>
    </ListItem>
  );
};

export default StockCard;
