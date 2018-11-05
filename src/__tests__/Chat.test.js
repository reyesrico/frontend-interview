import React from 'react';
import { shallow } from 'enzyme';
import { ChatComponent as Chat } from '../Chat';

describe('Chat', () => {
  let requiredProps, wrapper;

  beforeEach(() => {
    requiredProps = {
      addMessageAction: () => {},
      fetchMessagesAction: () => {},
      fetchRoomAction: () => {},
      fetchRoomsAction: () => {},
      messages: [],
      room: {},
      rooms: [],
      user: 'test',
      time: '11/04/2018',  
    };

    wrapper = shallow(<Chat {...requiredProps} />);
  });

  it('renders with required props', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
