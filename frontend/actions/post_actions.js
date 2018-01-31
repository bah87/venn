import * as PostApiUtil from '../util/post_api_util';
import { togglePostFormErrorModal } from './ui_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_NEW_POSTS = 'RECEIVE_NEW_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_LIKE = 'REMOVE_LIKE';

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

export const receiveNewPosts = ({ posts, comments }) => {
  return {
    type: RECEIVE_NEW_POSTS,
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

export const removeLike = ({ likeId, likeableId }) => {
  return {
    type: REMOVE_LIKE,
    likeId,
    likeableId
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

export const fetchProfile = (id, offset) => dispatch => {
  return PostApiUtil.fetchProfile(id, offset).then(payload => {
    dispatch(receiveAllPosts(payload));
  });
};

export const fetchMoreProfile = (id, offset) => dispatch => {
  return PostApiUtil.fetchProfile(id, offset).then(payload => {
    dispatch(receiveNewPosts(payload));
  });
};

export const fetchFeed = (id, offset) => dispatch => {
  return PostApiUtil.fetchFeed(offset).then(payload => {
    dispatch(receiveAllPosts(payload));
  });
};

export const fetchMoreFeed = (id, offset) => dispatch => {
  return PostApiUtil.fetchFeed(offset).then(payload => {
    dispatch(receiveNewPosts(payload));
  });
};

export const createPost = post => dispatch => {
  return PostApiUtil.createPost(post).then(newPost => {
    dispatch(receivePost(newPost));
  }).fail(err => {
    document.getElementById("post-form-textarea").focus();
    dispatch(togglePostFormErrorModal());
  });
};

export const updatePost = post => dispatch => {
  return PostApiUtil.updatePost(post).then(newPost => {
    dispatch(receivePost(newPost));
  }).fail(err => {
    document.getElementById("post-form-textarea").focus();
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

export const likePost = postId => dispatch => {
  return PostApiUtil.likePost(postId).then(post => {
    dispatch(receivePost(post));
  });
};

export const unlikePost = (likeId, postId) => dispatch => {
  return PostApiUtil.unlikePost(likeId, postId).then(payload => {
    dispatch(removeLike(payload));
  });
};
