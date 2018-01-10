export const TOGGLE_POST_FORM_MODAL = 'TOGGLE_POST_FORM_MODAL';
export const TOGGLE_PROF_PIC_MODAL = 'TOGGLE_PROF_PIC_MODAL';
export const TOGGLE_EDIT_POST_MODAL = 'TOGGLE_EDIT_POST_MODAL';
export const TOGGLE_EDIT_COMMENT = 'TOGGLE_EDIT_COMMENT';

export const toggleEditComment = () => {
  return {
    type: TOGGLE_EDIT_COMMENT
  };
};

export const togglePostFormModal = () => {
  return {
    type: TOGGLE_POST_FORM_MODAL
  };
};

export const toggleProfPicModal = () => {
  return {
    type: TOGGLE_PROF_PIC_MODAL
  };
};

export const toggleEditPostModal = modalId => {
  return {
    type: TOGGLE_EDIT_POST_MODAL,
    modalId
  };
};
