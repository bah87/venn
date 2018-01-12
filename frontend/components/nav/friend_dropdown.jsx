import React from 'react';
import FriendDropdownItem from './friend_dropdown_item';

class FriendDropdown extends React.Component {
  render() {
    let requests;
    if (this.props.requests) {
      requests = this.props.requests.filter(request => (
        request.receiver_id === this.props.currentUser.id &&
        request.status === 'PENDING'
      )).map(request => {
        return (
          <FriendDropdownItem
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
      requests = null;
    }

    return (
      <div className="friend-dropdown-container">
        <div className="friend-dropdown-header">
          Friend Requests
        </div>
        {requests}
      </div>
    );
  }
}

export default FriendDropdown;
