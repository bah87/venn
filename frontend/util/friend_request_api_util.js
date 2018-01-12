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

export const addFriend = id => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/friend_requests/${id}`,
    data: { requestor_id: id }
  });
};

export const rejectFriend = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friend_requests/${id}`,
    data: { requestor_id: id }
  });
};

export const sendRequest = id => {
  return $.ajax({
    method: 'POST',
    url: `/api/friend_requests/${id}`,
    data: { receiver_id: id }
  });
};
