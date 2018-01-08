import {
  TOGGLE_POST_FORM_MODAL,
  TOGGLE_COVER_PHOTO_MODAL
 } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  postFormModal: false,
  coverPhotoModal: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_POST_FORM_MODAL:
      return merge({}, state, { postFormModal: !state.postFormModal });
    case TOGGLE_COVER_PHOTO_MODAL:
      return merge({}, state, { coverPhotoModal: !state.coverPhotoModal });
    default:
      return state;
  }
};

export default uiReducer;
