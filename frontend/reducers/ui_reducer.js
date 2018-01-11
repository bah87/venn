import {
  TOGGLE_POST_FORM_MODAL,
  TOGGLE_POST_FORM_ERROR_MODAL,
  TOGGLE_PROF_PIC_MODAL,
  TOGGLE_EDIT_POST_MODAL,
  TOGGLE_EDIT_COMMENT
 } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  postFormModal: false,
  profPicModal: false,
  editPostModal: false,
  editComment: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_POST_FORM_MODAL:
      return merge({}, state, { postFormModal: !state.postFormModal });
    case TOGGLE_POST_FORM_ERROR_MODAL:
      return merge({}, state, { postFormErrorModal: !state.postFormErrorModal });
    case TOGGLE_PROF_PIC_MODAL:
      return merge({}, state, { profPicModal: !state.profPicModal });
    case TOGGLE_EDIT_COMMENT:
      const editComment = action.commentId ? action.commentId : false;
      return merge({}, state, { editComment: editComment });
    case TOGGLE_EDIT_POST_MODAL:
      const editPostModal = action.modalId ? action.modalId : false;
      return merge({}, state, { editPostModal: editPostModal });
    default:
      return state;
  }
};

export default uiReducer;
