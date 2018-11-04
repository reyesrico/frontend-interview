import { ADD_MESSAGE, FETCH_MESSAGES, FETCH_ROOM, FETCH_ROOMS } from './constants';
import { addMessage, fetchMessages, fetchRoom, fetchRooms } from './api';
import { makeApiActionCreator, makeStandardActionCreator } from './action-helpers';


// ACTION CREATORS
const messageAdded = makeStandardActionCreator(ADD_MESSAGE);
const messagesFetched = makeStandardActionCreator(FETCH_MESSAGES);
const roomFetched = makeStandardActionCreator(FETCH_ROOM);
const roomsFetched = makeStandardActionCreator(FETCH_ROOMS);

// ASYNC ACTION CREATORS
export const addMessageAction = makeApiActionCreator(addMessage, messageAdded);
export const fetchMessagesAction = makeApiActionCreator(fetchMessages, messagesFetched);
export const fetchRoomAction = makeApiActionCreator(fetchRoom, roomFetched);
export const fetchRoomsAction = makeApiActionCreator(fetchRooms, roomsFetched);
