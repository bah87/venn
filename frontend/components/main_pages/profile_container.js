import { connect } from 'react-redux';
import { fetchUser, saveUserPhoto } from '../../actions/user_actions';
import { toggleProfPicModal } from '../../actions/ui_actions';
import { sendRequest, rejectFriend } from '../../actions/friend_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  const profileUserFriends = [];
  if (state.entities.users[ownProps.match.params.userId]) {
    state.entities.users[ownProps.match.params.userId].friend_ids.forEach(id => {
      profileUserFriends.push(state.entities.users[id]);
    });
  }

  let friendRequest;
  const requestId = state.session.currentUser.request_ids.filter(id => {
    friendRequest = state.entities.friendRequests[id];
    if (friendRequest) {
      return friendRequest.requestor_id === parseInt(ownProps.match.params.userId);
    }
  })[0];

  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
    modal: state.ui.profPicModal,
    friendRequest: state.entities.friendRequests[requestId],
    friendIds: state.session.currentUser.friend_ids,
    profileUserFriends
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
