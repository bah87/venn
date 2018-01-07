import { POST_FORM_MODAL, CLOSE_MODAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  postFormModal: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case POST_FORM_MODAL:
      return merge({}, state, { postFormModal: true });
    default:
      return state;
  }
};

export default uiReducer;
