import { connect } from 'react-redux';
import PostIndex from './post_index';
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost
} from '../../actions/post_actions';

const mapStateToProps = state => {
  return {
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
