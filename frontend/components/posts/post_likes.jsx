import React from 'react';

const PostLikes = ({ you, youLiked, likers }) => {
  let display;
  let others;
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
    others = likers.length > 3 ? "others" : "other";
    display = `You, ${likers[0].first_name} ${likers[0].last_name},
      ${likers[1].first_name} ${likers[1].last_name} and ${likers.length-2}
      ${others}`;
  } else if (youLiked) {
    display = "You";
  } else if (likers.length > 2) {
    others = likers.length > 3 ? "others" : "other";
    display = `${likers[0].first_name} ${likers[0].last_name},
      ${likers[1].first_name} ${likers[1].last_name} and ${likers.length-2}
      ${others}`;
  }

  let likersHover = youLiked ? [you] : [];
  likersHover = likersHover.concat(likers).map(liker => {
    return (
      <div>
        {`${liker.first_name} ${liker.last_name}`}
      </div>
    );
  });

  if (!youLiked && likers.length === 0) {
    return (<div></div>);
  } else {
    return (
      <div className="post-likes-container">
        <div className="liker-names">
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          <span>{ display }</span>
          <div className="likers-hover-container">
            { likersHover }
          </div>
          <img
            className="like-nub"
            src={window.staticImages.likeHoverNub}
            />
        </div>
      </div>
    );
  }
};

export default PostLikes;
