import React from 'react';

const FriendDropdownItem = ({ img, name, mutualFriends }) => {
  return (
    <div className="friend-dropdown-item">
      <img className="friend-dropdown-img"
        src={img}>
      </img>
      <div className="dropdown-name-and-friends">
        <div>
          {name}
        </div>
        <div>
          {`${mutualFriends.length} mutual friends`}
        </div>
      </div>
      <button className="save-cover-upload">
        Confirm
      </button>
      <button className="cancel-cover-upload">
        Delete Request
      </button>
    </div>
  );
};

export default FriendDropdownItem;
