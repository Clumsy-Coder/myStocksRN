import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line global-require
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock('redux-persist/lib/createPersistoid', () =>
  jest.fn(() => ({
    update: jest.fn(),
    flush: jest.fn(),
  })),
);
