export const fetchComments = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  });
};

export const createComment = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const fetchComment = commentId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  });
};

export const updateComment = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${formData.get("comment[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
