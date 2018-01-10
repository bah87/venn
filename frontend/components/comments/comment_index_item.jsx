import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from '../../util/date_util';

const CommentIndexItem = ({ comment }) => {
  let date = DateFormat(comment.updated_at);

  return (
    <li className="comment-list-item">
      <div className="comment-img-container">
        <Link
          to={`/profile/${comment.author_id}`} style={{ textDecoration: 'none'}}>
          <img src={ comment.author_pic_url }
            className="comment-img"></img>
        </Link>
      </div>
      <div className="comment-body-container">

        <div className="comment-body">
          <Link
            to={`/profile/${comment.author_id}`} style={{ textDecoration: 'none'}}>
            <strong className="comment-name">
              { comment.author_fname + " " + comment.author_lname }
            </strong>
          </Link> { comment.body }
        </div>
      </div>
    </li>
  );
};

export default CommentIndexItem;
