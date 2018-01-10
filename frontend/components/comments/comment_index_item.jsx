import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from '../../util/date_util';

const CommentIndexItem = ({ comment }) => {
  // <img src={ author.profile_pic_url }
  //   className="comment-img"></img>

  let date = DateFormat(comment.updated_at);

  return (
    <li className="comment-list-item">
      { comment.body }
    </li>
  );
};

export default CommentIndexItem;
