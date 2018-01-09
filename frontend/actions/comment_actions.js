import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const fetchComments = postId => dispatch => {
  return CommentApiUtil.fetchComments(postId).then(comments => {
    dispatch(receiveComments(comments));
  });
};

export const deleteComment = commentId => dispatch => {
  return CommentApiUtil.deleteComment(commentId).then(response => {
    dispatch(removeComment(response.commentId));
  });
};
