import React from 'react';

const CommentLikes = ({ likers }) => {
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
      </div>
    );
  }
};

export default CommentLikes;
