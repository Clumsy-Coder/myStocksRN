import React from 'react';
import { Container, Content } from 'native-base';

import SearchBarHeader from '@containers/SearchBar';

const SearchScreen: React.FC = () => (
  <Container>
    <Content>
      <SearchBarHeader />
    </Content>
  </Container>
);

export default SearchScreen;
