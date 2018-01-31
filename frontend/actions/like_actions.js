import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_POST_LIKE = 'REMOVE_POST_LIKE';
export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE';

export const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removePostLike = (likeId, postId) => {
  return {
    type: REMOVE_POST_LIKE,
    likeId,
    postId
  };
};

export const removeCommentLike = (likeId, commentId) => {
  return {
    type: REMOVE_COMMENT_LIKE,
    likeId,
    commentId
  };
};
