/* eslint-disable react/display-name */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderBackButton,
} from '@react-navigation/stack';
import { Button, Icon } from 'native-base';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from 'src/screens/Home';
import StockDetailsScreen from 'src/screens/StockDetails';
import AboutScreen from 'src/screens/About';
import SearchScreen from '@screens/Search';
import { AppState, AppActions } from '@redux/index.reducers';
import { Actions as FavoritesActions } from '@redux/Favorites/Types';
import { Actions as StockActions } from '@redux/Stocks/Types';
import { selectFavoriteSymbols } from '@redux/Favorites/Selectors';
import { addFavoriteStock, removeFavoriteStock } from '@redux/Favorites/Actions';
import { clearSearchKeyword as clearSearchKeywordAction } from '@redux/Stocks/Actions';
import { NavigationRoutePath, RootStackParamList } from '@routes/Types';

interface SelectorProps {
  favoriteSymbols: string[];
}

interface DispatchProps {
  addToFavorites: (symbol: string) => FavoritesActions.AddFavoriteStockAction;
  removeFromFavorites: (symbol: string) => FavoritesActions.RemoveFavoriteStockAction;
  clearSearchKeyword: () => StockActions.Search.ClearSearchKeywordAction;
}

type OwnProps = SelectorProps & DispatchProps;

const Stack = createStackNavigator<RootStackParamList>();
const HomeStackNavigator: React.FC<OwnProps> = ({
  favoriteSymbols,
  addToFavorites,
  removeFromFavorites,
  clearSearchKeyword,
}: OwnProps) => (
  <Stack.Navigator
    initialRouteName={NavigationRoutePath.Home}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name={NavigationRoutePath.Home}
      component={HomeScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button transparent onPress={() => navigation.navigate(NavigationRoutePath.Search)}>
            <Icon name='search' type='MaterialIcons' style={{ color: 'black' }} />
          </Button>
        ),
      })}
    />
    <Stack.Screen
      name={NavigationRoutePath.StockDetails}
      component={StockDetailsScreen}
      options={({ route }): { title: string; headerRight: () => React.ReactNode } => ({
        title: route.params.symbol,
        headerRight: () => {
          // render hollow star if stock is not in favorites.
          // render filled star if stock is in favorites.

          if (favoriteSymbols.find((symbol) => symbol === route.params.symbol) === undefined) {
            return (
              <Button transparent onPress={() => addToFavorites(route.params.symbol)}>
                <Icon name='star-border' type='MaterialIcons' style={{ color: 'black' }} />
              </Button>
            );
          } else {
            return (
              <Button transparent onPress={() => removeFromFavorites(route.params.symbol)}>
                <Icon name='star' type='MaterialIcons' style={{ color: 'black' }} />
              </Button>
            );
          }
        },
      })}
    />
    <Stack.Screen name={NavigationRoutePath.About} component={AboutScreen} />
    <Stack.Screen
      name={NavigationRoutePath.Search}
      component={SearchScreen}
      options={({ navigation }) => ({
        // clear search keyword when pressing the back button in the search screen.
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => {
              clearSearchKeyword();
              navigation.goBack();
            }}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const mapStateToProps = (state: AppState): SelectorProps => ({
  favoriteSymbols: selectFavoriteSymbols(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  addToFavorites: (symbol: string) => dispatch(addFavoriteStock(symbol)),
  removeFromFavorites: (symbol: string) => dispatch(removeFavoriteStock(symbol)),
  clearSearchKeyword: () => dispatch(clearSearchKeywordAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator);
