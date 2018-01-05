import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
