import { connect } from 'react-redux';
import { fetchComments, removeComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    removeComment: commentId => dispatch(removeComment(commentId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
