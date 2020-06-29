import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import NavigationRoutePath from '@routes/RoutePath.enum';

export type RootStackParamList = {
  Home: undefined;
  StockDetails: {
    symbol: string;
  };
  About: undefined;
};

export type StockDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutePath.StockDetails
>;

export type StockDetailsRouteProp = RouteProp<RootStackParamList, NavigationRoutePath.StockDetails>;
