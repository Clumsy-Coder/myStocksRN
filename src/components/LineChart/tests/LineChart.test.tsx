import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import LineChartView from 'src/components/LineChart';
import * as testdata from 'jest.testdata';

describe('<StocksKeyStats />', () => {
  it('Renders correctly', () => {
    const data: { date: string; price: number }[] = testdata.stockChartData1.map((cur) => ({
      date: cur.date,
      price: cur.close,
    }));

    const wrapper = shallow(<LineChartView data={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
