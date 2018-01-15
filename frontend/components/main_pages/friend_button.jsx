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
          this.setState({
            friendReqStatus: 'PENDING',
            friendRequestor: this.props.currentUser.id,
            friendReceiver: this.props.user.id
          });
        });
        break;
      case "Unfriend":
        this.props.rejectFriend(this.props.user.id).then(() => {
          this.setState({
            friendReqStatus: null,
            friendRequestor: this.props.currentUser.id,
            friendReceiver: this.props.user.id
          });
        });
        break;
      case "Cancel Request":
        this.props.rejectFriend(this.props.user.id).then(() => {
          this.setState({
            friendReqStatus: null,
            friendRequestor: this.props.currentUser.id,
            friendReceiver: this.props.user.id
          });
        });
        break;
      case "Accept Request":
        this.props.addFriend(this.state.friendRequestor).then(() => {
          this.setState({
            friendReqStatus: 'ACCEPTED',
            friendRequestor: this.props.currentUser.id,
            friendReceiver: this.props.user.id
          });
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
    let status;
    if (this.props.friendRequest) {
      status = this.props.friendRequest.status;
    }
    if (status === 'ACCEPTED' || this.props.friendIds.includes(userId)) {
      friendMsg = 'Unfriend';
    } else if (status === 'PENDING'
    && this.state.friendRequestor === userId) {
      friendMsg = 'Accept Request';
    } else if (status === 'PENDING'
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
