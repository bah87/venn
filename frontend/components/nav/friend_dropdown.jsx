import React from 'react';
import FriendDropdownItem from './friend_dropdown_item';

class FriendDropdown extends React.Component {
  render() {
    const requests = this.props.requests.map(request => {
      return (
        <FriendDropdownItem
          img={request.requestor_img}
          name={request.requestor_name}
          mutualFriends={request.mutual_friends}
        />
    );
    });

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
