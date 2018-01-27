import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const receiveUser = ({ currentUser, requests }) => {
  return {
    type: RECEIVE_USER,
    user: currentUser
  };
};

export const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  };
};

export const receiveSearchedUsers = users => {
  return {
    type: RECEIVE_SEARCHED_USERS,
    users
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

export const fetchSearchedUsers = query => dispatch => {
  return UserApiUtil.searchUsers(query).then(users => {
    dispatch(receiveSearchedUsers(users));
  });
};
