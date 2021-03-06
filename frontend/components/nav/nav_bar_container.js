import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import {
  addFriend,
  rejectFriend,
  fetchRequests
} from '../../actions/friend_actions';
import { fetchSearchedUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    requests: Object.values(state.entities.friendRequests),
    searchedUsers: Object.values(state.entities.searchedUsers)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    addFriend: id => dispatch(addFriend(id)),
    rejectFriend: id => dispatch(rejectFriend(id)),
    fetchRequests: () => dispatch(fetchRequests()),
    fetchSearchedUsers: query => dispatch(fetchSearchedUsers(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
