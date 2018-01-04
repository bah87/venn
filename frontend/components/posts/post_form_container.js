import React from 'react';
import { createPost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
