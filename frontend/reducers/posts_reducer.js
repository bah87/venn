import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  REMOVE_POST
} from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let post;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      post = newState[action.comment.post_id];
      if (!post.commentIds.includes(action.comment.id)) {
        post.commentIds.push(action.comment.id);
      }
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      post = newState[action.postId];
      post.commentIds = post.commentIds.filter((commentId) => {
        return commentId !== action.commentId;
      });
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
