import React from 'react';
import { shallow } from 'enzyme';
import { ChatComponent as Chat } from '../Chat';

describe('Chat', () => {
  let requiredProps, wrapper;

  let rooms = [
    { id: 1, name: 'room 1' },
    { id: 2, name: 'room 2' },
    { id: 3, name: 'room 3' },
    { id: 4, name: 'room 4' },
  ]

  beforeEach(() => {
    requiredProps = {
      addMessageAction: () => {},
      fetchMessagesAction: () => {},
      fetchRoomAction: () => {},
      fetchRoomsAction: () => {},
      messages: [],
      room: {},
      rooms,
      user: 'test',
      time: '11/04/2018',  
    };

    wrapper = shallow(<Chat {...requiredProps} />);
  });

  it('renders with required props', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
