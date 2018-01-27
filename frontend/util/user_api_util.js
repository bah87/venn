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
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/images/${formData.get("user[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const searchUsers = query => {
  return $.ajax({
    method: 'GET',
    url: '/api/search_users',
    dataType: 'json',
    data: { query }
  });
};
