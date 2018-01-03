import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import NewUserForm from './new_user_form';

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewUserForm);
