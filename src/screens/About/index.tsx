import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { NavigationRoutePath, RootStackParamList } from 'src/routes/AppRouteTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'About'>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SettingScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={styles.root}>
      <Text>About screen</Text>
      <Button
        onPress={(): void => navigation.navigate(NavigationRoutePath.Home)}
        title='Go to Home screen'
      />
    </View>
  );
};

export default SettingScreen;
