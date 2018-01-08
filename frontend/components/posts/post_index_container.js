import { connect } from 'react-redux';
import PostIndex from './post_index';
import {
  fetchFeed,
  fetchProfile,
  deletePost
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    friends: ownProps.friends,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.page === "feed" ? fetchFeed : fetchProfile;
  return {
    action: id => dispatch(action(id)),
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
