import { RECEIVE_LINK_PREVIEW } from '../actions/link_actions';
import merge from 'lodash/merge';

const linksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LINK_PREVIEW:
      return merge({}, action.linkPreview);
    default:
      return state;
  }
};

export default linksReducer;
