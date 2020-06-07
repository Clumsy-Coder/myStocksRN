import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import StockCard from 'src/components/StockCard';
import { Selectors } from 'src/redux/Stocks/Types';

const stockSymbol1 = 'IBM';
const companyName1 = 'International Business Machines Corporation';
const stockCardProps1: Selectors.SelectQuoteTrim = {
  fetching: false,
  symbol: stockSymbol1,
  companyName: companyName1,
  price: '100',
  change: '1.0',
  changePercent: '10.0',
};

const stockCardProps2: Selectors.SelectQuoteTrim = {
  fetching: true,
  symbol: stockSymbol1,
  companyName: companyName1,
  price: undefined,
  change: undefined,
  changePercent: undefined,
};

const stockCardProps3: Selectors.SelectQuoteTrim = {
  fetching: false,
  symbol: stockSymbol1,
  companyName: companyName1,
  price: '100',
  change: undefined,
  changePercent: '10.0',
};

const stockCardProps4: Selectors.SelectQuoteTrim = {
  fetching: false,
  symbol: stockSymbol1,
  companyName: companyName1,
  price: '100',
  change: '-1.0',
  changePercent: '-10.0',
};

const stockCardProps5: Selectors.SelectQuoteTrim = {
  fetching: false,
  symbol: stockSymbol1,
  companyName: companyName1,
  price: '100',
  change: '1.0',
  changePercent: '10.0',
};

describe('<StockCard />', () => {
  describe('During fetching data', () => {
    const wrapper = shallow(<StockCard data={stockCardProps2} />);

    it('Renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('After fetching data', () => {
    describe('Full data presented', () => {
      const wrapper = shallow(<StockCard data={stockCardProps1} />);

      it('Renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('Undefined stock price', () => {
      const wrapper = shallow(<StockCard data={stockCardProps3} />);

      it('Renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('Stock price less than 0', () => {
      const wrapper = shallow(<StockCard data={stockCardProps4} />);

      it('Renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('Stock price greater than 0', () => {
      const wrapper = shallow(<StockCard data={stockCardProps5} />);

      it('Renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
