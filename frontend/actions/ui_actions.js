export const TOGGLE_POST_FORM_MODAL = 'TOGGLE_POST_FORM_MODAL';
export const TOGGLE_COVER_PHOTO_MODAL = 'TOGGLE_COVER_PHOTO_MODAL';

export const togglePostFormModal = () => {
  return {
    type: TOGGLE_POST_FORM_MODAL
  };
};

export const toggleCoverPhotoModal = () => {
  return {
    type: TOGGLE_COVER_PHOTO_MODAL
  };
};
