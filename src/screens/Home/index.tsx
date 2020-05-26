import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationRoutePath from 'src/routes/RoutePath.enum';
import { RootStackParamList } from 'src/routes/AppRouteTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home: React.FC<Props> = ({ navigation }: Props) => (
  <View style={styles.root}>
    <Text>Home screen</Text>
    <Button
      onPress={(): void => navigation.navigate(NavigationRoutePath.StockDetails)}
      title='Go to StockDetails'
    />
    <Button
      onPress={(): void => navigation.navigate(NavigationRoutePath.About)}
      title='Go to About'
    />
  </View>
);

export default Home;
