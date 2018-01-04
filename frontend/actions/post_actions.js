import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const receivePosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

export const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const fetchPost = id => dispatch => {
  return PostApiUtil.fetchPost().then(post => {
    dispatch(receivePost(post));
  });
};

export const fetchPosts = () => dispatch => {
  return PostApiUtil.fetchPosts().then(posts => {
    dispatch(receivePosts(posts));
  });
};
