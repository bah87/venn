import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const RECEIVE_INCOMING_REQUESTS = 'RECEIVE_INCOMING_REQUESTS';
export const RECEIVE_OUTGOING_REQUESTS = 'RECEIVE_OUTGOING_REQUESTS';

export const receiveRequest = request => {
  return {
    type: RECEIVE_REQUEST,
    request
  };
};

export const receiveIncomingRequests = requests => {
  return {
    type: RECEIVE_INCOMING_REQUESTS,
    requests
  };
};

export const receiveOutgoingRequests = requests => {
  return {
    type: RECEIVE_OUTGOING_REQUESTS,
    requests
  };
};

export const fetchIncomingRequests = () => dispatch => {
  return FriendRequestApiUtil.fetchIncomingRequests().then(requests => {
    dispatch(receiveIncomingRequests(requests));
  });
};

export const fetchOutgoingRequests = () => dispatch => {
  return FriendRequestApiUtil.fetchOutgoingRequests().then(requests => {
    dispatch(receiveOutgoingRequests(requests));
  });
};

export const addFriend = requestorId => dispatch => {
  return FriendRequestApiUtil.addFriend(requestorId).then(request => {
    dispatch(receiveRequest(request));
  });
};

export const rejectFriend = requestorId => dispatch => {
  return FriendRequestApiUtil.rejectFriend(requestorId).then(request => {
    dispatch(receiveRequest(request));
  });
};

export const sendRequest = requestorId => dispatch => {
  return FriendRequestApiUtil.sendRequest(requestorId).then(request => {
    dispatch(receiveRequest(request));
  });
};
