import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_COVER_PHOTO = 'RECEIVE_COVER_PHOTO';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  };
};

export const receiveCoverPhoto = photo => {
  return {
    type: RECEIVE_COVER_PHOTO,
    photo
  };
};

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(user => {
    dispatch(receiveUser(user));
  });
};

export const fetchFriends = () => dispatch => {
  return UserApiUtil.fetchFriends().then(friends => {
    dispatch(receiveFriends(friends));
  });
};

export const saveCoverPhoto = photo => dispatch => {
  return UserApiUtil.saveCoverPhoto(photo).then(savedPhoto => {
    dispatch(receiveCoverPhoto(photo));
  });
};
