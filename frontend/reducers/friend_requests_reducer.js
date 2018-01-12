import {
  RECEIVE_REQUEST,
  RECEIVE_REQUESTS,
  REMOVE_REQUEST
} from '../actions/friend_actions';
import merge from 'lodash/merge';

const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_REQUEST:
      return merge({}, state, { [action.request.id]: action.request });
    case RECEIVE_REQUESTS:
      return merge({}, action.requests);
    case REMOVE_REQUEST:
      newState = merge({}, state);
      delete newState[action.request.id];
      return newState;
    default:
      return state;
  }
};

export default friendRequestsReducer;
