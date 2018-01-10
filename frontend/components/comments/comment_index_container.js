import { connect } from 'react-redux';
import { removeComment } from '../../actions/comment_actions';
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
    removeComment: commentId => dispatch(removeComment(commentId)),
    toggleEditComment: commentId => dispatch(toggleEditComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
