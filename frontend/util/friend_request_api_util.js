export const fetchIncomingRequests = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/incoming_pending_requests'
  });
};

export const fetchOutgoingRequests = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/sent_pending_requests'
  });
};

export const addFriend = requestorId => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/friend_requests/${requestorId}`
  });
};

export const rejectFriend = requestorId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friend_requests/${requestorId}`
  });
};

export const sendRequest = receiverId => {
  return $.ajax({
    method: 'POST',
    url: `/api/friend_requests/${receiverId}`
  });
};
