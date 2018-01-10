import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {
  createComment,
  fetchComment,
  updateComment
} from '../../actions/comment_actions';
import { toggleEditComment } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const type = ownProps.type;
  let comment = { body: "", imageUrl: null };
  let currentUser = state.entities.users[state.session.currentUser.id];
  if (type === "edit") {
    comment = ownProps.comment;
  }
  return { post, comment, currentUser, type };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.type === "new" ? createComment : updateComment;
  return {
    action: comment => dispatch(action(comment)),
    fetchComment: id => dispatch(fetchComment(id)),
    toggleEditComment: commentId => dispatch(toggleEditComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
