import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NavigationRoutePath from 'src/routes/RoutePath.enum';

import HomeScreen from 'src/screens/Home';
import StockDetailsScreen from 'src/screens/StockDetails';
import SettingsScreen from 'src/screens/Settings';
import AboutScreen from 'src/screens/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutePath.Home}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={NavigationRoutePath.Home} component={HomeScreen} />
    <Stack.Screen name={NavigationRoutePath.StockDetails} component={StockDetailsScreen} />
  </Stack.Navigator>
);

export const SettingStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutePath.Settings}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={NavigationRoutePath.Settings} component={SettingsScreen} />
    <Stack.Screen name={NavigationRoutePath.About} component={AboutScreen} />
  </Stack.Navigator>
);

// where all the screens come together
// NOTE: react-navigator only allows ONE navigator type as the child of NavigationContainer
export const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName={NavigationRoutePath.Home}>
    <Drawer.Screen name={NavigationRoutePath.Home} component={HomeStackNavigator} />
    <Drawer.Screen name={NavigationRoutePath.Settings} component={SettingStackNavigator} />
  </Drawer.Navigator>
);
