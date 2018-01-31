import React from 'react';
import FriendDropdownItem from './friend_dropdown_item';

class FriendDropdown extends React.Component {
  render() {
    let requests;
    if (this.props.requests && this.props.currentUser) {
      requests = this.props.requests.filter(request => (
        request.receiver_id === this.props.currentUser.id &&
        request.status === 'PENDING'
      )).map(request => {
        return (
          <FriendDropdownItem
            key={request.id}
            img={request.requestor_img}
            name={request.requestor_name}
            mutualFriends={request.mutual_friends}
            requestorId={request.requestor_id}
            rejectFriend={this.props.rejectFriend}
            addFriend={this.props.addFriend}
          />
        );
      });
    } else {
      requests = (
        <div>"No pending requests"</div>
      );
    }

    let friendDropdown = "friend-dropdown-hidden";
    if (this.props.dropdownStatus) {
      friendDropdown = "friend-dropdown-container";
    }

    return (
      <div className={friendDropdown}>
        <div className="friend-dropdown-header">
          Friend Requests
        </div>
        {requests}
      </div>
    );
  }
}

export default FriendDropdown;
