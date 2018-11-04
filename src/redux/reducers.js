import { ADD_MESSAGE, FETCH_MESSAGES, FETCH_ROOM, FETCH_ROOMS } from "./constants";

const initialState = {
  messages: [],
  room: {},
  rooms: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
        return { 
          ...state,
          messages: [...state.messages, action.payload]
        };
    case FETCH_MESSAGES:
        return {
            ...state,
            messages: [...action.payload]
        };
    case FETCH_ROOM:
        return {
          ...state,
          room: action.payload
        };
    case FETCH_ROOMS:
        return {
          ...state,
          rooms: action.payload
        };
    default:
      return state;
  }
};

export default rootReducer;
