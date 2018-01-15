import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

export const receiveRequest = request => {
  return {
    type: RECEIVE_REQUEST,
    request
  };
};

export const receiveRequests = requests => {
  return {
    type: RECEIVE_REQUESTS,
    requests
  };
};

export const removeRequest = request => {
  return {
    type: REMOVE_REQUEST,
    request
  };
};

export const fetchRequests = () => dispatch => {
  return FriendRequestApiUtil.fetchRequests().then(requests => {
    dispatch(receiveRequests(requests));
  });
};

export const addFriend = requestorId => dispatch => {
  return FriendRequestApiUtil.addFriend(requestorId).then(request => {
    dispatch(receiveRequest(request));
  });
};

export const rejectFriend = requestorId => dispatch => {
  return FriendRequestApiUtil.rejectFriend(requestorId).then(request => {
    dispatch(removeRequest(request));
  });
};

export const sendRequest = requestorId => dispatch => {
  return FriendRequestApiUtil.sendRequest(requestorId).then(request => {
    dispatch(receiveRequest(request));
  });
};
