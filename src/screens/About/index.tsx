import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavigationRoutePath from 'src/routes/RoutePath.enum';
import { RootStackParamList } from 'src/routes/AppRouteTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'About'>;
};

const SettingScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About screen</Text>
      <Button
        onPress={() => navigation.navigate(NavigationRoutePath.Settings)}
        title='Go to Settings screen'
      />
    </View>
  );
};

export default SettingScreen;
