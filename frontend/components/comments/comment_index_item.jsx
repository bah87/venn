import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment }) => {
  // <img src={ author.profile_pic_url }
  //   className="comment-img"></img>
  return (
    <li className="comment-list-item">
      { comment.body }
    </li>
  );
};

export default CommentIndexItem;
