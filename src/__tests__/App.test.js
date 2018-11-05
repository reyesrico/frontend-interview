import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  let page, wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    
    page = {
      get Chat() {
        return wrapper.find('Chat');
      },
      get Login() {
        return wrapper.find('Login');
      },
    };
  });

  it('renders with required props', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  describe('when user is active', () => {
    beforeEach(() => {
      wrapper.setState({ user: 'test', time: '11/04/2018' });
    });

    it('should render Chat component', () => {
      const Chat = wrapper.find('Connect(withRouter(Chat))');
      expect(Chat.exists()).toBe(true);
    });

    it('should not render Login component', () => {
      expect(page.Login.exists()).toBe(false);
    });
  });
});
