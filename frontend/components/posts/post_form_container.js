import { createPost, fetchPost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';
import {
  togglePostFormModal,
  togglePostFormErrorModal
} from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    modal: state.ui.postFormModal,
    errorModal: state.ui.postFormErrorModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: id => dispatch(fetchPost(id)),
    togglePostFormModal: () => dispatch(togglePostFormModal()),
    togglePostFormErrorModal: () => dispatch(togglePostFormErrorModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
