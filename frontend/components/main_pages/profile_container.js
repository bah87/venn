import { connect } from 'react-redux';
import { fetchUser, saveUserPhoto } from '../../actions/user_actions';
import { toggleProfPicModal } from '../../actions/ui_actions';
import { sendRequest, rejectFriend } from '../../actions/friend_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  const requestId = state.session.currentUser.request_ids.filter(id => state.entities.friendRequests[id].requestor_id === parseInt(ownProps.match.params.userId))[0];
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
    modal: state.ui.profPicModal,
    friendRequest: state.entities.friendRequests[requestId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    saveUserPhoto: photo => dispatch(saveUserPhoto(photo)),
    toggleProfPicModal: () => dispatch(toggleProfPicModal()),
    sendRequest: receiverId => dispatch(sendRequest(receiverId)),
    rejectFriend: receiverId => dispatch(rejectFriend(receiverId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
