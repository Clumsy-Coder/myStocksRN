import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SearchScreen from 'src/screens/Search';

describe('<Search />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<SearchScreen />);

    expect(wrapper).toMatchSnapshot();
  });
});
