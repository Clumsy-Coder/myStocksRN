import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, H1 } from 'native-base';

import { BUILD_VERSION } from 'react-native-dotenv';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    paddingTop: 30,
  },
});

const AboutScreen: React.FC = () => {
  return (
    <Container style={styles.root}>
      <Content style={styles.h1}>
        <H1>Build version: {BUILD_VERSION}</H1>
      </Content>
    </Container>
  );
};

export default AboutScreen;
