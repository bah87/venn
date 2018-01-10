import { connect } from 'react-redux';
import {
  fetchComments,
  fetchComment,
  removeComment
} from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const comments = [];
  ownProps.post.commentIds.forEach((commentId) => {
    if (state.entities.comments[commentId]) {
      comments.push(state.entities.comments[commentId]);
    }
  });
  return {
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    removeComment: commentId => dispatch(removeComment(commentId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
