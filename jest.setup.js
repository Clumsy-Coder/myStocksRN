import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line global-require
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
