import { connect } from 'react-redux';
import PostShow from './post_show';
import { deletePost, fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(fetchPost(id)),
    fetchUser: id => dispatch(fetchUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
