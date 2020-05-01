import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from 'src/screens/Home';
// import StockDetails from 'src/screens/StockDetails';
// import Settings from 'src/screens/Settings';
// import About from 'src/screens/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const StackNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name='Home' component={Home} /> */}
    {/* <Stack.Screen name='Stock details' component={StockDetails} /> */}
    {/* <Stack.Screen name='About' component={About} /> */}
  </Stack.Navigator>
);

export const DrawerNavigator = () => (
  <Drawer.Navigator>
    {/* <Drawer.Screen name='Home' component={Home} /> */}
    {/* <Drawer.Screen name='Settings' component={Settings} /> */}
  </Drawer.Navigator>
);
