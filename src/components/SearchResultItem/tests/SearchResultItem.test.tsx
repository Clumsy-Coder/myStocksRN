import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResultItem from 'src/components/SearchResultItem';
import * as testdata from 'jest.testdata';

describe('<SearchResultItem />', () => {
  const props = {
    data: testdata.symbolsMetadata1,
    onPress: jest.fn(),
  };

  it('Render correctly', () => {
    const wrapper = shallow(<SearchResultItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Handles onPress event', () => {
    const renderProps = { ...props };
    const wrapper = shallow(<SearchResultItem {...renderProps} />);

    wrapper.props().onPress();

    expect(renderProps.onPress).toBeCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
