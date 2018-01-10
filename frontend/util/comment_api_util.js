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
