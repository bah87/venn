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
