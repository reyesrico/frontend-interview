import { TextDecoder, TextEncoder } from 'util';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}

Enzyme.configure({ adapter: new Adapter() });
