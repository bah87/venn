export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const fetchFriends = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends'
  });
};

export const saveUserPhoto = formData => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get("user[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
