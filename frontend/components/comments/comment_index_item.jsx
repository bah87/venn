import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from '../../util/date_util';
import PostImage from '../posts/post_image';

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
      <div>
        <div className="comment-body-container">
          <div className="comment-body">
            <div>
              <Link
                to={`/profile/${comment.author_id}`} style={{ textDecoration: 'none'}}>
                <strong className="comment-name">
                  { comment.author_fname + " " + comment.author_lname }
                </strong>
              </Link> { comment.body }
              <PostImage
                comment={true}
                form={false}
                imageUrl={comment.image_url}
              />
            </div>
          </div>
        </div>
        <div id="comment-date" className="post-item-date">
          { date.slice(0,11) }
        </div>
      </div>
    </li>
  );
};

export default CommentIndexItem;
