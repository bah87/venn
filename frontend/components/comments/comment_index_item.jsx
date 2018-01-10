import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from '../../util/date_util';

const CommentIndexItem = ({ comment }) => {
  let date = DateFormat(comment.updated_at);

  return (
    <li className="comment-list-item">
      <img src={ comment.author_pic_url }
        className="comment-img"></img>
      <div className="comment-body-container">
        <div className="comment-name">
          { comment.author_fname + " " + comment.author_lname }
        </div>
        <div className="comment-body">
          { comment.body }
        </div>
      </div>
    </li>
  );
};

export default CommentIndexItem;
