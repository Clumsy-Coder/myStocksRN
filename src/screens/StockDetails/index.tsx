import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  NavigationRoutePath,
  RootStackParamList,
  StockDetailsRouteProp,
} from 'src/routes/AppRouteTypes';
import { useRoute } from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'StockDetails'>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StockDetailScreen: React.FC<Props> = ({ navigation }: Props) => {
  const route = useRoute<StockDetailsRouteProp>();
  const { symbol } = route.params;

  return (
    <View style={styles.root}>
      <Text>Stock details screen</Text>
      <Button
        onPress={(): void => navigation.navigate(NavigationRoutePath.Home)}
        title='Go to Home screen'
      />
      <Text>{'\n'}</Text>
      <Button
        onPress={(): void => navigation.navigate(NavigationRoutePath.About)}
        title='Go to About screen'
      />
      <Text>{'\n'}</Text>
      <Text>Symbol: {symbol}</Text>
    </View>
  );
};

export default StockDetailScreen;
