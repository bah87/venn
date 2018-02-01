import React from 'react';

const PostLikes = ({ youLiked, likers }) => {
  let display;
  if (youLiked && likers.length === 1) {
    display = `You and ${likers[0].first_name} ${likers[0].last_name}`;
  } else if (likers.length === 1) {
    display = `${likers[0].first_name} ${likers[0].last_name}`;
  } else if (youLiked && likers.length === 2) {
    display = `You, ${likers[0].first_name} ${likers[0].last_name}
      and ${likers[1].first_name} ${likers[1].last_name}`;
  } else if (likers.length === 2) {
    display = `${likers[0].first_name} ${likers[0].last_name}
      and ${likers[1].first_name} ${likers[1].last_name}`;
  } else if (youLiked && likers.length > 2) {
    display = `You, ${likers[0].first_name} ${likers[0].last_name},
      ${likers[1].first_name} ${likers[1].last_name} and ${likers.length-3}
      others`;
  } else {
    display = `${likers[0].first_name} ${likers[0].last_name},
      ${likers[1].first_name} ${likers[1].last_name} and ${likers.length-2}
      others`;
  }

  if (likers.length === 0) {
    return (<div></div>);
  } else {
    return (
      <div>
        { display }
      </div>
    );
  }
};

export default PostLikes;
