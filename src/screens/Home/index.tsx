import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationRoutePath from 'src/routes/RoutePath.enum';
import { RootStackParamList } from 'src/routes/AppRouteTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({ navigation }: Props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home screen</Text>
    <Button
      onPress={() => navigation.navigate(NavigationRoutePath.StockDetails)}
      title='Go to StockDetails'
    />
  </View>
);

export default Home;
