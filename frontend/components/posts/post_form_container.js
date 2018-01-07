import { createPost, fetchPost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { postFormModal, closeModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    modal: state.entities.ui.postFormModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: id => dispatch(fetchPost(id)),
    postFormModal: () => dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
