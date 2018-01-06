export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};

export const fetchProfile = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/profile/${id}`,
    data: { user_id: id }
  });
};

export const fetchFeed = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed'
  });
};

export const createPost = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
