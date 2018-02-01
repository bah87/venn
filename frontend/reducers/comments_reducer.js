import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  REMOVE_COMMENT_LIKE
} from '../actions/comment_actions';
import {
  RECEIVE_ALL_POSTS,
  RECEIVE_NEW_POSTS
} from '../actions/post_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    case RECEIVE_NEW_POSTS:
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    case REMOVE_COMMENT_LIKE:
      newState = merge({}, state);
      let comment = newState[action.likeableId];
      comment.likes = comment.likes.filter(like => {
        return like.id !== action.likeId;
      });
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
