import { RECEIVE_USER, RECEIVE_FRIENDS } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_FRIENDS:
      return merge({}, action.friends);
    default:
      return state;
  }
};

export default usersReducer;
