import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS, REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    /*case SELECT_CHANNEL:
      return { ...state, channel: action.channel };
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case RECEIVE_POSTS:
      return { ...state, json: action.json, loading: false };*/
    case REQUEST_WEATHER_DATA:
      return { ...state, loading: true };
    case RECEIVE_WEATHER_DATA:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
};

export default reducer;
