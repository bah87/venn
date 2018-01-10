import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const removeComment = (commentId, postId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
    postId
  };
};

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const fetchComments = postId => dispatch => {
  return CommentApiUtil.fetchComments(postId).then(comments => {
    dispatch(receiveComments(comments));
  });
};

export const fetchComment = commentId => dispatch => {
  return CommentApiUtil.fetchComment(commentId).then(comment => {
    dispatch(receiveComment(comment));
  });
};

export const deleteComment = commentId => dispatch => {
  return CommentApiUtil.deleteComment(commentId).then(response => {
    dispatch(removeComment(response.commentId, response.postId));
  });
};

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(response => {
    dispatch(receiveComment(response));
  });
};

export const updateComment = comment => dispatch => {
  return CommentApiUtil.updateComment(comment).then(response => {
    dispatch(receiveComment(response));
  });
};
