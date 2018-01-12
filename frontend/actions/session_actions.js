import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = ({ currentUser, requests }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
    requests
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(payload => {
    dispatch(receiveCurrentUser(payload));
  }, err => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(payload => {
    dispatch(receiveCurrentUser({}));
  });
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(payload => {
    dispatch(receiveCurrentUser(payload));
  }, err => {
    dispatch(receiveErrors(err.responseJSON));
  });
};
