import * as SessionApiUtil from '../util/session_api_util';
import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(user => {
    dispatch(receiveCurrentUser(user));
  }, err => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(user => {
    dispatch(receiveCurrentUser(null));
  });
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(user => {
    dispatch(receiveCurrentUser(user));
  }, err => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(user => {
    dispatch(receiveUser(user));
  });
};
