import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Button, Icon } from 'native-base';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from 'src/screens/Home';
import StockDetailsScreen from 'src/screens/StockDetails';
import AboutScreen from 'src/screens/About';
import SearchScreen from '@screens/Search';
import { NavigationRoutePath, RootStackParamList } from '@routes/Types';
import { selectFavoriteSymbols } from '@redux/Favorites/Selectors';
import { Actions } from '@redux/Favorites/Types';
import { addFavoriteStock, removeFavoriteStock } from '@redux/Favorites/Actions';
import { AppState, AppActions } from '@redux/index.reducers';

interface SelectorProps {
  favoriteSymbols: string[];
}

interface DispatchProps {
  addToFavorites: (symbol: string) => Actions.AddFavoriteStockAction;
  removeFromFavorites: (symbol: string) => Actions.RemoveFavoriteStockAction;
}

type OwnProps = SelectorProps & DispatchProps;

const Stack = createStackNavigator<RootStackParamList>();
const HomeStackNavigator: React.FC<OwnProps> = ({
  favoriteSymbols,
  addToFavorites,
  removeFromFavorites,
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
        headerRight: (): React.ReactNode => {
          return (
            <Button transparent onPress={() => navigation.navigate(NavigationRoutePath.Search)}>
              <Icon name='search' type='MaterialIcons' />
            </Button>
          );
        },
      })}
    />
    <Stack.Screen
      name={NavigationRoutePath.StockDetails}
      component={StockDetailsScreen}
      options={({ route }): { title: string; headerRight: () => React.ReactNode } => ({
        title: route.params.symbol,
        headerRight: (): React.ReactNode => {
          if (favoriteSymbols.find((symbol) => symbol === route.params.symbol) === undefined) {
            return (
              <Button
                transparent
                onPress={(): Actions.AddFavoriteStockAction => addToFavorites(route.params.symbol)}
              >
                <Icon name='star-border' type='MaterialIcons' />
              </Button>
            );
          } else {
            return (
              <Button
                transparent
                onPress={(): Actions.RemoveFavoriteStockAction =>
                  removeFromFavorites(route.params.symbol)
                }
              >
                <Icon name='star' type='MaterialIcons' />
              </Button>
            );
          }
        },
      })}
    />
    <Stack.Screen name={NavigationRoutePath.About} component={AboutScreen} />
    <Stack.Screen name={NavigationRoutePath.Search} component={SearchScreen} />
  </Stack.Navigator>
);

const mapStateToProps = (state: AppState): SelectorProps => ({
  favoriteSymbols: selectFavoriteSymbols(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  addToFavorites: (symbol: string): Actions.AddFavoriteStockAction =>
    dispatch(addFavoriteStock(symbol)),
  removeFromFavorites: (symbol: string): Actions.RemoveFavoriteStockAction =>
    dispatch(removeFavoriteStock(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator);
