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

export const saveCoverPhoto = formData => {
  return $.ajax({
    method: 'POST',
    url: '',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
