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

export const receiveAllPosts = ({ posts, comments }) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts,
    comments
  };
};

export const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const fetchPost = id => dispatch => {
  return PostApiUtil.fetchPost(id).then(post => {
    dispatch(receivePost(post));
  });
};

export const fetchPosts = () => dispatch => {
  return PostApiUtil.fetchPosts().then(posts => {
    dispatch(receiveAllPosts(posts));
  });
};

export const fetchProfile = id => dispatch => {
  return PostApiUtil.fetchProfile(id).then(payload => {
    dispatch(receiveAllPosts(payload));
  });
};

export const fetchFeed = () => dispatch => {
  return PostApiUtil.fetchFeed().then(payload => {
    dispatch(receiveAllPosts(payload));
  });
};

export const createPost = post => dispatch => {
  return PostApiUtil.createPost(post).then(newPost => {
    dispatch(receivePost(newPost));
  });
};

export const updatePost = post => dispatch => {
  return PostApiUtil.updatePost(post).then(newPost => {
    dispatch(receivePost(newPost));
  });
};

export const deletePost = id => dispatch => {
  return PostApiUtil.deletePost(id).then(post => {
    dispatch(removePost(post.id));
  });
};

export const deletePostPhoto = id => dispatch => {
  return PostApiUtil.deletePostPhoto(id).then(post => {
    dispatch(receivePost(post));
  });
};
