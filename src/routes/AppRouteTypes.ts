import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

/**
 * All navigation routes available
 */
export enum NavigationRoutePath {
  Home = 'Home',
  StockDetails = 'StockDetails',
  About = 'About',
}

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
