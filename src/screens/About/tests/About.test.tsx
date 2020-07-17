import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import AboutScreen from '@screens/About';

describe('<AboutScreen />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<AboutScreen />);

    expect(wrapper).toMatchSnapshot();
  });
});
