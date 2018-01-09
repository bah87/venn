import { createPost, fetchPost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { togglePostFormModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUser.id],
    modal: state.ui.postFormModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: id => dispatch(fetchPost(id)),
    togglePostFormModal: () => dispatch(togglePostFormModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
