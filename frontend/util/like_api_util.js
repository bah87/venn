export const likePost = postId => {
  return $.ajax({
    method: 'POST',
    url: '/api/like_post',
    data: { likeable_id: postId }
  });
};

export const likeComment = commentId => {
  return $.ajax({
    method: 'POST',
    url: '/api/like_comment',
    data: { likeable_id: commentId }
  });
};

export const deletePostLike = likeId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/likes/${likeId}`
  });
};

export const deleteCommentLike = likeId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/likes/${likeId}`
  });
};
