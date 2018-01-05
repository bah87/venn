import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchFeed, fetchProfile, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(state.entities.users)
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
