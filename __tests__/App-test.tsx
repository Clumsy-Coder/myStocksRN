import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import fs from 'fs';
import path from 'path';

import App from 'src/App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('Renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <Provider />', () => {
    expect(wrapper.find('Provider')).toHaveLength(1);
  });
});

describe('Essential files', () => {
  const DIR_BASE = path.resolve(__dirname, '..'); // <project_root>

  it('jest.config.js file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'jest.config.js');
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it('jest.setup.js file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'jest.setup.js');
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it('tsconfig.json file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'tsconfig.json');
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it('tsconfig.jest.json file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'tsconfig.jest.json');
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it('babel.config.js file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'babel.config.js');
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it('metro.config.js file should exist', () => {
    const filepath = path.resolve(DIR_BASE, 'metro.config.js');
    expect(fs.existsSync(filepath)).toBe(true);
  });
});
