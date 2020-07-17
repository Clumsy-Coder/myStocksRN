import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeScreen from 'src/screens/Home';
import StockDetailsScreen from 'src/screens/StockDetails';
import AboutScreen from 'src/screens/About';
import { NavigationRoutePath, RootStackParamList } from '@routes/Types';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutePath.Home}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={NavigationRoutePath.Home} component={HomeScreen} />
    <Stack.Screen name={NavigationRoutePath.StockDetails} component={StockDetailsScreen} />
    <Stack.Screen name={NavigationRoutePath.About} component={AboutScreen} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
