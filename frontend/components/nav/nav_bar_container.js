import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => {
  let id;
  if (state.session.currentUser) {
    id = state.session.currentUser.id;
  }
  const currentUser = id ? state.entities.users[id] : null;
  // debugger
  return {
    currentUser: currentUser,
    requests: Object.values(state.entities.friendRequests)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
