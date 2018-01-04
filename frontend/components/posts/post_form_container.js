import { createPost, fetchPost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
