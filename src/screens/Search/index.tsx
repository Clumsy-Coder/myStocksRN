import React from 'react';
import { Container, Content } from 'native-base';

import SearchBar from '@containers/SearchBar';

const SearchScreen: React.FC = () => (
  <Container>
    <Content>
      <SearchBar />
    </Content>
  </Container>
);

export default SearchScreen;
