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

export const fetchProfile = (id, offset) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profile/${id}`,
    data: { user_id: id, offset }
  });
};

export const fetchFeed = offset => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed',
    data: { offset }
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

export const updatePost = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${formData.get("post[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const deletePost = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};

export const deletePostPhoto = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/images/${id}`
  });
};

export const likePost = postId => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like: { likeable_id: postId, likeable_type: 'Post' } }
  });
};

export const unlikePost = (likeId, postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${likeId}`,
    data: { like: { likeable_id: postId, likeable_type: 'Post' } }
  });
};
