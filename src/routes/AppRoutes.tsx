import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from 'src/screens/Home';
import StockDetailsScreen from 'src/screens/StockDetails';
import AboutScreen from 'src/screens/About';
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
const HomeStackNavigator: React.FC<OwnProps> = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutePath.Home}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={NavigationRoutePath.Home} component={HomeScreen} />
    <Stack.Screen
      name={NavigationRoutePath.StockDetails}
      component={StockDetailsScreen}
      options={({ route }): { title: string } => ({ title: route.params.symbol })}
    />
    <Stack.Screen name={NavigationRoutePath.About} component={AboutScreen} />
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
