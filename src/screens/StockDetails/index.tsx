import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationRoutePath from 'src/routes/RoutePath.enum';
import { RootStackParamList } from 'src/routes/AppRouteTypes';

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
  return (
    <View style={styles.root}>
      <Text>Stock details screen</Text>
      <Button
        onPress={(): void => navigation.navigate(NavigationRoutePath.Home)}
        title='Go to Home screen'
      />
      <Button
        onPress={(): void => navigation.navigate(NavigationRoutePath.About)}
        title='Go to About screen'
      />
    </View>
  );
};

export default StockDetailScreen;
