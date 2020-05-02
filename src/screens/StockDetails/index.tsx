import * as React from 'react';
import { Button, View, Text } from 'react-native';

import NavigationRoutePath from 'src/routes/RoutePath.enum';

const StockDetailScreen = ({ navigation }) => {
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
