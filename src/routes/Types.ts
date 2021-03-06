import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

/**
 * All navigation routes available
 */
export enum NavigationRoutePath {
  Home = 'Home',
  StockDetails = 'StockDetails',
  About = 'About',
  Search = 'Search',
}

/**
 * Parameters for each Screen
 */
export type RootStackParamList = {
  [NavigationRoutePath.Home]: undefined;
  [NavigationRoutePath.StockDetails]: {
    symbol: string;
  };
  [NavigationRoutePath.About]: undefined;
  [NavigationRoutePath.Search]: undefined;
};

/**
 * StockDetails **navigation** prop.
 * Used when navigating to StockDetails screen
 */
export type StockDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutePath.StockDetails
>;

export type StockSearchNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutePath.Search
>;

export type AboutNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutePath.About
>;

/**
 * StockDetails **route** prop.
 * Used in StockDetails screen.
 * Primarily used for getting the param value
 */
export type StockDetailsRouteProp = RouteProp<RootStackParamList, NavigationRoutePath.StockDetails>;
