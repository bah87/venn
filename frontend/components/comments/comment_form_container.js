import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {
  createComment,
  fetchComment,
  updateComment
} from '../../actions/comment_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUser.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.type === "create" ? createComment : updateComment;
  return {
    action: comment => dispatch(action(comment)),
    fetchComment: id => dispatch(fetchComment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
