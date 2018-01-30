import { connect } from 'react-redux';
import PostIndex from './post_index';
import { toggleEditPostModal } from '../../actions/ui_actions';
import {
  fetchFeed,
  fetchMoreFeed,
  fetchProfile,
  fetchMoreProfile,
  deletePost,
  updatePost,
  deletePostPhoto
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    friends: ownProps.friends,
    currentUser: state.session.currentUser,
    modal: state.ui.editPostModal,
    morePosts: state.ui.morePosts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const initialFetch = ownProps.page === "feed" ?
    fetchFeed : fetchProfile;
  const additionalFetch = ownProps.page === "feed" ?
    fetchMoreFeed : fetchMoreProfile;
  return {
    initialFetch: (id, offset) => dispatch(initialFetch(id, offset)),
    additionalFetch: (id, offset) => dispatch(additionalFetch(id, offset)),
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
