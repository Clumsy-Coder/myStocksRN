import * as React from 'react';
import { Button, View, Text } from 'react-native';

import NavigationRoutePath from 'src/routes/RoutePath.enum';

const SettingScreen = ({ navigation }) => {
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
