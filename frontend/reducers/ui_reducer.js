import { TOGGLE_POST_FORM_MODAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  postFormModal: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_POST_FORM_MODAL:
      return merge({}, state, { postFormModal: !state.postFormModal });
    default:
      return state;
  }
};

export default uiReducer;
