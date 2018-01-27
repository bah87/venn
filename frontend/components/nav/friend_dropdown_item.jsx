import React from 'react';

const FriendDropdownItem = ({ img, name, mutualFriends,
requestorId, addFriend, rejectFriend }) => {
  return (
    <div className="friend-dropdown-item">
      <div className="left-side-dropdown">
        <img className="friend-dropdown-img"
          src={img}>
        </img>
        <div className="dropdown-name-and-friends">
          <div>
            {name}
          </div>
          <div className="mutual-friends">
            {`${mutualFriends.length} mutual friends`}
          </div>
        </div>
      </div>
      <div>
        <button className="save-cover-upload"
          onClick={() => addFriend(requestorId)}>
          Confirm
        </button>
        <button className="cancel-cover-upload"
          onClick={() => rejectFriend(requestorId)}>
          Delete Request
        </button>
      </div>
    </div>
  );
};

export default FriendDropdownItem;
