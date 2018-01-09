import {
  TOGGLE_POST_FORM_MODAL,
  TOGGLE_PROF_PIC_MODAL,
  TOGGLE_EDIT_POST_MODAL
 } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  postFormModal: false,
  profPicModal: false,
  editPostModal: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_POST_FORM_MODAL:
      return merge({}, state, { postFormModal: !state.postFormModal });
    case TOGGLE_PROF_PIC_MODAL:
      return merge({}, state, { profPicModal: !state.profPicModal });
    case TOGGLE_EDIT_POST_MODAL:
      return merge({}, state, { editPostModal: !state.editPostModal });
    default:
      return state;
  }
};

export default uiReducer;
