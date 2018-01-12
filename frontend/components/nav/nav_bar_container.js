import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { addFriend, rejectFriend } from '../../actions/friend_actions';

const mapStateToProps = state => {
  let id;
  if (state.session.currentUser) {
    id = state.session.currentUser.id;
  }
  const currentUser = id ? state.entities.users[id] : null;
  return {
    currentUser: currentUser,
    requests: Object.values(state.entities.friendRequests)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    addFriend: id => dispatch(addFriend(id)),
    rejectFriend: id => dispatch(rejectFriend(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
