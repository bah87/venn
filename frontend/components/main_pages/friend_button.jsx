import React from 'react';

class FriendButton extends React.Component {
  constructor(props) {
    super(props);

    let friendReqStatus;
    let friendRequestor;
    let friendReceiver;
    if (this.props.friendRequest) {
      friendReqStatus = this.props.friendRequest.status;
      friendRequestor = this.props.friendRequest.requestor_id;
      friendReceiver = this.props.friendRequest.receiver_id;
    }

    this.state = {
      friendReqStatus,
      friendRequestor,
      friendReceiver
    };

    this.handleFriendClick = this.handleFriendClick.bind(this);
  }

  handleFriendClick(msg) {
    switch (msg) {
      case "Add Friend":
        this.props.sendRequest(this.props.user.id).then(() => {
          this.setState({ friendReqStatus: 'PENDING' });
        });
        break;
      case "Unfriend":
        this.props.rejectFriend(this.props.user.id).then(() => {
          this.setState({ friendReqStatus: null });
        });
        break;
      case "Cancel Request":
        this.props.rejectFriend(this.props.user.id).then(() => {
          this.setState({ friendReqStatus: null });
        });
        break;
      case "Accept Request":
        this.props.addFriend(this.props.user.id).then(() => {
          this.setState({ friendReqStatus: 'ACCEPTED' });
        });
        break;
      default:

    }
  }

  render() {
    let friendMsg;
    let userId;
    if (this.props.user) {
      userId = this.props.user.id;
    }
    if (this.state.friendReqStatus === 'ACCEPTED' || this.props.friendIds.includes(userId)) {
      friendMsg = 'Unfriend';
    } else if (this.state.friendReqStatus === 'PENDING'
    && this.state.friendRequestor === userId) {
      friendMsg = 'Accept Request';
    } else if (this.state.friendReqStatus === 'PENDING'
    && this.state.friendReceiver === userId) {
      friendMsg = 'Cancel Request';
    } else {
      friendMsg = 'Add Friend';
    }

    let friendClass = "friend-btn";
    if (this.props.user && (this.props.user.id === this.props.currentUser.id)) {
      friendClass = "friend-btn-hidden";
    }

    return (
      <button className={friendClass}
        onClick={() => this.handleFriendClick(friendMsg)}>
        { friendMsg }
      </button>
    );

  }
}

export default FriendButton;
