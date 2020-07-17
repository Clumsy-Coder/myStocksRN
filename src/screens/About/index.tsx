import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>About screen</Text>
    </View>
  );
};

export default AboutScreen;
