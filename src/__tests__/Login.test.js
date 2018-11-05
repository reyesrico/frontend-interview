import React from 'react';
import { shallow } from 'enzyme';
import { LoginComponent as Login } from '../Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders with required props', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
