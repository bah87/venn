import React from 'react';
import FriendDropdownItem from './friend_dropdown_item';

class FriendDropdown extends React.Component {
  render() {
    const items = this.props.requests.map(request => {
      return (
        <FriendDropdownItem
          img={request.requestor_img}
          name={request.requestor_name}
          mutualFriends={request.requestor_mutual_friends}
        />
    );
    });
  }
}

export default FriendDropdown;
