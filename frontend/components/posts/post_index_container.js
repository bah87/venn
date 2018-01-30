import { connect } from 'react-redux';
import PostIndex from './post_index';
import { toggleEditPostModal } from '../../actions/ui_actions';
import {
  fetchFeed,
  fetchProfile,
  deletePost,
  updatePost,
  deletePostPhoto
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    friends: ownProps.friends,
    currentUser: state.session.currentUser,
    modal: state.ui.editPostModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.page === "feed" ? fetchFeed : fetchProfile;
  return {
    action: (id, offset) => dispatch(action(id, offset)),
    deletePost: id => dispatch(deletePost(id)),
    updatePost: post => dispatch(updatePost(post)),
    toggleEditPostModal: id => dispatch(toggleEditPostModal(id)),
    deletePostPhoto: id => dispatch(deletePostPhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
