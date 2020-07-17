import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import StocksKeyStats from 'src/components/StocksKeyStats';
import * as testdata from 'jest.testdata';

describe('<StocksKeyStats />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<StocksKeyStats data={testdata.stockQuoteData1} />);

    expect(wrapper).toMatchSnapshot();
  });
});
