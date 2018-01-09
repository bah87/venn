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

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    fetchComment: id => dispatch(fetchComment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
