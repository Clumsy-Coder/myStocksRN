import React from 'react';
import { View, Text, Button } from 'react-native';

import NavigationRoutePath from 'src/routes/RoutePath.enum';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home screen</Text>
    <Button
      onPress={() => navigation.navigate(NavigationRoutePath.StockDetails)}
      title='Go to StockDetails'
    />
  </View>
);

export default Home;
