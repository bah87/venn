import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

export const receiveUser = ({ user, requests }) => {
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

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(payload => {
    dispatch(receiveUser(payload));
  });
};

export const fetchFriends = () => dispatch => {
  return UserApiUtil.fetchFriends().then(friends => {
    dispatch(receiveFriends(friends));
  });
};

export const saveUserPhoto = photo => dispatch => {
  return UserApiUtil.saveUserPhoto(photo).then(payload => {
    dispatch(receiveUser(payload));
  });
};
