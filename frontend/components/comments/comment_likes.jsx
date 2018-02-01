import React from 'react';

const CommentLikes = ({ likers }) => {
  const likersHover = likers.map(liker => {
    return (
      <div key={liker.id}>
        {`${liker.first_name} ${liker.last_name}`}
      </div>
    );
  });

  if (likers.length === 0) {
    return (
      <div></div>
    );
  } else {
    return (
      <div className="comment-like-count">
        <div className="comment-like-icon-circle">
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        </div>
        <div className="comment-like-number">{ likers.length }</div>
        <div className="comment-like-hover-list">
          { likersHover }
        </div>
        <img
          className="comment-like-nub"
          src={window.staticImages.likeHoverNub}
          />
      </div>
    );
  }
};

export default CommentLikes;
