import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationRoutePath from 'src/routes/RoutePath.enum';
import { RootStackParamList } from 'src/routes/AppRouteTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'StockDetails'>;
};

const StockDetailScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Stock details screen</Text>
      <Button
        onPress={() => navigation.navigate(NavigationRoutePath.Home)}
        title='Go to Home screen'
      />
    </View>
  );
};

export default StockDetailScreen;
