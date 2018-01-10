import { connect } from 'react-redux';
import {
  fetchComments,
  deleteComment
} from '../../actions/comment_actions';
import { toggleEditComment } from '../../actions/ui_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  const comments = [];
  ownProps.post.commentIds.forEach((commentId) => {
    if (state.entities.comments[commentId]) {
      comments.push(state.entities.comments[commentId]);
    }
  });
  return {
    comments,
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    toggleEditComment: commentId => dispatch(toggleEditComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
